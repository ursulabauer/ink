// Copyright (C) Parity Technologies (UK) Ltd.
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

//! A simple storage vector implementation built on top of [Mapping].
//!
//! # Note
//!
//! This vector doesn't actually "own" any data.
//! Instead it is just a simple wrapper around the contract storage facilities.

use ink_storage_traits::{AutoKey, Packed, Storable, StorageKey};

use crate::{Lazy, Mapping};

/// A vector of values (elements) directly on contract storage.
///
/// # Difference between `ink::prelude::vec::Vec` and [StorageVec]
///
/// Any `Vec<T>` will exhibit [Packed] storage layout in its entirety;
/// where [StorageVec] stores each value under it's own storage key.
///
/// Hence, reading and writing a `Vec` from and to storage will load
/// and decode _all_ of its elements.
///
/// This can be undesirable:
/// The cost of read and write operations grows linearly, corresponding to
/// the number of elements in the vector (its length). Additionally, the
/// maximum capacity of the _whole_ vector is limited by the size of
/// the static buffer used during ABI encoding and decoding (default 16KiB).
///
/// [StorageVec] on the other hand can theoretically grow to infinite size.
/// However, we currently limit the length at 2 ^ 32 elements: In practice,
/// even if the vector elements are single bytes, it'll allow to store
/// more than 4GB data in blockchain storage, or more than enoug.
///
/// # Caveats
///
/// Iterating over [StorageVec] elements will cause a storage read for
/// _each_ iteration (additionally a storage write in case of mutable
/// iterations with assignements).
///
/// The decision whether to use `Vec<T>` or [StorageVec] can be seen as an
/// optimization problem with several factors:
/// * How large you expect the vector to grow
/// * The size of individual elements being stored
/// * How frequentely reads, writes and iterations happen
///
/// For example, if a vector is expected to stay small but is frequently
/// iteratet over. Chooosing a `Vec<T>` instead of [StorageVec] will be
/// preferred as indiviudal storage reads are much more expensive as
/// opposed to retrieving and decoding the whole collections with a single
/// storage read.
///
/// # Storage Layout
///
/// At given [StorageKey] `K`, the length of the [StorageVec] is hold.
/// Each element `E` is then stored under a combination of the [StorageVec]
/// key `K` and the elements index.
///
/// Given [StorageVec] under key `K`, the storage key `E` of the `N`th
/// element is calcualted as follows:
///
/// `E = scale::Encode((K, N))`
///
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub struct StorageVec<V: Packed, KeyType: StorageKey = AutoKey> {
    len: Lazy<u32, KeyType>,
    elements: Mapping<u32, V, KeyType>,
}

impl<V, KeyType> Default for StorageVec<V, KeyType>
where
    V: Packed,
    KeyType: StorageKey,
{
    fn default() -> Self {
        Self::new()
    }
}

impl<V, KeyType> StorageVec<V, KeyType>
where
    V: Packed,
    KeyType: StorageKey,
{
    /// Creates a new empty `Mapping`.
    pub const fn new() -> Self {
        Self {
            len: Lazy::new(),
            elements: Mapping::new(),
        }
    }

    /// Returns the number of elements in the vector, also referred to as its length.
    #[inline]
    pub fn len(&self) -> u32 {
        self.len.get().unwrap_or(u32::MIN)
    }

    /// Returns `true` if the vector contains no elements.
    pub fn is_empty(&self) -> bool {
        self.len() == 0
    }

    /// Appends an element to the back of the vector.
    ///
    /// # Panics
    ///
    /// If the vector is at capacity (max. of 2 ^ 32 elements).
    pub fn push<T>(&mut self, value: &T)
    where
        T: Storable + scale::EncodeLike<V>,
    {
        let slot = self.len();
        let _ = self.elements.insert(slot, value);

        self.len.set(&slot.checked_add(1).unwrap());
    }

    /// Pops the last element from the vector and returns it.
    //
    /// Returns `None` if the vector is empty.
    pub fn pop(&mut self) -> Option<V> {
        let slot = self.len().checked_sub(1)?;
        self.len.set(&slot);

        Some(self.elements.take(slot).unwrap())
    }
}

impl<V, KeyType> ::core::fmt::Debug for StorageVec<V, KeyType>
where
    V: Packed,
    KeyType: StorageKey,
{
    fn fmt(&self, f: &mut core::fmt::Formatter) -> core::fmt::Result {
        f.debug_struct("StorageVec")
            .field("key", &KeyType::KEY)
            .field("len", &self.len)
            .finish()
    }
}
