<template>
  <section class="container">
   <Tabs/><UiuxDetail/>
   <p>view{{ $route.params.id }}</p>
  </section>
</template>

<script>
// import { mapGetters, mapState, mapActions } from 'vuex'
import Tabs from '../components/Tabs.vue'
import UiuxDetail from '../components/UiuxDetail.vue'
export default {
  name: 'UiuxRetired',
  components: {
    Tabs, UiuxDetail
  },
  data () {
    return {
      selected: 'Single Sign On',
      desktopView: null,
      tabULwidth: null,
      allWidth: null
    }
  }
}
</script>

<style scoped>
.container{
  position: relative;
  margin: 60px auto 0;
}
/* .mobile-container{
  width: 90%;
  margin: 80px auto 0;
  text-align: center;
}
.mobile-gallery{
  margin-bottom: 20px;
}
.mobile-gallery img{
  max-width: 100%;
} */
</style>
