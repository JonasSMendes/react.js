import { BrowserRouter, Routes, Route } from "react-router-dom";

import{SingUp} from './pages/singUp'
import { ShowData } from "./pages/showData";

import { ContextProvider } from "./contexts/context";


const app = () => {
  return(
    <ContextProvider>
      <BrowserRouter>
          <h1>tiutlo da pagina</h1>

       <Routes>
          <Route path="/" element={<SingUp/>} />
          <Route path="/exibir" element={<ShowData/>} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
   )
}

export default app