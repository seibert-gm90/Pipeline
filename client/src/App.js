import React, { Component } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom'

import "./App.css";
// import Login from "./components/Login/Login";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import Header from "./components/Header";
import RoleSelect from "./components/RoleSelect"
import Dashboard from "./components/Dashboard";
import { AppContext } from "./libs/contextLib";



class App extends Component {

  

  render(){
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Login} />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/role" component={RoleSelect} />
      </div>
      <span>
        <div>
          <Footer />
        </div>
      </span>
    </Router>
  );
}
}

export default App
