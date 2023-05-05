// const express = require("express");
const Songs = require("../models/SongsModel");
const multer = require('multer');
const path = require('path');

const handleErrors = (error) => {
  const errors = {
    // error:''
  };
  if (error.code === 11000) {
    errors.email = "File Is Already Exists";
    return errors;
  }
  if (error.message.includes("Song validation failed")) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
      // console.log(properties)
    });
  }
  return errors;
};
const storage = multer.diskStorage({
    destination:'./public/uploads/',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const uploads = multer({
    storage:storage
})
const getSongs = async (req, res) => {
  try {
    const songsList = await Songs.find({}).sort({ updatedAt: -1 });
    res.status(200).send(songsList);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(200).send(errors);
  }
};

const addSongs = async (req, res) => {
   const song = req.file.filename
  //  console.log(song)
  try {
    const createdSong = await Songs.create({
      song
    });
    console.log(createdSong)
    res.status(200).send(createdSong);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(200).send(errors);
  }
};
const updateSongs = async (req, res) => {
  const id = req.body.params;
  try {
    const updatedSong = await Songs.findByIdAndUpdate(id, {
      ...req.body,
    });
    res.status(200).send(updatedSong);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(200).send(errors);
  }
};
const deleteSongs = async (req, res) => {
  const id = req.body.params;
  try {
    const deletedSong = await Songs.findByIdAndUpdate(id);
    res.status(200).send(deletedSong);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(200).send(errors);
  }
};
module.exports = { getSongs, addSongs, updateSongs, deleteSongs,uploads };
