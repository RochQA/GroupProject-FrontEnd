import React, { Component } from 'react';
import './App.css';
import Calendar from 'react-calendar';

class RoomsPage extends Component{
    constructor(props){
        super(props);
        this.state ={mesage:""};
    }
    handleChange = (date) =>{
        this.setState({message: `The day is ${date.getDay()} the month is ${date.getMonth()}, the year is ${date.getYear()}`});
    }
    render(){
        return(
            <div className="roomsPage">
                <Calendar onClickDay={this.handleChange} />
                <p>{this.state.message}</p>
            </div>
        );
    }
}
export default RoomsPage;