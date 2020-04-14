import React from "react"; 
import "./hamburger.css";


function Hamburger () {
  return (
    <nav role="navigation">
  <div id="menuToggle">

    <input type="checkbox"/>
    <span></span>
    <span></span>
    <span></span>
 
    <ul id="menu">
      <a href="#"><li>Calendar</li></a>
      <a href="#"><li>Notes</li></a>
      <a href="#"><li>Chat</li></a>
      <a href="#"><li>Log Out</li></a>
    </ul>
  </div>
</nav>
  )
}
export default Hamburger











