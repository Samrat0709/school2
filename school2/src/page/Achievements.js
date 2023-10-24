import React from 'react'
import Achievement from '../img/achievements.webp';
import sport1 from '../img/sport1.webp';

import person2 from '../img/person2.webp';
import AcademicHeights from '../components/AcademicHeights';
import Numbers from '../components/Numbers';

const Achievements = () => {
    return (

        <div id="achievements">
            <div className="upper">
                <div className="text">
                    <h2>ACHIEVEMENTS</h2>
                    <p>Welcome to Railway HS School's brilliant Minds
                        Dive into the charismatic world of our incredible Students.
                    </p>
                </div>
                <img src={Achievement} alt="" className='achievement' />
            </div>
            <AcademicHeights />
            <Numbers />
            <div className="events-container">
                <div className="sports">
                    <h3>SPORTS MAESTRO</h3>
                    <div className="students">
                        <div className="student">
                            <div className="img-container">
                                <img src={person2} alt="" />
                            </div>
                            <div className="text">
                                <h4>Kenny Omega </h4>
                                <h5>99.96(CBSE 12th)</h5>
                            </div>
                        </div>
                        <div className="student">
                            <div className="img-container">
                                <img src={person2} alt="" />
                            </div>
                            <div className="text">
                                <h4>Kenny Omega </h4>
                                <h5>99.96(CBSE 12th)</h5>
                            </div>
                        </div>
                        <div className="student">
                            <div className="img-container">
                                <img src={person2} alt="" />
                            </div>
                            <div className="text">
                                <h4>Kenny Omega </h4>
                                <h5>99.96(CBSE 12th)</h5>
                            </div>
                        </div>
                        <div className="student">
                            <div className="img-container">
                                <img src={person2} alt="" />
                            </div>
                            <div className="text">
                                <h4>Kenny Omega </h4>
                                <h5>99.96(CBSE 12th)</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="extra-curricular">
                    <h3>EXTRA CURRICULAR</h3>
                    <div className="students">
                        <div className="student">
                            <div className="img-container">
                                <img src={person2} alt="" />
                            </div>
                            <div className="text">
                                <h4>Kenny Omega </h4>
                                <h5>99.96(CBSE 12th)</h5>
                            </div>
                        </div>
                        <div className="student">
                            <div className="img-container">
                                <img src={person2} alt="" />
                            </div>
                            <div className="text">
                                <h4>Kenny Omega </h4>
                                <h5>99.96(CBSE 12th)</h5>
                            </div>
                        </div>
                        <div className="student">
                            <div className="img-container">
                                <img src={person2} alt="" />
                            </div>
                            <div className="text">
                                <h4>Kenny Omega </h4>
                                <h5>99.96(CBSE 12th)</h5>
                            </div>
                        </div>
                        <div className="student">
                            <div className="img-container">
                                <img src={person2} alt="" />
                            </div>
                            <div className="text">
                                <h4>Kenny Omega </h4>
                                <h5>99.96(CBSE 12th)</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="qoute">
                <div className="text">
                    <h2>"</h2>
                    <p>Unleash Your Potential:
                        Celebrating Excellence in School Sports!"</p>
                </div>

            </div>
            <div className="sports-container">
                <h3>SPORTS EVENTS</h3>
                <div className="events">
                    <div className="event-left">
                        <div className="event">
                            <img src={sport1} alt="" />
                            <div className="text">
                                <h4>Inter-School Football </h4>
                                <h5>29th Feb, 2023</h5>
                            </div>
                        </div>
                    </div>
                    <div className="event-right">
                        <div className="event">
                            <img src={sport1} alt="" />
                            <div className="text">
                                <h4>Inter-School Football </h4>
                                <h5>29th Feb, 2023</h5>
                            </div>
                        </div>
                        <div className="event">
                            <img src={sport1} alt="" />
                            <div className="text">
                                <h4>Inter-School Football </h4>
                                <h5>29th Feb, 2023</h5>
                            </div>
                        </div>
                        <div className="event">
                            <img src={sport1} alt="" />
                            <div className="text">
                                <h4>Inter-School Football </h4>
                                <h5>29th Feb, 2023</h5>
                            </div>
                        </div>
                        <div className="event">
                            <img src={sport1} alt="" />
                            <div className="text">
                                <h4>Inter-School Football </h4>
                                <h5>29th Feb, 2023</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>SPORTS MOMENTS</h3>
                <div className="moments">
                    <div className="top-container">
                        <div className="col">
                            <img src={sport1} alt="" />
                        </div>
                        <div className="col">
                            <img src={sport1} alt="" />
                        </div>
                        <div className="col">
                            <img src={sport1} alt="" />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="events">
                            <div className="event-left">
                                <div className="event">
                                    <img src={sport1} alt="" />
                                </div>
                            </div>
                            <div className="event-right">
                                <div className="event">
                                    <img src={sport1} alt="" />  
                                </div>
                                <div className="event">
                                    <img src={sport1} alt="" />   
                                </div>
                                <div className="event">
                                    <img src={sport1} alt="" />  
                                </div>
                                <div className="event">
                                    <img src={sport1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Achievements
