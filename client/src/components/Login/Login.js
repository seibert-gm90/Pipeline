import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Amplify, { Auth } from "aws-amplify";
import { AppContext } from "../../libs/contextLib";
import "./login.css";
import Fix from "./aws-exports";

Amplify.configure(Fix);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      console.log(email);
      const res = await Auth.signIn(email, password);
      if (res) {
        console.log("Successfully logged in!");
        console.log(res);
        history.push("/role");
      }
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bssize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1"></Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        </DropdownButton> */}
        <Button block bssize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
        <Button block bssize="large" disabled={!validateForm()} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
