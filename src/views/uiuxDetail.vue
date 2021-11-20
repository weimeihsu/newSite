<template>
<section class="container">
    <Dropdown />
    <div class="gallery">
        <p>{{$route.params.id}} </p>
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
    name:'ProjectA',
    components:{Dropdown},
    data(){
        return{
            uiuxImages:[
                {
                    id:1,
                    title:'Single Sign On',
                    images: [
                        { url: require('@/assets/img/uiux/csp/sso/sso-1.jpg'), alt: 'img-1' },
                        { url: require('@/assets/img/uiux/csp/sso/sso-2.jpg'), alt: 'img-2' }
                    ]
                },
                {
                    id:2,
                    title:'Charts',
                    path:'/UIUX/chart',
                    images: [
                        { url: require('@/assets/img/uiux/csp/chart/charts.png'), alt: 'img-1' },
                        { url: require('@/assets/img/uiux/csp/chart/chart property.jpg'), alt: 'img-2' },
                        { url: require('@/assets/img/uiux/csp/chart/chart data.jpg'), alt: 'img-2' }
                    ]
                }
            ]
        }
    },
    // computed:{
    //   uiuxImages(){
    //     return this.$store.state.uiuxImages
    //   }
    // },
}
</script>
<style scoped>
img{
    max-width: 100%;
}
</style>
