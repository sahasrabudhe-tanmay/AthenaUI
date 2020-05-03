import React, { Component } from 'react';
import './App.css';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/register/Register';
import Navbar from './components/navbar/Navbar';
import Boards from './components/boards/Boards';
import Home from './components/home/Home';
import Issues from './components/issues/Issues';
import PrivateRoute from './routing/PrivateRoute';
import { createBrowserHistory } from 'history';

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
    const history = createBrowserHistory({forceRefresh: true});
    return (
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/boards">
            <Boards />
          </PrivateRoute>
          <PrivateRoute path="/issues">
            <Issues />
          </PrivateRoute>
          <Route path="/login">
            {({ location }) => <Login setUser={this.setUser} location={location} history={history}/>}
          </Route>
          <Route path="/register">
            <Register setUser={this.setUser} />
          </Route>
        </Switch>
      </Router>
    );
  }
}