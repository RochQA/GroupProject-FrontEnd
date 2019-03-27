import React, { Component } from 'react';
import './App.css';

class AddTrainer extends Component{
    constructor(props){
        super(props);
        this.state = {message:""};
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        let oldEmail = this.state.email;
        this.setState({message: `New user created, email sent to ${oldEmail}`});
    }
    updateState =(e)=>{
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value, message: ""});
    }
    render(){
        return(
            <div className="addTrainer">
            <form onSubmit={this.handleSubmit}>
                Trainer name:
                <input type="text" name="name" placeholder="Bob Bobson" id="namebox-addtrainer" onChange={this.updateState}/><br/>
                Trainer email:
                <input type="email" name="email" placeholder="bob@gmail.com" id="emailbox-addtrainer" onChange={this.updateState}/><br/>
                Password:
                <input type="password" name="password" placeholder="password1" id="passwordbox-addtrainer" onChange={this.updateState}/><br/>
                <input type="submit" id="submit-button-addtrainer" value="Add this trainer"/>
            </form>
            <p>{this.state.message}</p>
            </div>
        );
    }
}
export default AddTrainer;