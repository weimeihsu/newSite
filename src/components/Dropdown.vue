<template>
<div class="dropdown-wrapper">
  <div v-for="(li, index) in uiuxFB" :key="index"  class="dropdown-item" >
    <a @click="fetchID()">{{li.title}}</a>
  </div>
<!-- router-link :to="{name:'UiuxDetail', params:{id: li.title}}" -->
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { ref } from 'vue'
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
  },
  setup () {
    const uiuxImg = ref([])

    const fetchID = () => {
    }

    return {
      uiuxImg, fetchID
    }
  }
}
</script>
