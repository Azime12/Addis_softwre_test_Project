import styled from "styled-components";

export const DeleteButton = styled.button`
  background: ${(props) => (props.$primary ? "palevioletred" : "white")};
  color: ${(props) => (props.$primary ? "white" : "palevioletred")};
    flex-grow: 1;
  /* font-size: 1em; */
  font-size: 20px;
  margin: 1em;
  align-items: center;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor:pointer;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
