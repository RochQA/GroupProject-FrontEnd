import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import * as constants from './Constants.js';
import ShowPlansFunctions from './ShowPlansFunction';

class ShowPlans extends Component {
    constructor(props) {
        super(props);
        let self = this;
        Axios.get(constants.GET_ALL_PLANS).then(function (response) {
            self.setState({ plans: response.data, message: "" });
        }).catch(function (error) {
            self.setState({ plans: "error", message: "" });
        });
    }
    displayMessage = (message1) => {
        this.setState({ message: message1 });
    }
    deleteHandler = () => {
        this.setState({ message: "Plan deleted" })
    }
    render() {
        try {
            return (
                <div className="showPlans">
                    <p>{this.state.message}</p>
                    {this.state.plans.map(item => (
                        <div>
                            <br/>
                            <div className="container planSheet">
                                <div className="row">
                                    <div className="col-4 cssBorder">
                                        <p>Trainer: {item.trainerName}</p>
                                    </div>
                                    <div className="col-4 cssBorder">
                                        <p>Group: {item.traineeGroup}</p>
                                    </div>
                                    <div className="col-4 cssBorder">
                                        <p>Start date: {item.startDate.substring(0, 10)}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4 cssBorder">
                                        <p>Room: {item.roomNumber}</p>
                                    </div>
                                    <div className="col-4 cssBorder">
                                        <p>Topic: {item.topic}</p>
                                    </div>
                                    <div className="col-4 cssBorder">
                                        <p>End date: {item.endDate.substring(0, 10)}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <ShowPlansFunctions id={item.id} deleteHandler={this.deleteHandler} />
                            </div>
                        </div>
                    ))}
                </div>
            );
        } catch{
            return (
                <div className="showPlans">
                    <h2>No plans here currently</h2>
                </div>
            );
        }
    }
}
export default ShowPlans;