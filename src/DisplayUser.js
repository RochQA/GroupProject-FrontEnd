import React, { Component } from 'react';
import {
    Route,
    Link,
    NavLink,
    HashRouter
  } from "react-router-dom";
import './App.css';

class DisplayUser extends Component{
    render(){
        return(
            <div className="userDisplay">
            <HashRouter>
                <p>User: {this.props.user}</p>
                <NavLink to="/login"><button type="button" onClick={this.props.handleLogout}>Log out</button></NavLink>
            </HashRouter>
            </div>
        );
    }
}
export default DisplayUser