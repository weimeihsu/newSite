<template>
  <section class="container">
    <a v-for="(item, index) in pdfFB" :key="index" class="pdf" :href="item.file" target="_blank">
        <h4>{{item.title}}</h4>
        <p>{{item.des}}</p>
        <span class="right">Click to view</span>
    </a>
  </section>
</template>

<script>
// need to import firedb here if i want to retrieve data directly from firebase
// import firedb from '@/firebase/firebaseinit'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'More',
  computed: {
    ...mapState(['pdfFB'])
  },
  created () {
    this.GET_PDF()
  },
  methods: {
    ...mapActions(['GET_PDF'])
  }
}
</script>

<style scoped>
.container{
  margin: 63px auto 0;
}
.pdf{
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.pdf:hover{
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
}
.right{
  text-align: right;
  font-size: 14px;
  margin-top: 10px;
}
</style>
