import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
// own

import './App.css';
import './assets/css/index.css'
import Home from './views/Home';
import About from './views/About'
import PageControll from './controll/PageControll'

class App extends Component {
  render() {
    return (
      <div>
        <PageControll>
        <Router>
          <Switch>
              
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
          </Switch>  
        </Router>   
        </PageControll>
        
        
      </div>
    );
  }
}

export default App;
