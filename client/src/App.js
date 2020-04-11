import React, { Component } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom'

import "./App.css";
import SignIn from "./pages/SignIn";
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
        <div>
        <Footer />
        </div>
    </Router>

  );
}
}

export default App
