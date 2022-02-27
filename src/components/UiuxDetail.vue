<template>
  <div v-if="isSelected" class="uiux-imgs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiuxDetail',
  props: {
    isSelected: {
      type: Boolean
    }
  }
}
</script>
<style>
.uiux-imgs {
  flex-direction: column;
  padding-left: 20px;
}
.uiux-imgs img{
  margin-bottom: 20px;
  width: 100%;
}
</style>
