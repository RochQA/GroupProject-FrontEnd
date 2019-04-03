import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import * as constants from './Constants.js';

class ShowPlansFunction extends Component{
    constructor(props){
        super(props);
    }
    deletePlan =()=>{
        let self = this;
        Axios.delete(constants.DELETE_PLAN + this.props.id).then(function(response){
            self.props.deleteHandler();
        }).catch(function(error){

        });
    }
    render(){
        return(
            <div>
                <button id="noColour" type="button" onClick={this.deletePlan}>Delete plan</button>
            </div>
        );
    }
}
export default ShowPlansFunction;