<template>
  <div class="back">
    <h1>{{ props.id }}</h1>
    <h1>{{ product }}</h1>
  </div>
  
</template>

<script setup lang="ts">
import { productsStore } from "../../stores/product";
const ProductsStore = productsStore();
const props = defineProps<{id: number}>();
const product = ProductsStore.products.filter(item => item.id == props.id)[0]
</script>

<style>


</style>