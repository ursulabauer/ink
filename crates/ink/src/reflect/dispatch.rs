// Copyright (C) Use Ink (UK) Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use core::fmt::Display;
use ink_env::DecodeDispatch;

/// Stores various information of the respective dispatchable ink! message.
///
/// # Note
///
/// This trait is implemented by ink! for every dispatchable ink! message
/// of the root ink! smart contract. The `ID` used in the trait reflects the
/// chosen or derived selector of the dispatchable ink! message.
///
/// # Usage
///
/// ```
/// # use ink::reflect::DispatchableMessageInfo;
/// # use ink::{selector_id, selector_bytes};
///
/// #[ink::contract]
/// pub mod contract {
///     #[ink(storage)]
///     pub struct Contract {}
///
///     impl Contract {
///         #[ink(constructor)]
///         pub fn constructor() -> Self {
///             Contract {}
///         }
///
///         #[ink(message)]
///         pub fn message1(&self) {}
///
///         #[ink(message, payable, selector = 0xC0DECAFE)]
///         pub fn message2(&mut self, input1: i32, input2: i64) -> (bool, i32) {
///             unimplemented!()
///         }
///     }
/// }
///
/// use contract::Contract;
///
/// /// Asserts that the message with the selector `ID` has the following properties.
/// ///
/// /// # Note
/// ///
/// /// The `In` and `Out` generic parameters describe the input and output types.
/// fn assert_message_info<In, Out, const ID: u32>(
///     mutates: bool,
///     payable: bool,
///     selector: [u8; 4],
///     label: &str,
/// ) where
///     Contract: DispatchableMessageInfo<{ ID }, Input = In, Output = Out>,
/// {
///     assert_eq!(
///         <Contract as DispatchableMessageInfo<{ ID }>>::MUTATES,
///         mutates
///     );
///     assert_eq!(
///         <Contract as DispatchableMessageInfo<{ ID }>>::PAYABLE,
///         payable
///     );
///     assert_eq!(
///         <Contract as DispatchableMessageInfo<{ ID }>>::SELECTOR,
///         selector,
///     );
///     assert_eq!(<Contract as DispatchableMessageInfo<{ ID }>>::LABEL, label,);
/// }
///
/// fn main() {
///     assert_message_info::<(), (), { selector_id!("message1") }>(
///         false,
///         false,
///         selector_bytes!("message1"),
///         "message1",
///     );
///     assert_message_info::<(i32, i64), (bool, i32), 0xC0DECAFE_u32>(
///         true,
///         true,
///         [0xC0, 0xDE, 0xCA, 0xFE],
///         "message2",
///     );
/// }
/// ```
pub trait DispatchableMessageInfo<const ID: u32> {
    /// Reflects the input types of the dispatchable ink! message.
    type Input;
    /// Reflects the output type of the dispatchable ink! message.
    type Output;
    /// The ink! storage struct type.
    type Storage;

    /// The closure that can be used to dispatch into the dispatchable ink! message.
    ///
    /// # Note
    ///
    /// We unify `&self` and `&mut self` ink! messages here and always take a `&mut self`.
    /// This is mainly done for simplification but also because we can easily convert from
    /// `&mut self` to `&self` with our current dispatch codegen architecture.
    const CALLABLE: fn(&mut Self::Storage, Self::Input) -> Self::Output;

    /// closure for decoding
    const DECODE: fn(
        &mut &[::core::primitive::u8],
    ) -> Result<Self::Input, ink_env::DispatchError>;

    /// closure for returning per encoding todo: docs
    const RETURN: fn(ink_env::ReturnFlags, Self::Output) -> !;

    /// Yields `true` if the dispatchable ink! message mutates the ink! storage.
    const MUTATES: bool;
    /// Yields `true` if the dispatchable ink! message is payable.
    const PAYABLE: bool;
    /// The selectors of the dispatchable ink! message.
    const SELECTOR: [u8; 4];
    /// The label of the dispatchable ink! message.
    const LABEL: &'static str;
    /// The encoding of input and output data for the message
    const ENCODING: Encoding;
}

