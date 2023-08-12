<template>
  <div class="background">
    <!-- <div> <router-link to="/city" class="a">شهر </router-link></div> -->
    <div class="row-1">

      <div class="dropdown">
      <button class="dropbtn" style="margin: 0px 5px">انتخاب شهر</button>

      <div class="dropdown-content">
        <router-link to="/new">تهران</router-link>

        <router-link to="/new">کرمان</router-link>

        <router-link to="/new">شیراز</router-link>

        <router-link to="/new">کرمانشاه</router-link>

        <router-link to="/new">گرگان</router-link>

        <router-link to="/new">رشت</router-link>

        <router-link to="/new">بجنورد</router-link>

        <router-link to="/new">کاشان</router-link>

        <router-link to="/new">قزوین</router-link>

        <router-link to="/new">همدان</router-link>

        <router-link to="/new">بوشهر</router-link>

        <router-link to="/new">گلبهار-چناران</router-link>

        <router-link to="/new">ملک آباد-بینالود</router-link>

        <router-link to="/new">یزد</router-link>

        <router-link to="/new">کرج</router-link>

        <router-link to="/new">ارومیه</router-link>

        <router-link to="/new">تبریز</router-link>

        <router-link to="/new">قم</router-link>

        <router-link to="/new">زاهدان</router-link>

        <router-link to="/new">یاسوج</router-link>

        <router-link to="/new">لواسان</router-link>

        <router-link to="/new">اراک</router-link>

        <router-link to="/new">ساری</router-link>

        <router-link to="/new">بیرجند</router-link>

        <router-link to="/new">گچساران</router-link>

        <router-link to="/new">طرقبه-شاندیز</router-link>

        <router-link to="/new">اصفهان</router-link>

        <router-link to="/new">مشهد</router-link>

        <router-link to="/new">اهواز</router-link>

        <router-link to="/new">سنندج</router-link>

        <router-link to="/new">بندرعباس</router-link>

        <router-link to="/new">سمنان</router-link>

        <router-link to="/new">شهرکرد</router-link>

        <router-link to="/new">ایلام</router-link>

        <router-link to="/new">اردبیل</router-link>

        <router-link to="/new">زنجان</router-link>

        <router-link to="/new">خرم آباد</router-link>

        <router-link to="/new">دهدشت</router-link>

        <router-link to="/new">فریمان</router-link>
      </div>
    </div>

    <div style="margin-right: 30px ">
      <router-link to="/call" class="a"> تماس با ما 021-2418 </router-link>
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
    </div>
    <div class="dropdown">
      <button class="dropbtn">راهنما و خدمات</button>
      <div class="dropdown-content">
        <router-link to="/new">فهرست تولید کننده</router-link>
        <router-link to="/new">اخرین محصولات مشاهده شده</router-link>
        <router-link to="/new">زرگام چیست؟</router-link>
        <router-link to="/new">پرسش وپاسخ های متداول</router-link>
        <router-link to="/new">حریم خصوصی مقررات</router-link>
      </div>
    </div>
    </div>
    


    <div class="search">
      <img style="width: 256px;" src="../../public/bazargam.png" alt="">
      <input style="height: 32px; width: 400px;" type="search" name="" id="">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
    </div>
    

    
    <div class="all-product">
      
      <div style="margin: 0px 10px;" ><router-link to="/news" class="a">کل محصولات</router-link></div>
      <div ><router-link to="/news" class="a">تخفیفات ویژه</router-link></div>
      <div class="dropdown">
        <button class="dropbtn">کالای دیجیتال</button>
        <div class="dropdown-content">
          <router-link to="/new">تلفن</router-link>
          <router-link to="/new">lموبایل</router-link>
          <router-link to="/new">هدفون</router-link>
          <router-link to="/new">ساعت هوشمند</router-link>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">اقلام غیر خوراکی</button>
        <div class="dropdown-content">
          <router-link to="/new">لوازم تحریر</router-link>
          <router-link to="/new">آرایشی وبهداشتی</router-link>
          <router-link to="/new">خانه و آشپزخانه</router-link>
          <router-link to="/new">شوینده</router-link>
        </div>
      </div>
    
      <div class="dropdown">
        <button class="dropbtn">نان</button>
        <div class="dropdown-content">
          <router-link to="/new">نان</router-link>
        </div>
      </div>
      
      <div class="dropdown">
        <button class="dropbtn">محصولات تنظیم بازار</button>
        <div class="dropdown-content">
          <router-link to="/new">اقلام تنظیم بازار</router-link>
          
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">اقلام خوراکی</button>
        <div class="dropdown-content">
          <router-link to="/new">پروتئین</router-link>
          <router-link to="/new">نوشیدنی</router-link> 
          <router-link to="/new">لبنیات</router-link>
          <router-link to="/new">تنقلات</router-link>
          <router-link to="/new">خواربار</router-link>
          <router-link to="/new">کنسرو  و غذای آماده</router-link>
          <router-link to="/new">چاشنی و ادویه</router-link>
          <router-link to="/new">چای و دمنوش</router-link>
          <router-link to="/new">دسر شکلات و شیرینی جات </router-link>
        </div>
      </div>




    </div>
    
    
    
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style>
.a {
  /* background-color: rgb(215, 189, 239); */
  /* padding: 50px; */
  /* text-decoration: none; */
  /* border-radius:20px ; */
  
  /* align-items: center;
  align-content: center; */
  color: black;
  text-decoration: none;
  /* margin: 10px 20px 10px 20px; */
  height: fit-content;
}

.a:hover {
  color: red;
  transition: 0.16s;
}
/* Dropdown Button */
.dropbtn {
  background-color: #b88bbe;
  color: rgb(10, 2, 2);
  padding: 5px;
  font-size: 15px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  height: fit-content;
  margin: 0px 10px;
  width: fit-content;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #4aede2;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
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


/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
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
</style>