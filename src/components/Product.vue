
<template>
  
  <div class="back">
    <div  v-for="product in ProductsStore.products" :key="product.id">
      <!-- <div class= "product" v-if="product.row === 'vv'"> -->
        <router-link class="product" v-if="product.row==='vv'"  :to="{name : 'productpage' , params:{id:product.id}}">
         <img style="width: 256px;" :src="product.src" alt="">
    <h3 style="color: blue;">{{ product.title }}</h3>
    <h4 style="color: aqua;">{{ product.weight }}</h4>
    <h4 style="color: brown;">{{ product.price }}</h4>
    <button style="background-color: chartreuse; border-radius: 5px;height: 30px;  "> افزودن به سبد خرید</button>
    <!-- </div> -->
  </router-link>
</div>
</div>

  <div class="back">
    <div  v-for="product in ProductsStore.products" :key="product.id">
    <!-- <div class= "product" v-if="product.row === 'll'"> -->
      <router-link class="product" v-if="product.row==='ll'"  :to="{name : 'productpage' , params:{id:product.id}}">
         <img :src="product.src" alt="">
    <h3 style="color: blue;">{{ product.title }}</h3>
    <h4 style="color: aqua;">{{ product.weight }}</h4>
    <h4 style="color: brown;">{{ product.price }}</h4>
    <button style="background-color: chartreuse; border-radius: 5px;height: 30px;  "> افزودن به سبد خرید</button>
  </router-link>
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
  /* border: 2px solid rgb(120, 20, 136); */
  text-align: center;
  border-radius: 20px;
  text-decoration: none;
  text-align: center;
  
}

.product img{
  width: 250px;
}

</style>