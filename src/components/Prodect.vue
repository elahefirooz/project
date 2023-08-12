<template>
  <div class="back">
    <div class="product" v-for="fruit in fruits" :key="fruit.name">
      <img :src="fruit.img" alt="">
    <h3>{{ fruit.name }}</h3>
    <h4>{{ fruit.weight }}</h4>
    <h4>{{ fruit.price }}</h4>
    <button style="background-color:chartreuse; border: none; border-radius: 5px; height: 30px;">افزودن به سبد خرید</button>   
  </div>
  </div>
</template>

<script lang="ts">

export default {
  data() {
    return{
      fruits :[
        {img :"../../public/-80-.jpg",name : 'آلبالو خشکه' ,weight : 'sdf' , price : 890000 },
        {img :"../../public/-330-.jpg",name : 'نوشابه کوکاکولا قوطی' ,weight : '330سی سی' , price : 190000 },
        {img :"../../public/-200-.jpg",name : 'نکتار انار یک و یک ی' ,weight : '200 میلی لیتری' , price :103000 },
        {img :"../../public/-60-.jpg",name : ' پاپ کرن کچاپ متوسط مزپف مزمز ',weight : '60 گرمی' , price : 128000 },
        {img :"../../public/-65-.jpg",name : 'چیپس برگه ای کچاپ مزمز' ,weight : ' 65 گرمی' , price : 890000 },
        
      ]
   
    
    }
  }
}
</script>


<style>
.back{
  display: flex;
  justify-content: center;
}

.product{
  border: 2px solid rgb(151, 208, 224);
  text-align: center;
}

.product img{
  width: 250px;
}
.foot1{

}
</style>