#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod multi_contract_caller {
    use accumulator::AccumulatorRef;
    use adder::AdderRef;
    use subber::SubberRef;

    /// Specifies the state of the `multi_contract_caller` contract.
    ///
    /// In `Adder` state the `multi_contract_caller` contract will call the `Adder`
    /// contract and in `Subber` state will call to the `Subber` contract.
    ///
    /// The initial state is `Adder`.
    #[derive(Debug, Copy, Clone, PartialEq, Eq)]
    #[cfg_attr(feature = "std", derive(ink::storage::traits::StorageLayout))]
    #[ink::scale_derive(Encode, Decode, TypeInfo)]
    pub enum Which {
        Adder,
        Subber,
    }

    /// Calls to an `adder` or `subber` contract to mutate a value in an `accumulator`
    /// contract.
    ///
    /// # Note
    ///
    /// In order to instantiate the `multi_contract_caller` smart contract we first
    /// have to manually put the code of the `accumulator`, `adder`
    /// and `subber` smart contracts, receive their code hashes from
    /// the signalled events and put their code hash into our
    /// `multi_contract_caller` smart contract.
    ///
    /// The `AccumulatorRef`, `AdderRef` and `SubberRef` are smart contract
    /// reference types that have been automatically generated by ink!.
    #[ink(storage)]
    pub struct MultiContractCaller {
        /// Says which of `adder` or `subber` is currently in use.
        which: Which,
        /// The `accumulator` smart contract.
        accumulator: AccumulatorRef,
        /// The `adder` smart contract.
        adder: AdderRef,
        /// The `subber` smart contract.
        subber: SubberRef,
    }

    impl MultiContractCaller {
        /// Instantiate a `multi_contract_caller` contract with the given sub-contract
        /// codes.
        #[ink(constructor, payable)]
        pub fn new(
            init_value: i32,
            version: u32,
            accumulator_code_hash: ink::H256,
            adder_code_hash: ink::H256,
            subber_code_hash: ink::H256,
        ) -> Self {
            let total_balance = Self::env().balance();
            let salt = version.to_le_bytes();
            let accumulator = AccumulatorRef::new(init_value)
                .endowment(total_balance / 4)
                .code_hash(accumulator_code_hash)
                .salt_bytes(salt)
                .instantiate();
            let adder = AdderRef::new(accumulator.clone())
                .endowment(total_balance / 4)
                .code_hash(adder_code_hash)
                .salt_bytes(salt)
                .instantiate();
            let subber = SubberRef::new(accumulator.clone())
                .endowment(total_balance / 4)
                .code_hash(subber_code_hash)
                .salt_bytes(salt)
                .instantiate();
            Self {
                which: Which::Adder,
                accumulator,
                adder,
                subber,
            }
        }

        /// Returns the `accumulator` value.
        #[ink(message)]
        pub fn get(&self) -> i32 {
            self.accumulator.get()
        }

        /// Delegates the call to either `Adder` or `Subber`.
        #[ink(message)]
        pub fn change(&mut self, by: i32) {
            match self.which {
                Which::Adder => self.adder.inc(by),
                Which::Subber => self.subber.dec(by),
            }
        }

        /// Switches the `multi_contract_caller` contract.
        #[ink(message)]
        pub fn switch(&mut self) {
            match self.which {
                Which::Adder => {
                    self.which = Which::Subber;
                }
                Which::Subber => {
                    self.which = Which::Adder;
                }
            }
        }
    }

    #[cfg(all(test, feature = "e2e-tests"))]
    mod e2e_tests {
        use super::*;
        use ink_e2e::ContractsBackend;

        type E2EResult<T> = std::result::Result<T, Box<dyn std::error::Error>>;

        #[ink_e2e::test]
        async fn e2e_multi_contract_caller<Client: E2EBackend>(
            mut client: Client,
        ) -> E2EResult<()> {
            // given
            let accumulator_hash = client
                .upload("accumulator", &ink_e2e::alice())
                .submit()
                .await
                .expect("uploading `accumulator` failed")
                .code_hash;

            let adder_hash = client
                .upload("adder", &ink_e2e::alice())
                .submit()
                .await
                .expect("uploading `adder` failed")
                .code_hash;

            let subber_hash = client
                .upload("subber", &ink_e2e::alice())
                .submit()
                .await
                .expect("uploading `subber` failed")
                .code_hash;

            let mut constructor = MultiContractCallerRef::new(
                1234, // initial value
                1337, // salt
                accumulator_hash,
                adder_hash,
                subber_hash,
            );

            let multi_contract_caller = client
                .instantiate("multi_contract_caller", &ink_e2e::alice(), &mut constructor)
                .value(10_000_000_000_000)
                .submit()
                .await
                .expect("instantiate failed");
            let mut call_builder =
                multi_contract_caller.call_builder::<MultiContractCaller>();

            // when
            let get = call_builder.get();
            let value = client
                .call(&ink_e2e::bob(), &get)
                .dry_run()
                .await?
                .return_value();
            assert_eq!(value, 1234);
            let change = call_builder.change(6);
            let _ = client
                .call(&ink_e2e::bob(), &change)
                .submit()
                .await
                .expect("calling `change` failed");

            // then
            let get = call_builder.get();
            let value = client
                .call(&ink_e2e::bob(), &get)
                .dry_run()
                .await?
                .return_value();
            assert_eq!(value, 1234 + 6);

            // when
            let switch = call_builder.switch();
            let _ = client
                .call(&ink_e2e::bob(), &switch)
                .submit()
                .await
                .expect("calling `switch` failed");
            let change = call_builder.change(3);
            let _ = client
                .call(&ink_e2e::bob(), &change)
                .submit()
                .await
                .expect("calling `change` failed");

            // then
            let get = call_builder.get();
            let value = client
                .call(&ink_e2e::bob(), &get)
                .dry_run()
                .await?
                .return_value();
            assert_eq!(value, 1234 + 6 - 3);

            Ok(())
        }
    }
}
