(function() {var implementors = {};
implementors["ink_env"] = [{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"enum\" href=\"ink_env/enum.DefaultEnvironment.html\" title=\"enum ink_env::DefaultEnvironment\">DefaultEnvironment</a>","synthetic":false,"types":["ink_env::types::DefaultEnvironment"]}];
implementors["ink_primitives"] = [{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_primitives/struct.AccountId.html\" title=\"struct ink_primitives::AccountId\">AccountId</a>","synthetic":false,"types":["ink_primitives::types::AccountId"]},{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_primitives/struct.Hash.html\" title=\"struct ink_primitives::Hash\">Hash</a>","synthetic":false,"types":["ink_primitives::types::Hash"]}];
implementors["ink_storage"] = [{"text":"impl&lt;K, V:&nbsp;<a class=\"trait\" href=\"ink_storage_traits/storage/trait.Packed.html\" title=\"trait ink_storage_traits::storage::Packed\">Packed</a>, KeyType:&nbsp;<a class=\"trait\" href=\"ink_storage_traits/storage/trait.StorageKey.html\" title=\"trait ink_storage_traits::storage::StorageKey\">StorageKey</a>&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_storage/struct.Mapping.html\" title=\"struct ink_storage::Mapping\">Mapping</a>&lt;K, V, KeyType&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.fn.html\">fn</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.tuple.html\">(K, V, KeyType)</a>&gt;: <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"ink_storage_traits/storage/trait.Packed.html\" title=\"trait ink_storage_traits::storage::Packed\">Packed</a> + <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;KeyType: <a class=\"trait\" href=\"ink_storage_traits/storage/trait.StorageKey.html\" title=\"trait ink_storage_traits::storage::StorageKey\">StorageKey</a> + <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ink_storage::lazy::mapping::Mapping"]},{"text":"impl&lt;V, KeyType:&nbsp;<a class=\"trait\" href=\"ink_storage_traits/storage/trait.StorageKey.html\" title=\"trait ink_storage_traits::storage::StorageKey\">StorageKey</a>&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_storage/struct.Lazy.html\" title=\"struct ink_storage::Lazy\">Lazy</a>&lt;V, KeyType&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.fn.html\">fn</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.tuple.html\">(V, KeyType)</a>&gt;: <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;KeyType: <a class=\"trait\" href=\"ink_storage_traits/storage/trait.StorageKey.html\" title=\"trait ink_storage_traits::storage::StorageKey\">StorageKey</a> + <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ink_storage::lazy::Lazy"]}];
implementors["ink_storage_traits"] = [{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_storage_traits/struct.AutoKey.html\" title=\"struct ink_storage_traits::AutoKey\">AutoKey</a>","synthetic":false,"types":["ink_storage_traits::impls::AutoKey"]},{"text":"impl&lt;const KEY:&nbsp;<a class=\"type\" href=\"ink_primitives/key/type.Key.html\" title=\"type ink_primitives::key::Key\">Key</a>, ParentKey:&nbsp;<a class=\"trait\" href=\"ink_storage_traits/trait.StorageKey.html\" title=\"trait ink_storage_traits::StorageKey\">StorageKey</a>&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_storage_traits/struct.ManualKey.html\" title=\"struct ink_storage_traits::ManualKey\">ManualKey</a>&lt;KEY, ParentKey&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.fn.html\">fn</a>() -&gt; ParentKey&gt;: <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;ParentKey: <a class=\"trait\" href=\"ink_storage_traits/trait.StorageKey.html\" title=\"trait ink_storage_traits::StorageKey\">StorageKey</a> + <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ink_storage_traits::impls::ManualKey"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"ink_storage_traits/trait.StorageKey.html\" title=\"trait ink_storage_traits::StorageKey\">StorageKey</a>, R:&nbsp;<a class=\"trait\" href=\"ink_storage_traits/trait.StorageKey.html\" title=\"trait ink_storage_traits::StorageKey\">StorageKey</a>&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_storage_traits/struct.ResolverKey.html\" title=\"struct ink_storage_traits::ResolverKey\">ResolverKey</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.fn.html\">fn</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.tuple.html\">(L, R)</a>&gt;: <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"ink_storage_traits/trait.StorageKey.html\" title=\"trait ink_storage_traits::StorageKey\">StorageKey</a> + <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"ink_storage_traits/trait.StorageKey.html\" title=\"trait ink_storage_traits::StorageKey\">StorageKey</a> + <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ink_storage_traits::impls::ResolverKey"]}];
implementors["scale_info"] = [];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()