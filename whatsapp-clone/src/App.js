import React, { useState, useEffect } from 'react';
import './App.css';

import ChatlistItem from './componts/ChatlistItem';
import ChatIntro from './componts/ChatIntro';
import ChatWindow from './componts/ChatWindow';


import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';


export default () => {

  const [chatlist, setChatlist] = useState([ 
    {Id: 1 , title:'jiji'},
    {Id: 2 , title:'jiji'},
    {Id: 3 , title:'jiji'},
  ]);

  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="App">
      <div className='side-bar'>
        <header>
          <img className='header-avater' src='https://i.pinimg.com/originals/e7/63/0c/e7630cb0fcfade92e4d98834053741e1.png' alt='' />
          <div className='header-button'>
            <div className='header-btn'>
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className='header-btn'>
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className='header-btn'>
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className='search'>
          <div className='search-input' >
            <SearchIcon fontSize='small' style={{ color: '#919191' }} />
            <input type='search' placeholder='Procurar ou começar uma nova conversa' />
          </div>
        </div>

        <div className='chat-list'>
          {chatlist.map((item, key)=>(
            <ChatlistItem 
                key={key}
                onCLick={()=>setActiveChat(chatlist[key])}
            />
          ))}
        </div>

      </div>
      <div className='content-area'>

        {activeChat.Id !== undefined &&
          <ChatWindow />
        }
        {activeChat.Id === undefined &&
          <ChatIntro/>
        }
        
      </div>
    </div>
  );
}



