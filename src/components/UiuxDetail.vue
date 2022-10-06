<template>
  <section>
    <slot name="ui"></slot>
    <slot name="ux"></slot>
    <slot name="prototype"></slot>
  </section>
</template>

<script>
export default {
  name: 'UiuxDetail'
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
