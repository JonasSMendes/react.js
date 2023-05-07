import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'

import { Context } from '../contexts/context'

export const SingUp = () => {

const { dispatch ,state } = useContext(Context)

const [nameImput, setNameInput] = useState('');
const [ageImput, setAgeInput] = useState(0);
const [cityImput, setCityInput] = useState('');

    // funçoes do input
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setNameInput(e.target.value)
    }

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setAgeInput( parseInt(e.target.value))
    }

    const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setCityInput(e.target.value)
    }

    // a função do user reducer

    const handleSave = () =>{
        dispatch({
            type: 'CHANGE_NAME',
            payload:{
                name: nameImput
            }
        })
        dispatch({
            type: 'CHANGE_AGE',
            payload:{
                age: ageImput
            }
        })
        dispatch({
            type: 'CHANGE_CITY',
            payload:{
                city: cityImput
            }
        })
    }


    return(
        <div>
          <h3>tela singUp (tema é {state.theme.status})</h3> <br />
          
            <input
                type="text"
                placeholder='Digite seu Nome:'
                value={nameImput}
                onChange={handleNameChange}
            /> <br />
             <input
                type="text"
                placeholder='Digite sua Idade:'
                value={ageImput}
                onChange={handleAgeChange}
            /> <br />
             <input
                type="text"
                placeholder='Digite sua cidade:'
                value={cityImput}
                onChange={handleCityChange}
            /> <br />

            <button onClick={handleSave}>salvar</button>


        <br />
            <Link to='/exibir'> ir para showData</Link>
        </div>

    )
}