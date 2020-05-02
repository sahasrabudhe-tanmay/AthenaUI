import React, { Component } from 'react';
import './App.css';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/register/Register';
import Navbar from './components/navbar/Navbar';
import Boards from './components/boards/Boards';
import Home from './components/home/Home';
import Issues from './components/issues/Issues';

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
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/boards" component={Boards} />
          <Route path="/issues" component={Issues} />
          <Route path="/login" render={() => <Login setUser={this.setUser} />} />
          <Route path="/register" render={() => <Register setUser={this.setUser} />} />
        </Switch>
      </Router>
    );
  }
}