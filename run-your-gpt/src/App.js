
import React, { useState, useEffect } from 'react';
import './App.css';
import ChatInput from './component/ChatInput';
import ChatDisplay from './component/ChatDisplay';
// import Login from './component/Login';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [webSocket, setWebSocket] = useState(null);
  const [responseText, setResponseText] = useState(""); 

  useEffect(() => {
    const newWebSocket = new WebSocket(
      'wss://husband-responded-stage-skins.trycloudflare.com/api/v1/stream'
    );
    setWebSocket(newWebSocket);

    newWebSocket.onopen = () => {
      console.log('WebSocket connection opened.');
    };

    newWebSocket.onmessage = (event) => {
      const response = JSON.parse(event.data);
      if (response.event === 'text_stream') {
        const newText = response.text;
        setResponseText(prevResponseTexts => [...prevResponseTexts, newText]); 
        setMessages([...messages, newText]);
        console.log(response.text);
      }
    };
    }, []);

  useEffect(() => {
    localStorage.setItem('oldmsgs', JSON.stringify(messages));
  }, [messages]);

  const request = {
  };

  const sendMessage = (message) => {
    setMessages([...messages, message, 'generating...']);
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      request.user_input = message;
      request.prompt = message;
      request.history = [];
      webSocket.send(JSON.stringify(request));
      setResponseText(""); 
    } else {
      console.log('WebSocket is not open.');
    }
  };

  return (
    <div className="app">
      
      <ChatDisplay messages={messages} responseText={responseText} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatPage;
