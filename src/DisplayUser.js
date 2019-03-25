import React, { Component } from 'react';
import './App.css';

class DisplayUser extends Component{
    render(){
        return(
            <div className="userDisplay">
                <p>User: {this.props.user}</p>
                <button type="button" onClick={this.props.handleLogout}>Log out</button>
            </div>
        );
    }
}
export default DisplayUser