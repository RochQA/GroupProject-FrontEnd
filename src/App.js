import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link,
  Redirect,
  NavLink,
  HashRouter
} from "react-router-dom";
import LogIn from './LogIn';
import TrainerPage from './TrainerPage';
import AdminPage from './AdminPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {route:"login", user:""};
  }
  handleLogin = (username) =>{
      if(username==="admin"){
        this.setState({route:"admin", user:username});
      }else{
        this.setState({route:"trainer", user:username});
      }
  }
  handleLogout = () =>{
    this.setState({route:"login", user:""});
  }
  render() {
    if(this.state.route==="login"){
      return(
          <div className="App">
            <h1>Trainer App</h1>
            <LogIn handleLogin={this.handleLogin}/>
          </div>
      );
    }else if(this.state.route==="admin"){
      return(
        <div className="App">
          <h1>Trainer App</h1>
          <AdminPage handleLogout={this.handleLogout} user={this.state.user}/>
        </div>
      );
    }else{
      return(
        <div className="App">
          <h1>Trainer App</h1>
          <TrainerPage handleLogout={this.handleLogout} user={this.state.user}/>
        </div>
      );
    }
  }
}
export default App;