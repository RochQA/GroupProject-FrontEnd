import React, { Component } from 'react';
import {
    Redirect,
    Route,
    Link,
    NavLink,
    HashRouter
  } from "react-router-dom";
import './App.css';

class LogIn extends Component{
    constructor(props){
        super(props);
        this.state = {username:"" ,password: ""};
    }
    handleLogin =(e)=>{
        e.preventDefault();
        this.props.handleLogin(this.state.username);
    }
    updateState =(e)=>{
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value});
    }
    render(){
        return(
            <div className="LogIn">
            <HashRouter>
                <form onSubmit={this.handleLogin}>
                    Username:
                    <input type="text" name="username" placeholder="a user" onChange={this.updateState}/><br/>
                    Password:
                    <input type="password" name="password" placeholder="a password" onChange={this.updateState}/><br/>
                    <input type="submit" value="Log in"/>
                </form>
            </HashRouter>
            </div>
        );
    }
}
export default LogIn;