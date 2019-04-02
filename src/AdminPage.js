import React, { Component } from 'react';
import './App.css';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import DisplayUser from './DisplayUser';
import AccountSettings from './AccountSettings'
import ShowPlans from './ShowPlans';
import DisplayTrainers from './DisplayTrainers';
import AddTrainer from './AddTrainer';
import CreatePlan from './CreatePlan';
import AccountManager from './AccountManager';

class AdminPage extends Component{
    render(){
        return(
            <div className="adminPage">
                <DisplayUser user={this.props.user} handleLogout={this.props.handleLogout}/>
                <HashRouter basename="/user">
                <ul className="topNavbar">
                    <li id="trainers-nav"><NavLink to="/trainers">TRAINERS</NavLink></li>
                    <li id="show-plans-nav"><NavLink to="/showPlans">SHOW PLANS</NavLink></li>
                    <li id="create-plane"><NavLink to="/createAPlan">CREATE PLAN</NavLink></li>
                    <li id="add-trainer-nav"><NavLink to="/addtrainer">ADD TRAINER</NavLink></li>
                    <li id="account-management-nav"><NavLink to="/accountManager">ACCOUNT MANAGER</NavLink></li>
                    <li id="settings-nav"><NavLink to="/settings">SETTINGS</NavLink></li>
                    
                </ul>
                <div className="content">
                    <Route exact path="/" render={()=><h2>Welcome to the app</h2>}/>
                    <Route path="/settings" render={()=><AccountSettings/>}/>
                    <Route path="/showPlans" render={()=><ShowPlans/>}/>
                    <Route path="/trainers" render={()=><DisplayTrainers/>}/>
                    <Route path="/addtrainer" render={()=><AddTrainer/>}/>
                    <Route path="/createAPlan" render={()=><CreatePlan/>}/>
                    <Route path="/accountManager" render={()=><AccountManager/>}/>
                </div>
                </HashRouter>
            </div>
        );
    }
}
export default AdminPage;