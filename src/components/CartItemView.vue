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

    <div class="card bg-base-100 w-96 shadow-sm">

        <div class="card-body">
            <div class="flex flex-row items-center">
                <h2 class="card-title w-2/4">{{ item.name }}</h2>
                <p class="w-1/4 text-end">{{ `${item.price.toFixed(2)} €` }}</p>
                <p class="w-1/4 text-end">Qty: {{ item.quantity ?? 0 }}</p>
            </div>
            <div class="card-actions justify-end">
                <button @click="increase" class="btn">+</button>
                <button @click="decrease" class="btn">-</button>
            </div>
        </div>
    </div>
</template>
