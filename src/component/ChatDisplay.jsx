import React from 'react';

const ChatDisplay = ({ messages, responseText }) => {
  return (
    <div className="chat-display">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.type}`}>
          {message.content}
        </div>
      ))}
      {responseText && ( 
        <div className="message response">
          {responseText}
        </div>
      )}
    </div>
  );
};

export default ChatDisplay;

