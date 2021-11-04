<template>
   <p>{{this.$route.params.id}} </p>
  <Dropdown />
  <router-view/>  
  
</template>

<script>
import Dropdown from '../components/Dropdown.vue';
export default {
    name:'UIUX',
    components:{
      Dropdown,
    }
}
</script>

<style>

</style>