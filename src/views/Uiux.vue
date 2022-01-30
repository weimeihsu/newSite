<template>
  <div class="container">
    <ul class="tabs-wrapper">
      <li v-for="(li, index) in uiuxFB" :key="index" class="tab-item" >
        <Tabs :tab="li" />
      </li>
    </ul>
    <div v-for="(item, index) in uiuxFB" :key="index" class="gallery" >
      <UiuxDetail :uiuxItem="item" />
    </div>
  </div>

</template>

<script>
import Tabs from '../components/Tabs.vue'
import UiuxDetail from './UiuxDetail.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Uiux',
  components: {
    Tabs, UiuxDetail
  },
  data () {
    return {
      isActive: true
    }
  },
  computed: {
    ...mapState(['uiuxFB'])
  },
  created () {
    this.GET_UIUX()
  },
  methods: {
    ...mapActions(['GET_UIUX'])
  }
  // created () {
  //   firedb.collection('uiux').get().then((snapshot) => {
  //     snapshot.docs.forEach(doc => {
  //       const uiuxList = document.querySelector('.dropdown-wrapper')
  //       const item = document.createElement('div')
  //       const link = document.createElement('a')
  //       item.className = 'dropdown-item'
  //       link.setAttribute('uiux-id', doc.id)
  //       link.textContent = doc.data().title
  //       item.appendChild(link)
  //       uiuxList.appendChild(item)
  //     })
  //   })
  // }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
  margin: 60px auto 0;
}
</style>
