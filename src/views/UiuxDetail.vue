<template>
    <div class="gallery" v-for="(item, index) in uiuxItem" :key="index">
      <!-- <p>this is paramater id {{$route.params.id}} </p> -->
        <p>{{item.title}}</p>
      <!-- <img :src="uiuxItem.img" :alt="uiuxItem.title" /> -->
    </div>
</template>

<script>
export default {
  name: 'UiuxDetail',
  props: ['uiuxItem']
}
</script>
<style scoped>
img{
  max-width: 100%;
}
</style>
