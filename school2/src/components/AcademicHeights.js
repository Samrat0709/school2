import React from 'react'
import person2 from '../img/person2.webp';
import { FreeMode } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


const AcademicHeights = () => {
    return (
        <div className="academic">
            <h3>ACADEMIC HEIGHTS</h3>
            <div className="students">
                <Swiper

                    slidesPerView={1}
                    spaceBetween={30}
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
                    <SwiperSlide>
                        <div className="student">
                            <div className="img-container">
                                <img src={person2} alt="" />
                            </div>
                            <div className="text">
                                <h4>Kenny Omega </h4>
                                <h5>99.96(CBSE 12th)</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="student">
                            <div className="img-container">
                                <img src={person2} alt="" />
                            </div>
                            <div className="text">
                                <h4>Kenny Omega </h4>
                                <h5>99.96(CBSE 12th)</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="student">
                            <div className="img-container">
                                <img src={person2} alt="" />
                            </div>
                            <div className="text">
                                <h4>Kenny Omega </h4>
                                <h5>99.96(CBSE 12th)</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="student">
                            <div className="img-container">
                                <img src={person2} alt="" />
                            </div>
                            <div className="text">
                                <h4>Kenny Omega </h4>
                                <h5>99.96(CBSE 12th)</h5>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

                
            </div>

        </div>
    )
}

export default AcademicHeights
