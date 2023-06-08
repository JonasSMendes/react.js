import styled from 'styled-components'


export const Container = styled.div`
    width: 650px;
    padding: 20px;

`;

export const ProductsArea = styled.div`
    height: 200px;
    display: flex;
`;

export const ProductsButtons = styled.div`
    height: 50px;
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    

`;

export const Button = styled.button`
    border: 0;
    background-color: #073c07;
    box-shadow: 4px 5px 0px rgba(0,0,0,0.16);
    color: #fff;
    font-size: ${props => props.small ? '14px' : '22px'};
    font-weight: bold;
    padding: ${props=> props.small ? '5px 10px' : '10px 20px'};
    margin-left: 20px;
    border-radius: 5px;
    cursor: pointer;
`;

export const ProductsPhoto = styled.img`
    width: 310px;
    border-radius: 10px;
`;
export const ProductsInfoArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;

export const ProductsDetails = styled.div`
    height: 50px;  
`;

export const ProductsQuantityArea = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;

`;
export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;

`;
export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    background-color: #073c07;
    border-radius: 5px;

`;
export const ProdutcQtImage = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`;

export const ProductText = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    margin-left: 10px;
    margin-right: 10px;
`;


export const ProductsIngredients = styled.div`
   font-size: 14px;
`;
export const ProductsName = styled.div`
    font-size: 30px;
    font-weight: bold;
`;



