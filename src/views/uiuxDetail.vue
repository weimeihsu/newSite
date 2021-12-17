<template>
<section class="container">
    <Dropdown />
    <div class="gallery">
        <!-- <p>this is paramater id {{$route.params.id}} </p> -->
        <div class="gallery-item" v-for="(img, index) in uiuxImages" :key="index">
            <p>{{img.title}}</p>
            <div v-for="(item, index) in img.images" :key="index">
                <img :src="item.url" :alt="item.alt">
            </div>
        </div>
  </div>
</section>
</template>

<script>

import Dropdown from '../components/Dropdown.vue';
export default {
    name:'UiuxDetail',
    components:{Dropdown},
    data(){
        return{
            // uiuxImages:[]
        }
    },
    computed:{
      uiuxImages(){
        return this.$store.state.uiuxImages
      }
    },
}
</script>
<style scoped>
img{
    max-width: 100%;
}
</style>
