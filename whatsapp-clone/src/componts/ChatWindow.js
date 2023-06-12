import React, { useState } from "react";
import EmojiPicker from 'emoji-picker-react'
import './ChatWindow.css'

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

export default () => {


    const [emojiOpen, setEmojiOpen] = useState(false);

    const handleOpenEmoji = () =>{
        setEmojiOpen(true)
    }
    const handleCloseEmoji =() =>{
        setEmojiOpen(false)
    }


    const handleEmojiClick = () =>{

    }

    return (
        <div className="chatWindow">
            <div className="chatWindow-header">
                <div className="chatWindow-headerInfo">

                    <img className="chatwindow-avatar" src="https://i.pinimg.com/originals/e7/63/0c/e7630cb0fcfade92e4d98834053741e1.png" />
                    <div className="chatwindow-name">kiki bruxeira</div>


                </div>
                <div className="chatWindow-button-header">

                    <div className="chatWindow-btn">
                        <SearchIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow-btn">
                        <AttachFileIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow-btn">
                        <MoreVertIcon style={{ color: '#919191' }} />
                    </div>

                </div>
            </div>
            <div className="chatWindow-body">

            </div>


            <div className="chatwindow-emoji-area" 
                style={{height: emojiOpen? '300px' : '0px'}}
            >
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    searchDisabled
                    skinTonesDisabled
                    width={'100%'}
                    height={'300px'}
                    defaultSkinTone 
                    emojiStyle="apple"
                />
            </div>


            <div className="chatWindow-footer">
                <div className="Chatwindow-pre">

                    <div className="chatWindow-btn" 
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen? 40:0}}
                    >
                        <CloseIcon style={{ color: '#919191' }} />
                    </div>



                    <div className="chatWindow-btn"
                        onClick={handleOpenEmoji}
                        
                    >
                        <SentimentVerySatisfiedIcon style={{ color: emojiOpen?'#009688' : '#919191' }} />
                    </div>

                </div>
                <div className="Chatwindow-input-area">
                        <input  className="chatWindow-input"
                                type="text"
                                placeholder="Digite uma mensagem"
                         />
                </div>
                <div className="Chatwindow-pos">
                    <div className="chatWindow-btn">
                        <SendIcon style={{ color: '#919191' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}