import React from "react"; 
import AOS from "aos";
import "./dashboard/dashboard.css";

AOS.init();
AOS.init({
  duration: 1200
});

function Dashboard() {
  return (
    <div className="dash">
      <div class="container panel">
        <h1 className="move">Open Projects Here</h1>
      </div>

     
      <div class="item right" data-aos="fade-right">
        Data Here
      </div>
      <div class="item left" data-aos="fade-left">
        Data Here
      </div>
     
     
      
    </div>
  );
}
export default Dashboard;
