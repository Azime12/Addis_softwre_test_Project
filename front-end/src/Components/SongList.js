import React, { useEffect } from "react";
import { List,  SongListStyle,DeleteButton,Holder, ListButton  } from "./Styles/SongListStyle.style";
import {
  deleteSong,
  getSongs,
  playCurrent,
} from "./ReduxToolKit/Features/SongSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";

const SongList = () => {
  const songList = useSelector((state) => state.Songs.songs);
  const dispatch = useDispatch();

  const handleSong = (song) => {
    dispatch(playCurrent(song));
  };
  useEffect(() => {
    const fetchFunc = async () => {
      const { data } = await axios.get("https://addis-software-songplayer.onrender.com/getSongs");
      dispatch(getSongs(data));
    };
    fetchFunc();
  }, []);
  const handleDelete = async (song) => {
    const id = song._id;
    const { data } = await axios.delete(
      "https://addis-software-songplayer.onrender.com/deleteSong/" + id
    );
    dispatch(deleteSong(data));
  };
  return (
    <>
      <SongListStyle>
        {songList && (
          <Holder>
            {songList.map((items, index) => (
              <List>
                <ListButton
                  key={index}
                  onClick={() => {
                    handleSong(items);
                  }}
                >
                  {items.artist}
                </ListButton>
                <DeleteButton
                  deleteSong={items}
                  onClick={() => {
                    handleDelete(items);
                  }}
                  primary
                >
                  <RiDeleteBin5Line />
                </DeleteButton>
              </List>
            ))}
          </Holder>
        )}
      </SongListStyle>
    </>
  );
};

export default SongList;
