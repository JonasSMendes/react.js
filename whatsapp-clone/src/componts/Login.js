import React, {useState} from "react";
import './Login.css'
import api from "../api";
import {signInWithPopup} from 'firebase/auth'
import { Auth, provider } from "../firebaseConfig";



export default ({Click, user, logout}) =>{

    return(
        <div className="login">
            <button onClick={Click} >logar com o face</button>
            <div className="img-Login">
                <img src={user}/>
            </div>
            <button onClick={logout} >quero sair</button>
        </div>
    )
}