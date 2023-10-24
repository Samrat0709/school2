import React from 'react'
import {  faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const EventsContent = () => {
    return (
        <div className="content">
            <div className="event">
                <div className="top">
                    <div className="date">
                        <h4>March</h4>
                        <span>04</span>
                        <h4>3:00 PM</h4>
                    </div>
                    <div className="details">
                        <div className="left">
                            <div className='topic'>
                                <h3>Talk on metaverse</h3>
                                <h4>Capegemini</h4>
                                <h5>19:40 IST, Tuesday</h5>
                            </div>
                            <div className="about">
                                <h6>Metaverse is a place where</h6>
                                <span>...Read More</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="event-time select">
                                <h4>Upcoming </h4>

                            </div>
                            <div className="icons">
                                <FontAwesomeIcon icon={faHeart} />
                                <FontAwesomeIcon icon={faShareNodes} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="calendar">
                        <h4>Mark on Calendar</h4>
                    </div>
                </div>
            </div>
            <div className="event">
                <div className="top">
                    <div className="date">
                        <h4>March</h4>
                        <span>04</span>
                        <h4>3:00 PM</h4>
                    </div>
                    <div className="details">
                        <div className="left">
                            <div className='topic'>
                                <h3>Talk on metaverse</h3>
                                <h4>Capegemini</h4>
                                <h5>19:40 IST, Tuesday</h5>
                            </div>
                            <div className="about">
                                <h6>Metaverse is a place where</h6>
                                <span>...Read More</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="event-time select">
                                <h4>Upcoming </h4>

                            </div>
                            <div className="icons">
                                <FontAwesomeIcon icon={faHeart} />
                                <FontAwesomeIcon icon={faShareNodes} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="calendar">
                        <h4>Mark on Calendar</h4>
                    </div>
                </div>
            </div>
            <div className="event">
                <div className="top">
                    <div className="date">
                        <h4>March</h4>
                        <span>04</span>
                        <h4>3:00 PM</h4>
                    </div>
                    <div className="details">
                        <div className="left">
                            <div className='topic'>
                                <h3>Talk on metaverse</h3>
                                <h4>Capegemini</h4>
                                <h5>19:40 IST, Tuesday</h5>
                            </div>
                            <div className="about">
                                <h6>Metaverse is a place where</h6>
                                <span>...Read More</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="event-time select">
                                <h4>Upcoming </h4>

                            </div>
                            <div className="icons">
                                <FontAwesomeIcon icon={faHeart} />
                                <FontAwesomeIcon icon={faShareNodes} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="calendar">
                        <h4>Mark on Calendar</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsContent
