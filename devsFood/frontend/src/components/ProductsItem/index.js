import React from "react";
import {Container,
        ProductsPhotoArea,
        ProductsInfoArea,
        ProductsButtonArea,
        ProductsPhoto,
        ProductsName,
        ProductsPrice,
        ProductsIngredients,
        ProdutsButton,
 } from './styled'

export default ({data}) =>{
    return(
        <Container>
            <ProductsPhotoArea>
                <ProductsPhoto src={data.image}/>
            </ProductsPhotoArea>
            <ProductsInfoArea>
                <ProductsName>{data.name}</ProductsName>
                <ProductsPrice> R${data.price}</ProductsPrice>
                <ProductsIngredients>{data.ingredients}</ProductsIngredients>
            </ProductsInfoArea>
            <ProductsButtonArea>
                <ProdutsButton src='/assets/next.png' />
            </ProductsButtonArea>
        </Container>
    )
}