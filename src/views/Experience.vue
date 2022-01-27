<template>
  <section class="container">
    <div v-for="(expc, index) in expcsFB" :key="index" class="expc" >
      <div class="left">
        <img :src="expc.icon" :alt="expc.alt" />
      </div>
      <div class="right">
        <h2>{{expc.title}}</h2>
        <!-- <span>{{expc.dept}}</span> -->
        <h4>{{expc.comp}}</h4>
        <h4>{{expc.date}}</h4>
        <ul>
          <li v-for="(li, index) in expc.list" :key="index">{{li}}</li>
        </ul>
      </div>
    </div>

  </section>
</template>

<script>
// need to import firedb here if i want to retrieve data directly from firebase
// import firedb from '@/firebase/firebaseinit'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Experience',
  computed: {
    ...mapState(['expcsFB'])
  },
  data () {
    return {
    }
  },
  created () {
    this.GET_EXPCS()
  },
  methods: {
    ...mapActions(['GET_EXPCS'])
  }
}
</script>

<style scoped>
.container{
  margin: 63px auto 0;
}
.expc{
  margin-bottom: 40px;
  display: flex;
}
.left img{
  max-width: 70%;
  margin-top: 0.5rem;
}
ul{
    padding-left: 20px
}

</style>
