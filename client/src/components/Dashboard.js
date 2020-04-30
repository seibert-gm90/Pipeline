import React from "react"; 
import AOS from "aos";
import "./dashboard/dashboard.css";
import ProgressTracker from "./progressTracker";
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
        <h1 className="move">Cap Center Mortgage</h1>
        <ProgressTracker />
      </div>


      <div className="item right" data-aos="fade-right" >
        <div className="text" >
        <h3>Lease Sent To Client</h3>
        <br></br>
        <h4>12:46pm</h4>
        <button class="btn"></button><i class="fas fa-sms"></i>
      </div>
      </div>
      <div className="item left" data-aos="fade-left">
      <div className="text">
        <h3>Lease Signed</h3>
        <br></br>
        <h4> 4:21pm</h4>
        <button class="btn"></button><i class="fas fa-sms"></i>
      </div>
      </div>
      <div className="item right" data-aos="fade-right" >
        <div className="text" >
        <h3>Keys Exchanged</h3>
        <br></br>
        <h4>12:46pm</h4>
        <button class="btn"></button><i class="fas fa-sms"></i>
      </div>
      </div>
      </div>
      
  );
}
export default Dashboard;
