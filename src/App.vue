<template>
  <div>
    <button @click="toggleChange">click to open popup</button>
    <div v-if="show" >
      <HelloWorld @close="toggleChange">
        <p>Slut template</p>
      </HelloWorld>
    </div>
    <button @click="start" :disabled="isPlaying">play</button>
    <Modal v-if="isPlaying" :delay="delay"/>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Modal
  },
  data(){
    return{
      show: false,
      isPlaying: false,
      delay: null
    }
  },
  methods:{
    toggleChange(){
      this.show=!this.show
    },
    start(){
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      console.log(this.delay)
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
