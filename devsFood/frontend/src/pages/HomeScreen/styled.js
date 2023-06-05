import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
`;

export const CategoriesArea = styled.div`
    color: white;
    margin-top: 20px;

`;

export const CategoryList = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const ProductsArea = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const ProductsList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
`;
