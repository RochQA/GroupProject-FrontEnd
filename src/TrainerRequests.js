import React, { Component } from 'react';
import './App.css';

class TrainerRequests extends Component{
    constructor(props){
        super(props);
        this.state = {message: ""};
    }
    sendRequest = (e)=>{
        e.preventDefault();
        this.setState({message: "Your request has been sent to an admin"});
    }
    updateState =(e)=>{
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value, message: ""});
    }
    render(){
        return(
            <div className="Requests">
                <form className="sendRequests" onSubmit={this.sendRequest}>
                    Request: <input type="text" name="requestText" placeholder="Can I ..." id="request-text-box" onChange={this.handleChange}/>
                    <input type="submit" id="send-request-button" value="Send request"/>
                </form>
                <p>{this.state.message}</p>
            </div>
        );
    }
}
export default TrainerRequests;