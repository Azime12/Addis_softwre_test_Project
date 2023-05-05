import React, { useEffect, useState } from "react";
import { ContentContainer } from "./Styles/Container.style";
import FileUploads from "./FileUploads";
import { DisplayScreen } from "./Styles/DisplayScreen.style";
// import { SongListStyle } from "./Styles/SongListStyle.style";
import axios from "axios";
import SongList from "./SongList";
import DisplaySong from "./DisplaySong";

const Container = () => {
    
  return (
    <ContentContainer>
      <SongList />
      <DisplaySong />
      <FileUploads />
    </ContentContainer>
  );
};

export default Container;
