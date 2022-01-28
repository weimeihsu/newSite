<template>
  <div class="container">
    <Dropdown/>
    <!-- <div v-for="(item, index) in uiuxFB" :key="index"> -->
    <UiuxDetail/>
    <!-- :uiuxItem="item" -->
    <!-- <router-view/>  -->
  </div>

</template>

<script>
// import { mapState, mapActions } from 'vuex'
import Dropdown from '../components/Dropdown.vue'
import UiuxDetail from './UiuxDetail.vue'
export default {
  name: 'Uiux',
  components: {
    Dropdown,
    UiuxDetail
  }
  // computed: {
  //   ...mapState(['uiuxFB'])
  // },
  // created () {
  //   this.GET_UIUX()
  // },
  // methods: {
  //   ...mapActions(['GET_UIUX'])
  // }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
  margin: 60px auto 0;
}
</style>
