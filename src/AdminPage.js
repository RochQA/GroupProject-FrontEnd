import React, { Component } from 'react';
import './App.css';
import DisplayUser from './DisplayUser';

class AdminPage extends Component{
    render(){
        return(
            <div className="adminPage">
                <DisplayUser user={this.props.user} handleLogout={this.props.handleLogout}/>
                <p>admin stuff</p>
            </div>
        );
    }
}
export default AdminPage;