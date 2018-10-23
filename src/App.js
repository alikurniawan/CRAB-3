import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
// own
import { Container } from 'reactstrap';
import './App.css';
import './assets/css/index.css'
import Home from './views/Home';
import About from './views/About'

class App extends Component {
  render() {
    return (
      <div>
        <Container>
        <Router>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
          </Switch>  
        </Router>   
        </Container>
      </div>
    );
  }
}

export default App;
