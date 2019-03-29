import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class AddTrainer extends Component{
    constructor(props){
        super(props);
        this.state = {message:"", formDisplay:true};
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        let body = { email:this.state.email, password:this.state.password, confirmPassword: this.state.password2, trainerName: this.state.name };
        let url = "http://localhost:8080/createAccount";
            var self = this;
            Axios.post(url, body).then(function(response){
                console.log(response);
                self.setState({message: response.data, formDisplay:false});
            }).catch(function(error){
                console.log(error);
                self.setState({message: "temp3", formDisplay:false});
            });
    }
    enterPress =(e)=>{
        var code = e.keyCode || e.which;
        if(code===13){
            this.handleSubmit(e);
        }
    }
    updateState =(e)=>{
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value, message: "", formDisplay:true});
    }
    dispForm=()=>{
        this.setState({message:"", formDisplay:true})
    }
    render(){
        if(this.state.formDisplay===true){
        return(
            <div className="addTrainer">
            <br/>
            <form onSubmit={this.handleSubmit}>
                <p className="form-font">Trainer name: </p>
                <input type="text" name="name" placeholder="Bob Bobson" id="namebox-addtrainer" onChange={this.updateState}/><br/>
                <br/>
                <p className="form-font">Trainer email: </p>
                <input type="email" name="email" placeholder="bob@gmail.com" id="emailbox-addtrainer" onChange={this.updateState} /><br/>
                <br/>
                <p className="form-font">Password: </p>
                <input type="password" name="password" placeholder="password1" id="passwordbox-addtrainer" onChange={this.updateState}/><br/>
                <br/>
                <p className="form-font">Re-type Password: </p>
                <input type="password" name="password2" placeholder="password2" id="passwordbox2-addtrainer" onChange={this.updateState} onKeyPress={this.enterPress}/><br/>
                <br/>
                <input type="submit" id="submit-button-addtrainer" value="Add this trainer"/>
            </form>
            <p>{this.state.message}</p>
            </div>
        );
        }else{
            return(
                <div className="addTrainer">
        
                <p>{this.state.message}</p>
                <button type="button" onClick={this.dispForm}>Add new trainer</button>
            </div>
            );
        }
    }
}
export default AddTrainer;