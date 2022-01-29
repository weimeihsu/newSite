<template>
  <div class="container">
    <Dropdown/>
    <!-- <div v-for="(item, index) in uiuxFB" :key="index"> -->
    <UiuxDetail/>
  </div>

</template>

<script>
import firedb from '../firebase/firebaseinit'
import Dropdown from '../components/Dropdown.vue'
import UiuxDetail from './UiuxDetail.vue'
export default {
  name: 'Uiux',
  components: {
    Dropdown,
    UiuxDetail
  },
  methods: {
  },
  created () {
    firedb.collection('uiux').get().then((snapshot) => {
      console.log(snapshot.docs)
    })
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
  margin: 60px auto 0;
}
</style>
