<template>
   <div class="modal" v-if="showModal">
       click me
   </div> 
</template>

<script>
export default {
    name:'Modal',
    props:['delay'],
    data(){
        return{
            showModal:false
        }
    },
    mounted(){
       console.log('mount data')
       setTimeout(() => {
           this.showModal=true
           console.log(this.delay)
       }, this.delay)
    },
    updated(){
        console.log('updated')
    }
}
</script>
<style scoped>

.modal{
    background: #ccc;
    padding: 20px;
    margin: 10px;
    width: 100px;
    margin: 20px auto;
    border-radius: 5px;
}

</style>
