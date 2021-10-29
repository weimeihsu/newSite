<template>
<section class="container">
    <div class="gallery">
        <div class="gallery-item" v-for="(img, index) in images" :key="index">

        <!-- dynamically binding the data with :src and :alt syntax -->
        <img :src="img.url" :alt="img.alt">

        </div>
  </div>
</section>
</template>

<script>
export default {
    name:'ProjectA',
    data(){
        return{
            images: [
            { url: require('@/assets/img/uiux/csp/sso-1.jpg'), alt: 'img-1' },
            { url:  require('@/assets/img/uiux/csp/sso-1.jpg'), alt: 'img-2' }
        ]
        }
    },
}
</script>
<style scoped>
img{
    max-width: 100%;
}
</style>
