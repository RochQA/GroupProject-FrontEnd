import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import * as constants from './Constants.js';
import DisplayTrainerFunctions from './DisplayTrainerFunctions';

class DisplayTrainers extends Component{
    constructor(props){
        super(props);
        var self = this;
        Axios.get(constants.GET_ALL_ACCOUNTS).then(function(response){
            console.log(response);
            self.setState({trainers:response.data});
        }).catch(function(error){
            self.setState({trainers: "error"});
        });
    }
    render(){
        try{
        return(
            <div className="displayTrainers">
                {this.state.trainers.map(item =>(
                    <ul className="displayIndividualTrainer">
                        <p>Email: {item.email}</p>
                        <p>Name: {item.firstName} {item.lastName}</p>
                        <DisplayTrainerFunctions id={item.id}/>
                    </ul>
                ))}
            </div>
        );}catch{
            return(
            <div className="displayTrainers">
              <p>Trainers will be displayed here</p>  
            </div>
            )
        }
    }
}
export default DisplayTrainers;