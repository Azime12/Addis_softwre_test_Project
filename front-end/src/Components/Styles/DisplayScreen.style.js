import styled from "styled-components";

export const DisplayScreen = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;

export const Image = styled.img`
  width: 30%;
  border-radius: 10%;
`;
export const DispContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  padding-bottom: 2em;
  border-radius: 10px;
  h3 {
    margin-top: 3em;
  }
  p {
    color: #4f4f4f;
  }
  @media (max-width: 786px) {
    width: 100%;
    margin: 5px;
  }
  overflow-y: hidden;
`;


export const AudioPlayer = styled.audio`
  width: 100%;
  background-color: gold;
`;
export const EditSong = styled.button`
  align-items: center;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  padding: 15px 10px;
  margin: 20px;
  margin-top: 30px;
  
  color: white;
  background-color: palevioletred;
`;
export const ArtistHolder = styled.section`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: center;
  margin: 20px;
  p {
    margin-top: 25px;
  }
`;