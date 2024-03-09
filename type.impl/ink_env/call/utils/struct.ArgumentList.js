(function() {var type_impls = {
"ink_env":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArgumentList%3CArgument%3CHead%3E,+Rest%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ink_env/call/execution_input.rs.html#141-153\">source</a><a href=\"#impl-ArgumentList%3CArgument%3CHead%3E,+Rest%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Head, Rest&gt; <a class=\"struct\" href=\"ink_env/call/utils/struct.ArgumentList.html\" title=\"struct ink_env::call::utils::ArgumentList\">ArgumentList</a>&lt;<a class=\"struct\" href=\"ink_env/call/utils/struct.Argument.html\" title=\"struct ink_env::call::utils::Argument\">Argument</a>&lt;Head&gt;, Rest&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.push_arg\" class=\"method\"><a class=\"src rightside\" href=\"src/ink_env/call/execution_input.rs.html#144-152\">source</a><h4 class=\"code-header\">pub fn <a href=\"ink_env/call/utils/struct.ArgumentList.html#tymethod.push_arg\" class=\"fn\">push_arg</a>&lt;T&gt;(self, arg: T) -&gt; <a class=\"struct\" href=\"ink_env/call/utils/struct.ArgumentList.html\" title=\"struct ink_env::call::utils::ArgumentList\">ArgumentList</a>&lt;<a class=\"struct\" href=\"ink_env/call/utils/struct.Argument.html\" title=\"struct ink_env::call::utils::Argument\">Argument</a>&lt;T&gt;, Self&gt;<span class=\"where fmt-newline\">where\n    T: Encode,</span></h4></section></summary><div class=\"docblock\"><p>Pushes another argument to the argument list.</p>\n</div></details></div></details>",0,"ink_env::call::execution_input::ArgsList"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-ArgumentList%3CHead,+Rest%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ink_env/call/execution_input.rs.html#83\">source</a><a href=\"#impl-Default-for-ArgumentList%3CHead,+Rest%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Head: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, Rest: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"ink_env/call/utils/struct.ArgumentList.html\" title=\"struct ink_env::call::utils::ArgumentList\">ArgumentList</a>&lt;Head, Rest&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ink_env/call/execution_input.rs.html#83\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"ink_env/call/utils/struct.ArgumentList.html\" title=\"struct ink_env::call::utils::ArgumentList\">ArgumentList</a>&lt;Head, Rest&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","ink_env::call::execution_input::ArgsList","ink_env::call::execution_input::EmptyArgumentList"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ArgumentList%3CHead,+Rest%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ink_env/call/execution_input.rs.html#83\">source</a><a href=\"#impl-Debug-for-ArgumentList%3CHead,+Rest%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Head: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, Rest: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"ink_env/call/utils/struct.ArgumentList.html\" title=\"struct ink_env::call::utils::ArgumentList\">ArgumentList</a>&lt;Head, Rest&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ink_env/call/execution_input.rs.html#83\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","ink_env::call::execution_input::ArgsList","ink_env::call::execution_input::EmptyArgumentList"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-ArgumentList%3CArgument%3CHead%3E,+Rest%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ink_env/call/execution_input.rs.html#180-201\">source</a><a href=\"#impl-Encode-for-ArgumentList%3CArgument%3CHead%3E,+Rest%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Head, Rest&gt; Encode for <a class=\"struct\" href=\"ink_env/call/utils/struct.ArgumentList.html\" title=\"struct ink_env::call::utils::ArgumentList\">ArgumentList</a>&lt;<a class=\"struct\" href=\"ink_env/call/utils/struct.Argument.html\" title=\"struct ink_env::call::utils::Argument\">Argument</a>&lt;Head&gt;, Rest&gt;<span class=\"where fmt-newline\">where\n    Head: Encode,\n    Rest: Encode,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ink_env/call/execution_input.rs.html#186-190\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ink_env/call/execution_input.rs.html#193-200\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;O: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(&amp;self, output: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut O</a>)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;</h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</span></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","ink_env::call::execution_input::ArgsList"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ArgumentList%3CHead,+Rest%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ink_env/call/execution_input.rs.html#83\">source</a><a href=\"#impl-Clone-for-ArgumentList%3CHead,+Rest%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Head: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Rest: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"ink_env/call/utils/struct.ArgumentList.html\" title=\"struct ink_env::call::utils::ArgumentList\">ArgumentList</a>&lt;Head, Rest&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ink_env/call/execution_input.rs.html#83\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"ink_env/call/utils/struct.ArgumentList.html\" title=\"struct ink_env::call::utils::ArgumentList\">ArgumentList</a>&lt;Head, Rest&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","ink_env::call::execution_input::ArgsList","ink_env::call::execution_input::EmptyArgumentList"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()