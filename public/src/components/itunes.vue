<template>
    <div>
      <div >
        <form @submit.prevent="getMusicByArtist" style="text-align: center">
          <input type="text" placeholder="Artist Name" v-model="artist">
          <button type="submit">Search Artists</button>
        </form>
        <div  v-for="song in songs">
          
            <h4>{{song.trackName}}</h4>
            <h4>{{song.artistName}}</h4>
            <!-- <h4>{{song.collectionName}}</h4> -->
            
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
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    
  </style>