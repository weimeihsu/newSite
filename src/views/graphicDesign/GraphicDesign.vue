<template>
<section class="gallery flex-center">
  <div class="pagination">
    <span @click="goPrev" :class="{disabled: isDisable}">Prev</span>
    <!-- put this {{index+1}} inside the following span if i want to show numbers  -->
    <!-- <span @click="goSlideIndex(index)" v-for="(slide, index) in slides" :key="slide.id" class="number" :class="[index===currentIndex ? 'current':'']" ></span> -->
    <span @click="goNext">Next</span>
  </div>

  <div class="slides" :style="{with:slidesWidth+'px'}">
    <div class="slideInnerContainer" :style="{width:slideInnerWidth +'px',marginLeft: '-' + slideInnerMarginLeft + 'px'}">
      <div class="slide" :style="{width:slideWidth +'px'}" v-for="(slide, index) in graphicDesignFB" :key="index">
        <Slide :slideitem="slide"/>
      </div>
    </div> 
  </div>
</section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Slide from './Slide.vue';
export default {
    name:'GraphicDesign',
    components:{
      Slide
    },
    data(){
      return{
        slides:[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
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
          return {isDisable:true}
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
      },
      ...mapActions(['GET_GRAPHIC_DESIGN'])
    },
    computed:{
      slideLength(){
        return this.$store.getters.slideLength
      },
      slideInnerMarginLeft(){
        return this.currentIndex * this.slideWidth
      },
      slideInnerWidth(){
        return this.slideWidth * this.$store.state.slidesLength
      },
      slidesWidth(){
        return this.slideWidth
      },
      ...mapState(['graphicDesignFB']),
    },
    mounted(){
      this.slideWidth = this.$el.clientWidth
    },
    created(){
      this.GET_GRAPHIC_DESIGN();
    },
}
</script>

<style scoped>
.gallery{
  margin: 100px auto 0;
  position: relative;
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
    height: calc(100vh - 150px);
}
.slideInnerContainer{
  transition: margin 0.4s ease-out;
  display: flex;
}
.pagination{
  position: absolute;
  top: -20px;
}
.pagination span{
  color:#808080;
  cursor: pointer;
  padding: 5px 20px;
  margin: 0 5px;
  border-radius: 5px;
  border: 1px solid #eaecef;
  background: rgba(255, 255, 255, 0.5);
}
.pagination span:hover{
  border: 1px solid #000;
  color: #000;
}
.number{
  margin: 8px 5px 2px;
  padding: 0 3px;
  border-radius: 20px;
  background:#eaecef;
}
.current{
  color: #ffffff;
  background: #808080;
}
.disabled{
  color: #cccccc;
}

</style>

