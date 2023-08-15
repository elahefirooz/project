
<template>
  <div class="back">
    <div  v-for="product in ProductsStore.products" :key="product.id">
    <div class= "product" v-if="product.row === 'vv'">
         <img :src="product.src" alt="">
    <h3 style="color: blue;">{{ product.title }}</h3>
    <h4 style="color: aqua;">{{ product.weight }}</h4>
    <h4 style="color: brown;">{{ product.price }}</h4>
    <button style="background-color: chartreuse; border-radius: 5px;height: 30px;  "> افزودن به سبد خرید</button>
  </div>
  </div>
  </div>

  <div class="back">
    <div  v-for="product in ProductsStore.products" :key="product.id">
    <div class= "product" v-if="product.row === 'll'">
         <img :src="product.src" alt="">
    <h3 style="color: blue;">{{ product.title }}</h3>
    <h4 style="color: aqua;">{{ product.weight }}</h4>
    <h4 style="color: brown;">{{ product.price }}</h4>
    <button style="background-color: chartreuse; border-radius: 5px;height: 30px;  "> افزودن به سبد خرید</button>
  </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { productsStore } from "../../stores/product";
const ProductsStore = productsStore();
</script>





<style>
.back{
  display: flex;
  justify-content: center;
 
}

.product{
  border: 2px solid rgb(120, 20, 136);
  text-align: center;
  border-radius: 20px;
}

.product img{
  width: 250px;
}

</style>