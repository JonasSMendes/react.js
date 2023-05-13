import React from "react";
import { Link } from "react-router-dom";
import { PageArea } from './styled'

import { PageContainer, PageTitle } from "../../components/MainComponents";


const SingIn = () =>{
    return(
        <>
            <PageContainer>    
                <PageArea>
                    <div className="form-div-area">
                    <PageTitle>Login</PageTitle>
                    <form>
                        <label className="area">
                            
                            <div className="area-input">
                                <input type="email" placeholder="Email"/>
                            </div>
                        </label>
                        <label className="area">
                            
                            <div className="area-input">
                                <input type="password" placeholder="Senha"/>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area-title">Lembra senha</div>
                            <div className="area-input">
                                <input type="checkbox"/>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area-title"></div>
                            <div className="area-input">
                                <button>Fazer Login</button>
                            </div>
                        </label>
                    </form>
                    </div>
                </PageArea>
            </PageContainer>
        </>
    )
}

export default SingIn;