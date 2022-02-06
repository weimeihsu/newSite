<template>
<ul class="tabs-wrapper">
  <li v-for="tab in tabs" :key="tab" class="tab-item" :class="{ active: tab === selected }"  @click="selectTab(tab)">
    <a>{{tab}}</a></li>
</ul>
    <slot></slot>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
  computed: {
    ...mapState(['uiuxFB'])
  },
  created () {
    this.GET_UIUX()
  },
  methods: {
    ...mapActions(['GET_UIUX']),
    selectTab (tab) {
      this.$emit('selected', tab)
    }
  }
  // this.$emit('selected', tab) this 'selected' here is the @selected=... in the parent vue
}
</script>
