(function() {var implementors = {
"ink":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"ink/reflect/enum.DispatchError.html\" title=\"enum ink::reflect::DispatchError\">DispatchError</a>&gt; for Error"]],
"ink_e2e":[["impl&lt;E: Environment&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ContractResult&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;InstantiateReturnValue&lt;&lt;E as Environment&gt;::AccountId&gt;, DispatchError&gt;, &lt;E as Environment&gt;::Balance, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;&gt; for <a class=\"struct\" href=\"ink_e2e/struct.InstantiateDryRunResult.html\" title=\"struct ink_e2e::InstantiateDryRunResult\">InstantiateDryRunResult</a>&lt;E&gt;"]],
"ink_engine":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"ink_engine/enum.AccountError.html\" title=\"enum ink_engine::AccountError\">AccountError</a>&gt; for <a class=\"enum\" href=\"ink_engine/enum.Error.html\" title=\"enum ink_engine::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"ink_engine/enum.AccountError.html\" title=\"enum ink_engine::AccountError\">AccountError</a>"]],
"ink_env":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt; for <a class=\"enum\" href=\"ink_env/enum.Error.html\" title=\"enum ink_env::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"ink_env/enum.Error.html\" title=\"enum ink_env::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;AccountError&gt; for <a class=\"enum\" href=\"ink_env/enum.Error.html\" title=\"enum ink_env::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"ink_env/enum.ReturnErrorCode.html\" title=\"enum ink_env::ReturnErrorCode\">ReturnErrorCode</a>&gt; for <a class=\"enum\" href=\"ink_env/enum.Error.html\" title=\"enum ink_env::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"ink_env/enum.Error.html\" title=\"enum ink_env::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">4</a>]&gt; for <a class=\"struct\" href=\"ink_env/call/struct.Selector.html\" title=\"struct ink_env::call::Selector\">Selector</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;EmittedEvent&gt; for <a class=\"struct\" href=\"ink_env/test/struct.EmittedEvent.html\" title=\"struct ink_env::test::EmittedEvent\">EmittedEvent</a>"]],
"ink_ir":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ink_ir/struct.Event.html\" title=\"struct ink_ir::Event\">Event</a>&gt; for <a class=\"enum\" href=\"ink_ir/enum.InkItem.html\" title=\"enum ink_ir::InkItem\">InkItem</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">4</a>]&gt; for <a class=\"struct\" href=\"ink_ir/struct.Selector.html\" title=\"struct ink_ir::Selector\">Selector</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">32</a>]&gt; for <a class=\"struct\" href=\"ink_ir/struct.SignatureTopicArg.html\" title=\"struct ink_ir::SignatureTopicArg\">SignatureTopicArg</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ink_ir/struct.Storage.html\" title=\"struct ink_ir::Storage\">Storage</a>&gt; for <a class=\"enum\" href=\"ink_ir/enum.InkItem.html\" title=\"enum ink_ir::InkItem\">InkItem</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"ink_ir/struct.InkTraitMessage.html\" title=\"struct ink_ir::InkTraitMessage\">InkTraitMessage</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"ink_ir/struct.InputsIter.html\" title=\"struct ink_ir::InputsIter\">InputsIter</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"ink_ir/struct.Message.html\" title=\"struct ink_ir::Message\">Message</a>&gt; for <a class=\"struct\" href=\"ink_ir/struct.InputsIter.html\" title=\"struct ink_ir::InputsIter\">InputsIter</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"ink_ir/struct.Constructor.html\" title=\"struct ink_ir::Constructor\">Constructor</a>&gt; for <a class=\"struct\" href=\"ink_ir/struct.InputsIter.html\" title=\"struct ink_ir::InputsIter\">InputsIter</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ink_ir/struct.ItemImpl.html\" title=\"struct ink_ir::ItemImpl\">ItemImpl</a>&gt; for <a class=\"enum\" href=\"ink_ir/enum.InkItem.html\" title=\"enum ink_ir::InkItem\">InkItem</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;&gt; for <a class=\"struct\" href=\"ink_ir/struct.Namespace.html\" title=\"struct ink_ir::Namespace\">Namespace</a>"]],
"ink_metadata":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"ink_metadata/layout/struct.LayoutKey.html\" title=\"struct ink_metadata::layout::LayoutKey\">LayoutKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">4</a>]&gt; for <a class=\"struct\" href=\"ink_metadata/struct.Selector.html\" title=\"struct ink_metadata::Selector\">Selector</a>"],["impl&lt;F: Form&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ink_metadata/layout/struct.HashLayout.html\" title=\"struct ink_metadata::layout::HashLayout\">HashLayout</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"ink_metadata/layout/enum.Layout.html\" title=\"enum ink_metadata::layout::Layout\">Layout</a>&lt;F&gt;"],["impl&lt;F: Form&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ink_metadata/layout/struct.ArrayLayout.html\" title=\"struct ink_metadata::layout::ArrayLayout\">ArrayLayout</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"ink_metadata/layout/enum.Layout.html\" title=\"enum ink_metadata::layout::Layout\">Layout</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"ink_metadata/layout/struct.Discriminant.html\" title=\"struct ink_metadata::layout::Discriminant\">Discriminant</a>"],["impl&lt;F: Form&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(<a class=\"struct\" href=\"ink_metadata/layout/struct.LayoutKey.html\" title=\"struct ink_metadata::layout::LayoutKey\">LayoutKey</a>, &lt;F as Form&gt;::Type)&gt; for <a class=\"struct\" href=\"ink_metadata/layout/struct.LeafLayout.html\" title=\"struct ink_metadata::layout::LeafLayout\">LeafLayout</a>&lt;F&gt;"],["impl&lt;F: Form&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ink_metadata/layout/struct.StructLayout.html\" title=\"struct ink_metadata::layout::StructLayout\">StructLayout</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"ink_metadata/layout/enum.Layout.html\" title=\"enum ink_metadata::layout::Layout\">Layout</a>&lt;F&gt;"],["impl&lt;F: Form&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ink_metadata/layout/struct.EnumLayout.html\" title=\"struct ink_metadata::layout::EnumLayout\">EnumLayout</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"ink_metadata/layout/enum.Layout.html\" title=\"enum ink_metadata::layout::Layout\">Layout</a>&lt;F&gt;"],["impl&lt;F: Form&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ink_metadata/layout/struct.LeafLayout.html\" title=\"struct ink_metadata::layout::LeafLayout\">LeafLayout</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"ink_metadata/layout/enum.Layout.html\" title=\"enum ink_metadata::layout::Layout\">Layout</a>&lt;F&gt;"],["impl&lt;F: Form&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ink_metadata/layout/struct.RootLayout.html\" title=\"struct ink_metadata::layout::RootLayout\">RootLayout</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"ink_metadata/layout/enum.Layout.html\" title=\"enum ink_metadata::layout::Layout\">Layout</a>&lt;F&gt;"],["impl&lt;F: Form&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(<a class=\"struct\" href=\"ink_metadata/layout/struct.LayoutKey.html\" title=\"struct ink_metadata::layout::LayoutKey\">LayoutKey</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"enum\" href=\"ink_metadata/layout/enum.Layout.html\" title=\"enum ink_metadata::layout::Layout\">Layout</a>&lt;F&gt;&gt;, &lt;F as Form&gt;::Type)&gt; for <a class=\"struct\" href=\"ink_metadata/layout/struct.RootLayout.html\" title=\"struct ink_metadata::layout::RootLayout\">RootLayout</a>&lt;F&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"ink_metadata/layout/struct.LayoutKey.html\" title=\"struct ink_metadata::layout::LayoutKey\">LayoutKey</a>"]],
"ink_primitives":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ink_primitives/struct.Hash.html\" title=\"struct ink_primitives::Hash\">Hash</a>&gt; for [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">32</a>]"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">32</a>]&gt; for <a class=\"struct\" href=\"ink_primitives/struct.Hash.html\" title=\"struct ink_primitives::Hash\">Hash</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">32</a>]&gt; for <a class=\"struct\" href=\"ink_primitives/struct.AccountId.html\" title=\"struct ink_primitives::AccountId\">AccountId</a>"]],
"ink_sandbox":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;Pallet&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.DefaultSandboxRuntime.html\" title=\"struct ink_sandbox::macros::DefaultSandboxRuntime\">DefaultSandboxRuntime</a>&gt; as Callable&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.DefaultSandboxRuntime.html\" title=\"struct ink_sandbox::macros::DefaultSandboxRuntime\">DefaultSandboxRuntime</a>&gt;&gt;::RuntimeCall&gt; for <a class=\"enum\" href=\"ink_sandbox/macros/enum.RuntimeCall.html\" title=\"enum ink_sandbox::macros::RuntimeCall\">RuntimeCall</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.DefaultSandboxRuntime.html\" title=\"struct ink_sandbox::macros::DefaultSandboxRuntime\">DefaultSandboxRuntime</a> as Config&gt;::AccountId&gt;&gt; for <a class=\"struct\" href=\"ink_sandbox/macros/struct.RuntimeOrigin.html\" title=\"struct ink_sandbox::macros::RuntimeOrigin\">RuntimeOrigin</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;Pallet&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.DefaultSandboxRuntime.html\" title=\"struct ink_sandbox::macros::DefaultSandboxRuntime\">DefaultSandboxRuntime</a>&gt; as Callable&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.DefaultSandboxRuntime.html\" title=\"struct ink_sandbox::macros::DefaultSandboxRuntime\">DefaultSandboxRuntime</a>&gt;&gt;::RuntimeCall&gt; for <a class=\"enum\" href=\"ink_sandbox/macros/enum.RuntimeCall.html\" title=\"enum ink_sandbox::macros::RuntimeCall\">RuntimeCall</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Event&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.DefaultSandboxRuntime.html\" title=\"struct ink_sandbox::macros::DefaultSandboxRuntime\">DefaultSandboxRuntime</a>&gt;&gt; for <a class=\"enum\" href=\"ink_sandbox/macros/enum.RuntimeEvent.html\" title=\"enum ink_sandbox::macros::RuntimeEvent\">RuntimeEvent</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Event&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.DefaultSandboxRuntime.html\" title=\"struct ink_sandbox::macros::DefaultSandboxRuntime\">DefaultSandboxRuntime</a>&gt;&gt; for <a class=\"enum\" href=\"ink_sandbox/macros/enum.RuntimeEvent.html\" title=\"enum ink_sandbox::macros::RuntimeEvent\">RuntimeEvent</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;Pallet&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.DefaultSandboxRuntime.html\" title=\"struct ink_sandbox::macros::DefaultSandboxRuntime\">DefaultSandboxRuntime</a>&gt; as Callable&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.DefaultSandboxRuntime.html\" title=\"struct ink_sandbox::macros::DefaultSandboxRuntime\">DefaultSandboxRuntime</a>&gt;&gt;::RuntimeCall&gt; for <a class=\"enum\" href=\"ink_sandbox/macros/enum.RuntimeCall.html\" title=\"enum ink_sandbox::macros::RuntimeCall\">RuntimeCall</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;Pallet&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.DefaultSandboxRuntime.html\" title=\"struct ink_sandbox::macros::DefaultSandboxRuntime\">DefaultSandboxRuntime</a>&gt; as Callable&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.DefaultSandboxRuntime.html\" title=\"struct ink_sandbox::macros::DefaultSandboxRuntime\">DefaultSandboxRuntime</a>&gt;&gt;::RuntimeCall&gt; for <a class=\"enum\" href=\"ink_sandbox/macros/enum.RuntimeCall.html\" title=\"enum ink_sandbox::macros::RuntimeCall\">RuntimeCall</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Event&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.DefaultSandboxRuntime.html\" title=\"struct ink_sandbox::macros::DefaultSandboxRuntime\">DefaultSandboxRuntime</a>&gt;&gt; for <a class=\"enum\" href=\"ink_sandbox/macros/enum.RuntimeEvent.html\" title=\"enum ink_sandbox::macros::RuntimeEvent\">RuntimeEvent</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;HoldReason&gt; for <a class=\"enum\" href=\"ink_sandbox/macros/enum.RuntimeHoldReason.html\" title=\"enum ink_sandbox::macros::RuntimeHoldReason\">RuntimeHoldReason</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.RuntimeOrigin.html\" title=\"struct ink_sandbox::macros::RuntimeOrigin\">RuntimeOrigin</a>&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Origin&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.DefaultSandboxRuntime.html\" title=\"struct ink_sandbox::macros::DefaultSandboxRuntime\">DefaultSandboxRuntime</a>&gt;, <a class=\"struct\" href=\"ink_sandbox/macros/struct.RuntimeOrigin.html\" title=\"struct ink_sandbox::macros::RuntimeOrigin\">RuntimeOrigin</a>&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RawOrigin&lt;&lt;<a class=\"struct\" href=\"ink_sandbox/macros/struct.DefaultSandboxRuntime.html\" title=\"struct ink_sandbox::macros::DefaultSandboxRuntime\">DefaultSandboxRuntime</a> as Config&gt;::AccountId&gt;&gt; for <a class=\"struct\" href=\"ink_sandbox/macros/struct.RuntimeOrigin.html\" title=\"struct ink_sandbox::macros::RuntimeOrigin\">RuntimeOrigin</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()