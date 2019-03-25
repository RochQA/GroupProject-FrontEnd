import React, { Component } from 'react';
import './App.css';
import DisplayUser from './DisplayUser';

class TrainerPage extends Component{
    render(){
        return(
            <div className="trainerPage">
                <DisplayUser user={this.props.user} handleLogout={this.props.handleLogout}/>
                <p>trainer stuff</p>
            </div>
        );
    }
}
export default TrainerPage;