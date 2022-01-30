<template>
    <a @click="selectTab(tab)">{{tab.title}}</a>
</template>

<script>
export default {
  name: 'Tabs',
  props: ['tab']
}
</script>
