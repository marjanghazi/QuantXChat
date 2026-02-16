import React, { useState } from "react";
import "../styles/ChatInput.css";

const ChatInput = ({ sendMessage }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      sendMessage(text);
      setText("");
    }
  };

  return (
    <div className="chat-input">
      <button className="emoji-btn">😊</button>
      <input
        type="text"
        placeholder="Type a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button className="send-btn" onClick={handleSend}>➡️</button>
    </div>
  );
};

export default ChatInput;
