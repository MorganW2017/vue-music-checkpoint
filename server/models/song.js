var mongoose = require('mongoose')
var title="trackName";

var schema = new mongoose.Schema({
    trackName: { type: String, required: true },
    albumArt: { type: String },
    artistName: { type: String },
    collectionName: { type: String },
    price: { type: String },
    preview: {type: String }
    
})


module.exports = mongoose.model('Song', schema)
