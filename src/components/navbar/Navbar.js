import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to="/home" className="navLink" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/boards" className="navLink" activeClassName="active">Boards</NavLink></li>
                    <li><NavLink to="/issues" className="navLink" activeClassName="active">Issues</NavLink></li>
                </ul>
            </nav>
        )
    }
}

