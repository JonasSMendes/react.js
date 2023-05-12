import React from "react";
import {HeaderArea} from './styled'
import {Link} from 'react-router-dom'

import { IsLogged } from "../../../helpers/authHandler";

const Header = () =>{

    let logged = IsLogged();

    return(
        <HeaderArea>
            <div className="Container">
                <div className="logo">
                    <Link to='/'>
                        <span className="logo-1">L</span>
                        <span className="logo-2">O</span>
                        <span className="logo-3">L</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged && 
                            <>
                            <li>
                                <Link to='/my-account'>Minha Conta</Link>
                            </li>
                            <li>
                                <Link to='/logo-out'>Sair</Link>
                            </li>

                            <li>
                                <Link to='' className="Button">Poste um Anuncio</Link>
                            </li>
                            </>
                        }
                        {!logged &&
                            <>
                             <li>
                                <Link to='/singin'>Login</Link>
                            </li>
                            <li>
                                <Link to='/singup'>Cadastrar</Link>
                            </li>

                            <li>
                                <Link to='/singin' className="Button">Poste um Anuncio</Link>
                            </li>
                            </>
                        }    
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    )
}

export default Header;