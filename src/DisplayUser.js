import React, { Component } from 'react';
import {
    NavLink,
    HashRouter
} from "react-router-dom";
import './App.css';

class DisplayUser extends Component {
    render() {
        return (
            <div className="userDisplay">
                <HashRouter>
                    <div className="container">

                        <div className="row">
                            <div className="col-7">
                                <p id="username-display">{this.props.user}</p>
                            </div>
                            <div className="col-5">
                                <NavLink to="/"><button type="button" id="logout-button" onClick={this.props.handleLogout}>Logout</button></NavLink>
                            </div>
                        </div>



                    </div>

                </HashRouter>
            </div>
        );
    }
}
export default DisplayUser