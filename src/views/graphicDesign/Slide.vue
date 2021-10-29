<template>
<div class="slide" v-for="slide in slides" :key="slide.title">
    <img :src="slide.src" :alt="slide.alt" />
    <!-- <p>{{slide.title}}</p> -->
</div>
</template>

<script>
export default {
    name:'Slide',
    props:['slides'],
    data(){
        return{
            
        }
    } 
}
</script>
<style scoped>
.slide{
    display: flex; 
    /* flex-direction: column;
    align-items: center; */
    justify-content: center;
    width: 100%;
    
}
.slide img{
    max-width: 100%;
    height: fit-content;
}
</style>
