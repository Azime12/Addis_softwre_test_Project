import React from 'react'
import { DisplayScreen } from './Styles/DisplayScreen.style'
const DisplaySong = () => {
  return (
    <DisplayScreen>
        <audio>
            <source src='./hy/iop.mp3' type='audio/mpeg'/>
        </audio>
    </DisplayScreen>
  )
}

export default DisplaySong
