import React, { Component } from 'react';
import './App.css';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import AccountSettings from './AccountSettings'
import DisplayUser from './DisplayUser';
import ShowPlans from './ShowPlans';

class TrainerPage extends Component{
    render(){
        return(
            <div className="trainerPage">
                <DisplayUser user={this.props.user} handleLogout={this.props.handleLogout}/>
                <HashRouter basename="/user">
                <ul className="topNavbar">
                    <li id="showPlans-nav"><NavLink to="/showPlans">PLANS</NavLink></li>
                    <li id="settings-nav"><NavLink to="/settings">SETTINGS</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" render={()=><h2>Welcome to the app</h2>}/>
                    <Route path="/settings" render={()=><AccountSettings user={this.props.user} id={this.props.id}/>}/>
                    <Route path="/showPlans" render={()=><ShowPlans/>}/>
                </div>
                </HashRouter>
            </div>
        );
    }
}
export default TrainerPage;