/// Stores various information of the respective dispatchable ink! constructor.
///
/// # Note
///
/// This trait is implemented by ink! for every dispatchable ink! constructor
/// of the root ink! smart contract. The `ID` used in the trait reflects the
/// chosen or derived selector of the dispatchable ink! constructor.
///
/// # Usage
///
/// ```
/// # use ink::reflect::DispatchableConstructorInfo;
/// # use ink::{selector_id, selector_bytes};
///
/// #[ink::contract]
/// pub mod contract {
///     #[ink(storage)]
///     pub struct Contract {}
///
///     impl Contract {
///         #[ink(constructor)]
///         pub fn constructor1() -> Self {
///             Contract {}
///         }
///
///         #[ink(constructor, selector = 0xC0DECAFE)]
///         pub fn constructor2(input1: i32, input2: i64) -> Self {
///             Contract {}
///         }
///
///         #[ink(message)]
///         pub fn message(&self) {}
///     }
/// }
///
/// use contract::Contract;
///
/// /// Asserts that the constructor with the selector `ID` has the following properties.
/// ///
/// /// # Note
/// ///
/// /// The `In` and `Out` generic parameters describe the input and output types.
/// fn assert_constructor_info<In, const ID: u32>(selector: [u8; 4], label: &str)
/// where
///     Contract: DispatchableConstructorInfo<{ ID }, Input = In>,
/// {
///     assert_eq!(
///         <Contract as DispatchableConstructorInfo<{ ID }>>::SELECTOR,
///         selector,
///     );
///     assert_eq!(
///         <Contract as DispatchableConstructorInfo<{ ID }>>::LABEL,
///         label,
///     );
/// }
///
/// fn main() {
///     assert_constructor_info::<(), { selector_id!("constructor1") }>(
///         selector_bytes!("constructor1"),
///         "constructor1",
///     );
///     assert_constructor_info::<(i32, i64), 0xC0DECAFE_u32>(
///         [0xC0, 0xDE, 0xCA, 0xFE],
///         "constructor2",
///     );
/// }
/// ```
pub trait DispatchableConstructorInfo<const ID: u32> {
    /// Reflects the input types of the dispatchable ink! constructor.
    type Input;
    /// The ink! storage struct type.
    type Storage;
    /// Reflects the output type of the dispatchable ink! constructor.
    type Output;
    /// The type of the error returned from the constructor.
    /// Infallible constructors will have `()` as the error type.
    type Error;

    /// True if the constructor returns a `Result`.
    const IS_RESULT: bool;

    /// The closure that can be used to dispatch into the dispatchable ink! constructor.
    const CALLABLE: fn(Self::Input) -> Self::Output;

    /// Yields `true` if the dispatchable ink! constructor is payable.
    const PAYABLE: bool;

    /// The selectors of the dispatchable ink! constructor.
    const SELECTOR: [u8; 4];

    /// The label of the dispatchable ink! constructor.
    const LABEL: &'static str;
}

/// todo: comment
pub enum Encoding {
    Scale,
    Rlp,
}

/// Custom unit type for RLP encodable messages which return `()`.
/// This is because ['alloy_rlp::Encodable`] is not implemented for the build-in `()` type
#[derive(alloy_rlp::RlpEncodable)]
pub struct RlpUnit {}

mod private {
    /// Seals the implementation of `ConstructorReturnType`.
    pub trait Sealed {}
}

/// Guards against using invalid contract initializer types.
///
/// # Note
///
/// Currently the only allowed types are `()` and `Result<(), E>`
/// where `E` is some unspecified error type.
/// If the contract initializer returns `Result::Err` the utility
/// method that is used to initialize an ink! smart contract will
/// revert the state of the contract instantiation.
pub trait ConstructorOutput<C>: private::Sealed {
    /// Is `true` if `Self` is `Result<C, E>`.
    const IS_RESULT: bool = false;

    /// The error type of the constructor return type.
    ///
    /// # Note
    ///
    /// For infallible constructors this is `()` whereas for fallible
    /// constructors this is the actual return error type. Since we only ever
    /// return a value in case of `Result::Err` the `Result::Ok` value type
    /// does not matter.
    type Error;

    /// Converts the return value into a `Result` instance.
    ///
    /// # Note
    ///
    /// For infallible constructor returns this always yields `Ok`.
    fn as_result(&self) -> Result<&C, &Self::Error>;
}

/// Stores the actual value of the constructor return type.
///
/// # Note
///
/// Currently the only allowed types are `()` and `Result<(), E>`
/// where `E` is some unspecified error type.
/// If the contract initializer returns `Result::Err` the utility
/// method that is used to initialize an ink! smart contract will
/// revert the state of the contract instantiation.
pub struct ConstructorOutputValue<T>(T);

impl<T> ConstructorOutputValue<T> {
    pub fn new(val: T) -> Self {
        Self(val)
    }
}

impl<T> private::Sealed for ConstructorOutputValue<T> {}

impl<C> ConstructorOutput<C> for ConstructorOutputValue<C> {
    type Error = &'static ();

    #[inline(always)]
    fn as_result(&self) -> Result<&C, &Self::Error> {
        Ok(&self.0)
    }
}

impl<C, E> ConstructorOutput<C> for ConstructorOutputValue<Result<C, E>> {
    const IS_RESULT: bool = true;
    type Error = E;

    #[inline(always)]
    fn as_result(&self) -> Result<&C, &Self::Error> {
        self.0.as_ref()
    }
}

