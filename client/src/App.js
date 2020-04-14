import React, { Component } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom'

import "./App.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hamburger from "./components/Hamburger";

class App extends Component {

  render(){
  return (
    <Router>
  
      <div>
        <Header />
        <Hamburger />
        <Route path="/" component={SignIn} />
        <Route path="/home" component={Home} /> 
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
