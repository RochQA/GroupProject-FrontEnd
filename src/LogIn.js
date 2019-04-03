import React, { Component } from 'react';
import './App.css';
import { NavLink, HashRouter} from "react-router-dom";


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
    }
    handleLogin = (e) => {
        e.preventDefault();
        this.props.handleLogin(this.state.email, this.state.password);
    }
    enterPress = (e) => {
        var code = e.keyCode || e.which;
        if (code === 13) {
            this.handleLogin(e);
        }
    }
    updateState = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="LogIn">
                <HashRouter>
                    <div className="container">
                    <br/>
                    <br/>
                            <p className="form-font">Email address: </p>
                            <input type="text" name="email" placeholder="person@email.com" id="emailbox-login" onChange={this.updateState} onKeyPress={this.enterPress} /><br /><br />
                            <p className="form-font">Password: </p>
                            <input type="password" name="password" placeholder="a password" id="pwordBox-login" onChange={this.updateState} onKeyPress={this.enterPress} /><br /><br />
                            <button className="cssButton" type="button" value="Log in" id="login-button" onClick={this.handleLogin}><NavLink to="/user" className="loginNav">Log in</NavLink></button>
                    </div>
                </HashRouter>
            </div>
        );
    }
}
export default LogIn;