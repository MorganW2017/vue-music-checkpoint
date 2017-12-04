<template>
  <div class="mytunes">
    <div v-for="song in mytunes">
      <div>
        <img id="pic" v-bind:src="song.artworkUrl100" />
        <h4>{{song.trackName}}</h4>
        <h4>{{song.artistName}}</h4>
        <h4>{{song.collectionName}}</h4>
        <audio controls>
          <source v-bind:src="song.previewUrl" type="audio/mpeg" />
        </audio>
        <button @click="removeTrack(song)" class="btn btn-danger">Remove Track</button>
      </div>
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