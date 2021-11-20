<template>
  <uiuxDetail />
 
  <router-view/>  
  
</template>

<script>
// import Dropdown from '../components/Dropdown.vue';
import uiuxDetail from '../views/uiuxDetail.vue';
export default {
    name:'UIUX',
    components:{
      // Dropdown,
      uiuxDetail,
    }
}
</script>

<style>

</style>