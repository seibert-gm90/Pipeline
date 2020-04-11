import React from "react";
import "app.css";

class SignIn extends Component {
  render() {
    
    <div className="box-container">
      {this.state.isLoginOpen && <LoginBox />}
      {this.state.isRegisterOpen && <RegisterBox />}
    </div>;
  }
}

export default SignIn;
