<template>
    <section class="container">
        <div v-for="(item, index) in graphicDesignFB" :key="index" class="thumb">
            <img :src="item.thumb" :alt="item.title" >
        </div>
    </section>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'GraphicWeb',
  computed: {
    ...mapState(['graphicDesignFB'])
  },
  created () {
    this.GET_GRAPHIC_DESIGN()
  },
  methods: {
    ...mapActions(['GET_GRAPHIC_DESIGN'])
  }
}
</script>

<style scoped>
.container{
  margin: 63px auto 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.thumb{
    width: 30%;
    margin: 10px;
    padding: 10px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
}
.thumb img{
    width: 100%;
}
</style>
