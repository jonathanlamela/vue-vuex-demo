<script setup lang="ts">

import type { CartState, ProductItem } from '../types';
import { useStore } from 'vuex'

const store = useStore<CartState>()

const props = defineProps<{
    item: ProductItem
}>()

function increase() {
    store.dispatch('increaseQty', {
        item: props.item
    });
}

function decrease() {
    store.dispatch('decreaseQty', {
        item: props.item
    });
}

</script>
<template>
    <div class="flex flex-col bg-gray-50 p-8 justify-center items-center space-y-4 shadow-md">
        <p class="text-2xl">{{ item.name }}</p>
        <p>{{ `${item.price.toFixed(2)} €` }}</p>
        <p>Qty: {{ item.quantity ?? 0 }}</p>
        <div class="flex flex-row">
            <button @click="increase" class="bg-blue-900 hover:bg-blue-950 text-white p-4">+</button>
            <button @click="decrease" class="bg-blue-900 hover:bg-blue-950 text-white p-4">-</button>
        </div>
    </div>
</template>
