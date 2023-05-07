import styled from "styled-components";

export const UploadContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 20%;
  background-color: #00ffff;
  /* margin: auto; */
  height: 100vh;
  text-align: center;
  font-family: arial;
  width: 100%;
  @media (max-width:786px){
    width: 100%;
    max-width: 100%;
    margin-top: 5px;
  }
  /* border:none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 20%;
    font-size: 18px; */
`;
export const UploadView = styled.img`
  margin: 1em;
  width: 85%;
  border-radius: 50px;
  align-items: center;
`;
export const UploadButton = styled.input`
  align-items: center;
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  margin: 20px;
  color: white;
  background-color: palevioletred;
`;
export const FileInput = styled.input`
  width: 100%;
  align-items: center;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 5px;
  margin-top: 20px;
  color: white;
  background-color: #8aaae5;
`;
