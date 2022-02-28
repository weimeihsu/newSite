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
    <ul class="navbar-nav" v-show="ShowDropdown">
      <li class="nav-item" v-for="(menuItem, index) in menu" :key="index">
        <router-link class="nav-link" :to="{name:menuItem.goto}" @click="ToggleDropdownNavItem"><span :class="menuItem.icon"></span><span class="text">{{menuItem.text}}</span></router-link>
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
      ShowDropdown: null,
      menu: [
        {
          goto: 'GraphicDesign',
          text: 'Graphic Design',
          icon: 'icon-icon_graphic-design'
        },
        {
          goto: 'Uiux',
          text: 'UIUX',
          icon: 'icon-icon_uiux'
        },
        {
          goto: 'More',
          text: 'And More',
          icon: 'icon-icon_more'
        },
        {
          goto: 'Experience',
          text: 'Since 2010',
          icon: 'icon-icon_experience'
        }
      ]
    }
  },
  created () {
    this.CheckScreen()
    window.addEventListener('resize', this.CheckScreen)
  },
  methods: {
    ToggleDropdown () {
      this.ShowDropdown = !this.ShowDropdown
    },
    ToggleDropdownNavItem () {
      const ScreenWidth = window.innerWidth
      if (ScreenWidth <= 744) {
        this.ShowDropdown = !this.ShowDropdown
        return
      }
      this.ShowDropdown = true
    },
    CheckScreen () {
      const ScreenWidth = window.innerWidth
      if (ScreenWidth > 744) {
        this.ShowDropdown = true
        return
      }
      this.ShowDropdown = false
    }
  }
}
</script>

<style>
@import '../assets/css/style.css';
@import '../assets/css/fontstyle.css';

.active .text, .router-link-active .text{
  display: block;
}

</style>
