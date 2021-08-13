<template>
  <div>
    <HelloWorld />
  </div>
  <div>
    <button @click="toggleChange">
      <span v-if="!show">Show</span>
      <span v-if="show">Hide</span>
    </button>
    <p v-if="show" >this is the toggle paragraph.</p>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      show: true,
    }
  },
  methods:{
    toggleChange(){
      this.show=!this.show
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
