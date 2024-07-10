// src/components/ChatButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import chatIcon from "../assets/chat.png"

const ChatButton = () => {
  return (
    <Link to="/chat">
      <button className="flex items-center justify-center">
        <img 
          src={chatIcon} 
          alt="Chat Now" 
          className="w-16 h-16" // Adjust size as needed
        />
      </button>
    </Link>
  );
};

export default ChatButton;
