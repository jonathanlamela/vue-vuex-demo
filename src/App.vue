<script setup lang="ts">

import CartPreview from './components/CartPreview.vue';
import ProductItemView from './components/ProductItemView.vue';
import type { ProductItem } from './types';


var products: ProductItem[] = [
  {
    productCode: '001',
    name: 'Biscotti',
    price: 1.20,
    quantity: 0
  },
  {
    productCode: '002',
    name: 'Mele',
    price: 0.5,
    quantity: 0
  },

];


</script>

<template>

  <div class="m-16 p-16 flex flex-col space-y-4 flex-grow bg-white shadow-md">
    <div class="flex flex-row space-x-2">
      <div v-for="item in products">
        <ProductItemView :item="item" />
      </div>
    </div>
    <div>
      <CartPreview />
    </div>
  </div>

</template>
