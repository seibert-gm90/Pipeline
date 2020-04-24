import React from "react";
import "./notes.css";

export default function StickyNotes(props) {
  return (
    <div>
      <textarea>This is a sticky note. Leave yourself a message.</textarea>
      <div id="create">+</div>
    </div>
  );
}

$("#create").click(function() {
  $(this).before("<textarea></textarea>");
});
