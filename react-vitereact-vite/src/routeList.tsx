import { Route, Routes } from "react-router-dom"
import { About } from "./pages/about";
import { AboutItem} from "./pages/aboutItem";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notFound";
import { RequireOuth } from "./requireouth";

export const Routelist = () =>{
    return(
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/sobre" 
              element={
              <RequireOuth>
                <About/>
                </RequireOuth>
              }/>            
              <Route path="sobre/:slug" element={<AboutItem/>}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>

    )
}