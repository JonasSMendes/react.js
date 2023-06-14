import React, { useState } from "react";
import './NewChat.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default ({user, chatlist, show, setShow}) => {

    const [list, setlist] = useState([
        { id: 123, avatar: 'https://i.pinimg.com/originals/e7/63/0c/e7630cb0fcfade92e4d98834053741e1.png', name: 'pedrinho ' },
        { id: 123, avatar: 'https://i.pinimg.com/originals/e7/63/0c/e7630cb0fcfade92e4d98834053741e1.png', name: 'pedrinho ' },
        { id: 123, avatar: 'https://i.pinimg.com/originals/e7/63/0c/e7630cb0fcfade92e4d98834053741e1.png', name: 'pedrinho ' },
        { id: 123, avatar: 'https://i.pinimg.com/originals/e7/63/0c/e7630cb0fcfade92e4d98834053741e1.png', name: 'pedrinho ' },
    ])

   const handleClose = () =>{
    setShow(false);
   }

    return (
        <div className="NewChat" style={{left: show? 0:-415}}>
            <div className="NewChat-head">
                <div onClick={handleClose} className="NewChat-backButoon">
                    <ArrowBackIcon style={{ color: '#fff' }} />
                </div>
                <div className="NewChat-headtitle">
                    Nova conversa
                </div>
            </div>
            <div className="NewChat-list">
                {list.map((item, index) => (
                    <div
                        className="NewChatie-item"
                        key={index}
                    >
                        <img className="NewChat--item-avatar" src={item.avatar} alt="" />
                        <div className="NewChat-item-name">
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}