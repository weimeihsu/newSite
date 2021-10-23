<template>
<div class="dropdown-wrapper">
    <div :key="li.id" v-for="li in dropdown" class="dropdown-item" >
        <router-link :to="{path:li.path}">{{li.title}}</router-link>
    </div>
    
</div>
</template>

<script>
export default {
name:'Dropdown',
data(){ 
      return{
        dropdown:[
          {
            id:1,
            title:'ProjectA',
            path:'/UIUX/projectA'
          },
          {
            id:2,
            title:'ProjectB',
            path:'/UIUX/projectB'
          },
          {
            id:3,
            title:'ProjectC',
            path:'/UIUX/projectC'
          },
          {
            id:4,
            title:'ProjectD',
            path:'/UIUX/projectD'
          }
        ]
      }
    },
}
</script>
