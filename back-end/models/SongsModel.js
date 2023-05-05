const mongoose = require('mongoose');

const songsModel = mongoose.Schema({
    song:{
        type:String,
        unique:true,
        required:[true,'Please Enter The Song.']
    }
},{timestamps:true})

module.exports  = mongoose.model('Song',songsModel);