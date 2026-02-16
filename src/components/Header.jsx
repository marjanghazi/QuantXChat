import React from "react";
import "../styles/Header.css";

const Header = ({ selectedUser }) => {
  return (
    <div className="header">
      {selectedUser ? (
        <>
          <div className="user-avatar">{selectedUser[0]}</div>
          <div className="user-info">
            <div className="user-name">{selectedUser}</div>
            <div className="user-status">online</div>
          </div>
        </>
      ) : (
        <h2>QuantX</h2>
      )}
    </div>
  );
};

export default Header;
