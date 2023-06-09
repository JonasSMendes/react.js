import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {Container,
        ProductsArea,
        ProductsPhoto,
        ProductsInfoArea,
        ProductsDetails,
        ProductsQuantityArea,
        ProductsButtons,
        ProductsName ,
        ProductsIngredients,
        Button,
        ProductQuantity,
        ProductPrice,
        ProdutcQtImage,
        ProductText
        
    } from './styled'

export default ({ data, setStatus }) =>{

    const dispatch = useDispatch();
    const [qt, setQt] = useState(1);

    useEffect(()=>{
        setQt(1);
    },[data])

    const handleCancelButton = () =>{
        setStatus(false)
    }


    const handleMinusQt = () =>{
        if(qt > 1 ){
            setQt( qt - 1)
        }
    }
    const handlePlusQt = () =>{
        setQt(qt + 1)
    }

    const handleAddToCart = () =>{
        //juntar as informaçoes e mandar isso pro reducer
        //fechar o modal

        dispatch({
            type:'ADD_PRODUCT',
            payload:{
                data,
                qt
            }
        })

        setStatus(false)
    }


    return(
        <Container>
            <ProductsArea>

                <ProductsPhoto src={data.image}/>

                <ProductsInfoArea>

                    <ProductsDetails>
                            <ProductsName>{data.name}</ProductsName>
                            <ProductsIngredients>{data.ingredients}</ProductsIngredients>
                    </ProductsDetails>

                    <ProductsQuantityArea>
                            <ProductQuantity>
                                    <ProdutcQtImage onClick={handleMinusQt} src='/assets/minus.png' />
                                    <ProductText>{qt}</ProductText>
                                    <ProdutcQtImage onClick={handlePlusQt} src='/assets/plus.png' />
                            </ProductQuantity>
                            <ProductPrice>
                                    R${ (data.price * qt).toFixed(2)}
                            </ProductPrice>
                    </ProductsQuantityArea>

                </ProductsInfoArea>

            </ProductsArea>

            <ProductsButtons>
                <Button onClick={handleCancelButton} small={true}> Cancelar </Button>
                <Button onClick={handleAddToCart}> Adicinar ao carrinho </Button>
            </ProductsButtons>
        </Container>
    )
}