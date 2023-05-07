import styled from "styled-components";

export const DisplayScreen = styled.div`
  width: 100%;
  height: 100vh;
`;

export const PlayButton = styled.button`
  background: none;
  border: none;
  align-items: center;
  justify-content: center;
  color: #27ae60;
  font-size: 3em;
`;

export const NextButton = styled(PlayButton)`
  color: #27ae60;
  font-size: 3em;
`;

export const PrevButton = styled(PlayButton)`
  /* size: "3em";
  color: "#27AE60" 
  color */
  color: #27ae60;
  font-size: 3em;
`;
export const Image = styled.img`
  width: 30%;
  border-radius: 10%;
`;
export const DispContainer = styled.div`
  /* background-color: white; */
  /* margin-top: 100px; */
  width: 100%;
  max-width: 100vw;
  /* margin:  auto; */
  padding-bottom: 2em;
  border-radius: 10px;
  h3 {
    margin-top: 3em;
  }
  p {
    margin-top: -1em;
    color: #4f4f4f;
  }
  @media (max-width: 786px) {
    width: 100%;
    margin:5px
  }
  overflow-y: hidden;
`;
export const TimeDisplay = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  color: #828282;
  font-size: smaller;
`;
export const RangeInput = styled.input`
  width: 80%;
`;
