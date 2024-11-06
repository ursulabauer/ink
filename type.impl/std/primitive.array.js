(function() {var type_impls = {
"ink_e2e":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BatchInvert%3C%5BT;+N%5D%3E-for-T\" class=\"impl\"><a href=\"#impl-BatchInvert%3C%5BT;+N%5D%3E-for-T\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a>, T&gt; BatchInvert&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.array.html\">[T; N]</a>&gt; for T<div class=\"where\">where\n    T: Invert&lt;Output = <a class=\"struct\" href=\"https://docs.rs/subtle/2.5.0/subtle/struct.CtOption.html\" title=\"struct subtle::CtOption\">CtOption</a>&lt;T&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://docs.rs/subtle/2.5.0/subtle/trait.ConditionallySelectable.html\" title=\"trait subtle::ConditionallySelectable\">ConditionallySelectable</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Output</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.array.html\">[T; N]</a></h4></section></summary><div class='docblock'>The output of batch inversion. A container of field elements.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.batch_invert\" class=\"method trait-impl\"><a href=\"#method.batch_invert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">batch_invert</a>(field_elements: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.array.html\">[T; N]</a>) -&gt; <a class=\"struct\" href=\"https://docs.rs/subtle/2.5.0/subtle/struct.CtOption.html\" title=\"struct subtle::CtOption\">CtOption</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.array.html\">[T; N]</a>&gt;</h4></section></summary><div class='docblock'>Invert a batch of field elements.</div></details></div></details>","BatchInvert<[T; N]>","ink_e2e::preset::mock_network::mocks::msg_queue::pallet::MessageId","ink_e2e::sr25519::Seed"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()