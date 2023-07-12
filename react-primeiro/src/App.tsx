import {  useReducer, useState } from 'react';
import './App.css';

import { Header } from './components/header.tsx/Header';
import { CountContext, CountInitialData } from './contexts/CountContext';
/*
export type Item = {
  id: number
  text: string
  done: boolean
}
*/
function App() {

  return(
    <div>
      <CountContext.Provider value={CountInitialData}>
        <Header/>
      </CountContext.Provider>
    </div>
  )
  /*


  const [list , dispatch] = useReducer(ListReducer, [])
  const [add, setAdd] = useState('')
  const [edit, setedit] = useState('')
  const [inputEdit, setImputEdit] = useState(false)

  const handleAddClick = () =>{

    if(add !== ''){
    dispatch({
      type:'add',
      payload:{
        text: add
      } 
    })
  }else{
    alert('o campo está vazio')
  }

    setAdd('')
  }
  const handleRemoveItem = (id: number) =>{
    dispatch({
      type:'remove',
      payload:{
        id: id
      }
    })
  }
  const handleToggle = (id: number) =>{
    dispatch({
    type:'toggle',
    payload:{
      id: id
    }
    })
  }

  const handleEditText = (id: number) =>{

    setImputEdit(true);

    dispatch({
      type: 'editText',
      payload:{
        id: id,
        newText: add
      }
    })
  }
  const handleEditClick = (id: number) => {
   dispatch({
    type: 'editText',
    payload:{
      id: id,
      newText: edit
    }
  })

  setedit('')
  setImputEdit(false)
  }

  return (
    <div className="App">

      <h3>lista de passageiros</h3>
      <button onClick={handleAddClick}>adicionar</button>
      <input value={add} onChange={(e) =>setAdd(e.target.value)} type="text" placeholder='digite seu texto'/>
    <ul>
        {list.map((i)=>(

          <li key={i.id}>
             <input onClick={()=> handleToggle(i.id)} checked={i.done} type="checkbox" />
             {i.text}
             <button onClick={()=> handleEditText(i.id)} >Editar</button>
            {inputEdit === true &&
              <>
              <input value={edit} onChange={(e) => setedit(e.target.value)} type="text" />
              <button onClick={() =>handleEditClick(i.id)} >enviar</button>
              </>
            }

             <button onClick={() => handleRemoveItem(i.id)}>Excluir</button>
          </li>

        ))}
    </ul>
      
    </div>
  );
  */
}

export default App;
