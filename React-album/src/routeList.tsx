import { useRoutes } from "react-router-dom"
import { Galeria } from "./pages/Galeria"
import { NotFound } from "./pages/NotFound"
import { Home } from "./pages/home"
import { PhotoFull } from "./pages/photoFull"

export const RouteList = () =>{
    return useRoutes([

        {path:'/' , element:<Home/>},
        {path: '*', element: <NotFound/>},
        {path: '/Galeria', element: <Galeria/>},
        {path: '/photoFull', element: <PhotoFull/>},
    ])
}