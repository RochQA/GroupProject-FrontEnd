import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import * as constants from './Constants.js';
import DisplayAccountFunctions from './DisplayAccountFunctions';

class AccountManager extends Component {
    constructor(props) {
        super(props);
        let self = this;
        Axios.get(constants.GET_ALL_ACCOUNTS).then(function (response) {
            console.log(response);
            self.setState({ accounts: response.data, message: "" });
        }).catch(function (error) {

        });
        this.setState({ message: "" })
    }
    generateMessage = () => {
        this.setState({ message: `Account deleted successfully` });
    }
    render() {
        try {
            return (
                <div className="accountManager">
                    <br />
                    <p>{this.state.message}</p>
                    {this.state.accounts.map(item => (
                        <div className="container">
                            <div className="row">
                                <div className="offset-3 col-3">
                                    <p>Email: {item.email}</p>
                                </div>
                                <div className="col-2">
                                    <ul className="displayIndividualAccount">
                                        <DisplayAccountFunctions id={item.id} generateMessage={this.generateMessage} />
                                    </ul>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>
            );
        } catch{
            return (
                <div className="accountManager">
                    <p>Accounts will be displayed here</p>
                </div>
            );
        }
    }
}
export default AccountManager;