<template>
  <div class="back">

    <h1 class="g">{{ ProductsStore.object }}</h1>
  </div>
  
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { productsStore } from "../../stores/product";
const ProductsStore = productsStore();



const props = defineProps<{id: number}>();
onMounted(() => {
  console.log("samle")
   ProductsStore.readproductById(props.id)
 
   })
</script>

<style>
.g{
  background-color:blanchedalmond;

}

</style>