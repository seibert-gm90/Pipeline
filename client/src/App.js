import React, { Component } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom'

import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import Header from "./components/Header";


class App extends Component {

  render(){
  return (
    <Router>
      <div>
        <Header />
        <Hamburger />
        <Route path="/" component={Login} />
        <Route path="/home" component={Home} />
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
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
