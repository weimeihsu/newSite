<template>
<div class="dropdown-wrapper">
    <div v-for="(li, index) in uiuxFB" :key="index"  class="dropdown-item" >
        <router-link class="dropdown-link" :to="{name:'Uiux', params:{id: li.title}}">{{li.title}}</router-link>
    </div>

</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Dropdown',
  computed: {
    ...mapState(['uiuxFB'])
  },
  created () {
    this.GET_UIUX()
  },
  methods: {
    ...mapActions(['GET_UIUX'])
  }
}
</script>
