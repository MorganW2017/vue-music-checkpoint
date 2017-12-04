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
    handleError(state, err) {
      state.error = err
    },
    setResults(state, results) {
      state.results = results
    },
    setMyTunes(state, myTunes) {
      state.myTunes = myTunes
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
      $.get('//localhost:3000/api/songs')
        .then(res => {
          commit('setMyTunes', res)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    addToMyTunes({ commit, dispatch }, track) {
      console.log(track)
      $.post('//localhost:3000/api/songs', track)
        .then(data => {
          dispatch('getMyTunes')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeTrack({ commit, dispatch }, track) {
      console.log(track)
      //Removes track from the database with delete
      $.ajax({
        url: 'http://localhost:3000/api/songs/' + track._id,
        method: 'DELETE'
      })
        .then(data => {
          dispatch('getMyTunes')
        })
        .catch(err => {
          commit('handleError', err)
        })
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
