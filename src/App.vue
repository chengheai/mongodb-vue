<template>
  <div id="app">
    <h2 class="title">{{title}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  data:function(){
    return {
      title: "LOL英雄"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.title{
  margin-bottom: 10px;
  text-align: center;
}
</style>
