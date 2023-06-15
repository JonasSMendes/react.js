import React, { useState, useEffect } from 'react';
import './App.css';

import ChatlistItem from './componts/ChatlistItem';
import ChatIntro from './componts/ChatIntro';
import ChatWindow from './componts/ChatWindow';
import NewChat from './componts/NewChat';
import Login from './componts/Login';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';


export default () => {

  const [chatlist, setChatlist] = useState([
    { chatId: 1, title: 'jiji', Image: 'https://i.pinimg.com/originals/e7/63/0c/e7630cb0fcfade92e4d98834053741e1.png' },
    { chatId: 2, title: 'jiji', Image: 'https://i.pinimg.com/originals/e7/63/0c/e7630cb0fcfade92e4d98834053741e1.png' },
    { chatId: 3, title: 'jiji', Image: 'https://i.pinimg.com/originals/e7/63/0c/e7630cb0fcfade92e4d98834053741e1.png' },
  ]);

  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null)
///
  const handleLoginData = async (u) =>{
    
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    setUser(newUser);
  }

  if(user === null){
    return (<Login Receive={handleLoginData} />)
  }
////
  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewchat = () =>{
    setShowNewChat(true)
  }

  return (
    <div className="App">
      <div className='side-bar'>
        <NewChat 
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className='header-avater' src={user.avatar} alt='' />
          <div className='header-button'>
            <div className='header-btn'>
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div onClick={handleNewchat} className='header-btn'>
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

        <div className="chat-list">
          {chatlist.map((item, index) => (
            <ChatlistItem
              key={index}
              data={item}
              active={activeChat.chatId === chatlist[index].chatId}
              Click={() => setActiveChat(chatlist[index])}
            />
          ))}
        </div>

      </div>
      <div className='content-area'>
        
        {activeChat.chatId !== undefined &&
          <ChatWindow
            user={user}
          />
        }

        {activeChat.chatId === undefined &&
          <ChatIntro />
        }

      </div>
    </div>
  );
}



