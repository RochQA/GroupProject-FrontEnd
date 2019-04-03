import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import * as constants from './Constants.js';

class DisplayTrainers extends Component {
    constructor(props) {
        super(props);
        var self = this;
        Axios.get(constants.GET_ALL_TRAINERS).then(function (response) {
            console.log(response);
            self.setState({ trainers: response.data });
        }).catch(function (error) {
        });
    }
    render() {
        try {
            return (
                <div className="displayTrainers">
                    <br />
                    <br/>
                    {this.state.trainers.map(item => (
                        <div className="container displayIndividualTrainer">
                            <div className="row">
                                <div className="offset-3 col-3">
                                    <p className="form-font">Name: {item.firstName} {item.lastName}</p>
                                </div>
                                <div className="col-4">
                                    <p className="form-font">Email: {item.email}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        } catch{
            return (
                <div className="displayTrainers">
                    <p>Trainers will be displayed here</p>
                </div>
            )
        }
    }
}
export default DisplayTrainers;