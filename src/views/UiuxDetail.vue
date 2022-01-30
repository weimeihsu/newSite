<template>
    <img v-for="(imgs, index) in uiuxItem.img" :key="index" :src="imgs" :alt="item.title" />
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
