import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addSong } from "./ReduxToolKit/Features/SongSlice";
import {
  ArtistInput,
  FileInput,
  UploadButton,
  UploadContainer,
  UploadView,
} from "./Styles/FileUploadStyle.style";
import Image from "../assets/images.jpeg";

const FileUploads = () => {
  const [fileValue, setFileValue] = useState("");
  const [artist, setArtist] = useState("");
  const [error,setError] = useState('')
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("file", fileValue);
    formData.append("artist", artist);

    try {
      const { data } = await axios.post(
        "http://localhost:7000/addSongs",
        formData
      );
      dispatch(addSong(data));
    } catch (error) {
      console.log(error.response.data)
      setError(error.response.data.error)
    }
  };
  const handleUpload = (e) => {
    e.preventDefault()
    setFileValue(e.target.files[0]);
  };
  const handleArtist = (e) => {
    e.preventDefault()
    setArtist(e.target.value);
  };
  return (
    <UploadContainer>
      <UploadView src={Image} />
      <form action="">
        <FileInput
          type="file"
          onChange={handleUpload}
          accept="audio/*"
          required
        />
        <p style = {{color:'red'}}>{error}</p>
        <ArtistInput
          type="text"
          placeholder="Enter Artist Name"
          onChange={handleArtist}
          accept="audio/*"
        />

        <br />
        <UploadButton type="submit" onClick={handleSubmit} value="Add Song" />
      </form>
    </UploadContainer>
  );
};

export default FileUploads;
