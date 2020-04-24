import React, { Component } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom'

import "./App.css";
import SignIn from "./pages/signin";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import Header from "./components/Header";


class App extends Component {

  render(){
  return (
    <Router>
  
      <div>
        <Header />
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
