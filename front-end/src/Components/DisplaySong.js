import React from "react";
import {
  ArtistHolder,
  AudioPlayer,
  DispContainer,
  DisplayScreen,
  EditSong,
  Image,
} from "./Styles/DisplayScreen.style";

import { useDispatch, useSelector } from "react-redux";
import {FaRegEdit} from 'react-icons/fa'
import { ArtistEditInput, ArtistInput } from "./Styles/FileUploadStyle.style";
import { useState } from "react";
import axios from 'axios'
import { addSong, getSongs, playCurrent, updateSong } from "./ReduxToolKit/Features/SongSlice";
const DisplaySong = () => {
  let currentMusic = useSelector((state) => state.Songs.currentSong);
  const [clickedUpdate,setClickedUpdate] = useState(false);
  const [changedValue,setChangedValue] = useState(currentMusic.artist)
  const dispatch = useDispatch()
  const handleSubmit = async (song,e)=>{
    const id = song._id
    const artist = {changedValue}
    const {data} = await axios.patch('https://addis-software-songplayer.onrender.com/updateSongs/'+ id,artist)
    // dispatch(updateSong(data));
    console.log(data)
    dispatch(playCurrent(data.updatedSong))
    // console.log(currentMusic)
    dispatch(getSongs(data.songsList))
    setClickedUpdate(false)
  }
  const handleChange = (e)=>{
    setChangedValue(e.target.value)
  }
  // console.log(currentMusic)
  return (
    <DisplayScreen>
      <DispContainer>
        <h2>Playing Now</h2>
        <Image src="https://picsum.photos/200/200" />
        <div>
          <h3>
            {Object.keys(currentMusic).length !== 0
              ? currentMusic.song.split(".")[0]
              : null}
          </h3>
          <ArtistHolder>
            {clickedUpdate === false ? <p>{Object.keys(currentMusic).length !== 0 ? <p>{currentMusic.artist }</p>:(<p>Music Player</p>)}</p> : <ArtistEditInput type = 'text' value={changedValue} onChange = {(e)=>{
              handleChange(e);
            }}/>}
            {Object.keys(currentMusic).length !== 0 ? (clickedUpdate === false ? <EditSong onClick={()=>{
              setClickedUpdate(true)
            }}>
              <FaRegEdit />
            </EditSong>:<EditSong onClick={()=>{
              setClickedUpdate(true)
              handleSubmit(currentMusic)
            }}>
              Submit
            </EditSong> ):null}
          </ArtistHolder>
        </div>
        <div>
          <AudioPlayer
            src={`https://addis-software-songplayer.onrender.com/uploads/${currentMusic.song}`}
            controls
            autoPlay
          ></AudioPlayer>
        </div>
      </DispContainer>
    </DisplayScreen>
  );
};

export default DisplaySong;
