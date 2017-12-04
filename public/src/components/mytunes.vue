<template>
  <div class="mytunes">
    <div v-for="song in mytunes">
      <button @click="removeTrack(song)" class="btn btn-danger">Remove Track</button>
      {{song.trackName}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mytunes',
    data() {
      return {
      }
    },
    mounted() {
      this.$store.dispatch('getMyTunes')
    },
    methods: {
      function() {
        this.$store.dispatch()
      },
      getFunction() {
        return {

        }
      },
      removeTrack(track) {
        this.$store.dispatch('removeTrack', track)
      }
    },
    computed: {
      mytunes() {
        return this.$store.state.myTunes //<-- add something here
      }
    }
  }
</script>


<style scoped>
</style>