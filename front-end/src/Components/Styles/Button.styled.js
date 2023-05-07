import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  margin-right: 20px;
  background-color: ${({ bg }) => bg || "green"};
  color: ${({ color }) => color || "white"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
export const ListButton = styled.li`
  display: block;
  width: 100%;
  border: none;
  margin-top: 0.1em;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
 
`;
export const Holder = styled.div`
    margin-bottom: 100px;
`
