<template>
  <div v-if="isSelected">
    <slot></slot>
    <!-- <img :src="img" v-for="(img, index) in uiuxItem.img" :key="index"/> -->
  </div>
</template>

<script>
export default {
  name: 'UiuxDetail',
  props: {
    isSelected: {
      type: Boolean
    },
    uiuxItem: {
      type: String
    }
  }
}
</script>
<style scoped>
img{
  max-width: 100%;
}
</style>
