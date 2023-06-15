import React from "react";
import './Login.css'
import api from "../api";
import {signInWithPopup} from 'firebase/auth'
import { Auth, provider } from "../firebaseConfig";


export default ({Receive}) =>{

    const handleFacebookLogin = async () =>{
       signInWithPopup(Auth, provider).then((result)=>{
            Receive(result.user);
       }).catch((err)=>{
            console.log(err);
       })
    }

    return(
        <div className="login">
            <button onClick={handleFacebookLogin}>logar com o facebook</button>
        </div>
    )
}