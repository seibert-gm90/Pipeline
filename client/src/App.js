import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import "./App.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

import Footer from "./components/Footer";

class App extends Component {

  render(){
  return (
    <Router>
      
      <div>
        <Route path="/" component={SignIn} />
        <Route path="/home" component={Home} /> 
        </div>
        <div>
        <Footer />
<<<<<<< HEAD
      </AppDiv>
  )
=======
        </div>
    </Router>
  );
}
>>>>>>> ecf0f7b1731c5526c6db216270342e3fef368851
}

export default App;
