import React, {useState} from 'react';
import './App.css';
import { Item } from './types/item';

import MyList from './components/MyList'
import AddArea from './components/AddArea';

const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name:'malhar as coxas',done: false},
    {id: 2, name:'malhar os braços',done: true},
    {id: 3, name:'malhar as costas',done: false},
  ]);

  const handleAddText = (textName:string) =>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: textName,
      done: false
    })

    setList(newList);
  }

  return (
    <div className="App">
      <div className='Area'>
          <header className='header'>Lista de tarefas</header>

          {/*area de adiconar nova tarefa*/}
            <AddArea onEnter={handleAddText} />

          {/*lista de tarefas*/ }
          {list.map((item,index,)=>(
            <MyList 
            key = {index}
            i = {item}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
