var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    trackName: { type: String, required: true },
    artworkUrl100: { type: String },
    artistName: { type: String },
    collectionName: { type: String },
    votes: { type: Number },
    previewUrl: {type: String }
})


module.exports = mongoose.model('Song', schema)
