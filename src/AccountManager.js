import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import * as constants from './Constants.js';
import DisplayAccountFunctions from './DisplayAccountFunctions';

class AccountManager extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let self = this;
        Axios.get(constants.GET_ALL_ACCOUNTS).then(function(response){
            self.setState({accounts:response.data, message:""});
        }).catch(function(error){

        });
        try{
        return(
            <div className="accountManager">
                {this.state.accounts.map(item =>(
                    <ul className="displayIndividualAccount">
                        <p>Email: {item.email}</p>
                        <DisplayAccountFunctions id={item.id} generateMessage={this.generateMessage}/>
                    </ul>
                ))}
            </div>
        );}catch{
            return(
                <div className="accountManager">
                <p>Accounts will be displayed here</p>
                </div>
            );
        }
    }
}
export default AccountManager;