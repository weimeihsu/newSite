<template>
<section class="container">
  <div class="slides" ref="slidesContainer">
    <div class="slideInnerContainer" :style="{width:innerWidth +'%', marginLeft: '-'+slideInnerMarginLeft+'%'}">
      <Slide :slides="slides"/>
    </div>
    <div class="pagination">
      <span @click="goPrev">Previous</span>
      <span v-for="(slide, index) in slides" :key="slide.id">{{index+1}}</span>
      <span @click="goNext">Next</span>
    </div>
  </div>
</section>
</template>

<script>
import Slide from './Slide.vue';
export default {
    name:'GraphicDesign',
    components:{
      Slide
    },
    data(){
      return{
        slides:[
          {
            id:1,
            title:'Event Flyer',
            src:require('@/assets/img/graphic-design/1.jpg'),
            alt:'nvidia gaming flyer'
          },
          {
            id:2,
            title:'Product Flyer',
            src:require('@/assets/img/graphic-design/2.jpg'),
            alt:'wintec module flyer'
          },
          {
            id:3,
            title:'Gaming Poster',
            src:require('@/assets/img/graphic-design/3.jpg'),
            alt:'Corsair Gaming Poster'
          }
        ],
        innerWidth:300,
        slideWidth:0,
        currentIndex:0,
      }
    },
    methods:{
      goPrev(){
        if(this.currentIndex===0){
          return
        }
        this.currentIndex--
      },
      goNext(){
        if(this.currentIndex===this.slides.length-1){
          return
        }
        this.currentIndex++
      }
    },
    computed:{
      slideInnerMarginLeft(){
        return this.currentIndex * this.slideWidth
      }
    },
    
    props:{
      // itemsPerslide:{
      //   type:null,
      //   default:1
      // }
    },
    attached(){
        let slideWidth = this.$el.clientWidth/2
    }
}
</script>

<style scoped>
.slides{
  overflow: hidden;
}
.slideInnerContainer{
  transition: margin 0.4s ease-out;
}
</style>

