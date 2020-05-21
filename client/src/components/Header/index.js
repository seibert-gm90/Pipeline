import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="/home">
              <li>Dashboard</li>
            </a>
            <a href="/Calendar">
              <li>Daily Calendar</li>
            </a>
            <a href="/Week">
              <li>Weekly Calendar</li>
            </a>
            <a href="/notes">
              <li>Notes</li>
            </a>
            <a href="/chat">
              <li>Chat</li>
            </a>
            <a href="/login">
              <li>Log Out</li>
            </a>
          </ul>
        </div>
      </nav>

      <div className="container fluid head">
        <img src="logo.png" alt="logo" href="/home" />
        <a href="" className="logout">
          Logout
        </a>
      </div>
    </div>
  );
}

export default Header;
