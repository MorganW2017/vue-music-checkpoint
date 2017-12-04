<template>
  <div>
    <div>
      <form @submit.prevent="getMusicByArtist" style="text-align: center">
        <input type="text" placeholder="Artist Name" v-model="artist">
        <button type="submit">Search Artists</button>
      </form>
      <div v-for="song in songs">
        <div v-bind:id="song.trackId">
          <img id="pic" v-bind:src="song.artworkUrl100" />
          <h4>{{song.trackName}}</h4>
          <h4>{{song.artistName}}</h4>
          <h4>{{song.collectionName}}</h4>
          <audio controls>
            <source v-bind:src="song.previewUrl" type="audio/mpeg" />
          </audio>
          <button @click="addToMyTunes(song)" type="submit" class="btn btn-primary">Add to Playlist</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'itunes',
    data() {
      return {
        artist: ""


      }
    },
    methods: {
      getMusicByArtist() {
        this.$store.dispatch('getMusicByArtist', this.artist)
      },
      addToMyTunes(i) {
        this.$store.dispatch('addToMyTunes', i)
      }
    },
    computed: {
      songs() {
        // debugger
        return this.$store.state.results
      }
    }
  }
</script>

<style scoped>
  #pic {
    height: 200px;
    width: 200px;
  }
</style>