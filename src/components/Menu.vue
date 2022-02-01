<template>
<div class="fixed-wrapper">
<nav class="navbar">
    <div class="nav-brand">
      <router-link :to="{name:'Intro'}">@WeiMei.tw</router-link>
      <div class="burger" @click="ToggleDropdown">
      <svg viewBox="0 0 24 20" width="24" height="20" class="burger-line">
      <rect width="24" height="2"></rect>
      <rect y="9" width="24" height="2"></rect>
      <rect y="18" width="24" height="2"></rect>
      </svg>
      </div>
    </div>

    <ul class="navbar-nav" v-if="ShowDropdown">
      <li class="nav-item">
        <router-link class="nav-link" :to="{name:'GraphicDesign'}" @click="ToggleDropdown">Graphic Design</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name:'Uiux'}" @click="ToggleDropdown">UIUX</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name:'Experience'}" @click="ToggleDropdown">Experience</router-link>
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
      ShowDropdown: true
    }
  },
  computed: {
  },
  methods: {
    ToggleDropdown () {
      this.ShowDropdown = !this.ShowDropdown
    }
  }
}
</script>

<style>
@import '../assets/css/style.css';
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);

</style>
