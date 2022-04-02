<template>
<div class="backdrop">
    <div class="modal">
        <h1>title here</h1>
        <img :src="popupImg">
    </div>
</div>
</template>
<script>
export default {
  name: 'GraphicModal',
  props: ['popupImg']
}
</script>
<style scoped>

</style>
