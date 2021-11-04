<template>
    <img :src="slideitem.src" :alt="slideitem.alt" />
    <!-- <p>{{slide.title}}</p> -->
</template>

<script>
export default {
    name:'Slide',
    props:['slideitem'],
    data(){
        return{
            
        }
    } 
}
</script>
<style scoped>

</style>
