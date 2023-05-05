const mongoose = require('mongoose');

const songsModel = mongoose.Schema({
    songs:{
        type:String,
        required:[true,'Please Enter The Song.']
    }
},{timestamps:true})

module.exports  = mongoose.model('Song',songsModel);