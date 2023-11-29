
<template>
  
  <div class="back">
    <div  v-for="product in ProductsStore.products" :key="product.id">
     
        <router-link class="product" v-if="product.row==='vv'"  :to="{name : 'productpage' , params:{id:product.id}}">
         <img style="width: 256px;" :src="product.src" alt="">
    <h3 style="color: blue;">{{ product.title }}</h3>
    <h4 style="color: aqua;">{{ product.weight }}</h4>
    <h4 style="color: brown;">{{ product.price }}</h4>
    <button style="background-color: chartreuse; border-radius: 5px;height: 30px;  "> افزودن به سبد خرید</button>
 
  </router-link>
</div>
</div>

  <div class="back">
    <div  v-for="product in ProductsStore.products" :key="product.id">
  
      <router-link class="product" v-if="product.row==='ll'"  :to="{name : 'productpage' , params:{id:product.id}}">
         <img :src="product.src" alt="">
    <h3 style="color: blue;">{{ product.title }}</h3>
    <h4 style="color: aqua;">{{ product.weight }}</h4>
    <h4 style="color: brown;">{{ product.price }}</h4>
    <button style="background-color: chartreuse; border-radius: 5px;height: 30px;  "> افزودن به سبد خرید</button>
  </router-link>
  </div>
  </div>


  <div  v-if="ProductsStore.object.length<1">loading ....</div>
    <div v-else class="back">
      <div v-for="product in ProductsStore.object" :key="product.id" style="border: 2px solid black; margin: 10px; border-radius: 10px; padding: 10px;">
        <router-link  class="product" :to="{name : 'productpage' , params : {id : product.id}}">
          <img style="width: 220px;" :src="product.image" alt="">
        <h2> title  : {{ product.title }}</h2>
        <h2> Price  : {{ product.price }}</h2> 
      

          
         <button style="background-color: chartreuse; border-radius: 10px;height: 40px;padding: 10px; ">  افزودن به سبد خرید</button>
         </router-link>
      </div>
    </div> 
<!-- <h1 v-if="ProductsStore.object.length<1">loading ...</h1>
<h1 v-else>{{ ProductsStore.object[0].title }}</h1> -->
</template>


<script setup lang="ts">
  import { ref, onMounted } from 'vue'
import { productsStore } from '../../stores/product'
const ProductsStore = productsStore()
onMounted(() => {

  ProductsStore.readp()
})
</script>



<style>
.back{
  display: flex;
  justify-content: center;
 
}

.product{

  text-align: center;
  border-radius: 20px;
  text-decoration: none;
  text-align: center;
  
}

.product img{
  width: 250px;
}

</style>