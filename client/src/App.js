import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import "./App.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

import Footer from "./components/Footer";

<<<<<<< HEAD

export default class App extends Component {

  render(){
    return (
      <Router>
        <div>
          <Header />
        </div>
        <div>
          <Route path="/" component={SignIn} />
          <Route path="/home" component={Home} /> 
          </div>
          <div>
          <Footer />
        </div>
      </Router>
    );
    }
};

=======
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
>>>>>>> c43a1168ad094916a5e848c9bd8650379da8a38c

