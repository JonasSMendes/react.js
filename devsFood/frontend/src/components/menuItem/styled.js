import styled from "styled-components";

export const LinkArea = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: ${props=>props.active ? "#0b4d0b" : ''};
    border-radius:10px;
    margin-bottom: 10px;
    transition: all 0.5s ease-out;

    &:hover{
        background-color: #0b4d0b;
    }

`;
    
export const LinkIcon = styled.img`
    width: 34px;
    height: auto;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    
`;