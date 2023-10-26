import React from 'react';
import Cal from '../img/cal.svg';
import calQoute from '../img/cal-qoute.svg';
import eventImg from '../img/event.webp';
import personImg from '../img/student.webp';
import EventsContent from '../components/EventsContent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


const Calendar = () => {

    return (
        <div id='calendar'>
            <div className="top-text">
                <h2>Calendar</h2>
                <h3>Railway High School Admission Procedure</h3>
            </div>
            <div className="middle-container">
                <div className="box cal-box1">
                    <div className="head">
                        <ul>
                            <li>Ongoing</li>
                            <li className='select'>Upcoming</li>
                            <li>Completed</li>
                        </ul>
                    </div>
                    <EventsContent />
                </div>
                <div className=" cal-box2">
                    <div className="top">
                        <img src={Cal} alt="" />
                    </div>
                    <div className="bottom">
                        <h4>Quote of the Day</h4>
                        <img src={calQoute} alt="" />
                    </div>
                </div>

            </div>
            <div className="onThisDay">
                <h3>On This Day</h3>
                <div className="event-conatiner">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card">
                                <div className="card-top">
                                    <div className="top-left">
                                        <span>4 th July</span>
                                        <span>1947</span>
                                    </div>
                                    <div className="top-right">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <FontAwesomeIcon icon={faShareNodes} />
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <div className="img-container">
                                        <img src={eventImg} alt="" />
                                    </div>
                                    <div className="text">
                                        <h4>Indian Independence Bill</h4>
                                        <p>The "Indian Independence Bill" was presented to the British House of Commons on July 4, 1947. The bill proposed that the Provinces of British India become two sovereign countries: India and Pakistan.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="card-top">
                                    <div className="top-left">
                                        <span>4 th July</span>
                                        <span>1947</span>
                                    </div>
                                    <div className="top-right">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <FontAwesomeIcon icon={faShareNodes} />
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <div className="img-container">
                                        <img src={eventImg} alt="" />
                                    </div>
                                    <div className="text">
                                        <h4>Indian Independence Bill</h4>
                                        <p>The "Indian Independence Bill" was presented to the British House of Commons on July 4, 1947. The bill proposed that the Provinces of British India become two sovereign countries: India and Pakistan.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="card-top">
                                    <div className="top-left">
                                        <span>4 th July</span>
                                        <span>1947</span>
                                    </div>
                                    <div className="top-right">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <FontAwesomeIcon icon={faShareNodes} />
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <div className="img-container">
                                        <img src={eventImg} alt="" />
                                    </div>
                                    <div className="text">
                                        <h4>Indian Independence Bill</h4>
                                        <p>The "Indian Independence Bill" was presented to the British House of Commons on July 4, 1947. The bill proposed that the Provinces of British India become two sovereign countries: India and Pakistan.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="card-top">
                                    <div className="top-left">
                                        <span>4 th July</span>
                                        <span>1947</span>
                                    </div>
                                    <div className="top-right">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <FontAwesomeIcon icon={faShareNodes} />
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <div className="img-container">
                                        <img src={eventImg} alt="" />
                                    </div>
                                    <div className="text">
                                        <h4>Indian Independence Bill</h4>
                                        <p>The "Indian Independence Bill" was presented to the British House of Commons on July 4, 1947. The bill proposed that the Provinces of British India become two sovereign countries: India and Pakistan.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
            <div className="birthday">
                <h3>Birthdays</h3>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="birthday-card">
                            <div className="img-container">
                                <img src={personImg} alt="" />
                            </div>
                            <div className="b-card">
                                <div className="name">
                                    <h5>Subhranil Maity</h5>
                                    <span>4th July,1999</span>
                                </div>
                                <div className="wish">
                                    <p>Happy birthday! I wanted to take this opportunity to congratulate you on all your hard work and dedication. You are a shining star in our school community, and we are so proud of you.</p>
                                    <p>
                                        I know that you have a bright future ahead of you, and I can't wait to see what you accomplish. Wishing you all the best on your birthday!</p>
                                </div>
                                <div className="share-icons">
                                    <FontAwesomeIcon icon={faHeart} />
                                    <FontAwesomeIcon icon={faShareNodes} />
                                </div>
                            </div>
                        </div>
                        <div className="send-buttons">
                            <button className='msg'>
                                Send messege
                            </button>
                            <button className='gift'>
                                Send a gift
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="birthday-card">
                            <div className="img-container">
                                <img src={personImg} alt="" />
                            </div>
                            <div className="b-card">
                                <div className="name">
                                    <h5>Subhranil Maity</h5>
                                    <span>4th July,1999</span>
                                </div>
                                <div className="wish">
                                    <p>Happy birthday! I wanted to take this opportunity to congratulate you on all your hard work and dedication. You are a shining star in our school community, and we are so proud of you.</p>
                                    <p>
                                        I know that you have a bright future ahead of you, and I can't wait to see what you accomplish. Wishing you all the best on your birthday!</p>
                                </div>
                                <div className="share-icons">
                                    <FontAwesomeIcon icon={faHeart} />
                                    <FontAwesomeIcon icon={faShareNodes} />
                                </div>
                            </div>
                        </div>
                        <div className="send-buttons">
                            <button className='msg'>
                                Send messege
                            </button>
                            <button className='gift'>
                                Send a gift
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="birthday-card">
                            <div className="img-container">
                                <img src={personImg} alt="" />
                            </div>
                            <div className="b-card">
                                <div className="name">
                                    <h5>Subhranil Maity</h5>
                                    <span>4th July,1999</span>
                                </div>
                                <div className="wish">
                                    <p>Happy birthday! I wanted to take this opportunity to congratulate you on all your hard work and dedication. You are a shining star in our school community, and we are so proud of you.</p>
                                    <p>
                                        I know that you have a bright future ahead of you, and I can't wait to see what you accomplish. Wishing you all the best on your birthday!</p>
                                </div>
                                <div className="share-icons">
                                    <FontAwesomeIcon icon={faHeart} />
                                    <FontAwesomeIcon icon={faShareNodes} />
                                </div>
                            </div>
                        </div>
                        <div className="send-buttons">
                            <button className='msg'>
                                Send messege
                            </button>
                            <button className='gift'>
                                Send a gift
                            </button>
                        </div>
                    </SwiperSlide>



                </Swiper>
            </div>
        </div>
    )
}

export default Calendar
