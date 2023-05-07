import React, { useEffect, useState } from "react";
import { List, Song, SongListStyle } from "./Styles/SongListStyle.style";
import {
  addSong,
  updateSong,
  deleteSong,
  getSongs,
  playCurrent,
  single,
} from "./ReduxToolKit/Features/SongSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Button, Holder, ListButton } from "./Styles/Button.styled";
import { useNavigate } from "react-router-dom";
import { DeleteButton } from "./Styles/DeleteButton";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Card, Modal, Form } from "react-bootstrap";

const SongList = () => {
  const [data, setData] = useState([]);
  const [addValue, setAddValue] = useState({});
  const navigate = useNavigate();
  const songList = useSelector((state) => state.Songs.songs);
  // const current = useSelector((state) => state.Songs.currentSong);
  const dispatch = useDispatch(); // const current = useSelector((state) => state.Songs.currentSong);

  const handleSong = (song) => {
    // console.log("welcome", song);
    //   setData(song)
    dispatch(playCurrent(song));
    // navigate("/play", { state: { song }, replace: true });
  };
  const [show, setShow] = useState(false);
  const [deletedItem, setDeletedItem] = useState();
  // const navigate = useNavigate();
  const handleModal = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);
  // console.log(data)
  useEffect(() => {
    const fetchFunc = async () => {
      const { data } = await axios.get("http://localhost:7000/getSongs");
      // console.log(data);
      setData(data);
      dispatch(getSongs(data));
    };
    fetchFunc();
  }, []);
  // console.log(songList)
  const handleDelete = async (song) => {
    const id = song._id
    // const id = {Id}
    const {data} = await axios.delete('http://localhost:7000/deleteSong/'+ id);
    console.log(data)
    setDeletedItem(song);
    dispatch(deleteSong(data))
  };
  const handleChange = (e) => {
    e.preventDefault();
    setAddValue(e.target.value);
  };
  // console.log(current);
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
                 {items.song}
                </ListButton>
                <DeleteButton
                  deleteSong={items}
                  onClick={() => {
                    handleModal();
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
  //   <div className="d-flex align-items-cUpdate justify-content-center Update firstDiv">
  //   <Card
  //     bg="white"
  //     className="text-cUpdate  border-0 shadow-5 rounded-5 mx-auto pt-5 mb-5"
  //     style={{ width: "400px" }}
  //   >
  //     {/* <hr /> */}
  //     <Card.Body>
  //       <Form>
  //         <Form.Group>
  //           <Form.Floating>
  //             <Form.Control
  //               type="text"
  //               id="student"
  //               placeholder="Student Name"
  //               required
  //               controlid="validationCustom03"
  //               disabled
  //             />
  //             <label htmlFor="student">
  //               {deletedItem && deletedItem.song.split(".")[0]}
  //             </label>
  //           </Form.Floating>
  //         </Form.Group>
  //         <br />
  //       </Form>
  //       {/* <Button
  //       variant="danger"
  //       // type="submit"
  //       className="text-uppercase "
  //       onClick = {handleModal}
  //     >
  //       Delete
  //     </Button> */}
  //       <Modal show={show} onHide={handleClose}>
  //         <Modal.Header closeButton></Modal.Header>
  //         <Modal.Body className="text-capitalize">
  //           {`Do you want to delete ${
  //             deletedItem && deletedItem.song.split(".")[0]
  //           }?`}
  //         </Modal.Body>
  //         <Modal.Footer>
  //           <Button type="submit" onClick={handleDelete} variant="danger">
  //             Yes
  //           </Button>
  //           <Button variant="primary" onClick={handleClose}>
  //             No
  //           </Button>
  //         </Modal.Footer>
  //       </Modal>
  //     </Card.Body>
  //   </Card>
  // </div>
  );
};

export default SongList;
