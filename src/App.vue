<template>
  <div id="app">
    <gameHead></gameHead>

    <router-view/>
  </div>
</template>

<script>
import gameHead from './components/gameHead'

export default {
  name: 'App',
  components: {
    gameHead
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
