<template>
  <div class="gallery" v-for="(item, index) in uiuxFB" :key="index">
     <img v-for="(imgs, index) in item.img" :key="index" :src="imgs" :alt="item.title" />
      <p>this is paramater id {{item.id}} </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'UiuxDetail',
  // props: ['uiuxItem'],
  computed: {
    ...mapState(['uiuxFB'])
  },
  created () {
    this.GET_UIUX()
  },
  methods: {
    ...mapActions(['GET_UIUX'])
  }
}
</script>
<style scoped>
img{
  max-width: 100%;
}
</style>
