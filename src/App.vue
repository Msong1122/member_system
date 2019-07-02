<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  .fullScreen{
    width: 100%;
    height: 100%;
  }
  html,body{
    .fullScreen;
  }
  *{
    box-sizing: border-box;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .fullScreen
  }
</style>
