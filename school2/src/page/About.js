import React from 'react';
import sclFound from '../img/scl-found.webp';
import newConstruction from '../img/construction.webp';
import newProgram from '../img/program.webp';
import newSports from '../img/sports.webp';
import newTechnology from '../img/technology.webp';
import middleImg from '../img/middle.webp';
import diagnosis from '../img/diagnosis.svg';
import research from '../img/research.svg';
import protoTyping from '../img/protyping.svg';
import design from '../img/design.svg';
import evolution from '../img/evolution.svg';
import aboutTop from '../img/about-top.webp';
import legacy from '../img/legacy.svg';
import circleLine from '../img/circle-line.svg';
import Persons from '../components/Persons';
import Talks from '../components/Talks';


const About = () => {
    return (

        <div id="about">
            <div className="top-text">
                <h2>ABOUT US</h2>
            </div>
            <div className="text">
                <h3>Our School's History</h3>
                <p>Railway Higher Secondary School also known as RHSS. The school was established in 1953. Railway Higher Secondary School is a Co-Ed school affiliated to Central Board of Secondary Education (CBSE) .</p>
            </div>
            <div className="about-qoute">
                <div className="txt">
                    <span>"Exploring Our Legacy:</span>
                    <span>Discovering the Rich History of</span>
                    <span>Railway Higher Secondary</span>
                    <span>School Alipurduar Junction</span>
                </div>
                <p> <br /> <br /> <br /> </p>
                <img src={aboutTop} alt="" />
            </div>
            <div id="legacy-container">
                <div className="items">
                    <div className="item">
                        <div className="text">
                            <span>1953</span>
                            <h4>School Founded</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget varius bibendum, velit elit </p>
                        </div>
                        <div className="img">
                            <img src={sclFound} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="text">
                            <span>2005</span>
                            <h4>New Building Constructed</h4>
                            <p>School Area 15132 Sq. Metres</p>
                        </div>
                        <div className="img">
                            <img src={newConstruction} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="text">
                            <span>2010</span>
                            <h4>New Programs Added</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget varius bibendum, velit elit </p>
                        </div>
                        <div className="img">
                            <img src={newProgram} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="text">
                            <span>2015</span>
                            <h4>New Sports Facilities</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget varius bibendum, velit elit </p>
                        </div>
                        <div className="img">
                            <img src={newSports} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="text">
                            <span>2020</span>
                            <h4>New Technology Programs</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget varius bibendum, velit elit </p>
                        </div>
                        <div className="img">
                            <img src={newTechnology} alt="" />
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <img src={circleLine} alt="" />
                </div>
                <div className="banner">
                    <img src={legacy} alt="" />
                </div>
            </div>
            <div className="mission">
                <div className="text">
                    <h3>Our Mission statement</h3>
                    <p>Dentistry for Children believes that good dental health starts in infancy. Our dedicated pediatric dentists and teen dental specialists promote cavity prevention and good dental habits to help create a positive experience at an early age and into their adolescent years.</p>
                </div>
                <div className="img-container">
                    <img src={middleImg} alt="" />
                </div>
            </div>
            <div id="values-container">
                <div className="text">
                    <h3>Our Values </h3>
                    <p>Dentistry for Children believes that good dental health starts in infancy. Our dedicated pediatric dentists and teen dental specialists promote cavity prevention and good dental habits to help create a positive experience at an early age and into their adolescent years.</p>
                </div>
                {/* <div className="line"></div> */}
                <div className="values">
                    <div className="value">
                        <div className="img-container">
                            <img src={diagnosis} alt="" />
                        </div>
                        <div className="value-text">
                            <h5>Diagnosis</h5>
                            <p>About you, your customer & marketplace</p>
                        </div>
                    </div>
                    <div className="value">
                        <div className="img-container">
                            <img src={research} alt="" />
                        </div>
                        <div className="value-text">
                            <h5>Research</h5>
                            <p>Competitive analysis and long term goals.</p>
                        </div>
                    </div>
                    <div className="value">
                        <div className="img-container">
                            <img src={protoTyping} alt="" />
                        </div>
                        <div className="value-text">
                            <h5>Prototyping</h5>
                            <p>creating initial idea of brand</p>
                        </div>
                    </div>
                    <div className="value">
                        <div className="img-container">
                            <img src={design} alt="" />
                        </div>
                        <div className="value-text">
                            <h5>Design</h5>
                            <p>Designing & Development</p>
                        </div>
                    </div>
                    <div className="value">
                        <div className="img-container">
                            <img src={evolution} alt="" />
                        </div>
                        <div className="value-text">
                            <h5>Evolution</h5>
                            <p>feedback & analysis</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="community-container">
                <div className="text">
                    <h3>Managing community</h3>
                    <p>Dentistry for Children believes that good dental health starts in infancy. Our dedicated pediatric dentists and teen dental specialists promote cavity prevention and good dental habits to help create a positive experience at an early age and into their adolescent years.</p>
                </div>
                <div className="community">
                    <div className="community-left">
                        <div className="people">
                            <h4>Principal</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget varius bibendum, velit elit </p>
                            <h5>Contact details : 9234234230 <br /> Mail id : xyz@gmail.com</h5>
                        </div>
                        <div className="people">
                            <h4>Teachers</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget varius bibendum, velit elit </p>
                            <h5>Contact details : 9234234230 <br /> Mail id : xyz@gmail.com</h5>
                        </div>
                        <div className="people">
                            <h4>Staffs</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget varius bibendum, velit elit </p>
                            <h5>Contact details : 9234234230 <br /> Mail id : xyz@gmail.com</h5>
                        </div>
                        <div className="people">
                            <h4>Others</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget varius bibendum, velit elit </p>
                            <h5>Contact details : 9234234230 <br /> Mail id : xyz@gmail.com</h5>
                        </div>
                    </div>
                    <div className="community-right">
                        <div className="person-container">
                            <Persons />
                        </div>
                        <div className="person-container">
                            <Persons />
                            <Persons />
                            <Persons />
                        </div>
                        <div className="person-container">
                            <Persons />
                            <Persons />
                        </div>
                        <div className="person-container">
                            <Persons />
                            <Persons />
                            <Persons />
                        </div>
                    </div>
                </div>

            </div>
            <div id="blue-box">
                <div className="items">
                    <div className="item">
                        <h4>100+</h4>
                        <h6>Number of Community members</h6>
                    </div>
                    <div className="item">
                        <h4>50+</h4>
                        <h6>Number of posts by our Community members</h6>
                    </div>
                    <div className="item">
                        <h4>40+</h4>
                        <h6>Number of events by our Community members</h6>
                    </div>
                </div>
            </div>
            <Talks />
        </div>


    )
}

export default About
