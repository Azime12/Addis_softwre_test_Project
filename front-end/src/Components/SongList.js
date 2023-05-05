import React, { useEffect, useState } from "react";
import { SongListStyle } from "./Styles/SongListStyle.style";
import axios from "axios";

const SongList = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchFunc = async () => {
      const {data} = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(data);
      console.log(data);
    };
    fetchFunc();
  }, []);
  // console.log(data)
  return (
    <SongListStyle>
      {data && (
        <ul>
          {data.map((items, index) => (
            <li key={index}>{items.id}</li>
          ))}
        </ul>
      )}
    </SongListStyle>
  );
};

export default SongList;
