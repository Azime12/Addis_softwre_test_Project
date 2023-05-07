import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DisplaySong from "./DisplaySong";
import Container from "./Container";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Container/>}/>
        <Route exact path="/play" element={<DisplaySong />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
