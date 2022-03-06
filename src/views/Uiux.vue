<template>
  <section class="container" v-if="desktopView">
    <ul class="tabs-wrapper" ref="tabWrapper">
      <li v-for="(tab, index) in uiuxTabArray" :key="index" class="tab-item" :class="{ activeItem: isActive === tab }"  @click="selectTab(tab)"><a>{{tab}}</a></li>
    </ul>
    <div class="gallery" :style="{width:CalGalleryWidth+'px', marginLeft:CalGalleryLeft+'px'}">
      <div v-for="(item, index) in uiuxFB" :key="index" class="uiuxImg" :class="{ visible: isVisible === item.title }">
      <img v-for="(imgs, imgindex) in item.img" :key="imgindex" :src="imgs">
    </div>
    </div>
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
export default {
  name: 'Uiux2',
  data () {
    return {
      // selected: 'Single Sign On',
      desktopView: null,
      isActive: 'Single Sign On',
      isVisible: 'Single Sign On',
      tabUlWidth: null,
      galleryWidth: null,
      allWidth: null
    }
  },
  created () {
    this.GET_UIUX()
    this.CheckScreen()
    window.addEventListener('resize', this.CheckScreen)
  },
  methods: {
    ...mapActions(['GET_UIUX']),
    selectTab (tab) {
      this.isActive = tab
      this.isVisible = tab
    },
    CheckScreen () {
      const ScreenWidth = window.innerWidth
      if (ScreenWidth > 744) {
        this.desktopView = true
        return
      }
      this.desktopView = false
    }
  },
  computed: {
    ...mapGetters(['uiuxTabArray']),
    ...mapState(['uiuxFB']),
    CalGalleryLeft () {
      return this.tabUlWidth
    },
    CalGalleryWidth () {
      return this.allWidth - this.tabULwidth
    }
  },
  updated () {
    const ScreenWidth = window.innerWidth
    if (ScreenWidth > 744) {
      this.tabUlWidth = this.$refs.tabWrapper.clientWidth
      this.allWidth = this.$el.clientWidth
    } else {
      this.tabUlWidth = null
      this.allWidth = null
    }
  }
}
</script>

<style scoped>
.activeItem {
  border-bottom: #000000 1px solid;
}
.activeItem a{
  color: #000000;
}
.uiuxImg{
  display: none;
}
.visible{
  display: block;
}
.container{
  position: relative;
  margin: 60px auto 0;
}
.mobile-container{
  width: 90%;
  margin: 80px auto 0;
  text-align: center;
}
.uiuxImg img{
  width: 100%;
}
.mobile-gallery{
  margin-bottom: 20px;
}
.mobile-gallery img{
  max-width: 100%;
}
</style>
