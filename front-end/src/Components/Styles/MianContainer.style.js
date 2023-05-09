import styled from "styled-components";

export const MainContainer = styled.div`
    overflow: hidden;
    width:100vw;
    height:100vh;
    @media (max-width:786px) {
        overflow-y: scroll;
    }
    /* background-image: url('https://picsum.photos/200/200');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center; */
`
export const ContentContainer = styled.div`
    display: flex;
    text-align: center;
    width:100vw;
    height:100vh;
    @media (max-width:786px) {
        flex-direction: column;
    }
`;