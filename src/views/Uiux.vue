<template>
  <section class="container" v-if="desktopView">
    <Tabs :selected="selected" @selected="setSelected" :tabs="uiuxTabArray">
      <div v-for="(item, index) in uiuxFB" :key="index" class="gallery">
        <UiuxDetail :isSelected="selected === item.title "><img v-for="(imgs, imgindex) in item.img" :key="imgindex" :src="imgs"></UiuxDetail>
      </div>
    </Tabs>
  </section>
  <section class="mobile-container" v-else>
    <div v-for="(item, index) in uiuxFB" :key="index" class="mobile-gallery">
      <h4>{{item.title}}</h4>
      <img v-for="(imgs, imgindex) in item.img" :key="imgindex" :src="imgs">
    </div>
  </section>
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
      selected: 'Single Sign On',
      desktopView: null
    }
  },
  computed: {
    ...mapGetters(['uiuxTabArray']),
    ...mapState(['uiuxFB'])
  },
  created () {
    this.GET_UIUX()
    this.CheckScreen()
    window.addEventListener('resize', this.CheckScreen)
  },
  methods: {
    ...mapActions(['GET_UIUX']),
    setSelected (tab) {
      this.selected = tab
    },
    CheckScreen () {
      const ScreenWidth = window.innerWidth
      if (ScreenWidth > 744) {
        this.desktopView = true
        return
      }
      this.desktopView = false
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
.mobile-container{
  width: 90%;
  margin: 80px auto 0;
  text-align: center;
}
.gallery{
  max-width: 80%;
  margin-left: 170px;
}
.mobile-gallery{
  margin-bottom: 20px;
}
.mobile-gallery img{
  max-width: 100%;
}
</style>
