import React, {useState} from "react";
import {Container, Logo, SearchImput} from './styled'


export default ({search, onSearch}) => {

    const [activeInput, setActiveInput] = useState(search == '' ? false : true);

    const handleInputFocus = () =>{
        setActiveInput(true)
    }
    const handleInputBlur = () =>{
        if(search == ''){
            setActiveInput(false)
        }
    }
    const handleChange = (e) => {
        onSearch( e.target.value );
    }

    return(
        <Container>
            <Logo src="/assets/logo.png" />
            <SearchImput
             type='text'
             placeholder="Digite um produto..."
             value={search}
             onChange={handleChange}
             onFocus={handleInputFocus}
             onBlur={handleInputBlur}
             active={activeInput}
            />
        </Container>
    )
}