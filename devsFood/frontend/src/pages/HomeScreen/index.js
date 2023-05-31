import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Container,
        CategoriesArea
        ,CategoryList } from './styled';


import api from '../../api';


import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories,setCategories] = useState([]);

    const [activeCat, setActiveCat] = useState(0);

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
        
    },[activeCat])

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
        </Container>
    );
}