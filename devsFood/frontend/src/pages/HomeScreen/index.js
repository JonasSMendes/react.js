import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {Container,
        CategoriesArea,
        CategoryList,
        ProductsArea,
        ProductsList,
        ProductsPaginationArea,
        ProductsPaginationItem,

    
} from './styled';


import api from '../../api';


import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductsItem from '../../components/ProductsItem';

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories,setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] =useState(0);

    const [activeCat, setActiveCat] = useState(0);
    const [activePage, setActivePage] =useState(0);

    const getProducts = async () =>{
        const prods = await api.getProducts();
        if(prods.error == ''){
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.pages);
        }
    }

    useEffect(()=>{
        const getCategoris = async () =>{
            const cat = await api.getcategoris();
            if(cat.error == ''){
                setCategories(cat.result);
            }
        }
        getCategoris();
    }, [])

    useEffect(()=>{
        setProducts([]);
        getProducts();
    },[activeCat, activePage])

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length > 0 &&
                <>
                    <CategoriesArea>
                        selecione uma Categoria
                        <CategoryList>
                            <CategoryItem
                                data={{
                                    id:0,
                                    title: 'todas as categorias',
                                    image:'/assets/food-and-restaurant.png'}}
                                    activeCat={activeCat}
                                    setActiveCat={setActiveCat}
                                    />
                            {categories.map((item,index)=>(
                                <CategoryItem
                                    key={index}
                                    data={item}
                                    activeCat={activeCat}
                                    setActiveCat={setActiveCat}
                                    />
                            ))}
                        </CategoryList>
                    </CategoriesArea>
                </>
            }

            {products.length > 0 &&
            <ProductsArea>
                <ProductsList>
                    {products.map( (item, index) =>(
                        <ProductsItem   key={index}
                                        data={item} />
                    ) )}
                </ProductsList>
            </ProductsArea>
            }

            {totalPages > 0 &&
            
                <ProductsPaginationArea>

                    {Array(totalPages).fill(0).map((item, index) =>(
                        
                        
                        
                        <ProductsPaginationItem
                         key={index}
                         active={activePage}
                         current={index + 1}
                         onClick={()=>{
                            setActivePage(index + 1)
                         }}
                         >

                            {index + 1}

                        </ProductsPaginationItem>
                    ))}
                    
                </ProductsPaginationArea>
            }

        </Container>
    );
}