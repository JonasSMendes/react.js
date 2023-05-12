import React from "react";
import { useRoutes } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';

export const Routes = () => {
    return useRoutes([
        { path: "/", element: <Home/>},
        { path: "/About", element: <About/>}
    ])
}