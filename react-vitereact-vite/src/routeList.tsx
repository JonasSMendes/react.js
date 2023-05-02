import { Route, Routes, useRoutes } from "react-router-dom"
import { About } from "./pages/about";
import { AboutItem} from "./pages/aboutItem";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notFound";
import { RequireOuth } from "./requireouth";

export const Routelist = () =>{

    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/sobre', element: <RequireOuth><About/></RequireOuth>},
        {path: '/sobre:slug', element: <AboutItem/>},
        {path: '*', element: <NotFound/>},
    ])
/*
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
    */
}