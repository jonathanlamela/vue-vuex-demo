<script setup lang="ts">
import { useStore } from 'vuex'

import type { AddItemPayload, CartState, ProductItem } from '../types';

const props = defineProps<{
    item: ProductItem
}>()

const store = useStore<CartState>()

function addToCart() {
    var payload: AddItemPayload = {
        item: props.item
    }
    store.dispatch('addItem', payload)
}

</script>
<template>
    <div class="flex flex-col bg-gray-50 p-8 justify-center items-center space-y-4 shadow-md">
        <p class="text-2xl">{{ item.name }}</p>
        <p>{{ `${item.price.toFixed(2)} €` }}</p>
        <button @click="addToCart" class="bg-blue-900 hover:bg-blue-950 text-white p-4 rounded-4xl">Add to cart</button>
    </div>
</template>
