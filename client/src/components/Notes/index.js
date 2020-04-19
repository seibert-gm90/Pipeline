import React from "react"; 
import "./notes.css";



function StickyNotes() {
  return (
    <textarea>This is a sticky note.  Leave yourself a message.</textarea>
    <div id="create">+</div> 
  );
}

$("#create").click(function() {
    $(this).before("<textarea></textarea>");
  });


export default StickyNotes;


