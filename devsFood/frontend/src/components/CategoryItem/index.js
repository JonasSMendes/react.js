import React from "react";
import { Container,CategoryImage } from './styled'

export default ({data, activeCat, setActiveCat}) =>{

    const handleCatClick = () =>{
        setActiveCat(data.id);
    }

    return(
        <Container active={activeCat} id={data.id} onClick={handleCatClick}>
           <CategoryImage src={data.image} />
        </Container>
    )
}