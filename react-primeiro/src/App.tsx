import { useReducer, useState } from 'react';
import './App.css';
import { VideoPlayer } from './components/video';
import { ListReducer } from './reducers/listReducer';

export type Item = {
  id: number
  text: string
  done: boolean
}

function App() {

  const [list , dispatch] = useReducer(ListReducer, [])

  const handleAddClick = () =>{
    dispatch({
      type:'add',
      payload:{
        text: 'novo item'
      } 
    })
  }

  return (
    <div className="App">

        {list.map((i, index)=>(
          i.text
        ))}

      <button onClick={handleAddClick}>adicionar</button>
    </div>
  );
}

export default App;
