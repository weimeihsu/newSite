<template>
<div class="fixed-wrapper">
<nav class="navbar">
    <div class="nav-brand">
      <router-link :to="{name:'Intro'}">@WeiMei.tw</router-link>
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
      <li class="nav-item">
        <router-link class="nav-link" :to="{name:'Uiux'}">UIUX</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name:'Experience'}">Experience</router-link>
      </li>
    </ul>
  </nav>
</div>
</template>

<script>
// import Dropdown from './Dropdown.vue';

export default {
  name: 'Menu',
  components: {
    // Dropdown
  },
  data () {
    return {
      menu: []
    }
  }
}
</script>

<style>
@import '../assets/css/style.css';
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);

</style>
