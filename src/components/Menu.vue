<template>
  <nav class="navbar">
    <div class="nav-brand">Weimei</div>
    <ul class="navbar-nav">
      <li class="nav-item">
      <router-link class="nav-link" :to="{name:'GraphicDesign'}">Graphic design</router-link>
      </li>
      <li class="nav-item">
        <div class="nav-link" @click="isOpen = !isOpen">UIUX projects</div>
          <i class="fa fa-caret-down"></i>
      </li>
      <Dropdown :projects="projects" v-if="isOpen"/>
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
        isOpen:false,
        projects:[
          {
            id:1,
            projectTitle:"project1",
            link:"UIUX"
          },
          {
            id:2,
            projectTitle:"project2",
            link:"#"
          },
          {
            id:3,
            projectTitle:"project3",
            link:"#"
          },
          {
            id:4,
            projectTitle:"project4",
            link:"#"
          }
        ],
      }
    }
}
</script>

<style>
@import '../assets/css/style.css';
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);
</style>