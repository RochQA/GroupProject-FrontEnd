import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import * as constants from './Constants.js';

class AccountSettings extends Component {
    constructor(props) {
        super(props);
        var self = this;
        this.state = { message: "" };
    }
    setPassword = (e) => {
        e.preventDefault();
        let self = this;
        let oldPword = this.state.oldPassword;
        let pword1 = this.state.password;
        let pword2 = this.state.password2;
        let body = {
            id: this.props.id, oldPassword: oldPword, password: pword1, confirmPassword: pword2,
            trainerFirstName: this.state.fname, trainerLastName: this.state.lname, email: this.state.email
        };
        Axios.put(constants.UPDATE_ACCOUNT_URL, body).then(function (response) {
            console.log(response);
            self.setState({ message: response.data });
        }).catch(function (error) {
        });
    }
    updateState = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value, message: "" });

    }
    render() {
        return (
            <div className="passwordSet">
                <br />
                <br/>
                <div className="container">
                <form onSubmit={this.setPassword}>
                <p className="form-font">Old password: </p>
                    <input type="password" name="oldPassword" placeholder="Old password" id="pwordbox0-change" onChange={this.updateState} /><br /><br/>
                    <p className="form-font">New password: </p>
                    <input type="password" name="password" placeholder="New password" id="pwordbox1-change" onChange={this.updateState} /><br /><br/>
                    <p className="form-font">Re-enter new password: </p>
                    <input type="password" name="password2" placeholder="New password" id="pwordbox2-change" onChange={this.updateState} /><br /><br/>
                    <p className="form-font">First Name: </p>
                    <input type="text" name="fname" placeholder="First name" id="fnamebox-change" onChange={this.updateState} /><br /><br/>
                    <p className="form-font">Last Name: </p> 
                    <input type="text" name="lname" placeholder="Last name" id="lnamebox-change" onChange={this.updateState} /><br /><br/>
                    <p className="form-font">Email: </p>
                    <input type="email" name="email" placeholder="email" id="emailbox-change" onChange={this.updateState} /><br /><br/>
                    <input type="submit" id="acc-update-button" value="Update account details" />
                </form>
                </div>
                <p>{this.state.message}</p>
            </div>
        );
    }
}
export default AccountSettings;