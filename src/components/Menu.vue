<template>
  <nav class="navbar">
    <div class="nav-brand">
      <router-link :to="{name:'Intro'}">Weimei</router-link>
      <!-- <div class="burger">
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      </div> -->
    </div>
      
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" :to="{name:'GraphicDesign'}">Graphic Design</router-link>
      </li>
      <li class="nav-item" ref="menu" @click="openClose"><!-- @mouseover="isOpen=true" @mouseleave="isOpen=false" -->
        <div class="nav-link">UI UX<i class="fa fa-caret-down"></i></div>
        <Dropdown v-if="isOpen" />
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name:'Experience'}">Experience</router-link>
      </li>
    </ul> 
  </nav>     
</template>

<script>
import Dropdown from './Dropdown.vue';

export default {
    name:'Menu',
    components:{
      Dropdown
    },
    data(){ 
      return{
        isOpen: false,
      }
    },
    methods:{
      // slideIn(){
      //   const burger=document.querySelector('.burger');
      //   const navbar=document.querySelector('.navbar-nav');
      //   // const navlink=document.querySelector('.nav-item a');
      //   burger.addEventListener('click',()=>{
      //     navbar.classList.toggle('nav-active')
      //   })

      //   navlink.on("click", function(){
      //   navbar.hide();
      //   });
      // },
      openClose() {
      var _this = this
      const closeListerner = (e) => {

      if ( _this.catchOutsideClick(e, _this.$refs.menu ) )
      window.removeEventListener('click', closeListerner) , _this.isOpen = false
      }

      window.addEventListener('click', closeListerner)
      this.isOpen = !this.isOpen
      
      },
      catchOutsideClick(event, dropdown)  {

      // When user clicks menu — do nothing
      if( dropdown == event.target )
        this.isOpen = true

      // When user clicks outside of the menu — close the menu
      if (event.target !== dropdown && !dropdown.contains(event.target)) 
        this.isOpen = false
      }
      
    }
}
</script>

<style>
@import '../assets/css/style.css';
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);
</style>