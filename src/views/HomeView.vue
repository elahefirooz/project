<script setup lang="ts">
import Prodect from '../components/Prodect.vue'
import Call from '../components/Call.vue'
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main> 
     <div class="image-back">
      <img  src="../../public/noroz1402baner.png" alt="">
      <img src="../../public/ghest.png" alt="">
      
    </div> 
  </main>
   
  <Prodect/>
</template>


<style>
.image-back{
  
  padding: 10px;

}

.image-back img{
  border-radius: 10px;
  margin: 10px;
  /* position: relative;
  left: 69%; */
}
</style>
