import React, { Component } from 'react';
import './App.css';

  class AccountSettings extends Component{
    constructor(props){
        super(props);
        this.state = {message:""};
    }
    setPassword =(e)=>{
        e.preventDefault();
        let pword1 = this.state.password;
        let pword2 = this.state.password2;
        if(pword1===pword2){
            this.setState({password:pword1, password2: pword2, message: "Password changed successfully"});
        }else{
            this.setState({password:pword1, password2: pword2, message: "Password did not change"});
        }
    }
    updateState =(e)=>{
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value, message: ""});
    }
    render(){
        return(
            <div className="passwordSet">
                <form onSubmit={this.setPassword}>
                    New password:
                    <input type="password" name="password" placeholder="a password" id="pwordbox1-change" onChange={this.updateState}/><br/>
                    Re-enter new password:
                    <input type="password" name="password2" placeholder="a password" id="pwordbox2-change" onChange={this.updateState}/><br/>
                    <input type="submit" id="acc-update-button" value="Change password"/>
                </form>
                <p>{this.state.message}</p>
            </div>
        );
    }
  }
  export default AccountSettings;