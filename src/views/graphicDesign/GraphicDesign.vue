<template>
<section class="gallery flex-center" v-if="desktopView">
  <div class="pagination">
    <button @click="goPrev" :class="{disabled: isDisable}" class="arrow">
      <svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg>
    </button>
    <button @click="goNext" :class="{disabled: isDisable}" class="arrow"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180) "></path></svg></button>
  </div>

  <div class="slides" :style="{with:slidesWidth+'px'}">
    <div class="slideInnerContainer" :style="{width:slideInnerWidth +'px',marginLeft: '-' + slideInnerMarginLeft + 'px'}">
      <div class="slide" :style="{width:slideWidth +'px'}" v-for="(slide, index) in graphicDesignFB" :key="index">
        <Slide :slideitem="slide"/>
      </div>
    </div>
  </div>
</section>
<section class="mobile-gallery" v-else>
  <div class="mobile-graphics" v-for="(slide, index) in graphicDesignFB" :key="index">
     <img :src="slide.img" :alt="slide.title" />
  </div>
</section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Slide from './Slide.vue'
export default {
  name: 'GraphicDesign',
  components: {
    Slide
  },
  data () {
    return {
      isDisable: false,
      innerWidth: 0,
      slideWidth: 0,
      currentIndex: 0,
      desktopView: null
    }
  },
  created () {
    this.GET_GRAPHIC_DESIGN()
    this.CheckScreen()
    window.addEventListener('resize', this.CheckScreen)
  },
  methods: {
    CheckScreen () {
      const ScreenWidth = window.innerWidth
      if (ScreenWidth > 744) {
        this.desktopView = true
        return
      }
      this.desktopView = false
    },
    goPrev () {
      if (this.currentIndex === 0) {
        return { isDisable: true }
      }
      this.currentIndex--
    },
    goNext () {
      if (this.currentIndex === this.$store.state.slidesLength - 1) {
        return {
          isDisable: true
        }
      }
      this.currentIndex++
    },
    goSlideIndex (index) {
      this.currentIndex = index
    },
    ...mapActions(['GET_GRAPHIC_DESIGN'])
  },
  computed: {
    slideInnerMarginLeft () {
      return this.currentIndex * this.slideWidth
    },
    slideInnerWidth () {
      return this.slideWidth * this.$store.state.slidesLength
    },
    slidesWidth () {
      return this.slideWidth
    },
    ...mapState(['graphicDesignFB'])
  },
  mounted () {
    this.slideWidth = this.$el.clientWidth
  }
}
</script>

<style scoped>
.gallery{
  margin: 100px auto 0;
  position: relative;
}
.mobile-gallery{
  margin: 80px auto 0;
  width: 90%;
}
.slides{
  overflow: hidden;
  width: 100%;
}
.slide{
    display: flex;
    justify-content: center;
}
.slide img{
    max-height: calc(100vh - 150px);
    max-width: 100vw;
}
.slideInnerContainer{
  transition: margin 0.4s ease-out;
  display: flex;
}
.pagination{
  position: absolute;
  top: 40%;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.arrow{
  border: none;
  margin: 20px;
  cursor: pointer;
  width: 61px;
  height: 61px;
  border-radius: 50%;
  background: #fafbfc;
  opacity: .8;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 20%);
  top: 40%;
}
.arrow:hover{
  opacity: 1;
}
.arrow svg{
  height: 1rem;
  width: 1rem;
  fill:#ced2d6;
}
.disabled{
  color: #cccccc;
}
.mobile-graphics img{
  max-width: 100%;
  margin-bottom: 10px;
}

</style>
