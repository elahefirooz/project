<template>
  <div class="background">
    <!-- <div> <router-link to="/city" class="a">شهر </router-link></div> -->
    <div class="row-1">

      <div class="dropdown">
      <button class="dropbtn" style="margin: 0px 5px">انتخاب شهر</button>

      <div class="dropdown-content">
        <router-link to="/tehran">تهران</router-link>

        <router-link to="/kerman">کرمان</router-link>

        <router-link to="/shiraz">شیراز</router-link>

        <router-link to="/kermanshah">کرمانشاه</router-link>

        <router-link to="/gorgan">گرگان</router-link>

        <router-link to="/rasht">رشت</router-link>

        <router-link to="/bojnoord">بجنورد</router-link>

        <router-link to="/kashan">کاشان</router-link>

        <router-link to="/ghazvin">قزوین</router-link>

        <router-link to="/hamedan">همدان</router-link>

        <router-link to="/booshehr">بوشهر</router-link>

        <router-link to="/gholbahar">گلبهار-چناران</router-link>

        <router-link to="/molkabad">ملک آباد-بینالود</router-link>

        <router-link to="/yazd">یزد</router-link>

        <router-link to="/karaj">کرج</router-link>

        <router-link to="/oroomieh">ارومیه</router-link>

        <router-link to="/tabriz">تبریز</router-link>

        <router-link to="/qom">قم</router-link>

        <router-link to="/zahedan">زاهدان</router-link>

        <router-link to="/yasooj">یاسوج</router-link>

        <router-link to="/lavasan">لواسان</router-link>

        <router-link to="/arak">اراک</router-link>

        <router-link to="/sari">ساری</router-link>

        <router-link to="/birjand">بیرجند</router-link>

        <router-link to="/ghachsaran">گچساران</router-link>

        <router-link to="/shandiz">طرقبه-شاندیز</router-link>

        <router-link to="/esfahan">اصفهان</router-link>

        <router-link to="/mashhad">مشهد</router-link>

        <router-link to="/ahvaz">اهواز</router-link>

        <router-link to="/sanandaj">سنندج</router-link>

        <router-link to="/bandar">بندرعباس</router-link>

        <router-link to="/semnan">سمنان</router-link>

        <router-link to="/shahrkord">شهرکرد</router-link>

        <router-link to="/ilam">ایلام</router-link>

        <router-link to="/ardebil">اردبیل</router-link>

        <router-link to="/zanjan">زنجان</router-link>

        <router-link to="/khoramabad">خرم آباد</router-link>

        <router-link to="/dehdasht">دهدشت</router-link>

        <router-link to="/fariman">فریمان</router-link>
      </div>
    </div>

    <div style="margin-left: 100px ">
      <router-link to="/call" class="s"> تماس با ما 2418-021 , 91092080-021 </router-link>

    </div>
    <div class="dropdown">
      <button class="dropbtn" style="background-color: rgb(0,0,0,0);">راهنما و خدمات</button>
      <div class="dropdown-content">
        <router-link to="/list">فهرست تولید کننده</router-link>
        <router-link to="/lastproduct">اخرین محصولات مشاهده شده</router-link>
        <router-link to="/zargam">زرگام چیست؟</router-link>
        <router-link to="/a&q">پرسش وپاسخ های متداول</router-link>
        <router-link to="/pv">حریم خصوصی مقررات</router-link>
      </div>
    </div>
    <div style="margin: 0px 30px;height: 100px"><router-link to="/news" class="a">اخبار</router-link></div>
    <div style="margin: 0px 30px"><router-link to="/blog" class="a"> بلاگ</router-link></div>
    <div style="margin: 0px 30px">
      <router-link to="/link" class="a"> دریافت لینک اپلیکیشن</router-link>
    </div>
    <div style="margin: 0px 30px">
      <router-link to="/buy" class="a"> درخواست خرید اقساطی</router-link>
    </div>
    <div style="margin: 0px 30px">
      <router-link to="/login" class="a"> ورودبه حساب کاربری </router-link>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg> -->
