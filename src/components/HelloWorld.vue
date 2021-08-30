<template>
  <div class="hello"  @click.self="closeModal" >
    <h1>Hellow World Popup Panel</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods:{
        closeModal(){
            this.$emit('close')
        }
    }

}
</script>


<style scoped>
.hello{
  padding: 30px;
  background: #39c2c7;
  width: 600px;
  margin: 0 auto;
  border-radius: 10px;
}
</style>