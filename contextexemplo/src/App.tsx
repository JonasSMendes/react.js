import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useContext } from "react";

import{SingUp} from './pages/singUp'
import { ShowData } from "./pages/showData";

import { Context } from "./contexts/context";




const app = () => {

  const {state, dispatch} = useContext(Context);

  const handleSwitchTheme = () =>{
    if(state.theme.status === 'light'){
      dispatch({
        type:'CHANGE_THEME',
        payload:{
          status:'dark'
        }
      })
    }else{
      dispatch({
        type:'CHANGE_THEME',
        payload:{
          status:'light'
        }
      })
    }
  }

  return(
      <BrowserRouter>
      <div style={{backgroundColor: state.theme.status === 'light' ? '#fff' : '#002',
                  color:state.theme.status === 'light' ? '#002' : '#fff'}}>

          <h1>tiutlo da pagina </h1>
          <br />
          tema: {state.theme.status}
          <button onClick={handleSwitchTheme}>Switch theme</button>
        <Routes>
          <Route path="/" element={<SingUp/>} />
          <Route path="/exibir" element={<ShowData/>} />
        </Routes>

      </div>
      </BrowserRouter>
   )
}

export default app