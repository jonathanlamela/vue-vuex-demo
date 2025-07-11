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

    <div class="card bg-base-100 w-96 shadow-sm">
        <figure v-if="item.imageUrl">
            <img :src="item.imageUrl!" class="w-full h-[200px]" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ item.name }}</h2>
            <p>{{ `${item.price.toFixed(2)} €` }}</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary" @click="addToCart">Add to cart</button>
            </div>
        </div>
    </div>
</template>
