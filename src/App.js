import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import './assets/css/index.css'
import Home from './assets/jsx/pages/home';

// own
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
              
          </Switch>  
        </Router>       
        
      </div>
    );
  }
}

export default App;
