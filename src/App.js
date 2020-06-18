import React, { Component } from 'react';
import './App.css';

// components
import Navigation from './components/navbar';
import Home from './components/home';
import Register from './components/register';
import TransferForm from './components/transferForm'


import firebase from './components/firebase';
import {Router} from '@reach/router';
import 'react-bootstrap'

class App extends Component {

    constructor() {
      super();
      this.state = {
        user: null
      };
    }

    componentDidMount() {
      const ref = firebase.database().ref('user');

      ref.on('value', snapshot => {
        let FUser = snapshot.val();
        console.log(FUser);
        this.setState({user: FUser});
      })
    }
 
  
    render () {
        return (
          <div className="App">
            <Navigation user={this.state.user}/>

            <header className="App-header">
              <Router>
              <Home path="/" user={this.state.user}/>
              <Register path="/register"/>
              <TransferForm path="/transferForm" />
              </Router>
            </header>
          </div>
        );
    }

}

export default App;
