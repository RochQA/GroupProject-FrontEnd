import React, { Component } from 'react';
import './App.css';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import DisplayUser from './DisplayUser';
import AccountSettings from './AccountSettings'
import RoomsPage from './RoomsPage';
import DisplayTrainers from './DisplayTrainers';
import AdminRequests from './AdminRequests';
import AddTrainer from './AddTrainer';

class AdminPage extends Component{
    render(){
        return(
            <div className="adminPage">
                <DisplayUser user={this.props.user} handleLogout={this.props.handleLogout}/>
                <HashRouter basename="/user">
                <ul className="topNavbar">
                    <li id="trainers-nav"><NavLink to="/trainers">trainers</NavLink></li>
                    <li id="rooms-nav"><NavLink to="/rooms">rooms</NavLink></li>
                    <li id="requests-nav"><NavLink to="/requests">requests</NavLink></li>
                    <li id="add-trainer-nav"><NavLink to="/addtrainer">add trainer</NavLink></li>
                    <li id="settings-nav"><NavLink to="/settings">settings</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" render={()=><h2>Welcome to the app</h2>}/>
                    <Route path="/settings" render={()=><AccountSettings/>}/>
                    <Route path="/rooms" render={()=><RoomsPage/>}/>
                    <Route path="/trainers" render={()=><DisplayTrainers/>}/>
                    <Route path="/requests" render={()=><AdminRequests/>}/>
                    <Route path="/addtrainer" render={()=><AddTrainer/>}/>
                </div>
                </HashRouter>
            </div>
        );
    }
}
export default AdminPage;