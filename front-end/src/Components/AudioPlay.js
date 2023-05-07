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
import { useLocation } from "react-router-dom";
import { ContentContainer } from "./Styles/Container.style";
import FileUploads from "./FileUploads";
// import { SongListStyle } from "./Styles/SongListStyle.style";

const AudioPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation()
  const songData = location.state.song.song
  const name = location.state.song.song.split('.')[0]
  console.log(location.state.song.song)
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
  const [play, { pause, duration, sound }] = useSound(`http://localhost:7000/uploads/${songData}`);
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
      <DispContainer>
        <h2>Playing Now</h2>
        <Image src="https://picsum.photos/200/200" />
        <div>
          <h3>{name}</h3>
          <p>Muzmur Player</p>
        </div>
        <div>
          <TimeDisplay>
            <p>
              {currTime.min}:{currTime.sec}
            </p>
            <p>
              {time.min}:{time.sec}
            </p>
          </TimeDisplay>
          <RangeInput
            type="range"
            min="0"
            max={duration / 1000}
            default="0"
            value={seconds}
            onChange={(e) => {
              sound.seek([e.target.value]);
            }}
          />
        </div>
        <div>
          <PrevButton >
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
          </NextButton>
        </div>
      </DispContainer>
    </DisplayScreen>
  );
};

export default AudioPlay;