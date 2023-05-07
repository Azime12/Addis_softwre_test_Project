import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "./ReduxToolKit/Features/SongSlice";
import { FileInput, UploadButton, UploadContainer, UploadView } from "./Styles/FileUploadStyle.style";
import Image from "../assets/images.jpeg";
import { Button } from "./Styles/Button.styled";

const FileUploads = () => {
  const [fileValue, setFileValue] = useState("");
  // const songList = useSelector((state) => state.Songs.songs);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileValue);
    const { data } = await axios.post(
      "http://localhost:7000/addSongs",
      formData
    );
    console.log(data.song)
    dispatch(addSong(data))
  };
  const handleUpload = (e) => {
    e.preventDefault();
    setFileValue(e.target.files[0]);
  };
  return (
    <UploadContainer>
      <UploadView src={Image}/>
      <form action="">
        <FileInput type="file" onChange={handleUpload} accept="audio/*"/>
        <br />
        <UploadButton type="submit" onClick={handleSubmit} value='Add Song' />
      </form>
    </UploadContainer>
  );
};

export default FileUploads;
