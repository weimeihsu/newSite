<template>
  <section class="container" v-if="desktopView" ref="containerWidth">
    <Tabs :selected="selected" @selected="setSelected" :tabs="uiuxTabArray" ref="childData">
      <div v-for="(item, index) in uiuxFB" :key="index" :style="{width:CalGalleryWidth+'px', marginLeft:CalGalleryLeft+'px'}">
        <UiuxDetail :isSelected="selected === item.title "><img v-for="(imgs, imgindex) in item.img" :key="imgindex" :src="imgs"></UiuxDetail>
      </div>
    </Tabs>
  </section>
  <section class="mobile-container" v-else>
    <div v-for="(item, index) in uiuxFB" :key="index" class="mobile-gallery">
      <h4>{{item.title}}</h4>
      <img v-for="(imgs, imgindex) in item.img" :key="imgindex" :src="imgs">
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import Tabs from '../components/Tabs.vue'
import UiuxDetail from '../components/UiuxDetail.vue'
export default {
  name: 'Uiux',
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
  },
  mounted () {
    this.tabULwidth = this.$refs.childData.$data.tabWrapperWidth
    this.allWidth = this.$refs.containerWidth.clientWidth
  },
  computed: {
    ...mapGetters(['uiuxTabArray']),
    ...mapState(['uiuxFB']),
    CalGalleryWidth () {
      return this.allWidth - this.tabULwidth
    },
    CalGalleryLeft () {
      return this.tabULwidth
    }
  },
  created () {
    this.GET_UIUX()
    this.CheckScreen()
    window.addEventListener('resize', this.CheckScreen)
  },
  methods: {
    ...mapActions(['GET_UIUX']),
    setSelected (tab) {
      this.selected = tab
    },
    CheckScreen () {
      const ScreenWidth = window.innerWidth
      if (ScreenWidth > 744) {
        this.desktopView = true
        return
      }
      this.desktopView = false
    }
  }
}
</script>

<style scoped>
.container{
  position: relative;
  margin: 60px auto 0;
}
.mobile-container{
  width: 90%;
  margin: 80px auto 0;
  text-align: center;
}
.mobile-gallery{
  margin-bottom: 20px;
}
.mobile-gallery img{
  max-width: 100%;
}
</style>
