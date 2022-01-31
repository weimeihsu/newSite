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
.uiux-imgs{
  display: flex;
  flex-direction: column;
}
.uiux-imgs img{
  margin-bottom: 20px;
}
</style>
