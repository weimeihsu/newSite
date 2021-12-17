<template>
  <div class="container">
    <UiuxDetail />
    <!-- <router-view/>  -->
  </div>  

   
  
</template>

<script>
// import Dropdown from '../components/Dropdown.vue';
import UiuxDetail from './UiuxDetail.vue';
export default {
    name:'Uiux',
    components:{
      // Dropdown,
      UiuxDetail,
    }
}
</script>

<style>
</style>