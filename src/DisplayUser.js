import React, { Component } from 'react';
import {
    NavLink,
    HashRouter
  } from "react-router-dom";
import './App.css';

class DisplayUser extends Component{
    render(){
        return(
            <div className="userDisplay">
            <HashRouter>
                <p id="username-display">User: {this.props.user}</p>
                <NavLink to="/"><button type="button" id="logout-button" onClick={this.props.handleLogout}>Log out</button></NavLink>
            </HashRouter>
            </div>
        );
    }
}
export default DisplayUser