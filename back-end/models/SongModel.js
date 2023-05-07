const mongoose = require("mongoose");

const songsModel = mongoose.Schema(
  {
    song: {
      type: String,
      required: [true, "Please Enter The Song."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Music", songsModel);
