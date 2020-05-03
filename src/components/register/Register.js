import React, { Component } from 'react';
import './Register.css';
const registerUser = require('../../http/restService').registerUser;

export default class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            username: '',
            email: '',
            password: ''
        }
    }

    nameChanged = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    usernameChanged = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    emailChanged = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    passwordChanged = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    registerUser = () => {
        registerUser(this.state, response => {
            const responseStatus = response.data.responseStatus;
            if (responseStatus.status === 'FAILURE') {
                console.log(responseStatus.message);
            } else {
                console.log(response.data.user);
                this.props.setUser(response.data.user);
                localStorage.setItem('token', response.data.token);
            }
        });
    }

    render() {
        return (
            <div className="register-box">
                <h2 className="register-header">Register</h2>
                <input type="text" id="name" className="text-input" placeholder="Name" value={this.state.name} onChange={this.nameChanged} />
                <input type="text" id="username" className="text-input" placeholder="Username" value={this.state.username} onChange={this.usernameChanged} />
                <input type="text" id="email" className="text-input" placeholder="Email" value={this.state.email} onChange={this.emailChanged} />
                <input type="password" id="password" className="text-input" placeholder="Password" value={this.state.password} onChange={this.passwordChanged} />
                <button className="btn-primary login-btn" onClick={this.registerUser}>Register</button>
            </div>
        )
    }
}