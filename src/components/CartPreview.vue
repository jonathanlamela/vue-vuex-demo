<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

import CartItemView from './CartItemView.vue';
import type { CartState } from '../types';

const store = useStore<CartState>()

const items = computed(() => store.getters.getCartItems)
const total = computed(() => store.getters.getTotal)

</script>
<template>

    <div class="flex flex-col space-y-4">
        <p class="font-bold text-xl">Preview carrello</p>
        <div class="flex flex-col space-y-2">
            <CartItemView v-for="item in items" :item="item" />
        </div>
        <div class="flex flex-row space-x-4">
            <span class="font-bold">Totale carrello:</span><span>{{ `${total.toFixed(2)} €` }}</span>
        </div>

    </div>

</template>
