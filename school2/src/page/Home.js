import React from 'react';
import topImg from '../img/top.webp';
import blue from '../img/blue_box.webp';

import scl from '../img/scl.webp';
import {  faDownload, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Professor from '../components/Professor';
import AcademicHeights from '../components/AcademicHeights';
import Numbers from '../components/Numbers';
import EventsContent from '../components/EventsContent';
import Talks from '../components/Talks';



const Home = () => {

    

    return (
        <div id='home'>
            <div className="top-img">
                <img src={topImg} alt="" />
            </div>
            {/* <div className="button-container">
                <h4>Quick buttons</h4>
                <div className="quick-buttons">
                    <div className="button">
                        <FontAwesomeIcon icon={faUserGraduate} /><p>Student login</p>
                    </div>
                    <div className="button">
                        <FontAwesomeIcon icon={faUserGraduate} /><p>Student login</p>
                    </div>
                    <div className="button">
                        <FontAwesomeIcon icon={faUserGraduate} /><p>Student login</p>
                    </div>
                    <div className="button">
                        <FontAwesomeIcon icon={faUserGraduate} /><p>Student login</p>
                    </div>
                    <div className="button">
                        <FontAwesomeIcon icon={faUserGraduate} /><p>Student login</p>
                    </div>
                    <div className="button">
                        <FontAwesomeIcon icon={faChalkboardUser} /><p>Teacher login</p>
                    </div>
                </div>
            </div> */}
            <div className="box-container">

                <div className="box">
                    <div className="head">
                        <ul>
                            <li>Ongoing</li>
                            <li className='select'>Upcoming</li>
                            <li>Completed</li>
                        </ul>
                    </div>
                    <EventsContent/>
                </div>
                <div className="box">
                    <div className="head">
                        <h4>
                            Notice
                        </h4>
                    </div>
                    <div className="line"></div>
                    <div className="content">
                        <div className="item">
                            <p>Welcome to Railway HS School's brilliant Minds Dive into the charismatic world of our incredible Students. </p>
                            <div className="download">
                                <FontAwesomeIcon icon={faDownload} />
                                <h5>Download now</h5>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <p>Welcome to Railway HS School's brilliant Minds Dive into the charismatic world of our incredible Students. </p>
                            <div className="download">
                                <FontAwesomeIcon icon={faDownload} />
                                <h5>Download now</h5>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <p>Welcome to Railway HS School's brilliant Minds Dive into the charismatic world of our incredible Students. </p>
                        </div>
                        <hr />
                        <div className="item">
                            <p>Welcome to Railway HS School's brilliant Minds Dive into the charismatic world of our incredible Students. </p>
                            <div className="download">
                                <FontAwesomeIcon icon={faDownload} />
                                <h5>Download now</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Professor/>
            <div className="about-scl">
                <img src={blue} alt="" className='blue' />
                <div className="left">
                    <h3>Our School's History</h3>
                    <p>
                        The school comes with an uncompromising commitment. It aims to achieve specific, measurable, observable and quantifiable results among all aspirants/students. Because the School has a vision to provide value based education to young minds and provide a dynamic learning environment.However, the School aegis for every student which strives for excellence through active learning and education. Moreover, the School has the core committed faculty which has come from accomplished backgrounds with vast experience.
                    </p>
                    <h4>Read more <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></h4>

                </div>
                <div className="right">

                    <div className="img-container">
                        <img src={scl} alt="" />
                    </div>

                </div>
            </div>
            <Numbers/>
            <AcademicHeights/>
            <Talks/>
        </div>
    )


}

export default Home
