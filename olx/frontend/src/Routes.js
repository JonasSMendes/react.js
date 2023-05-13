import React from "react";
import { useRoutes } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import NotFund from "./Pages/NotFund";
import SingIn from "./Pages/Singin";

export const Routes = () => {
    return useRoutes([
        { path: "/", element: <Home/>},
        { path: "/About", element: <About/>},
        { path: '*' , element: <NotFund/>},
        { path: '/singin' , element:<SingIn/> }
    ])
}