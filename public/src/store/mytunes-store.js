import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },
  mutations: {
    setResults(state, results) {
      state.results = results
    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      // var apiUrl = url + encodeURIComponent(url2);
      // $.getJSON(apiUrl).then(data => {
      // })
      var apiUrl = url + encodeURIComponent(url2);
      $.getJSON(apiUrl).done(function (data) {
        commit('setResults', data.results)
        console.log(data)
      });
      // console.log(data.results)
    },

    getMyTunes({ commit, dispatch }) {
      api('tracks/' + id)
        .then(res => {
          commit('setResults', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    addToMyTunes({ commit, dispatch }, track) {
      //this will post to your server adding a new track to your tunes
    },
    removeTrack({ commit, dispatch }, track) {
      //Removes track from the database with delete
    },
    promoteTrack({ commit, dispatch }, track) {
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({ commit, dispatch }, track) {
      api.delete('track/' + track._id)
        .then(res => {
          dispatch('getResults')
        })
        .catch(err => {
          commit('handleError', err)
        })
    }

  }
})

export default store
