<template>
  <div class="container">
    <Tabs :selected="selected" @selected="setSelected" :tabs="uiuxTabArray">
      <div v-for="(item, index) in uiuxFB" :key="index" class="gallery">
        <UiuxDetail :isSelected="selected === item.title "><img v-for="(imgs, imgindex) in item.img" :key="imgindex" :src="imgs"></UiuxDetail>
      </div>
    </Tabs>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import Tabs from '../components/Tabs.vue'
import UiuxDetail from '../components/UiuxDetail.vue'
export default {
  name: 'Uiux',
  components: {
    Tabs, UiuxDetail
  },
  data () {
    return {
      selected: 'Single Sign On'
    }
  },
  computed: {
    ...mapGetters(['uiuxTabArray']),
    ...mapState(['uiuxFB'])
  },
  created () {
    this.GET_UIUX()
  },
  methods: {
    ...mapActions(['GET_UIUX']),
    setSelected (tab) {
      this.selected = tab
    }
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
  position: relative;
  margin: 60px auto 0;
}
.gallery{
  max-width: 80%;
  margin-left: 170px;
}
</style>
