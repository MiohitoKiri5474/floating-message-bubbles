import React, { useState, useEffect } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleAddMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      timestamp: Date.now(),
    };
    setMessages((prevMessages) => [newMessage, ...prevMessages]);
  };

  // Automatically remove messages after 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setMessages((prevMessages) =>
        prevMessages.filter((message) => now - message.timestamp < 3000),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <MessageList messages={messages} />
      <MessageInput onSend={handleAddMessage} />
    </div>
  );
};

export default App;
