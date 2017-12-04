<template>
  <div class="mytunes">
    <button @click="removeTrack" class="btn btn-danger">Remove Track</button>
  </div>
</template>

<script>
  export default {
    name: 'mytunes',
    data() {
      return {
      }
    },
    methods: {
      function() {
        this.$store.dispatch()
      },
      getFunction() {
        return {

        }
      }
    },
    computed: {
      mytunes() {
        return this.$store.state.mytunes.track //<-- add something here
      }
    }
  }
</script>


<style scoped>
</style>