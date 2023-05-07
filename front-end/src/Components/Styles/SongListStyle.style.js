import styled from "styled-components";

export const SongListStyle = styled.div`
  width: 50%;
  height: 100vh;
  overflow-y: scroll;
  @media (max-width:786px){
    width: 100%;
  }
`;
export const Song = styled.p`
  align-items: center;
  margin-top: 0px;
  /* background-color: ${({ bg }) => (bg !== "" ? bg : "white")}; */
`;
export const List = styled.section`
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  background-color: white;
`;
