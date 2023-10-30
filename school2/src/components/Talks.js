import React from 'react'
import person3 from '../img/person3.webp';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Talks = () => {
    return (
        <div className="talks">
            <h2>
                They talk about us
            </h2>
            <Swiper

                slidesPerView={1}
                spaceBetween={30}
                freeMode={false}
                // breakpoints={{
                //     640: {
                //         slidesPerView: 2,
                //         spaceBetween: 20,
                //     },
                //     768: {
                //         slidesPerView: 3,
                //         spaceBetween: 40,
                //     },
                //     1024: {
                //         slidesPerView: 4,
                //         spaceBetween: 50,
                //     },
                // }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slide">
                        <div className="left">
                            <div className="img-container">
                                <img src={person3} alt="" />
                            </div>
                        </div>
                        <div className="right">
                            <h4>Does the school hold PTM on regular basis?</h4>
                            <p>Yes, the school and parents together can only support the child to grow in a desired way. Hence it holds PTMs regularly and welcome parent's suggestions.</p>
                            <div className="name">
                                <h5>Subhranil Maity</h5>
                                <h6>CEO oF CREASUNX</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <div className="left">
                            <div className="img-container">
                                <img src={person3} alt="" />
                            </div>
                        </div>
                        <div className="right">
                            <h4>Does the school hold PTM on regular basis?</h4>
                            <p>Yes, the school and parents together can only support the child to grow in a desired way. Hence it holds PTMs regularly and welcome parent's suggestions.</p>
                            <div className="name">
                                <h5>Subhranil Maity</h5>
                                <h6>CEO oF CREASUNX</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <div className="left">
                            <div className="img-container">
                                <img src={person3} alt="" />
                            </div>
                        </div>
                        <div className="right">
                            <h4>Does the school hold PTM on regular basis?</h4>
                            <p>Yes, the school and parents together can only support the child to grow in a desired way. Hence it holds PTMs regularly and welcome parent's suggestions.</p>
                            <div className="name">
                                <h5>Subhranil Maity</h5>
                                <h6>CEO oF CREASUNX</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <div className="left">
                            <div className="img-container">
                                <img src={person3} alt="" />
                            </div>
                        </div>
                        <div className="right">
                            <h4>Does the school hold PTM on regular basis?</h4>
                            <p>Yes, the school and parents together can only support the child to grow in a desired way. Hence it holds PTMs regularly and welcome parent's suggestions.</p>
                            <div className="name">
                                <h5>Subhranil Maity</h5>
                                <h6>CEO oF CREASUNX</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    )
}

export default Talks
