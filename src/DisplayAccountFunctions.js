import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import * as constants from './Constants.js';

class DisplayAccountFunctions extends Component{
    constructor(props){
        super(props);
    }
    deleteTrainer =()=>{
        var self = this;
        Axios.delete(constants.DELETE_ACCOUNT + this.props.id).then(function(response){
            console.log(response);
        }).catch(function(error){
        })
    }
    render(){
        return(
            <div>
                <button type="button" onClick={this.deleteTrainer}>Delete Trainer</button>
            </div>
        );
    }
}
export default DisplayAccountFunctions;