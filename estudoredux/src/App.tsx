import { useDispatch } from "react-redux";
import { setAge, setName } from "./redux/reducer/userReducer";

import { useAppSelector } from "./redux/hooks/useAppSelector";
import React from "react";
import { setThemeStatus } from "./redux/reducer/themeReducer";


function App() {
  const dispatch = useDispatch();
  const user = useAppSelector(state => state.user)
  const theme = useAppSelector(state => state.theme)
  
//trocando as informações do campo
  const HandleNameInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
    dispatch( setName(e.target.value))
  }
  const HandleAgeInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
    dispatch( setAge(parseInt(e.target.value)))
  }

//trocando o thema
  const handleSwitchTheme =()=>{
    dispatch( setThemeStatus(theme.status === 'ligth'? 'dark': 'ligth'));
  }

  return (
      <div>
        meu nome é: {user.name} e tenho {user.age} anos <br />
        Tema: {theme.status}
        <br /> <hr />
        <input onChange={HandleNameInput} type="text" value={user.name}/>
        <input onChange={HandleAgeInput} type="text" value={user.age}/>
        <br /> <hr />
        <button onClick={handleSwitchTheme} >Switch theme</button>

      </div>
  );
}

export default App;
