import styled from "styled-components";

export const MainContainer = styled.div`
    overflow-X: hidden;
    width:100vw;
    height:100vh;
`
export const ContentContainer = styled.div`
    display: flex;
    text-align: center;
    width:100vw;    
    height:100vh;
    @media (max-width:786pxpx) {
        flex-direction: column;
    }
`;