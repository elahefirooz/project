<template>
  <div class="back">
    <h1>{{ props.id }}</h1>
    <h1 class="g">{{ product }}</h1>
  </div>
  




</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { productsStore } from "../../stores/product";
const ProductsStore = productsStore();
onMounted(() => {
   ProductsStore.readp()
})
const props = defineProps<{id: number}>();
let product = ProductsStore.object.filter(item => item.id == props.id)[0]
</script>

<style>
.g{
  background-color:blanchedalmond;

  /* <i/mg style="width: 220px;" :src="product.image" alt="">
        <h2> title  : {{ product.title }}</h2>
        <h2> Price  : {{ product.price }}</h2>  */

}

</style>