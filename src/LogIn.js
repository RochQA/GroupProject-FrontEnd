import React, { Component } from 'react';
import {
    NavLink,
    HashRouter
  } from "react-router-dom";
import './App.css';
import './LogInPage.css';

class LogIn extends Component{
    constructor(props){
        super(props);
        this.state = {username:"" ,password: ""};
    }
    handleLogin =(e)=>{
        e.preventDefault();
        this.props.handleLogin(this.state.username, this.state.password);
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
                    <input type="text" name="username" placeholder="a user" id="userbox-login" onChange={this.updateState}/><br/>
                    Password:
                    <input type="password" name="password" placeholder="a password" id="pwordBox-login" onChange={this.updateState}/><br/>
                    <button type="button" value="Log in" id="login-button" onClick={this.handleLogin}><NavLink to="/user" className="loginNav">Log in</NavLink></button>
                </form>
            </HashRouter>
            </div>
        );
    }
}
export default LogIn;