/// Generated type used to decode all dispatchable ink! messages of the ink! smart
/// contract.
///
/// # Note
///
/// The decoder follows the ink! calling ABI where all ink! message calls start with
/// 4 bytes dedicated to the ink! message selector followed by the SCALE encoded
/// parameters.
///
/// # Usage
///
/// ```
/// # use ink::reflect::ContractMessageDecoder;
/// # use ink::selector_bytes;
/// # use scale::{Encode, Decode};
///
/// #[ink::contract]
/// pub mod contract {
///     #[ink(storage)]
///     pub struct Contract {}
///
///     impl Contract {
///         #[ink(constructor)]
///         pub fn constructor() -> Self {
///             Self {}
///         }
///
///         #[ink(message)]
///         pub fn message1(&self) {}
///
///         #[ink(message)]
///         pub fn message2(&self, input1: bool, input2: i32) {}
///     }
/// }
///
/// use contract::Contract;
///
/// fn main() {
///     // Call to `message1` without input parameters.
///     {
///         let mut input_bytes = Vec::new();
///         input_bytes.extend(selector_bytes!("message1"));
///         assert!(
///             <<Contract as ContractMessageDecoder>::Type as Decode>::decode(
///                 &mut &input_bytes[..]
///             )
///             .is_ok()
///         );
///     }
///     // Call to `message2` with 2 parameters.
///     {
///         let mut input_bytes = Vec::new();
///         input_bytes.extend(selector_bytes!("message2"));
///         input_bytes.extend(true.encode());
///         input_bytes.extend(42i32.encode());
///         assert!(
///             <<Contract as ContractMessageDecoder>::Type as Decode>::decode(
///                 &mut &input_bytes[..]
///             )
///             .is_ok()
///         );
///     }
///     // Call with invalid ink! message selector.
///     {
///         let mut input_bytes = Vec::new();
///         input_bytes.extend(selector_bytes!("non_existing_message"));
///         assert!(
///             <<Contract as ContractMessageDecoder>::Type as Decode>::decode(
///                 &mut &input_bytes[..]
///             )
///             .is_err()
///         );
///     }
///     // Call with invalid ink! message parameters.
///     {
///         let mut input_bytes = Vec::new();
///         input_bytes.extend(selector_bytes!("message2"));
///         assert!(
///             <<Contract as ContractMessageDecoder>::Type as Decode>::decode(
///                 &mut &input_bytes[..]
///             )
///             .is_err()
///         );
///     }
/// }
/// ```
pub trait ContractMessageDecoder {
    /// The ink! smart contract message decoder type.
    type Type: DecodeDispatch + ExecuteDispatchable;
}

/// Generated type used to decode all dispatchable ink! constructors of the ink! smart
/// contract.
///
/// # Note
///
/// The decoder follows the ink! calling ABI where all ink! constructor calls start with
/// 4 bytes dedicated to the ink! constructor selector followed by the SCALE encoded
/// parameters.
///
/// # Usage
///
/// ```
/// # use ink::reflect::ContractConstructorDecoder;
/// # use ink::selector_bytes;
/// # use scale::{Encode, Decode};
///
/// #[ink::contract]
/// pub mod contract {
///     #[ink(storage)]
///     pub struct Contract {}
///
///     impl Contract {
///         #[ink(constructor)]
///         pub fn constructor1() -> Self {
///             Self {}
///         }
///
///         #[ink(constructor)]
///         pub fn constructor2(input1: bool, input2: i32) -> Self {
///             Self {}
///         }
///
///         #[ink(message)]
///         pub fn message(&self) {}
///     }
/// }
///
/// use contract::Contract;
///
/// fn main() {
///     // Call to `constructor1` without input parameters.
///     {
///         let mut input_bytes = Vec::new();
///         input_bytes.extend(selector_bytes!("constructor1"));
///         assert!(
///             <<Contract as ContractConstructorDecoder>::Type as Decode>::decode(
///                 &mut &input_bytes[..]
///             )
///             .is_ok()
///         );
///     }
///     // Call to `constructor2` with 2 parameters.
///     {
///         let mut input_bytes = Vec::new();
///         input_bytes.extend(selector_bytes!("constructor2"));
///         input_bytes.extend(true.encode());
///         input_bytes.extend(42i32.encode());
///         assert!(
///             <<Contract as ContractConstructorDecoder>::Type as Decode>::decode(
///                 &mut &input_bytes[..]
///             )
///             .is_ok()
///         );
///     }
///     // Call with invalid ink! constructor selector.
///     {
///         let mut input_bytes = Vec::new();
///         input_bytes.extend(selector_bytes!("non_existing_constructor"));
///         assert!(
///             <<Contract as ContractConstructorDecoder>::Type as Decode>::decode(
///                 &mut &input_bytes[..]
///             )
///             .is_err()
///         );
///     }
///     // Call with invalid ink! constructor parameters.
///     {
///         let mut input_bytes = Vec::new();
///         input_bytes.extend(selector_bytes!("constructor2"));
///         assert!(
///             <<Contract as ContractConstructorDecoder>::Type as Decode>::decode(
///                 &mut &input_bytes[..]
///             )
///             .is_err()
///         );
///     }
/// }
/// ```
pub trait ContractConstructorDecoder {
    /// The ink! smart contract constructor decoder type.
    type Type: DecodeDispatch + ExecuteDispatchable;
}

/// Starts the execution of the respective ink! message or constructor call.
///
/// # Note
///
/// Implemented by the ink! smart contract message or constructor decoder.
pub trait ExecuteDispatchable {
    /// Executes the ink! smart contract message or constructor.
    fn execute_dispatchable(self) -> Result<(), ink_env::DispatchError>;
}
