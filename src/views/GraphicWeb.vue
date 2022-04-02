<template>
    <section class="container">
      <h2>Graphic Design</h2>
      <div class="thumb-container">
        <div v-for="(item, index) in graphicDesignFB" :key="index" class="thumb" @click="enlarge(item)">
            <img :src="item.thumb" :alt="item.title" >
            <p>{{item.title}}</p>
        </div>
      </div>
    </section>
    <div class="backdrop" v-show="showPopup" @click.self="closePopup()">
      <div class="modal">
        <div class="flex-row">
          <h4>{{popupTitle}}</h4>
          <span class="icon-icon_close" @click.self="closePopup()"></span>
        </div>
        <img :src="popupImg" :alt="popupTitle">
      </div>
    </div>
      <!-- <GraphicModal :popupImg="popupImg"/> -->
</template>
<script>
import { mapState, mapActions } from 'vuex'
// import GraphicModal from '../components/GraphicModal.vue'
export default {
  name: 'GraphicWeb',
  data () {
    return {
      popupImg: null,
      popupTitle: null,
      showPopup: false
    }
  },
  // components: { GraphicModal },
  computed: {
    ...mapState(['graphicDesignFB'])
  },
  created () {
    this.GET_GRAPHIC_DESIGN()
  },
  methods: {
    ...mapActions(['GET_GRAPHIC_DESIGN']),
    enlarge (item) {
      this.showPopup = !this.showPopup
      this.popupImg = item.img
      this.popupTitle = item.title
    },
    closePopup () {
      this.showPopup = false
    }
  }
}
</script>

<style scoped>
h2{
  margin-left: 10px;
}
.container{
  margin: 63px auto 0;
}
.thumb-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.thumb{
    width: 30%;
    margin: 10px;
    padding: 10px;
    border: 1px solid transparent;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
}
.thumb:hover{
  cursor: pointer;
  border: 1px solid #cccccc;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
}
.thumb img{
    width: 100%;
}
.backdrop{
    position: fixed;
    top: 0;
    background: rgba(0,0,0,0.5);
    width: 100vw;
    height: 100vh;
}
.backdrop:hover{
  cursor: pointer;
}
.modal{
    width: 80vw;
    padding:20px;
    background: #fff;
    border-radius: 10px;
    margin: 15vh auto;
    display: flex;
    flex-direction: column;
}
.modal img{
    max-width: 100%;
    margin: 0 auto;
}
</style>
