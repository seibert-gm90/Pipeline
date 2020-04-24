import React from "react";
import AOS from "aos";
import "./dashboard/dashboard.css";

AOS.init();
AOS.init({
  duration: 1200,
});

function RoleSelect() {
  return (
    <div className="dash">
      <div className="container panel">
        <h1 className="move">Select role to continue</h1>
      </div>

      <div className="item right" data-aos="fade-right">
        <button type="button" className="btn btn-success">
          Broker
        </button>
      </div>
      <div className="item left" data-aos="fade-left">
        <button type="button" className="btn btn-primary">
          Assistant
        </button>
      </div>
    </div>
  );
}
export default RoleSelect;
