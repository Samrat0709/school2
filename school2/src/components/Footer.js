import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMap, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="list">
                    <h5>Address</h5>
                    <div className="items">
                        <div className="address">
                            <span>
                                <FontAwesomeIcon icon={faMap} />
                            </span>
                            <p>Barrack Colony, Babupara, Siliguri, WestBengal 734004</p>
                        </div>
                        <div className="email">
                            <span><FontAwesomeIcon icon={faEnvelope} /></span>
                            <p>info@njprghs.com</p>
                        </div>
                        <div className="call">
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                            <p>+91-353-2564600</p>
                        </div>
                    </div>
                </div>
                <div className="list">
                    <h5>
                        links
                    </h5>
                    <div className="items">
                        <ul>
                            <li>Who we are</li>
                            <li>Our products</li>
                            <li>My Account</li>
                            <li>Order history</li>
                        </ul>
                    </div>
                </div>
                <div className="list">
                    <h5>
                        Gallery
                    </h5>
                    <div className="items">
                        <ul>
                            <li>Category</li>
                            <li>Best Seller</li>
                            <li>Best Seller</li>
                            <li>Subscription</li>
                        </ul>
                    </div>
                </div>
                <div className="social items">
                    <h5>SOCIAL LINKS</h5>
                    <div className="links"> 
                        <FontAwesomeIcon className='icon' icon={faGithub} />
                        <FontAwesomeIcon className='icon' icon={faEnvelope} />
                        <FontAwesomeIcon className='icon' icon={faFacebook} />
                        <FontAwesomeIcon className='icon' icon={faInstagram} />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © VISIARO™ Ltd. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
