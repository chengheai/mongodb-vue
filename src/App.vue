<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>

import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    appHeader: Header
  },
  data: function() {
    return {
      title: 'LOL英雄'
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
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
