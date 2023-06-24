import styled from "styled-components";
import img from '../../assets/char.png'

export const Container = styled.div<{left?: number, top?:number, size?:number, sidePos?: number}>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props=> props.top}px;
    background-image: url(${img});
    background-position: 0px ${props => props.sidePos}px;
`;