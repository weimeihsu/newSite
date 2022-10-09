<template>
    <section class="container">
      <h2>Prototype</h2>
      <div class="thumb-container">
        <div v-for="(item, index) in prototypeFB" :key="index" class="thumb">
          <a :href="item.url" target="_blank"><img :src="item.img" :alt="item.title"></a>
          <p>{{item.title}}</p>
        </div>
      </div>
    </section>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Prototype',
  data () {
    return {
    }
  },
  created () {
    this.GET_PROTOTYPE()
  },
  methods: {
    ...mapActions(['GET_PROTOTYPE'])
  },
  computed: {
    ...mapState(['prototypeFB'])
  }
}
</script>

<style scoped>
.container{
  margin: 63px auto 0;
}
.thumb-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
}
.thumb{
    width: 48%;
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
