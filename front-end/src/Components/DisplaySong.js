import React from "react";
import {
  DispContainer,
  DisplayScreen,
  Image,
  RangeInput,
  TimeDisplay,
} from "./Styles/DisplayScreen.style";
import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
import mezmur from "../assets/Abel Mekibib.mp3";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { FaBackward } from "react-icons/fa";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons";
import "./sty.css";
import { PlayButton } from "./Styles/DisplayScreen.style";
import { NextButton } from "./Styles/DisplayScreen.style";
import { PrevButton } from "./Styles/DisplayScreen.style";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AudioPlayer } from "./Styles/AudioPlay.style";

const DisplaySong = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // const navigate = useNavigate()
  // const location = useLocation()
  // const songData = location.state.song.song
  // const name = location.state.song.song.split('.')[0]
  // console.log(location.state.song.song)
  const songList = useSelector((state)=>state.Songs.songs)
  const currentMusic = useSelector((state)=>state.Songs.currentSong)
  const dispatch = useDispatch();
  console.log('curretn',currentMusic.song)
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState(0);
  const [play, { pause, duration, sound }] = useSound(`http://localhost:7000/uploads/Abel.mp3`);
// {currentMusic }
  console.log(duration)
  
  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound, isPlaying,currentMusic]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  return (
    <DisplayScreen>
      {/* <button onClick={()=> navigate('/')}>back</button> */}
      <DispContainer>
        <h2>Playing Now</h2>
        <Image src="https://picsum.photos/200/200" />
        <div>
          <h3>{Object.keys(currentMusic).length !== 0 ? currentMusic.song.split('.')[0]:null}</h3>
          <p>Music Player</p>
        </div>
        <div>
          <AudioPlayer src={`http://localhost:7000/uploads/${currentMusic.song}` } controls autoPlay>

          </AudioPlayer>
          {/* <PrevButton >
            <BiSkipPrevious />
          </PrevButton>
          {!isPlaying ? (
            <PlayButton onClick={playingButton}>
              <AiFillPlayCircle />
            </PlayButton>
          ) : (
            <PlayButton onClick={playingButton}>
              <AiFillPauseCircle />
            </PlayButton>
          )}
          <NextButton>
            <BiSkipNext />
          </NextButton> */}
        </div>
      </DispContainer>
    </DisplayScreen>
  );
};

export default DisplaySong;
