<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
  import Home from './components/Home'
  import itunes from './components/itunes'
  import mytunes from './components/mytunes'

  export default {
    name: 'app',
    components: {
      Home,
      itunes,
      mytunes
    }
  }
</script>

<style>
</style>