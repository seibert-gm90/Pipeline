import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    <div className="box-container">
      {this.state.isLoginOpen && <LoginBox/>}
      {this.state.isRegisterOpen && <RegisterBox/>}
    </div>


     
  }
}

export default App;

