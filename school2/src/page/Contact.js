import React from 'react';
import Red from '../img/red.webp';
import Map from '../img/map.webp';
import Bus from '../img/bus.webp';
import captcha from '../img/recaptcha.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot , faPhone , faEnvelope  } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
    return (
        <div id="contact">
            <div className="top">
                <img src={Red} className='red' alt="" />
                <h2>CONTACT US</h2>
                <div className="contact-top">
                    <div className="map">
                        <img src={Map} alt="" />
                    </div>
                    <h4>Alipurduar Rly.Jnc., Chechakhata, West Bengal 736123</h4>
                </div>
            </div>
            <div id="location">
                <div className="bus">
                    <div className="img-container">
                        <img src={Bus} alt="" />
                    </div>
                    <h4>GGHQ+WH Alipurduar Rly.Jnc., West Bengal</h4>
                </div>
                <div className="details">
                    <div className="items">
                        <div className="item">
                            <div className="item-left">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                                <h4>ADDRESS</h4>
                            </div>
                            <div className="item-right">
                                <p>Alipurduar Junction Railway High School <br />
                                    Po : Alipurduar Junction, Sub Division + Dist : Jalpaiguri, Alipurduar Court, Alipurduar - 736122
                                    https://jsdl.in/DT-99WPGKPB</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-left">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <h4>PHONE NO.</h4>
                            </div>
                            <div className="item-right">
                                <p>+91 XXXXXXXXXX <span>(OFFICE STAFF)</span></p>
                                <p>+91 XXXXXXXXXX <span>(SECURITY)</span></p>
                                <p>+91 XXXXXXXXXX <span>(ADMINISTRATION)</span></p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-left">
                                <div className="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <h4>EMAIL</h4>
                            </div>
                            <div className="item-right">
                                <p>rajkamalprincipalic@gmail.com</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-left">
                                <div className="icon">
                                <FontAwesomeIcon icon={faWhatsapp} />
                                </div>
                                <h4>WHATSAPP</h4>
                            </div>
                            <div className="item-right">
                                <p>+91 XXXXXXXXXX <span>(ADMISSION)</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id="contact">
            <div className="contact-container">
            <div className="contact">
                <div className="contact-box box1">
                    <h5>Sent Feedback</h5>
                    <div className="sent_msg">
                        <form>
                            <div className="contact-details">
                                <div>
                                    <input type="text" id="name" className="bottom-border-input" placeholder="Name"
                                        required/>

                                    <input type="text" id="phone" className="bottom-border-input" placeholder="Phone Num"
                                        required/>
                                </div>
                                <div>
                                    <input type="email" id="email" className="bottom-border-input"
                                        placeholder="Email Address" required/>
                                    <input type="text" id="subject" className="bottom-border-input" placeholder="Subject"
                                        required/>
                                </div>
                            </div>
                            <div>
                                <input type="text" id="Message" className="bottom-border-input" placeholder="Message"
                                    required/>
                            </div>
                            <div className="box1-bottom">
                                <img src={captcha} alt=""/>
                                <button>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="contact-box box2">
                    <div className="box-top">
                        <h5>Contact Information</h5>
                    </div>
                    <div className="info-container">
                        <p>rhsalipur@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>

    )
}

export default Contact
