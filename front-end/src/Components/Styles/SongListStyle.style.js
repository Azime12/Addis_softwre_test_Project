import styled from "styled-components";

export const SongListStyle = styled.div`
  width: 20%;
  height: 100vh;
  background-color: thistle;
  li {
    list-style: none;
    margin-left: 0px;
    padding-left: 0px;
    background-color: darkmagenta;
    margin: 5px;
    font-size: large;
    &:hover {
        background-color: honeydew;
        cursor: pointer;
    }
}
overflow-y: scroll;
`;
