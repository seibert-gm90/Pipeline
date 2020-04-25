import React from "react";
import "./notes.css";

export default function StickyNotes(props) {
  render(){
  return (
    <>

    <div>
      <textarea>This is a sticky note. Leave yourself a message.</textarea>
      {/* <div id="create">+</div> */}
    </div>
    <div id="create" className="button">
    <button onClick={(e) => this.before(e)} className="waves-effect blue waves-light btn">+</button>
    </div>

    </>
  );
};


// $("#create").click(function() {
//   $(this).before("<textarea></textarea>");
// });


