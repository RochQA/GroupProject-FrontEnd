import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import * as constants from './Constants.js';
import Calendar from 'react-calendar';

class CreatePlan extends Component {
    constructor(props) {
        super(props);
        this.state = { stage: "startDate" };
    }
    updateState = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value, message: "" });
    }
    selectStart = (date) => {
        this.setState({ stage: "endDate", startDate: date });
    }
    selectEnd = (date) => {
        this.setState({ stage: "form", endDate: date });
    }
    goToStart = () => {
        this.setState({ stage: "startDate" });
    }
    planCreate = (e) => {
        e.preventDefault();
        var self = this;
        let body = {
            startDate: this.state.startDate, endDate: this.state.endDate, trainerName: this.state.trainerName,
            traineeGroup: this.state.traineeGroup, topic: this.state.topic, roomNumber: this.state.roomNumber
        }
        console.log(body);
        Axios.post(constants.CREATE_PLAN, body).then(function (response) {
            console.log(response);
            self.setState({ stage: "other", message: response.data });
        }).catch(function (error) {
        });
    }
    render() {
        if (this.state.stage === "startDate") {
            return (
                <div className="createPlan">
                    
                    <div className="container">
                    <h2>Select start date</h2>
                    <br/>
                        <div className="row">
                            <div className="offset-4 col-4">
                                <Calendar onClickDay={this.selectStart} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.stage === "endDate") {
            return (
                <div className="createPlan">    
                    <div className="container">
                    <h2>Select end date</h2>
                    <br/>
                        <div className="row">
                            <div className="offset-4 col-4">
                                <Calendar onClickDay={this.selectEnd} />
                                <br/>
                                <button type="button" onClick={this.goToStart}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.stage === "form") {
            return (
                <div className="createPlan">
                    <h2>Fill details</h2>
                    <div className="container">
                        <form onSubmit={this.planCreate}>
                            <p className="form-font">Trainer Name: </p>
                            <input type="text" name="trainerName" placeholder="Trainer Name" id="namebox-create" onChange={this.updateState} /><br /><br />
                            <p className="form-font">Trainee Group: </p>
                            <input type="text" name="traineeGroup" placeholder="Trainee Group" id="groupbox-create" onChange={this.updateState} /><br /><br />
                            <p className="form-font">Topic: </p>
                            <input type="text" name="topic" placeholder="Topic" id="topicbox-create" onChange={this.updateState} /><br /><br />
                            <p className="form-font">Room number: </p>
                            <input type="number" name="roomNumber" placeholder="Room Number" id="numberbox-create" onChange={this.updateState} /><br /><br />
                            <input type="submit" value="Create Plan" />
                            <button className="cssButton" type="button" onClick={this.goToStart}>Cancel</button>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="createPlan">
                    <h2>{this.state.message}</h2>
                    <button type="button" onClick={this.goToStart}>Make another plan</button>
                </div>
            );
        }
    }
}
export default CreatePlan;