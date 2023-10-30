import React from 'react';
import '../Faculty.css';
import Box from '../img/box.webp';
import Image from '../img/Vector.svg';
import Professor from '../components/Professor';
import Persons from '../components/Persons';
import { FreeMode } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Faculty = () => {
    return (
        <div id='faculty'>
            <div className="top">
                <div className="text">
                    <h2>FACULTIES</h2>
                    <p>Welcome to Railway HS School's brilliant faculty members! Dive into the charismatic world of our incredible educators and staff.
                        Feel the passion and dedication they share with the students!</p>
                </div>

                <div className="img">
                    <img src={Image} alt="" />
                </div>
            </div>
            <Professor />
            <div className="teachers-container">
                <div className="teacher-top">
                    <h4>TEACHERS</h4>
                    <h6>Our exceptional teachers ignite the spark of learning and inspire
                        our students to explore, learn, and succeed.</h6>
                </div>
                <div className="teachers">
                    <img src={Box} alt="" className='square' />
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        freeMode={false}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Persons /></SwiperSlide>
                        <SwiperSlide><Persons /></SwiperSlide>
                        <SwiperSlide><Persons /></SwiperSlide>
                        <SwiperSlide><Persons /></SwiperSlide>

                    </Swiper>
                </div>
            </div>
            <div className="lab-container">
                <div className="lab-top">
                    <h4>LAB  ASSISTANTS</h4>
                    <h6>Our skilled and attentive lab assistants play a key role in helping students discover the fascinating  world of science through hands-on experiments.</h6>
                </div>
                <div className="lab">
                    <img src={Box} alt="" className='square' />
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        freeMode={false}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Persons /></SwiperSlide>
                        <SwiperSlide><Persons /></SwiperSlide>
                        <SwiperSlide><Persons /></SwiperSlide>
                        <SwiperSlide><Persons /></SwiperSlide>

                    </Swiper>

                </div>
            </div>
            <div className="group-container">
                <div className="group-top">
                    <h4>GROUP B STAFFS</h4>
                    <h6>These dedicated and hardworking staff members are the heart and soul of our school, ensuring a clean, safe, and comfortable environment for all students.</h6>
                </div>
                <div className="group">
                    <img src={Box} alt="" className='square' />
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        freeMode={false}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Persons /></SwiperSlide>
                        <SwiperSlide><Persons /></SwiperSlide>
                        <SwiperSlide><Persons /></SwiperSlide>
                        <SwiperSlide><Persons /></SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default Faculty
