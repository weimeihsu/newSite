<template>
    <section class="container">
      <h2>Graphic Design</h2>
      <div class="thumb-container">
        <div v-for="(item, index) in graphicDesignFB" :key="index" class="thumb" @click="enlarge(item)">
            <img :src="item.thumb" :alt="item.title" >
            <p>{{item.title}}</p>
        </div>
      </div>
      <h2>Web Design & Anime</h2>
      <div class="thumb-container">
        <div v-for="(item, index) in webFB" :key="index" class="thumb">
          <a :href="item.url" target="_blank"><img :src="item.thumb" :alt="item.title"></a>
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
        <div class="modal-img"><img :src="popupImg" :alt="popupTitle"></div>
      </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'GraphicWeb',
  data () {
    return {
      popupImg: null,
      popupTitle: null,
      showPopup: false
    }
  },
  created () {
    this.GET_GRAPHIC_DESIGN()
    this.GET_WEB()
  },
  methods: {
    ...mapActions(['GET_GRAPHIC_DESIGN', 'GET_WEB']),
    enlarge (item) {
      this.showPopup = !this.showPopup
      this.popupImg = item.img
      this.popupTitle = item.title
    },
    closePopup () {
      this.showPopup = false
    }
  },
  computed: {
    ...mapState(['graphicDesignFB', 'webFB'])
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
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
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
    height: 80vh;
    padding:20px;
    background: #fff;
    border-radius: 10px;
    margin: 15vh auto;
    display: flex;
    flex-direction: column;
}
.modal-img{
   overflow: scroll;
   text-align: center;
}
.modal img{
    max-width: 100%;
    margin: 0 auto;
}
@media (max-width: 744px) {
.thumb-container{
  flex-direction: column;
  align-content: center;
}
.thumb{
  width: 100%;
}
}
</style>
