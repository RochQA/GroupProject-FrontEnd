import React, { Component } from 'react';
import './App.css';
import {
    Route,
    Link,
    NavLink,
    HashRouter
  } from "react-router-dom";
import DisplayUser from './DisplayUser';

class TrainerPage extends Component{
    render(){
        return(
            <div className="trainerPage">
                <DisplayUser user={this.props.user} handleLogout={this.props.handleLogout}/>
                <HashRouter basename="/trainer">
                <ul className="topNavbar">
                    <li><a><NavLink to="/calendar">calendar</NavLink></a></li>
                    <li><a><NavLink to="/requests">requests</NavLink></a></li>
                    <li><a><NavLink to="/settings">settings</NavLink></a></li>
                </ul>
                </HashRouter>
            </div>
        );
    }
}
export default TrainerPage;