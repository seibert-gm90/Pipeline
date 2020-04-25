import React, { Component } from "react";
import { useHistory } from "react-router-dom"
// import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

import "./login.css";



class Login extends Component {
  render() {
    return (
      <form name="login">
        Username
        <input type="text" name="userid" />
        Password
        <input type="password" name="pswrd" />
        <input type="button" onclick="check(this.form)" value="Login" />
      </form>
    );
  }
}

export default Login;


