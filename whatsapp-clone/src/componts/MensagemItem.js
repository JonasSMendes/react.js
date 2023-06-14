import React from "react";
import './MensagemItem.css'

export default ({data, user}) =>{
    return(
        <div
        className="Mensage-Line"
        style={{
            justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
        }}
        >
            <div
             className="Mensagem-Item"
             style={{
                backgroundColor: user.id === data.author? '#DCF8C6' : '#fff' 
             }}
             >
                <div className="Mensage-Text">{data.body}</div>
                <div className="Mensage-Date">19:00</div>
            </div>
        </div>
    )
}