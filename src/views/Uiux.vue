<template>
  <section class="container" v-if="desktopView">
    <ul class="tabs-wrapper" ref="tabWrapper">
      <li v-for="(item, index) in uiuxFB" :key="index" class="tab-item" :class="{ activeItem: isActive === item.title }"  @click="selectTab(item)"><a>{{item.title}}</a></li>
    </ul>
    <div class="gallery" :style="{width:CalGalleryWidth+'px', marginLeft:CalGalleryLeft+'px'}" v-for="(img, index) in imgShow" :key="index"><img :src="img" alt=""></div>
  </section>

  <section class="mobile-container" v-else>
    <div v-for="(item, index) in uiuxFB" :key="index" class="mobile-gallery">
      <h4>{{item.title}}</h4>
      <img v-for="(imgs, imgindex) in item.img" :key="imgindex" :src="imgs">
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Uiux2',
  data () {
    return {
      // default selected: 'Dynamic Chart Design',
      desktopView: null,
      isActive: 'Dynamic Chart Design',
      imgShow: [],
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
    selectTab (item) {
      this.imgShow = item.img
      this.isActive = item.title
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
  mounted () {
    this.imgShow = this.$store.state.uiuxFB[0].img
  },
  computed: {
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
.gallery img{
  width: 100%;
  margin-bottom: 50px;
}
.mobile-gallery{
  margin-bottom: 20px;
}
.mobile-gallery img{
  max-width: 100%;
}
</style>
