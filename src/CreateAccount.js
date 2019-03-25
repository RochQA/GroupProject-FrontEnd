import React, { Component } from 'react';
import './App.css';

class CreateAccount extends Component{
    constructor(props){
        super(props);
        this.state = {error: ""};
    }
    handleCreate =(e)=>{
        e.preventDefault();
        if(this.state.password===this.state.password2){
            this.props.handleLogin(this.state.username);
        }else{
            this.setState({error: "Passwords must match"});
        }
    }
    updateState =(e)=>{
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value, error: ""});
    }
    render(){
        return(
            <div className="createAccount">
                <form onSubmit={this.handleCreate}>
                    Username:
                    <input type="text" name="username" placeholder="a user" onChange={this.updateState}/><br/>
                    Password:
                    <input type="password" name="password" placeholder="a password" onChange={this.updateState}/><br/>
                    Re-enter password:
                    <input type="password" name="password2" placeholder="a password" onChange={this.updateState}/><br/>
                    <input type="submit" value="Create account"/>
                </form>
                <p>{this.state.error}</p>
            </div>
        );
    }
}
export default CreateAccount;