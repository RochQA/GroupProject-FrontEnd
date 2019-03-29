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
        this.state = {email:"" ,password: ""};
    }
    handleLogin =(e)=>{
        e.preventDefault();
        this.props.handleLogin(this.state.email, this.state.password);
    }
    enterPress =(e)=>{
        var code = e.keyCode || e.which;
        if(code===13){
            this.handleLogin(e);
        }
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
                    Email address:
                    <input type="text" name="email" placeholder="person@email.com" id="emailbox-login" onChange={this.updateState} onKeyPress={this.enterPress}/><br/>
                    Password:
                    <input type="password" name="password" placeholder="a password" id="pwordBox-login" onChange={this.updateState} onKeyPress={this.enterPress}/><br/>
                    <button type="button" value="Log in" id="login-button" onClick={this.handleLogin}><NavLink to="/user" className="loginNav">Log in</NavLink></button>
                </form>
            </HashRouter>
            </div>
        );
    }
}
export default LogIn;