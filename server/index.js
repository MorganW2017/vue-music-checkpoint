var express = require('express')
var server = express()
var bp = require('body-parser')
var DBConnect = require('./config/mlab/mlab-config')
// var sessions = require('./auth/sessions')
var cors = require('cors')
var port = 9001
var playlistRoutes = require('./Server/routes/playlist-routes')
var songRoutes = require('./Server/routes/song-routes')


server.use(cors({}))
server.use(bp.json())
server.use(bp.urlencoded({extended: true}))
server.use(express.static(__dirname + '/public'))


server.use(playlistRoutes)
server.use(songRoutes)


server.listen(port, function(){
    console.log('Server Running on port: ', port)
})