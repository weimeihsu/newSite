<template>
<div v-for="slide in slides" :key="slide.title" class="slide" >
    <p>{{slide.title}}</p>
    <img :src="slide.src" alt="slide.alt" />
</div>
</template>

<script>

export default {
    name:'Slide',
    props:['slides'],
    data(){
        return{
            
        }
    },
}
</script>
<style scoped>
.slide{
    display: inline-block;
    max-width: 100%;
}
img{
    max-width: 50%;
}
</style>
