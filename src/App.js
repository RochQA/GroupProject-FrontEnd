import React, { Component } from 'react';
import './App.css';
import LogIn from './LogIn';
import TrainerPage from './TrainerPage';
import AdminPage from './AdminPage';
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {route:"login", user:""};
  }
  handleLogin = (username, password1) =>{
    if(username==="admin"){
      this.setState({route:"admin", user:username});
    }else{
      let body = { email:username, password: password1};
      let url = "http://localhost:8080/login";
      let self = this;
      Axios.put(url, body).then(function(response){
          console.log(response);
          if(username===response.data.email){
            self.setState({route: "trainer", user: response.data.email});
          }else{
            self.setState({route:"login", user: "Login Error: Wrong username and/or password"});
          }
      }).catch(function(error){
        self.setState({route:"login", user: "Login Error: Unfilled fields"});
      });
    }
  }
  handleLogout = () =>{
    this.setState({route:"login", user:"", message:""});
  }
  render() {
    if(this.state.route==="login"){
      return(
          <div className="App">
            <h1>Trainer App</h1>
            <LogIn handleLogin={this.handleLogin}/>
            <p>{this.state.user}</p>
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