import React, { Component } from 'react';
import './App.css';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/register/Register';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }
  }

  setUser = (user) => {
    this.setState({
      user: user
    }, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <Router>
            <Route path="/login" render={() => <Login setUser={this.setUser} />} />
            <Route path="/register" render={() => <Register setUser={this.setUser} />} />
      </Router>
    );
  }
}