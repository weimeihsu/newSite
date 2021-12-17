<template>
<div>{{experience}}</div>
  <section v-for="(expc, index) in expcs" :key="index" class="container expc">
    
    <div class="head">
      <div class="left">
        <img :src="expc.icon" :alt="expc.alt" />
      </div>
      <div class="right">
        <h2>{{expc.title}}</h2>
        <span>{{expc.team}}</span>
        <h3>{{expc.comp}}</h3>
        <h4>{{expc.date}}</h4>
      </div>
    </div>
    <ul>
      <li v-for="li in expc.list" :key="li">{{li.li}}</li>
    </ul>
  </section>
</template>

<script>
import firedb from '@/firebase/firebaseinit'
export default {
    name:'Experience',
    computed:{
      expcs(){
        return this.$store.state.expcs
      }
    },
    data(){
      return{
        // retrieve data from firebase and store here. 
        experience:[]
      }
    },
    created(){
      firedb.collection('expcs').onSnapshot(res=> {
        const changes = res.docChanges();

        changes.forEach(change => {
          if(change.type==='added'){
            this.experience.push({
              ...change.doc.data(),
              id:change.doc.id
            })
          }
        });
      })
    }
    // change to the following when deploy
    // mounted(){
    //   fetch('http://localhost:3000/expcs')
    //   .then(res => res.json())
    //   .then(data => this.expcs = data)
    //   .catch(err => console.log(err.message))
    // }
}
</script>

<style scoped>
.expc{
  margin-bottom: 40px;
}
.left img{
  max-width: 70%;
  margin-top: 0.5rem;
}
.head{
  display: flex;
}
</style>