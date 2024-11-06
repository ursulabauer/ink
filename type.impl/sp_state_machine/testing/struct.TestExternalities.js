(function() {var type_impls = {
"ink_sandbox":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-TestExternalities%3CH%3E\" class=\"impl\"><a href=\"#impl-Debug-for-TestExternalities%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for TestExternalities&lt;H&gt;<div class=\"where\">where\n    H: Hasher,\n    &lt;H as Hasher&gt;::Out: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + Codec,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","ink_sandbox::TestExternalities"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-TestExternalities%3CH%3E\" class=\"impl\"><a href=\"#impl-Default-for-TestExternalities%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for TestExternalities&lt;H&gt;<div class=\"where\">where\n    H: Hasher,\n    &lt;H as Hasher&gt;::Out: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + 'static + Codec,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; TestExternalities&lt;H&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","ink_sandbox::TestExternalities"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ExtensionStore-for-TestExternalities%3CH%3E\" class=\"impl\"><a href=\"#impl-ExtensionStore-for-TestExternalities%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; ExtensionStore for TestExternalities&lt;H&gt;<div class=\"where\">where\n    H: Hasher,\n    &lt;H as Hasher&gt;::Out: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + Codec,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extension_by_type_id\" class=\"method trait-impl\"><a href=\"#method.extension_by_type_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">extension_by_type_id</a>(\n    &amp;mut self,\n    type_id: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/any/struct.TypeId.html\" title=\"struct core::any::TypeId\">TypeId</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;mut (dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a> + 'static)&gt;</h4></section></summary><div class='docblock'>Tries to find a registered extension by the given <code>type_id</code> and returns it as a <code>&amp;mut dyn Any</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.register_extension_with_type_id\" class=\"method trait-impl\"><a href=\"#method.register_extension_with_type_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">register_extension_with_type_id</a>(\n    &amp;mut self,\n    type_id: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/any/struct.TypeId.html\" title=\"struct core::any::TypeId\">TypeId</a>,\n    extension: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"ink_sandbox/trait.Extension.html\" title=\"trait ink_sandbox::Extension\">Extension</a>&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, Error&gt;</h4></section></summary><div class='docblock'>Register extension <code>extension</code> with specified <code>type_id</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deregister_extension_by_type_id\" class=\"method trait-impl\"><a href=\"#method.deregister_extension_by_type_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deregister_extension_by_type_id</a>(\n    &amp;mut self,\n    type_id: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/any/struct.TypeId.html\" title=\"struct core::any::TypeId\">TypeId</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, Error&gt;</h4></section></summary><div class='docblock'>Deregister extension with specified ‘type_id’ and drop it. <a>Read more</a></div></details></div></details>","ExtensionStore","ink_sandbox::TestExternalities"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ExternalitiesExt-for-TestExternalities%3CH%3E\" class=\"impl\"><a href=\"#impl-ExternalitiesExt-for-TestExternalities%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; ExternalitiesExt for TestExternalities&lt;H&gt;<div class=\"where\">where\n    H: Hasher,\n    &lt;H as Hasher&gt;::Out: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + Codec,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extension\" class=\"method trait-impl\"><a href=\"#method.extension\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">extension</a>&lt;T&gt;(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;mut T</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a> + <a class=\"trait\" href=\"ink_sandbox/trait.Extension.html\" title=\"trait ink_sandbox::Extension\">Extension</a>,</div></h4></section></summary><div class='docblock'>Tries to find a registered extension and returns a mutable reference.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.register_extension\" class=\"method trait-impl\"><a href=\"#method.register_extension\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">register_extension</a>&lt;T&gt;(&amp;mut self, ext: T) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"ink_sandbox/trait.Extension.html\" title=\"trait ink_sandbox::Extension\">Extension</a>,</div></h4></section></summary><div class='docblock'>Register extension <code>ext</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deregister_extension\" class=\"method trait-impl\"><a href=\"#method.deregister_extension\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deregister_extension</a>&lt;T&gt;(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"ink_sandbox/trait.Extension.html\" title=\"trait ink_sandbox::Extension\">Extension</a>,</div></h4></section></summary><div class='docblock'>Deregister and drop extension of <code>T</code> type. <a>Read more</a></div></details></div></details>","ExternalitiesExt","ink_sandbox::TestExternalities"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C(Storage,+StateVersion)%3E-for-TestExternalities%3CH%3E\" class=\"impl\"><a href=\"#impl-From%3C(Storage,+StateVersion)%3E-for-TestExternalities%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(Storage, StateVersion)&gt; for TestExternalities&lt;H&gt;<div class=\"where\">where\n    H: Hasher,\n    &lt;H as Hasher&gt;::Out: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + 'static + Codec,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(_: (Storage, StateVersion)) -&gt; TestExternalities&lt;H&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<(Storage, StateVersion)>","ink_sandbox::TestExternalities"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CStorage%3E-for-TestExternalities%3CH%3E\" class=\"impl\"><a href=\"#impl-From%3CStorage%3E-for-TestExternalities%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Storage&gt; for TestExternalities&lt;H&gt;<div class=\"where\">where\n    H: Hasher,\n    &lt;H as Hasher&gt;::Out: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + 'static + Codec,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(storage: Storage) -&gt; TestExternalities&lt;H&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Storage>","ink_sandbox::TestExternalities"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-TestExternalities%3CH%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-TestExternalities%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for TestExternalities&lt;H&gt;<div class=\"where\">where\n    H: Hasher,\n    &lt;H as Hasher&gt;::Out: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + 'static + Codec,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;TestExternalities&lt;H&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>This doesn’t test if they are in the same state, only if they contains the\nsame data at this state</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/cmp.rs.html#262\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","ink_sandbox::TestExternalities"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TestExternalities%3CH%3E\" class=\"impl\"><a href=\"#impl-TestExternalities%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; TestExternalities&lt;H&gt;<div class=\"where\">where\n    H: Hasher + 'static,\n    &lt;H as Hasher&gt;::Out: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + 'static + Codec,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.ext\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">ext</a>(\n    &amp;mut self,\n) -&gt; Ext&lt;'_, H, TrieBackend&lt;MemoryDB&lt;H, PrefixedKey&lt;H&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;&gt;, H&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Get externalities implementation.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(storage: Storage) -&gt; TestExternalities&lt;H&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new instance of <code>TestExternalities</code> with storage.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_with_state_version\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new_with_state_version</a>(\n    storage: Storage,\n    state_version: StateVersion,\n) -&gt; TestExternalities&lt;H&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new instance of <code>TestExternalities</code> with storage for a given state version.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_empty\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new_empty</a>() -&gt; TestExternalities&lt;H&gt;</h4></section></summary><div class=\"docblock\"><p>New empty test externalities.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_with_code\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new_with_code</a>(code: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>], storage: Storage) -&gt; TestExternalities&lt;H&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new instance of <code>TestExternalities</code> with code and storage.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_with_code_and_state\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new_with_code_and_state</a>(\n    code: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>],\n    storage: Storage,\n    state_version: StateVersion,\n) -&gt; TestExternalities&lt;H&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new instance of <code>TestExternalities</code> with code and storage for a given state\nversion.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.overlayed_changes\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">overlayed_changes</a>(&amp;self) -&gt; &amp;OverlayedChanges&lt;H&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the overlayed changes.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.persist_offchain_overlay\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">persist_offchain_overlay</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Move offchain changes from overlay to the persistent store.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.offchain_db\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">offchain_db</a>(&amp;self) -&gt; TestPersistentOffchainDB</h4></section></summary><div class=\"docblock\"><p>A shared reference type around the offchain worker storage.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.batch_insert\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">batch_insert</a>&lt;I&gt;(&amp;mut self, kvs: I)<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = (<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;)&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Batch insert key/values into backend</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">insert</a>(&amp;mut self, k: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;, v: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Insert key/value into backend</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert_child\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">insert_child</a>(&amp;mut self, c: ChildInfo, k: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;, v: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Insert key/value into backend.</p>\n<p>This only supports inserting keys in child tries.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.register_extension\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">register_extension</a>&lt;E&gt;(&amp;mut self, ext: E)<div class=\"where\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a> + <a class=\"trait\" href=\"ink_sandbox/trait.Extension.html\" title=\"trait ink_sandbox::Extension\">Extension</a>,</div></h4></section></summary><div class=\"docblock\"><p>Registers the given extension for this instance.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_raw_snapshot\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">from_raw_snapshot</a>(\n    raw_storage: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;, (<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i32.html\">i32</a>))&gt;,\n    storage_root: &lt;H as Hasher&gt;::Out,\n    state_version: StateVersion,\n) -&gt; TestExternalities&lt;H&gt;</h4></section></summary><div class=\"docblock\"><p>Sets raw storage key/values and a root.</p>\n<p>This can be used as a fast way to restore the storage state from a backup because the trie\ndoes not need to be computed.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_raw_snapshot\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">into_raw_snapshot</a>(\n    self,\n) -&gt; (<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;, (<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.i32.html\">i32</a>))&gt;, &lt;H as Hasher&gt;::Out)</h4></section></summary><div class=\"docblock\"><p>Drains the underlying raw storage key/values and returns the root hash.</p>\n<p>Useful for backing up the storage in a format that can be quickly re-loaded.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_backend\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">as_backend</a>(&amp;self) -&gt; TrieBackend&lt;MemoryDB&lt;H, PrefixedKey&lt;H&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;&gt;, H&gt;</h4></section></summary><div class=\"docblock\"><p>Return a new backend with all pending changes.</p>\n<p>In contrast to <a href=\"Self::commit_all\"><code>commit_all</code></a> this will not panic if there are open\ntransactions.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.commit_all\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">commit_all</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Commit all pending changes to the underlying backend.</p>\n<h5 id=\"panic\"><a class=\"doc-anchor\" href=\"#panic\">§</a>Panic</h5>\n<p>This will panic if there are still open transactions.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.execute_with\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">execute_with</a>&lt;R&gt;(&amp;mut self, execute: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; R) -&gt; R</h4></section></summary><div class=\"docblock\"><p>Execute the given closure while <code>self</code> is set as externalities.</p>\n<p>Returns the result of the given closure.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.execute_and_prove\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">execute_and_prove</a>&lt;R&gt;(\n    &amp;mut self,\n    execute: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; R,\n) -&gt; (R, StorageProof)</h4></section></summary><div class=\"docblock\"><p>Execute the given closure while <code>self</code>, with <code>proving_backend</code> as backend, is set as\nexternalities.</p>\n<p>This implementation will wipe the proof recorded in between calls. Consecutive calls will\nget their own proof from scratch.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.execute_with_safe\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">execute_with_safe</a>&lt;R&gt;(\n    &amp;mut self,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; R + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;R, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Execute the given closure while <code>self</code> is set as externalities.</p>\n<p>Returns the result of the given closure, if no panics occurred.\nOtherwise, returns <code>Err</code>.</p>\n</div></details></div></details>",0,"ink_sandbox::TestExternalities"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()