import React from "react";
import ContactList from "./ContactList";
import "../styles/Sidebar.css";

const Sidebar = ({ selectUser, selectedUser }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>QuantX</h2>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search or start a new chat" />
      </div>
      <ContactList selectUser={selectUser} selectedUser={selectedUser} />
    </div>
  );
};

export default Sidebar;
