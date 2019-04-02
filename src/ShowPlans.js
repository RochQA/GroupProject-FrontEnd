import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import * as constants from './Constants.js';
import ShowPlansFunctions from './ShowPlansFunction';

class ShowPlans extends Component{
    constructor(props){
        super(props);
        let self = this;
        Axios.get(constants.GET_ALL_PLANS).then(function(response){
            self.setState({plans: response.data, message:""});
        }).catch(function(error){
            self.setState({plans: "error", message:""});
        });
    }
    displayMessage=(message1)=>{
        this.setState({message: message1});
    }
    render(){
        try{
        return(
            <div className="showPlans">
                {this.state.plans.map(item =>(
                    <div>
                    <p>Start date: {item.startDate.substring(0,10)}</p>
                    <p>End date: {item.endDate.substring(0,10)}</p>
                    <p>Trainer: {item.trainerName}</p>
                    <p>Group: {item.traineeGroup}</p>
                    <p>Topic: {item.topic}</p>
                    <p>Room: {item.roomNumber}</p>
                    <p>{item.id}</p>
                    <ShowPlansFunctions id={item.id}/>
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