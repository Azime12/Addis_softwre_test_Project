import React, { useEffect, useState } from "react";
import { ContentContainer } from "./Styles/Container.style";
import FileUploads from "./FileUploads";
import { DisplayScreen } from "./Styles/DisplayScreen.style";
// import { SongListStyle } from "./Styles/SongListStyle.style";
import axios from "axios";
import SongList from "./SongList";
import DisplaySong from "./DisplaySong";
import Header from "./Header";
import { MainContainer } from "./Styles/MianContainer.style";
import { useSelector } from "react-redux";
const Container = () => {
  const song = useSelector((state)=> state.Songs.selected)
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <SongList />
        {<DisplaySong/>}
        <FileUploads />
      </ContentContainer>
    </MainContainer>
  );
};

export default Container;
