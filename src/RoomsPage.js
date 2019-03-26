import React, { Component } from 'react';
import './App.css';

class RoomsPage extends Component{
    constructor(props){
        super(props);
        this.state = {roomType:"available"};
    }
    handleChange=(e)=>{
        this.setState({roomType: e.target.value, message: `Displaying ${e.target.value} rooms`});
    }
    render(){
        console.log(this.state.roomType)
        return(
            <div className="roomsPage">
                <form>
                    <input type="radio" value="available" checked={this.state.roomType==="available"} onChange={this.handleChange}/>Available rooms
                    <input type="radio" value="unavailable" checked={this.state.roomType==="unavailable"} onChange={this.handleChange}/>Rooms in use
                </form>
                <p>{this.state.message}</p>
            </div>
        );
    }
}
export default RoomsPage;