<template>
  <section class="container" v-if="desktopView">
    <ul class="tabs-wrapper" ref="tabWrapper">
      <span class="label">User Interface</span>
      <li v-for="(item, index) in uiFB" :key="index" class="tab-item" :class="{ activeItem: activeTab === item.title }"  @click="selectTab(item)"><a>{{item.title}}</a></li>
      <span class="label">User Journey</span>
      <li v-for="(item, index) in uxFB" :key="index" class="tab-item" :class="{ activeItem: activeTab === item.title }"  @click="selectTab(item)"><a>{{item.title}}</a></li>
    </ul>
    <div class="uiuxImg" :style="{width:CalGalleryWidth+'px', marginLeft:CalGalleryLeft+'px'}"><img v-for="(img, index) in activeImages" :key="index" :src="img">
    </div>
  </section>

  <section class="mobile-container" v-else>
    <div v-for="(item, index) in uiFB" :key="index" class="mobile-gallery">
      <h4>{{item.title}}</h4>
      <img v-for="(imgs, imgindex) in item.img" :key="imgindex" :src="imgs">
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Uiux',
  data () {
    return {
      // default selected: 'UI Style Guide',
      desktopView: null,
      isActive: '',
      imgShow: [],
      ulWidth: 0,
      allWidth: 0
    }
  },
  created () {
    this.GET_UI()
    this.GET_UX()
    this.CheckScreen()
    window.addEventListener('resize', this.CheckScreen)
  },
  methods: {
    ...mapActions(['GET_UI', 'GET_UX']),
    CheckScreen () {
      const ScreenWidth = window.innerWidth
      if (ScreenWidth > 744) {
        this.desktopView = true
        return
      }
      this.desktopView = false
    },
    selectTab (item) {
      this.isActive = item.title
      this.imgShow = item.img
    }
  },
  computed: {
    ...mapState(['uiFB', 'uxFB']),
    CalGalleryLeft () {
      return this.ulWidth
    },
    CalGalleryWidth () {
      return this.allWidth - this.ulWidth
    },
    activeTab () {
      if (this.isActive === '') {
        return this.uiFB[0].title
      } else {
        return this.isActive
      }
    },
    activeImages () {
      if (this.isActive === '') {
        return this.uiFB[0].img
      } else {
        return this.imgShow
      }
    }
  },
  mounted () {
    const ScreenWidth = window.innerWidth
    if (ScreenWidth > 744) {
      this.ulWidth = this.$refs.tabWrapper.clientWidth
      this.allWidth = this.$el.clientWidth
    } else {
      this.ulWidth = null
      this.allWidth = null
    }
  },
  updated () {
    const ScreenWidth = window.innerWidth
    if (ScreenWidth > 744) {
      this.ulWidth = this.$refs.tabWrapper.clientWidth
      this.allWidth = this.$el.clientWidth
    } else {
      this.ulWidth = null
      this.allWidth = null
    }
  }
}
</script>

<style scoped>
.activeItem {
  border-left: #000000 2px solid;
}
.activeItem a{
  color: #000000;
}
.uiuxImg{
  margin-top: 61px;
}
.uiuxImg img{
  max-width: 100%;
  margin-bottom: 30px;
}
.thumb img{
    margin: 10px;
    padding: 10px;
    border: 1px solid transparent;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
}
.thumb img:hover{
  cursor: pointer;
  border: 1px solid #cccccc;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
}

.label{
  font-size: 12px;
  font-weight: 700;
  color: #000000;
  padding: 10px;
  border-top: 1px dashed #808080;
  width: 100%;
  display: block;
}
.visible{
  display: block;
}
.container{
  position: relative;
  margin:0 auto;
  padding: 0;
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
