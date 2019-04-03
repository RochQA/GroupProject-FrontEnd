import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import * as constants from './Constants.js';

class AddTrainer extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "", formDisplay: true, accountType:"false" };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.accountType==="true"){
            this.setState({accountType:true});
        }else{
            this.setState({accountType:false});
        }
        let body = {
            trainerFirstName: this.state.trainerFirstName, trainerLastName: this.state.trainerLastName,
            confirmPassword: this.state.password, password: this.state.password2, email: this.state.email, 
            admin: this.state.accountType
        };
        console.log(body);
        var self = this;
        if (this.state.password === this.state.password2) {
            Axios.post(constants.CREATE_ACCOUNT_URL, body).then(function (response) {
                console.log(response);
                self.setState({ message: response.data, formDisplay: false, trainerFirstName:"", trainerLastName:"",
                confirmPassword:"", password: "", email: "", admin: "false" });
            }).catch(function (error) {
                console.log(error);
                self.setState({ message: "Account creation failed", formDisplay: false });
            });
        } else {
            this.setState({ message: "Passwords don't match" })
        }
    }
    enterPress = (e) => {
        var code = e.keyCode || e.which;
        if (code === 13) {
            this.handleSubmit(e);
        }
    }
    updateState = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value, message: "", formDisplay: true });
    }
    handleChecking=()=>{
        if(this.state.accountType==="true"){
            this.setState({accountType: "false"});
        }else{
            this.setState({accountType:"true"});
        }
    }
    dispForm = () => {
        this.setState({ message: "", formDisplay: true })
    }
    render() {
        if (this.state.formDisplay === true) {
            return (
                <div className="addTrainer">
                    <br />
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <br />
                            <br />
                            <p className="form-font">First name: </p>
                            <input type="text" name="trainerFirstName" placeholder="First name" id="firstnamebox-addtrainer" onChange={this.updateState} /><br /><br />
                            <p className="form-font">Last name: </p>
                            <input type="text" name="trainerLastName" placeholder="Last name" id="lastnamebox-addtrainer" onChange={this.updateState} /><br /><br />
                            <p className="form-font">Email:</p>
                            <input type="email" name="email" placeholder="Email" id="emailbox-addtrainer" onChange={this.updateState} /><br /><br />
                            <p className="form-font">Password: </p>
                            <input type="password" name="password" placeholder="password1" id="passwordbox-addtrainer" onChange={this.updateState} /><br /><br />
                            <p className="form-font">Re-type Password: </p>
                            <input type="password" name="password2" placeholder="password2" id="passwordbox2-addtrainer" onChange={this.updateState} onKeyPress={this.enterPress} /><br /><br />
                            
                            <p className="form-font">Admin </p>
                            <ul className="checkbox">
                                <li><input className="noCSS" type="checkbox" value="Admin" name="accountType" onChange={this.handleChecking}/></li>
                            </ul> 
                            <br/>
                            <br/>
                            <input  type="submit" id="submit-button-addtrainer" value="Add this trainer" />
                        </form>
                    </div>
                    <p>{this.state.message}</p>
                </div>
            );
        } else {
            return (
                <div className="addTrainer">

                    <p>{this.state.message}</p>
                    <button type="button" onClick={this.dispForm}>Add new trainer</button>
                </div>
            );
        }
    }
}
export default AddTrainer;