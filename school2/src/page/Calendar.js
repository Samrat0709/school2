import React from 'react'
import EventsContent from '../components/EventsContent';

const Calendar = () => {
    
    return (
        <div id='calendar'>
            <div className="top-text">
                <h2>Calendar</h2>
                <h3>Railway High School Admission Procedure</h3>
            </div>
            <div className="middle-container">
                <div className="box cal-box">
                    <div className="head">
                        <ul>
                            <li>Ongoing</li>
                            <li className='select'>Upcoming</li>
                            <li>Completed</li>
                        </ul>
                    </div>
                    <EventsContent />
                </div>

            </div>
        </div>
    )
}

export default Calendar
