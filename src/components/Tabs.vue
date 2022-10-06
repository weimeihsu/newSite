<template>
<ul class="tabs-wrapper" ref="wrapper">
   <li><router-link to="/UiuxRetired/menu1">menu1</router-link></li>
    <li><router-link to="/UiuxRetired/menu2">menu2</router-link></li>
</ul>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      tabWrapperWidth: null
    }
  }
}
</script>
