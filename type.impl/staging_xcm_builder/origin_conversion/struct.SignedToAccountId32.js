(function() {var type_impls = {
"ink_e2e":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryConvert%3CRuntimeOrigin,+Location%3E-for-SignedToAccountId32%3CRuntimeOrigin,+AccountId,+Network%3E\" class=\"impl\"><a href=\"#impl-TryConvert%3CRuntimeOrigin,+Location%3E-for-SignedToAccountId32%3CRuntimeOrigin,+AccountId,+Network%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeOrigin, AccountId, Network&gt; TryConvert&lt;RuntimeOrigin, Location&gt; for SignedToAccountId32&lt;RuntimeOrigin, AccountId, Network&gt;<div class=\"where\">where\n    RuntimeOrigin: OriginTrait + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.array.html\">32</a>]&gt;,\n    Network: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;NetworkId&gt;&gt;,\n    &lt;RuntimeOrigin as OriginTrait&gt;::PalletsOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RawOrigin&lt;AccountId&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;RawOrigin&lt;AccountId&gt;, Error = &lt;RuntimeOrigin as OriginTrait&gt;::PalletsOrigin&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_convert\" class=\"method trait-impl\"><a href=\"#method.try_convert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">try_convert</a>(o: RuntimeOrigin) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Location, RuntimeOrigin&gt;</h4></section></summary><div class='docblock'>Attempt to make conversion. If returning <a href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html#variant.Err\" title=\"variant core::result::Result::Err\">Result::Err</a>, the inner must always be <code>a</code>.</div></details></div></details>","TryConvert<RuntimeOrigin, Location>","ink_e2e::preset::mock_network::parachain::LocalOriginToLocation","ink_e2e::preset::mock_network::relay_chain::LocalOriginToLocation"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()