searchState.loadedDescShard("ink_env", 0, "The <code>ink_env</code> utilities used to interoperate with the …\nAllow the callee to reenter into the current contract.\nThe account id type.\nA trait to enforce that a type should be an …\nThe capacity of the static buffer. Usually set to 16 kB. …\nThe type of balances.\nThe type of block number.\nThe static buffer used during ABI encoding or ABI decoding …\nThe little-endian bytes representation.\nIdentical to <code>Self::FORWARD_INPUT</code> but without consuming the …\nFlags used to change the behaviour of <code>seal_call</code> and …\nThe call dispatched by <code>call_runtime</code> was executed but …\nThe called function ran to completion but decided to …\nThe called function trapped and has its state changes …\nThe chain extension for the environment.\nNo code could be found at the supplied code hash.\nStores the used host environment type of the ink! smart …\nRefers to the generated ink! smart contract reference type.\nError upon decoding an encoded value.\nThe fundamental types of the default configuration.\nECDSA public key recovery failed. Most probably wrong …\nThe environment type.\nThe environmental types usable by contracts defined with …\nContains the error value\nErrors that can be encountered upon environmental …\nImplemented by event types to guide the event topic …\nForward the input of current function to the callee.\nAllows to instantiate a type from its little-endian bytes …\nThe default gas type.\nThe type of hash.\nThe passed key does not exist in storage.\nThe call to <code>debug_message</code> had no effect because debug …\nThe maximum number of supported event topics provided by …\nPlaceholder for chains that have no defined chain …\nThe account that was called is no contract.\nAn error that can only occur in the off-chain environment.\nContains the success value\nIf this bit is set all changes made by the contract …\nType state indicating how many event topics are to be …\nA result of environmental operations.\nThe error returned by the contract.\nEvery error that can be returned to a contract when it …\nFlags used by a contract to customize exit behaviour.\nThe unique signature topic of the event. <code>None</code> for …\nsr25519 signature verification failed.\nAPI call successful.\nDo not return from the call but rather return the result …\nThe type of a timestamp.\nTransfer failed for other not further specified reason. …\nThe generated contract reference type.\nReturns if an unknown error was received from the host …\nThe <code>xcm_execute</code> call failed.\nThe <code>xcm_send</code> call failed.\nDeprecated and no longer returned: There is only the …\nDeprecated and no longer returned: Endowment is no longer …\nReturns the account ID of the executed contract.\nReturns the set containing all flags.\nReturns the set containing all flags.\nReturns the balance of the executed contract.\nReturns the intersection between the two sets of flags.\nReturns the intersection between the two sets of flags.\nDisables all flags disabled in the set.\nDisables all flags disabled in the set.\nReturns the union of the two sets of flags.\nReturns the union of the two sets of flags.\nAdds the set of flags.\nAdds the set of flags.\nReturns the raw value of the flags currently stored.\nReturns the raw value of the flags currently stored.\nReturns the left flags, but with all the right flags …\nReturns the left flags, but with all the right flags …\nToggles the set of flags.\nToggles the set of flags.\nReturns the current block number.\nReturns the current block timestamp.\nUtilities to call or instantiate contracts on the chain.\nTries to trigger a runtime dispatchable, i.e. an extrinsic …\nReturns the address of the caller of the executed contract.\nChecks whether the caller of the current contract is the …\nDefinitions and utilities for calling chain extension …\nClears the contract’s storage entry under the given …\nRetrieves the code hash of the contract at the specified …\nReturns the complement of this set of flags.\nReturns the complement of this set of flags.\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nChecks whether there is a value stored under the given …\nAppends the given message to the debug message buffer.\nAppends a formatted string to the <code>debug_message</code> buffer if …\nAppends a formatted string to the <code>debug_message</code> buffer, as …\nReturns the execution input to the executed contract and …\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nRecovers the compressed ECDSA public key for given …\nReturns an Ethereum address from the ECDSA compressed …\nEmits an event with the given event data.\nReturns an empty set of flags.\nReturns an empty set of flags.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, preserving all …\nConvert from underlying bit representation, preserving all …\nCreate a new instance from the little-endian bytes …\nReturns the amount of gas left for the contract execution.\nReturns the value stored under the given storage key in …\nProvides type definitions and traits for the built-in …\nConducts the crypto hash of the given input and stores the …\nConducts the crypto hash of the given encoded input and …\nInserts the specified flags in-place.\nInserts the specified flags in-place.\nInstantiates another contract.\nInstantiates another contract.\nReturns the intersection between the flags in <code>self</code> and …\nReturns the intersection between the flags in <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nInvokes a contract message and returns its result.\nInvokes a contract message via delegate call and returns …\nInvokes a contract message and returns its result.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if all flags are currently set.\nChecks whether the specified account is a contract.\nReturns <code>true</code> if no flags are currently stored.\nReturns <code>true</code> if no flags are currently stored.\nAdds a new delegate dependency lock to the contract.\nReturns the minimum balance that is required for creating …\nReturns the complement of this set of flags.\nReturns the complement of this set of flags.\nRetrieves the code hash of the currently executing …\nPrepend contract message call with value transfer. Used …\nRemoves the specified flags in-place.\nRemoves the specified flags in-place.\nReturns the value back to the caller of the executed …\nInserts or removes the specified flags depending on the …\nInserts or removes the specified flags depending on the …\nReplace the contract code at the specified address with …\nWrites the value to the contract storage under the given …\nVerifies a sr25519 signature.\nReturns the set difference of the two sets of flags.\nReturns the set difference of the two sets of flags.\nDisables all flags enabled in the set.\nDisables all flags enabled in the set.\nReturns the symmetric difference between the flags in <code>self</code> …\nReturns the symmetric difference between the flags in <code>self</code> …\nRemoves the <code>value</code> at <code>key</code>, returning the previous <code>value</code> at …\nTerminates the existence of the currently executed smart …\nOperations on the off-chain testing environment.\nToggles the specified flags in-place.\nToggles the specified flags in-place.\nGuides event topic serialization using the given topics …\nTransfers value from the contract to the destination …\nReturns the transferred value for the contract execution.\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nUnlocks the delegate dependency from the contract.\nReturns the price for the specified amount of gas.\nExecute an XCM message locally, using the contract’s …\nSend an XCM message, using the contract’s address as the …\nThe default call type for cross-contract calls, for …\nBuilds up a cross contract call.\nThe final parameters to the cross-contract call.\nThe legacy call type for cross-contract calls. Performs a …\nRepresents any type that can be returned from an <code>ink!</code> …\nBuilds up contract instantiations.\nBuilds up contract instantiations.\nThe <code>delegatecall</code> call type. Performs a call with the given …\nThe error type of the constructor return type.\nThe type of the error that can be returned during …\nThe input data and the expected return type of a contract …\nThe input data for a smart contract execution.\nImplemented in different environments to perform contract …\nContracts that can be constructed from an <code>AccountId</code>.\nIs <code>true</code> if <code>Self</code> is <code>Result&lt;C, E&gt;</code>.\nIs <code>true</code> if <code>Self</code> is <code>Result&lt;C, E&gt;</code>.\nDefines the limit params for the legacy <code>ext::instantiate_v1</code>…\nDefines the limit params for the new <code>ext::instantiate</code> host …\nThe actual return type of the constructor.\nThe function selector.\nReturns a new <code>CallBuilder</code> to build up the parameters to a …\nReturns a new <code>CreateBuilder</code> to build up the parameters to …\nPrepares the <code>CallBuilder</code> for a cross-contract <code>Call</code> to the …\nReturns the call flags.\nReturns the call flags.\nReturns the call flags.\nSets the <code>call_flags</code> for the current cross-contract call.\nSets the flags used to change the behavior of the contract …\nSets the <code>code_hash</code> to perform a delegate call with.\nThe type of the call.\nSwitch to the original <code>call</code> host function API, which only …\nPrepares the <code>CallBuilder</code> for a cross-contract <code>CallV1</code>, …\nReturns the account ID of the called contract instance.\nReturns the account ID of the called contract instance.\nSets the <code>code_hash</code> to perform a delegate call with.\nReturns the code hash which we use to perform a delegate …\nSets the <code>code_hash</code> to perform a delegate call with.\nThe code hash of the contract.\nSets the used code hash for the contract instantiation.\nPrepares the <code>CallBuilder</code> for a cross-contract <code>DelegateCall</code>.\nThe endowment for the instantiated contract.\nSets the value transferred upon the execution of the call.\nConstruct an error value of the <code>Output</code> type.\nConstruct an error value of the <code>Output</code> type.\nPerform the contract execution with the given input data, …\nPerform the execution of the contract with the given …\nReturns the execution input.\nSets the execution input to the given value.\nThe raw encoded input data.\nSets the value transferred upon the execution of the call.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates the contract instance from the account ID of the …\nSets the <code>gas_limit</code> for the current cross-contract call.\nReturns the chosen gas limit for the called contract …\nSets the <code>gas_limit</code> for the current cross-contract call.\nThe gas limit for the contract instantiation.\nSets the maximum allowed gas costs for the contract …\nThe input data for initiating a contract execution.\nInstantiates the contract and returns its account ID back …\nInstantiates the contract and returns its account ID back …\nInstantiates the contract and returns its account ID back …\nInstantiates the contract and returns its account ID back …\nSwitch to the original <code>instantiate</code> host function API, …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nInvoke the contract using Delegate Call semantics with the …\nInvokes the contract with the given built-up call …\nInvokes the contract with the given built-up call …\nInvokes the cross-chain function call and returns the …\nInvokes the cross-chain function call using Delegate Call …\nInvokes the cross-chain function call using Delegate Call …\nInvokes the cross-chain function call and returns the …\nInvokes the cross-chain function call.\nInvokes the cross-chain function call.\nConstruct a new contract execution with the given input …\nReturns a clean builder for <code>Call</code>.\nReturns a clean builder for <code>CallV1</code>.\nReturns a clean builder for <code>DelegateCall</code>\nCreates a new execution input with the given selector.\nCreates a selector directly from 4 bytes.\nConstruct a success value of the <code>Output</code> type.\nThe type of the expected return value of the contract …\nFinalizes the call builder to call a function.\nFinalizes the call builder to call a function.\nFinalizes the call builder to call a function.\nFinalizes the call builder to call a function.\nFinalizes the call builder to call a function.\nFinalizes the call builder to call a function.\nFinalizes the create builder, allowing it to instantiate a …\nReturns the chosen proof size limit for the called …\nSets the <code>proof_size_limit</code> part of the weight limit for the …\nGets the <code>proof_size_limit</code> part of the weight limit for the …\nSets the <code>proof_size_limit</code> part of the weight limit for the …\nPushes an argument to the execution input.\nPushes an argument to the execution input.\nReturns the chosen ref time limit for the called contract …\nSets the <code>ref_time_limit</code> part of the weight limit for the …\nGets the <code>ref_time_limit</code> part of the weight limit for the …\nSets the <code>ref_time_limit</code> part of the weight limit for the …\nSets the type of the returned value upon the execution of …\nSets the type of the returned value upon the execution of …\nThe salt for determining the hash for the contract account …\nSets the value transferred upon the execution of the call.\nType states that tell what state of a instantiation …\nReturns the chosen storage deposit limit for the called …\nSets the <code>storage_deposit_limit</code> for the current …\nGets the <code>storage_deposit_limit</code> for the contract …\nSets the <code>storage_deposit_limit</code> for the contract …\nReturns the underlying bytes of the selector.\nSets the <code>transferred_value</code> for the current cross-contract …\nReturns the transferred value for the called contract.\nReturns the transferred value for the called contract.\nSets the <code>transferred_value</code> for the current cross-contract …\nSets the <code>transferred_value</code> for the current cross-contract …\nInstantiates the contract and returns its account ID back …\nInstantiates the contract and returns its account ID back …\nInstantiates the contract and returns its account ID back …\nInstantiates the contract and returns its account ID back …\nInvoke the contract using Delegate Call semantics with the …\nInvokes the contract with the given built-up call …\nInvokes the contract with the given built-up call …\nInvokes the cross-chain function call using Delegate Call …\nInvokes the cross-chain function call using Delegate Call …\nInvokes the cross-chain function call.\nInvokes the cross-chain function call.\nInvokes the cross-chain function call and returns the …\nInvokes the cross-chain function call and returns the …\nModify the selector.\nModify the selector.\nUtility types for the cross-contract calling API.\nType state for the salt used for contract instantiation.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nMinor simplification of an argument list with a head and …\nA single argument and its reference to a known value.\nAn argument list.\nThe end of an argument list.\nAn empty argument list.\nThe output type of the <code>unwrap_or_else</code> operation.\nRepresents a return type.\nA parameter that has been set to some value.\nA parameter that has not been set, yet.\nImplemented by <code>Set</code> and <code>Unset</code> in order to unwrap their …\nCreates a new empty argument list.\nCreates a new empty argument list.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPushes the first argument to the empty argument list.\nPushes another argument to the argument list.\nPushes the first argument to the empty argument list.\nReturns the set value or evaluates the given closure.\nReturns the set value.\nA concrete instance of a chain extension method.\nThe <code>E</code> type of the <code>Result&lt;T, E&gt;</code>.\nImplemented by error codes in order to construct them from …\nExtract <code>Ok</code> and <code>Err</code> variants from <code>Result</code> type.\nThe <code>T</code> type of the <code>Result&lt;T, E&gt;</code>.\nCreates a new chain extension method instance.\nCalls the chain extension method for case 1.B described …\nCalls the chain extension method for case 2.B described …\nCalls the chain extension method for case 2.A described …\nCalls the chain extension method for case 1.A described …\nReturns the argument unchanged.\nReturns <code>Ok</code> if the status code for the called chain …\nMakes the chain extension method call handle the returned …\nMakes the chain extension method call assume that the …\nSets the input types of the chain extension method call to …\nCalls <code>U::from(self)</code>.\nSets the output type, <code>O</code>, of the chain extension method …\nType states of the chain extension method instance.\nType state meaning that the chain extension method uses …\nType state meaning that the chain extension method ignores …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe BLAKE-2 crypto hash with 128-bit output.\nThe BLAKE-2 crypto hash with 256-bit output.\nTypes that are usable as built-in cryptographic hashes.\nThe output type of built-in cryptographic hash functions.\nThe KECCAK crypto hash with 256-bit output.\nThe SHA-2 crypto hash with 256-bit output.\nThe output type of the crypto hash.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nHashes the given raw byte input and copies the result into …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe raw ABI respecting input data to a call.\nTypes implementing this trait can be used as chain …\nThe chain specification.\nThe default accounts.\nRecord for an emitted event.\nAdvances the chain by a single block.\nThe predefined <code>ALICE</code> account holding substantial amounts …\nTests if a contract terminates successfully after …\nThe targeted block time.\nThe predefined <code>BOB</code> account holding some amounts of value.\nCalls the chain extension with the given input.\nGets the currently set callee.\nThe predefined <code>CHARLIE</code> account holding some amounts of …\nReturns the amount of storage cells used by the account …\nRecorded encoding of the emitted event.\nReturns the default accounts for testing purposes: Alice, …\nThe predefined <code>DJANGO</code> account holding no value.\nThe predefined <code>EVE</code> account holding no value.\nThe static ID of the chain extension.\nThe predefined <code>FRANK</code> account holding no value.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe current gas price.\nReturns the balance of the account.\nReturns the total number of reads and writes of the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a boolean to indicate whether an account is a …\nThe minimum value an account of the chain must have (i.e. …\nCreates new call ABI data for the given selector.\nReturns the underlying bytes of the encoded input …\nPrepend contract message call with value transfer. Used …\nPushes the given argument onto the call ABI data in …\nReturns the contents of the past performed environmental …\nReturns the recorded emitted events in order.\nRegisters a new chain extension.\nRuns the given closure test function with the default …\nReturns the selector of <code>self</code>.\nSets the balance of the account to the given balance.\nSets the block number for the next <code>advance_block</code> …\nSets the block timestamp for the next <code>advance_block</code> …\nSets the callee for the next call.\nSets a caller for the next call.\nSet to true to disable clearing storage\nSets an account as a contract\nSets the value transferred from the caller to the callee …\nReturns the underlying byte representation.\nRecorded topics of the emitted event.\nTransfers value from the caller account to the contract.")