</div>
    </div>
    

    
    <div class="search">
      <img style="width: 256px;" src="../../public/bazargam.png" alt="">
      <input style="height: 32px; width: 400px; border-radius: 10px; border: 2px solid #000;" type="search" name="" id="" placeholder="    جست وجو" v-model="textSearch" @keyup="search(textSearch)"  >
      
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
  
    </div>
  
    <div class="all-product">
      
      <div style="margin: 0px 10px;" ><router-link to="/allproduct" class="a">کل محصولات</router-link></div>
      <div ><router-link to="/Discount" class="a">تخفیفات ویژه</router-link></div>
      <div class="dropdown">
        <button class="dropbtn">کالای دیجیتال</button>
        <div class="dropdown-content">
          <router-link to="/phone">تلفن</router-link>
          <router-link to="/mobile"> موبایل</router-link>
          <router-link to="/hedset">هدفون</router-link>
          <router-link to="/smartwhatch">ساعت هوشمند</router-link>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">اقلام غیر خوراکی</button>
        <div class="dropdown-content">
          <router-link to="/pen">لوازم تحریر</router-link>
          <router-link to="/makeup">آرایشی وبهداشتی</router-link>
          <router-link to="/home">خانه و آشپزخانه</router-link>
          <router-link to="/washer">شوینده</router-link>
        </div>
      </div>
    
      <div class="dropdown">
        <button class="dropbtn">نان</button>
        <div class="dropdown-content">
          <router-link to="/bread">نان</router-link>
        </div>
      </div>
      
      <div class="dropdown">
        <button class="dropbtn">محصولات تنظیم بازار</button>
        <div class="dropdown-content">
          <router-link to="/shopping">اقلام تنظیم بازار</router-link>
          
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">اقلام خوراکی</button>
        <div class="dropdown-content">
          <router-link to="/protein">پروتئین</router-link>
          <router-link to="/Beverages">نوشیدنی</router-link> 
          <router-link to="/Dairy">لبنیات</router-link>
          <router-link to="/Snacks">تنقلات</router-link>
          <router-link to="/Snacks">خواربار</router-link>
          <router-link to="/Canned food and prepared food">کنسرو  و غذای آماده</router-link>
          <router-link to="/Seasoning and spices">چاشنی و ادویه</router-link>
          <router-link to="/Tea and tea">چای و دمنوش</router-link>
          <router-link to="/Chocolate dessert and sweets">دسر شکلات و شیرینی جات </router-link>
        </div>
      </div>




    </div>
  </div>


  <div class="storesearch" v-for="x in searchProduct" :key="x.id">
    <img style="width: 70px; height: 70px;" :src="x.src" alt="" >
  <h3 style="margin: 30px;"  v-if="textSearch">{{ x.title }}</h3>
  <h3 style="margin: 30px;"  v-if="textSearch">{{ x.weight }}</h3>
  <h3  style="margin: 30px;" v-if="textSearch">{{ x.price }}</h3>
 
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from "vue";
import { productsStore } from "../../stores/product";
const ProductsStore = productsStore();
let textSearch = ref('');



let searchProduct: Ref<{
    id: number;
    title: string;
    weight: string;
    src: string;
    price: string;
}[]>



function search(text : string)  {
  
    searchProduct =  ProductsStore.products.filter( (p:any) => p.title.includes(text) );
}

</script>

<style>
.s{
  color: black;
  text-decoration: none;
  font-size: large;
  height: fit-content;
}
 .s:hover{
  color: red;
  transition: 0.16s;
}
.a {

  color: black;
  text-decoration: none;
  height: fit-content;
}

.a:hover {
  color: red;
  transition: 0.16s;
}

.dropbtn {
  background-color: #f6f0f7;
  color: rgb(10, 2, 2);
  padding: 5px;
  font-size: 15px;
  border: none;
  border-radius: 10px;
}


.dropdown {
  position: relative;
  display: inline-block;
  height: fit-content;
  margin: 0px 10px;
  width: fit-content;
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgb(209, 213, 216);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}


.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.background {
  direction: rtl;
  background-image: url('../../public/backg.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 30px;
}

.search{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 30px;
}


.row-1{
  display: flex;
  justify-content: center;
}


.dropdown-content a:hover {
  background-color: #ddd;
}


.dropdown:hover .dropdown-content {
  display: block;
}


.dropdown:hover .dropbtn {
  background-color: #efe6ec;
}

.x {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.all-product {
  display: flex;
  justify-content: center;
}
.bi{
  margin:50px ;
}
.storesearch{
  display: flex;
 justify-content: right;
 direction: rtl;
}
</style>