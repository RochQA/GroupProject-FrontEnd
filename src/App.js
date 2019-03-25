import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';
import LogIn from './LogIn';
import TrainerPage from './TrainerPage';
import AdminPage from './AdminPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {loggedIn:false, user:""};
  }
  handleLogin = (username) =>{
      this.setState({loggedIn:true, user:username, });
  }
  handleLogout = () =>{
    this.setState({loggedIn:false});
  }
  render() {
    if(this.state.loggedIn===true){
      if(this.state.user==="admin"){
        return(
          <div className="App">
          <h1>Trainer Manager</h1> 
            <AdminPage user={this.state.user} handleLogout={this.handleLogout}/>
          </div>
        );
      }else{
        return (
          <div className="App">
          <h1>Trainer Manager</h1> 
            <TrainerPage user={this.state.user} handleLogout={this.handleLogout}/>
          </div>
          );
      }
    }else{
      return(
      <div className="App">
          <h1>Trainer Manager</h1> 
          <LogIn handleLogin={this.handleLogin}/>
      </div>
      );
    }
  }
}
export default App;