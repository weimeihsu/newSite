<template>
    <a @click="selectTab(tab)" :class="{ active: tab === selected }">{{tabs.title}}</a>

    <slot></slot>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  methods: {
    selectTab (tab) {
      this.$emit('selected', tab)
    }
  }
}
</script>
