import React, {useState} from "react";
import { Link } from "react-router-dom";
import { PageArea } from './styled'

import useApi from '../../helpers/olxApi'
import { doLogin } from "../../helpers/authHandler";

import { ErrorMensage } from "../../components/MainComponents";

import { PageContainer, PageTitle } from "../../components/MainComponents";


const SingIn = () =>{
    const api = useApi();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberPass, setRememberPass] = useState('') 
    const [disable, setDisable] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setDisable(true)

        const json = await api.login(email,password);
        if(json.error){
            setError(json.error)
        }else{
            doLogin(json.token, rememberPass);
            window.location.href = '/'
        }

        setDisable(false);
    }

    return(
        <>
            <PageContainer>    
            <PageTitle>Login</PageTitle>
                <PageArea>
                    {error &&
                        <ErrorMensage>{error}</ErrorMensage>
                    }
                    <div className="form-div-area">
                    
                    <form onSubmit={handleSubmit}>
                        <label className="area">
                            
                            <div className="area-input">
                                <input 
                                disabled={disable} 
                                type="email" 
                                placeholder="Email"
                                required
                                value={email}
                                onChange={e=>setEmail(e.target.value)}/>
                            </div>
                        </label>
                        <label className="area">
                            
                            <div className="area-input">
                                <input 
                                disabled={disable} 
                                    type="password" 
                                    placeholder="Senha"
                                    required
                                    value={password}
                                    onChange={e=>setPassword(e.target.value)}/>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area-title">Lembra senha</div>
                            <div className="area-input">
                                <input 
                                    disabled={disable} 
                                    type="checkbox"
                                    checked={rememberPass}
                                    onChange={()=> setRememberPass (!rememberPass)}/>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area-title"></div>
                            <div className="area-input">
                                <button disabled={disable}>Fazer Login</button>
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