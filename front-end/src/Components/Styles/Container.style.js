import styled from 'styled-components'

export const ContentContainer = styled.div`
    display: flex;
    text-align: center;
    width:100vw;
    height:100vh;
    @media (max-width:900px) {
        flex-direction: column;
    }
`;