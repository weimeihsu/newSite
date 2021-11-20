<template>
<div class="dropdown-wrapper">
    <div v-for="(li, index) in dropdown" :key="index"  class="dropdown-item" >
        <router-link class="dropdown-link" :to="{path:li.path}">{{li.title}}</router-link>
    </div>
    
</div>
</template>

<script>
export default {
  name:'Dropdown',
  data(){
    return{}
  },
  computed:{
    dropdown(){
        return this.$store.state.uiuxImages
      }
  },
}
</script>
