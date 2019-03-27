import React, { Component } from 'react';
import './App.css';
import './TrainerPage.css'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import AccountSetting from './AccountSetting'
import DisplayUser from './DisplayUser';
import TrainerRequests from './TrainerRequests';
import TrainerCalendar from './TrainerCalendar';

class TrainerPage extends Component{
    render(){
        return(
            <div className="trainerPage">
                <DisplayUser user={this.props.user} handleLogout={this.props.handleLogout}/>
                <HashRouter basename="/user">
                <ul className="topNavbar">
                    <li id="calendar-nav"><NavLink to="/calendar">calendar</NavLink></li>
                    <li id="requests-nav"><NavLink to="/requests">requests</NavLink></li>
                    <li id="settings-nav"><NavLink to="/settings">settings</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" render={()=><h2>Welcome to the app</h2>}/>
                    <Route path="/settings" render={()=><AccountSetting/>}/>
                    <Route path="/requests" render={()=><TrainerRequests/>}/>
                    <Route path="/calendar" render={()=><TrainerCalendar/>}/>
                </div>
                </HashRouter>
            </div>
        );
    }
}
export default TrainerPage;