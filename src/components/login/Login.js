import React, { Component } from 'react';
import './Login.css';
import '../../App.css';
const loginUser = require('../../http/restService').loginUser;

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    usernameChanged = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    passwordChanged = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    userLogin = () => {
        loginUser(this.state, response => {
            console.log('In component - ', response);
            const responseStatus = response.data.responseStatus;
            if (responseStatus.status === 'FAILURE') {
                console.log(responseStatus.message);
            } else {
                console.log(response.data.user);
                this.props.setUser(response.data.user);
                localStorage.setItem('token', response.data.token);
                const cbLocation = this.props.location.state.cbLocation;
                this.props.history.replace(cbLocation);
            }
        });

    }

    render() {
        return (
            <div className="login-box">
                <h2 className="login-header">Sign In</h2>
                <input type="text" id="username" className="text-input" placeholder="Username" value={this.state.username} onChange={this.usernameChanged} />
                <input type="password" id="password" className="text-input" placeholder="Password" value={this.state.password} onChange={this.passwordChanged} />
                <button className="btn-primary login-btn" onClick={this.userLogin}>Login</button>
            </div>
        )
    }
}
