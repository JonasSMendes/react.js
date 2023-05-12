import React from "react";
import { Link } from "react-router-dom";

const Page = () =>{
    return(
        <>
        <div>
             <h1>Pagina Inicial</h1> 
        </div>
        <Link to={'/About'}>Sobre</Link>
        </>
    )
}

export default Page;