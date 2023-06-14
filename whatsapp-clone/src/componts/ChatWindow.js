import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from 'emoji-picker-react'
import './ChatWindow.css'


import MensagemItem from "./MensagemItem";

//icons###
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
//#######

export default ({user, }) => {


    const body = useRef();

    //pegando a verificação de acesso ao microfone no navegador
    let recognation = null;
    let SpeechRecognation = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognation !== undefined){
        recognation = new SpeechRecognation();
    }



    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listen, setListen] = useState(false);
    const [list, setList] = useState([
        {author: 123 ,body: 'bla bla'},
        {author: 123 ,body: 'bla bla bla bla'},
        {author: 1234 ,body: 'bla bla bla'},
        {author: 123 ,body: 'bla bla'},
        {author: 123 ,body: 'bla bla bla bla'},
        {author: 1234 ,body: 'bla bla bla'},
        {author: 123 ,body: 'bla bla'},
        {author: 123 ,body: 'bla bla bla bla'},
        {author: 1234 ,body: 'bla bla bla'},
        {author: 123 ,body: 'bla bla'},
        {author: 123 ,body: 'bla bla bla bla'},
        {author: 1234 ,body: 'bla bla bla'},
        {author: 123 ,body: 'bla bla'},
        {author: 123 ,body: 'bla bla bla bla'},
        {author: 1234 ,body: 'bla bla bla'},
        {author: 123 ,body: 'bla bla'},
        {author: 123 ,body: 'bla bla bla bla'},
        {author: 1234 ,body: 'bla bla bla'},
        {author: 123 ,body: 'bla bla'},
        {author: 123 ,body: 'bla bla bla bla'},
        {author: 1234 ,body: 'bla bla bla'},
        {author: 123 ,body: 'bla bla'},
        {author: 123 ,body: 'bla bla bla bla'},
        {author: 1234 ,body: 'bla bla bla'},
        {author: 123 ,body: 'bla bla'},
        {author: 123 ,body: 'bla bla bla bla'},
        {author: 1234 ,body: 'bla bla bla'},
        {author: 123 ,body: 'bla bla'},
        {author: 123 ,body: 'bla bla bla bla'},
        {author: 1234 ,body: 'bla bla bla'},
        {author: 123 ,body: 'bla bla'},
        {author: 123 ,body: 'bla bla bla bla'},
        {author: 1234 ,body: 'bla bla bla'},

    ]);

    useEffect(()=>{
        
        if(body.current.ScrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.ScrollHeight - body.current.offsetHeight;
        }

    }, [list])

    //botoes dos emojis na tela
    const handleOpenEmoji = () =>{
        setEmojiOpen(true)
    }
    const handleCloseEmoji =() =>{
        setEmojiOpen(false)
    }

    //aplicando emoji na tela / tela de emojis
    const handleEmojiClick = (e) =>{
        setText(text + e.emoji)
    }

    //botoes de microfone e de enviar mensagem
    const handleMicClick = ()  =>{
        if(recognation !== null){

            recognation.onstart = () =>{
                setListen(true);
            }
            recognation.onend = () =>{
                setListen(false);
            }
            recognation.onresult = (e) =>{
                setText(e.results[0][0].transcript );
            }


            recognation.start();
        }
    }

    const handleSendClick = () =>{

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


            <div ref={body} className="chatWindow-body">
                {list.map((item, index)=>(
                    <MensagemItem
                        key={index}
                        data={item}
                        user={user}
                    />
                ))}
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
                                value={text}
                                onChange={e=>setText(e.target.value)}
                         />
                </div>
                <div className="Chatwindow-pos">

                    {text === '' &&
                    <div className="chatWindow-btn">
                        <MicIcon onClick={handleMicClick} style={{ color: listen ? '#126ECE' : '#919191' }} />
                    </div>
                    }

                    {text !== '' &&

                    <div onClick={handleSendClick} className="chatWindow-btn">
                        <SendIcon style={{ color: '#919191' }} />
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}