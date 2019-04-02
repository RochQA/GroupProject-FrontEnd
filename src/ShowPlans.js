import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import * as constants from './Constants.js';

class ShowPlans extends Component{
    render(){
        let self = this;
        Axios.get(constants.GET_ALL_PLANS).then(function(response){
            self.setState({plans: response.data});
        }).catch(function(error){
            self.setState({plans: "error"});
        });
        try{
        return(
            <div className="showPlans">
                {this.state.plans.map(item =>(
                    <div>
                    <p>Start date: {item.startDate}</p>
                    <p>End date: {item.endDate}</p>
                    <p>Trainer: {item.trainerName}</p>
                    <p>Group: {item.traineeGroup}</p>
                    <p>Topic: {item.topic}</p>
                    <p>Room: {item.roomNumber}</p>
                    </div>
                ))}
            </div>
        );
        }catch{
            return(
                <div className="showPlans">
                    <h2>No plans here currently</h2>
                </div>
            );
        }
    }
}
export default ShowPlans;