import React, { useRef, useEffect } from "react";
import "../styles/ChatWindow.css";

const ChatWindow = ({ messages }) => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg, idx) => (
        <div key={idx} className={`message ${msg.sender === "Me" ? "me" : "other"}`}>
          <div className="message-text">{msg.text}</div>
          <div className="message-time">{msg.time} ✓✓</div>
        </div>
      ))}
      <div ref={endRef} />
    </div>
  );
};

export default ChatWindow;
