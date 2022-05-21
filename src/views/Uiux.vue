<template>
  <section class="container" v-if="desktopView">
    <ul class="tabs-wrapper" ref="tabWrapper">
      <li v-for="(item, index) in uiuxFB" :key="index" class="tab-item" :class="{ activeItem: isActive === item.title }"  @click="selectTab(item)"><a>{{item.title}}</a></li>
    </ul>
    <div class="uiuxImg" :style="{width:CalGalleryWidth+'px', marginLeft:CalGalleryLeft+'px'}"><div v-if="mediaType === 'img'"><img v-for="(img, index) in imgShow" :key="index" :src="img" alt=""></div>
    <div v-if="mediaType === 'vdo'"><a href="https://firebasestorage.googleapis.com/v0/b/my-vue-8743f.appspot.com/o/vdo%2F%E2%96%B6%20Prototype%20-%20App%20Studio.mp4?alt=media&token=5f4ac1b5-2a4c-400f-a5b5-6394d6b2bfa4" target="_blank" class="thumb"><img src="https://firebasestorage.googleapis.com/v0/b/my-vue-8743f.appspot.com/o/uiuxImage%2F0.intro.png?alt=media&token=6f4a98f3-4da2-498f-9c44-174511231f72"></a></div>
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
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Uiux',
  data () {
    return {
      // default selected: 'Dynamic Chart Design',
      desktopView: null,
      isActive: 'Dynamic Chart Design',
      imgShow: ['https://firebasestorage.googleapis.com/v0/b/my-vue-8743f.appspot.com/o/uiuxImage%2Fcharts.png?alt=media&token=62b334e2-7b8b-4495-ae98-98a4ff1a9ac3', 'https://firebasestorage.googleapis.com/v0/b/my-vue-8743f.appspot.com/o/uiuxImage%2Fchart%20property.jpg?alt=media&token=bc344ea3-3285-49d5-90e2-b89faf3a4e37'],
      ulWidth: 0,
      allWidth: 0,
      mediaType: 'img'
    }
  },
  created () {
    this.GET_UIUX()
    this.CheckScreen()
    window.addEventListener('resize', this.CheckScreen)
  },
  methods: {
    ...mapActions(['GET_UIUX']),
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
      this.mediaType = item.media
    }
  },
  computed: {
    ...mapState(['uiuxFB']),
    CalGalleryLeft () {
      return this.ulWidth
    },
    CalGalleryWidth () {
      return this.allWidth - this.ulWidth
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
  border-bottom: #000000 1px solid;
}
.activeItem a{
  color: #000000;
}
.uiuxImg img{
  max-width: 100%;
  margin-bottom: 50px;
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
