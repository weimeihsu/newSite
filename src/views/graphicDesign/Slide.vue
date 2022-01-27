<template>
    <img :src="slideitem.img" :alt="slideitem.title" />
    <!-- <p>{{slide.title}}</p> -->
</template>

<script>
export default {
  name: 'Slide',
  props: ['slideitem'],
  data () {
    return {
    }
  }
}
</script>
<style scoped>

</style>
