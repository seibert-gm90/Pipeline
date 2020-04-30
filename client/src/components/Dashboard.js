import React from "react"; 
import AOS from "aos";
import "./dashboard/dashboard.css";
import ProgressTracker from "./progress tracker";
import StickyNotes from "./Notes";


AOS.init();
AOS.init({
  duration: 1200
});


function Dashboard() {
  return (
    <div className="dash">
      <div className="container panel">
      <div id="add">+</div>
        <h1 className="move">Dunkin Donuts</h1>
        <ProgressTracker />
      </div>
      <div className="item right" data-aos="fade-right">
        Lease Sent To Client
        <br></br>
        12:46pm
      </div>
      <div className="item left" data-aos="fade-left">
        Lease Signed
        <br></br>
        4:21pm
      </div>
    </div>
  );
}
export default Dashboard;
