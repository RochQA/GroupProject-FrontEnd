import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import * as constants from './Constants.js';

class DisplayTrainerFunctions extends Component{
    constructor(props){
        super(props);
    }
    deleteTrainer =()=>{
        var self = this;
        console.log(constants.DELETE_TRAINER + this.props.id);
        Axios.delete(constants.DELETE_TRAINER + this.props.id).then(function(response){
            console.log(response);
        }).catch(function(error){

        })
    }
    render(){
        return(
            <button type="button" onClick={this.deleteTrainer}>Delete Trainer</button>
        );
    }
}
export default DisplayTrainerFunctions;