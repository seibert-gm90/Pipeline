import React from "react";
import "./index.css";

export default function StickyNotes(props) {
  return (
    <>

    <div className="notecontainer">
      <textarea>This is a sticky note. Leave yourself a message.</textarea>
      <div id="create">+</div>
    </div>
    {/* <div id="create" className="button">
    <button onClick={(e) => this.before(e)}>+</button>
    </div> */}

    </>
  );
};


