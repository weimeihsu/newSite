<template>
    <img :src="slideitem.img" :alt="slideitem.title" />
</template>

<script>
export default {
  name: 'Slide',
  props: ['slideitem']
}
</script>
<style scoped>

</style>
