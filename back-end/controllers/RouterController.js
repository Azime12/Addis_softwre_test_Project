// const express = require("express");
const Songs = require('../models/SongsModel')
const handleErrors = (error)=>{
    const errors = {
        // error:''
    }
    if (error.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
          errors[properties.path] = properties.message;
          // console.log(properties)
        });
      }
      return errors;
}
const getSongs = async (req, res) => {
  try {
    const songsList = await Songs.find({}).sort({updatedAt:-1})
    res.status(200).send(songsList);
  } catch (error) {
    const errors = handleErrors(error)
    res.status(200).send(errors)
  }
};

const addSongs = async (req, res) => {
  try {
  } catch (error) {}
};
const updateSongs = async (req, res) => {
  try {
  } catch (error) {}
};
const deleteSongs = async (req, res) => {
  try {
  } catch (error) {}
};
module.exports = { getSongs, addSongs, updateSongs, deleteSongs };
