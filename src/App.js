import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navbar';
import Home from './components/home';

import 'react-bootstrap'

class App extends Component {

    constructor() {
      super();
      this.state = {
        user: null
      };
    }
 
  
    render () {
        return (
          <div className="App">
            <Navigation user={this.state.user}/>
            <header className="App-header">
              <Home />
            </header>
          </div>
        );
    }

}

export default App;
