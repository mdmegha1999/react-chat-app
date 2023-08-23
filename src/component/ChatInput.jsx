import React, { useState } from 'react';
import { RiSendPlaneFill } from "react-icons/ri";

import '../App.css'
const ChatInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="chat-form">
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message..."
        className="chat-input"
      />
      <button type="submit"  className="send-button" ><RiSendPlaneFill /></button>

    </form>
  );
};

export default ChatInput;
