import React, { Component } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom'

import "./App.css";
// import Login from "./components/Login/Login";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";


class App extends Component {

  render(){
  return (
    <Router>
      <div>
        <Header />
        <Dashboard />
        {/* <Route path="/" component={Login} /> */}
        <Route path="/home" component={Home} />
        {/* <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        </AppContext.Provider> */}
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
