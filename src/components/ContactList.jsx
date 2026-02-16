import React from "react";
import "../styles/ContactList.css";

const contacts = [
  { name: "Alice", last: "Hey, how are you?", time: "5:08 PM", unread: 1 },
  { name: "Bob", last: "Meeting at 7", time: "4:45 PM", unread: 0 },
  { name: "Charlie", last: "See you soon!", time: "3:30 PM", unread: 2 },
  { name: "David", last: "Sent a file", time: "2:15 PM", unread: 0 }
];

const ContactList = ({ selectUser, selectedUser }) => {
  return (
    <div className="contact-list">
      {contacts.map((user, index) => (
        <div
          key={index}
          className={`contact-item ${selectedUser === user.name ? "active" : ""}`}
          onClick={() => selectUser(user.name)}
        >
          <div className="avatar">{user.name[0]}</div>
          <div className="contact-info">
            <div className="contact-name">{user.name}</div>
            <div className="last-message">{user.last}</div>
          </div>
          <div className="contact-meta">
            <span className="time">{user.time}</span>
            {user.unread > 0 && <span className="unread">{user.unread}</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
