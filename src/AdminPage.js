import React, { Component } from 'react';
import './App.css';
import {
    Route,
    Link,
    NavLink,
    HashRouter
  } from "react-router-dom";
import DisplayUser from './DisplayUser';

class AdminPage extends Component{
    render(){
        return(
            <div className="adminPage">
                <DisplayUser user={this.props.user} handleLogout={this.props.handleLogout}/>
                <HashRouter basename="/admin">
                <ul className="topNavbar">
                    <li><NavLink to="/trainers">trainers</NavLink></li>
                    <li><NavLink to="/rooms">rooms</NavLink></li>
                    <li><NavLink to="/requests">requests</NavLink></li>
                    <li><NavLink to="/addtrainer">add trainer</NavLink></li>
                    <li><NavLink to="/settings">settings</NavLink></li>
                </ul>
                </HashRouter>
            </div>
        );
    }
}
export default AdminPage;