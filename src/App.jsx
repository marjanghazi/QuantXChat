import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import "./styles/App.css";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    setMessages([...messages, { sender: "Me", text, time: new Date().toLocaleTimeString().slice(0,5) }]);
  };

  return (
    <div className="app-container">
      <Sidebar selectUser={setSelectedUser} selectedUser={selectedUser} />
      <div className="chat-section">
        <Header selectedUser={selectedUser} />
        {selectedUser ? (
          <>
            <ChatWindow messages={messages} />
            <ChatInput sendMessage={sendMessage} />
          </>
        ) : (
          <div className="empty-chat">Select a chat to start messaging</div>
        )}
      </div>
    </div>
  );
}

export default App;
