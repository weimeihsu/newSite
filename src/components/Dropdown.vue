<template>
<div class="dropdown-wrapper">
    <div class="dropdown">
    <div v-bind:key="project.id" v-for="project in projects" class="dropdown-item" >
        <router-link :to="{path:project.link}">{{project.projectTitle}}</router-link>
    </div>
</div>
</div>
</template>

<script>
export default {
name:'Dropdown',
props:['projects'],
}
</script>
