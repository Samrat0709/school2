import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import bottomSlider from '../img/bottom-slider.webp';
import gal1 from '../img/gal1.webp';
import gal2 from '../img/gal2.webp';
import gal3 from '../img/gal3.webp';
import gal4 from '../img/gal4.webp';
import gal5 from '../img/gal5.webp';
import gal6 from '../img/gal6.webp';
import gal7 from '../img/gal7.webp';
import gal8 from '../img/gal8.webp';
import gal9 from '../img/gal9.webp';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Gallery = () => {
    return (
        <div id='gallery'>

            <div className="gal-head">
                <h2>
                    Gallery
                </h2>
            </div>
            <div id="gallery-img">
                <div className="frame1">
                    <div className="img-container">
                        <img src={gal1} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={gal2} alt="" />
                    </div>
                </div>
                <div className="frame2">
                    <div className="img-container">
                        <img src={gal3} alt="" />
                    </div>
                </div>
                <div className="frame3">
                    <div className="img-container">
                        <img src={gal4} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={gal5} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={gal6} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={gal9} alt="" />
                    </div>
                </div>
                <div className="frame4">
                    <div className="img-container">
                        <img src={gal8} alt="" />
                    </div>
                    <div className="img-container">
                        <img src={gal7} alt="" />
                    </div>
                </div>
            </div>
            <div className="event-buttons">
                <button>Republic Day</button>
                <button>Saraswati Puja</button>
                <button>Indipendence Day</button>
                <button>Foundation Day</button>
                <button>Diwali</button>
                <button>Sports day</button>
                <button>Diwali</button>
                <button>Indipendence Day</button>
                <button>Diwali</button>
                <button>Foundation Day</button>
                <button>Republic Day</button>
                <button>Saraswati Puja</button>
                <button>Diwali</button>
                <button>Sports day</button>
            </div>

            <div className="year-conatiner">
                <Swiper
                    slidesPerView={8}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>
                    <SwiperSlide><button>2020</button></SwiperSlide>

                </Swiper>
            </div>
            <div className="event-slider">
                <div className="text">
                    <h3>Saraswati Puja 2023</h3>
                    <p>Our School celebrated Saraswati Puja 2023 in a splendid way</p>
                </div>
                <div id="slider">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={bottomSlider} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={bottomSlider} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={bottomSlider} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={bottomSlider} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={bottomSlider} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={bottomSlider} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={bottomSlider} alt="" /></SwiperSlide>

                </Swiper>
                </div>
                
            </div>


        </div>
    )
}

export default Gallery
