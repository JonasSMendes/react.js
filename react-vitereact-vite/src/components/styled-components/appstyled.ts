import styled from "styled-components";

type Botaoprops = {
    bg: string
    small?: boolean
    
  }

  type container = {
    bgcolor:string
  }

export const Container = styled.div<container>`
    max-width: 600px;
    background-color: ${props => props.bgcolor};
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    
    span{
        font-weight: bold;
        color: black;
    }

    .link{
        color: black;


        &:hover{
            color: red;
        }
    }

    @media( max-width: 500px) {
        background-color:green;
        flex-direction: column;


        span{
            color: blue;
        }
    }
`;



export const Botao = styled.button<Botaoprops>`
    font-size: ${(props) => props.small ? '10px' : '20px' } ;
    background-color:${props => props.bg} ;
    cursor:pointer;
`;