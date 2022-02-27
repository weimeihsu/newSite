<template>
<ul class="tabs-wrapper" ref="wrapper">
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
  data () {
    return {
      tabWrapperWidth: null
    }
  },
  computed: {
    ...mapState(['uiuxFB'])
  },
  methods: {
    ...mapActions(['GET_UIUX']),
    selectTab (tab) {
      this.$emit('selected', tab)
      // this.$emit('selected', tab) this 'selected' here is the @selected=... in the parent vue
    }
  },
  created () {
    this.GET_UIUX()
  },
  mounted () {
    console.log(this.$refs.wrapper.clientWidth)
  },
  updated () {
    this.tabWrapperWidth = this.$refs.wrapper.clientWidth
  }
}
</script>
