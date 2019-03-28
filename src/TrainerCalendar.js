import React, { Component } from 'react';
import './App.css';
import Calendar from 'react-calendar';

class TrainerCalendar extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    handleChange = (date) =>{
        this.setState({date: date.toString()});
    }
    render(){
        return(
            <div className="calendarPage">
                <Calendar onChange={this.handleChange}/>
                <p>{this.state.date}</p>
            </div>
        );
    }
}
export default TrainerCalendar;