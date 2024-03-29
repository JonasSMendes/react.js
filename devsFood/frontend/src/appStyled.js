import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: red;
    height: 100vh;
`;

export const Menu = styled.div`
    display: flex;
    background-color: #136713;
    width: 80px;
    justify-content: center;
    align-items: center;
   flex-direction: column;
`;

export const PageBody = styled.div`
    display: flex;
    background-image: url('/assets/bg.png');
    background-color: #00980d;
    flex: 1;
    overflow-y: auto;
`;