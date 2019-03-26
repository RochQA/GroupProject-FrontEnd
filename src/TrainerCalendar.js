import React, { Component } from 'react';
import './App.css';
import Calendar from 'react-calendar';

class TrainerCalendar extends Component{
    render(){
        return(
            <div className="calendarPage">
                <Calendar/>
            </div>
        );
    }
}
export default TrainerCalendar;