import React, { Component } from 'react';
import './App.css';
import {
    Route,
    Link,
    NavLink,
    HashRouter
  } from "react-router-dom";
import DisplayUser from './DisplayUser';
import AccountSetting from './AccountSetting'
import RoomsPage from './RoomsPage';
import DisplayTrainers from './DisplayTrainers';
import AdminRequests from './AdminRequests';
import AddTrainer from './AddTrainer';

class AdminPage extends Component{
    render(){
        return(
            <div className="adminPage">
                <DisplayUser user={this.props.user} handleLogout={this.props.handleLogout}/>
                <HashRouter basename="/user/admin">
                <ul className="topNavbar">
                    <li><NavLink to="/trainers">trainers</NavLink></li>
                    <li><NavLink to="/rooms">rooms</NavLink></li>
                    <li><NavLink to="/requests">requests</NavLink></li>
                    <li><NavLink to="/addtrainer">add trainer</NavLink></li>
                    <li><NavLink to="/settings">settings</NavLink></li>
                </ul>
                <div className="content">
                    <Route path="/settings" render={()=><AccountSetting/>}/>
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