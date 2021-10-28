<template>
<section class="container flex-center">
  <div class="pagination">
    <span @click="goPrev"><i class="fa fa-angle-left" :class="{disabled: isDisable}"></i></span>
    <span @click="goSlideIndex(index)" v-for="(slide, index) in slides" :key="slide.id" class="number" :class="[index===currentIndex ? 'current':'']" >{{index+1}}</span>
    <span @click="goNext"><i class="fa fa-angle-right"></i></span>
  </div>
  <div class="slides">
    <div class="slideInnerContainer" :style="{width:slideInnerWidth +'px',marginLeft: '-' + slideInnerMarginLeft + 'px'}">
      <Slide :slides="slides"/>
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
            title:'Gaming Product',
            src:require('@/assets/img/graphic-design/3.jpg'),
            alt:'Corsair Gaming Product'
          },
          {
            id:4,
            title:'Wintec Flash Insert Card',
            src:require('@/assets/img/graphic-design/4.jpg'),
            alt:'Wintec Flash Insert Card'
          },
          {
            id:5,
            title:'NVIDIA Annual end dinner invitation',
            src:require('@/assets/img/graphic-design/annual-dinner.jpg'),
            alt:'NVIDIA Annual end dinner invitation'
          },
          {
            id:6,
            title:'NVIDIA Chinese New Year Wallpaper',
            src:require('@/assets/img/graphic-design/cny.jpg'),
            alt:'NVIDIA Chinese New Year Wallpaper'
          },
          {
            id:7,
            title:'Corsair Event Pin Designe',
            src:require('@/assets/img/graphic-design/7.jpg'),
            alt:'Corsair Event Pin Designe'
          },
          {
            id:8,
            title:'Rabbit Brand Logo Design',
            src:require('@/assets/img/graphic-design/rabbit.png'),
            alt:'Rabbit Brand Logo Design'
          },
          {
            id:9,
            title:'Corsair Wallpaper',
            src:require('@/assets/img/graphic-design/Robot_w.jpg'),
            alt:'Corsair Wallpaper'
          },
          {
            id:12,
            title:'Wintec Module Packaging',
            src:require('@/assets/img/graphic-design/12.jpg'),
            alt:'Wintec Module Packaging'
          }
        ],
        isDisable:false,
        innerWidth:0,
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
          return {
            isDisable:true
          }
        }
        this.currentIndex++
      },
      goSlideIndex(index){
        this.currentIndex = index
      }
    },
    computed:{
      slideInnerMarginLeft(){
        return this.currentIndex * this.slideWidth
      },
      slideInnerWidth(){
        return this.slideWidth * this.slides.length
      }
    },
    mounted(){
      this.slideWidth = this.$el.clientWidth
    },
    // attached(){
    //    let slideWidth = this.$el.clientWidth
    //    this.$set('slideWidth', slideWidth)
    //    this.$set('innerWidth', slideWidth * this.slides.length)
    // }
}
</script>

<style scoped>
.slides{
  overflow: hidden;
  max-width: 100%;
}
.slideInnerContainer{
  transition: margin 0.4s ease-out;
  display: flex;
}
.pagination{
  margin-bottom: 10px;
  margin-top: 1px;
}
.pagination span{
  cursor: pointer;
}
.number{
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  border: 1px solid #eaecef;
}
.current{
  color: #ffffff;
  background: #808080;
}
.disabled{
  color: #cccccc;
}

</style>

