import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { PageArea } from './styled'

import useApi from '../../helpers/olxApi'
import { doLogin } from "../../helpers/authHandler";

import { ErrorMensage } from "../../components/MainComponents";

import { PageContainer, PageTitle } from "../../components/MainComponents";


const SingUp = () =>{
    const api = useApi();


    const [myname, setmyname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('') 
    const [StateLoc, setStateLoc] = useState('')

    const [stateList, setStateList] = useState('');

    const [disable, setDisable] = useState(false)
    const [error, setError] = useState('')


    useEffect(()=>{
        const getStates = async () =>{
            const sList = await api.getStates();
            setStateList(sList);
        }
        getStates();
    },[])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setDisable(true)
/*
        const json = await api.login(email,password);
        if(json.error){
            setError(json.error)
        }else{
            doLogin(json.token, rememberPass);
            window.location.href = '/'
        }
*/
        setDisable(false);
    }

    return(
        <>
            <PageContainer>    
            <PageTitle>Cadastro</PageTitle>
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
                                type="text" 
                                placeholder="Nome Completo"
                                required
                                value={myname}
                                onChange={e=>setmyname(e.target.value)}/>
                            </div>
                        </label>

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
                        <div className="area-title">Estados</div>
                            <div className="area-input">
                               <select value={StateLoc} onChange={setStateLoc} required>
                                    <option></option>
                                    {stateList.map((i, k) =>
                                            <option key={k}>{i._id}</option>
                                        )}

                               </select>
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
                            
                            <div className="area-input">
                                <input 
                                disabled={disable} 
                                type="Password" 
                                placeholder="Confirm Password"
                                required
                                value={password}
                                onChange={e=>setPassword(e.target.value)}/>
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

export default SingUp;