import React, { useState } from 'react';

const Admission = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);
    const [isVisible7, setIsVisible7] = useState(false);
    const [isVisible8, setIsVisible8] = useState(false);

    const handleButtonClick1 = () => {
        setIsVisible1(!isVisible1);
    };

    const handleButtonClick2 = () => {
        setIsVisible2(!isVisible2);
    };

    const handleButtonClick3 = () => {
        setIsVisible3(!isVisible3);
    };

    const handleButtonClick4 = () => {
        setIsVisible4(!isVisible4);
    };
    const handleButtonClick5 = () => {
        setIsVisible5(!isVisible5);
    };
    const handleButtonClick6 = () => {
        setIsVisible6(!isVisible6);
    };
    const handleButtonClick7 = () => {
        setIsVisible7(!isVisible7);
    };
    const handleButtonClick8 = () => {
        setIsVisible8(!isVisible8);
    };

    return (
        <div id='admission'>
            <div className="top-text">
                <h2>ADMISSION</h2>
            </div>
            <div id="text">
                <h3>Railway High School Admission Procedure</h3>
                <p>Welcome to Railway High School! We are delighted that you are considering our school for your child's education. Our admission procedure is designed to ensure a smooth and fair process for all applicants. Please follow the steps below to apply for admission to our school.</p>
            </div>
            <div className="step-btn-container">
                <div className="step">
                    <div className="step-btn">
                        <button type="button" onClick={handleButtonClick1} className="fill">STEP 1</button>
                    </div>
                    <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="142" viewBox="0 0 18 142" fill="none">
                            <path d="M8.99999 142L17.6602 127L0.33974 127L8.99999 142ZM7.5 -6.55671e-08L7.5 2.95833L10.5 2.95833L10.5 6.55671e-08L7.5 -6.55671e-08ZM7.5 8.875L7.5 14.7917L10.5 14.7917L10.5 8.875L7.5 8.875ZM7.5 20.7083L7.5 26.625L10.5 26.625L10.5 20.7083L7.5 20.7083ZM7.5 32.5417L7.5 38.4583L10.5 38.4583L10.5 32.5417L7.5 32.5417ZM7.5 44.375L7.5 50.2917L10.5 50.2917L10.5 44.375L7.5 44.375ZM7.5 56.2083L7.5 62.125L10.5 62.125L10.5 56.2083L7.5 56.2083ZM7.5 68.0417L7.5 73.9583L10.5 73.9583L10.5 68.0417L7.5 68.0417ZM7.5 79.875L7.5 85.7917L10.5 85.7917L10.5 79.875L7.5 79.875ZM7.5 91.7083L7.5 97.625L10.5 97.625L10.5 91.7083L7.5 91.7083ZM7.5 103.542L7.5 109.458L10.5 109.458L10.5 103.542L7.5 103.542ZM7.49999 115.375L7.49999 121.292L10.5 121.292L10.5 115.375L7.49999 115.375ZM7.49999 127.208L7.49999 133.125L10.5 133.125L10.5 127.208L7.49999 127.208Z" fill="black" />
                        </svg>
                    </div>
                    <div className="msg">
                        {isVisible1 && <div className="text">
                            <h4>Obtain an Application Form</h4>
                            <ul>
                                <li>Application forms for admission can be obtained from the school office during the designated admission period. You may also check our school's website for downloadable application forms.</li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className="step">
                    <div className="step-btn">
                        <button type="button" onClick={handleButtonClick2} className="fill">STEP 2</button>
                    </div>
                    <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="142" viewBox="0 0 18 142" fill="none">
                            <path d="M8.99999 142L17.6602 127L0.33974 127L8.99999 142ZM7.5 -6.55671e-08L7.5 2.95833L10.5 2.95833L10.5 6.55671e-08L7.5 -6.55671e-08ZM7.5 8.875L7.5 14.7917L10.5 14.7917L10.5 8.875L7.5 8.875ZM7.5 20.7083L7.5 26.625L10.5 26.625L10.5 20.7083L7.5 20.7083ZM7.5 32.5417L7.5 38.4583L10.5 38.4583L10.5 32.5417L7.5 32.5417ZM7.5 44.375L7.5 50.2917L10.5 50.2917L10.5 44.375L7.5 44.375ZM7.5 56.2083L7.5 62.125L10.5 62.125L10.5 56.2083L7.5 56.2083ZM7.5 68.0417L7.5 73.9583L10.5 73.9583L10.5 68.0417L7.5 68.0417ZM7.5 79.875L7.5 85.7917L10.5 85.7917L10.5 79.875L7.5 79.875ZM7.5 91.7083L7.5 97.625L10.5 97.625L10.5 91.7083L7.5 91.7083ZM7.5 103.542L7.5 109.458L10.5 109.458L10.5 103.542L7.5 103.542ZM7.49999 115.375L7.49999 121.292L10.5 121.292L10.5 115.375L7.49999 115.375ZM7.49999 127.208L7.49999 133.125L10.5 133.125L10.5 127.208L7.49999 127.208Z" fill="black" />
                        </svg>
                    </div>
                    <div className="msg">
                        {isVisible2 && <div className="text">
                            <h4>Complete the Application Form</h4>
                            <h5>Fill out the application form with accurate and complete information. Be sure to attach all required documents, which may include:</h5>
                            <ul>
                                <li>Birth certificate of the child</li>
                                <li>Passport-sized photographs of the child</li>
                                <li>Proof of residence (e.g., utility bill)</li>
                                <li> Previous academic records (if applicable)</li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className="step">
                    <div className="step-btn">
                        <button type="button" onClick={handleButtonClick3} className="fill">STEP 3</button>
                    </div>
                    <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="142" viewBox="0 0 18 142" fill="none">
                            <path d="M8.99999 142L17.6602 127L0.33974 127L8.99999 142ZM7.5 -6.55671e-08L7.5 2.95833L10.5 2.95833L10.5 6.55671e-08L7.5 -6.55671e-08ZM7.5 8.875L7.5 14.7917L10.5 14.7917L10.5 8.875L7.5 8.875ZM7.5 20.7083L7.5 26.625L10.5 26.625L10.5 20.7083L7.5 20.7083ZM7.5 32.5417L7.5 38.4583L10.5 38.4583L10.5 32.5417L7.5 32.5417ZM7.5 44.375L7.5 50.2917L10.5 50.2917L10.5 44.375L7.5 44.375ZM7.5 56.2083L7.5 62.125L10.5 62.125L10.5 56.2083L7.5 56.2083ZM7.5 68.0417L7.5 73.9583L10.5 73.9583L10.5 68.0417L7.5 68.0417ZM7.5 79.875L7.5 85.7917L10.5 85.7917L10.5 79.875L7.5 79.875ZM7.5 91.7083L7.5 97.625L10.5 97.625L10.5 91.7083L7.5 91.7083ZM7.5 103.542L7.5 109.458L10.5 109.458L10.5 103.542L7.5 103.542ZM7.49999 115.375L7.49999 121.292L10.5 121.292L10.5 115.375L7.49999 115.375ZM7.49999 127.208L7.49999 133.125L10.5 133.125L10.5 127.208L7.49999 127.208Z" fill="black" />
                        </svg>
                    </div>
                    <div className="msg">
                        {isVisible3 && <div className="text">
                            <h4>Submit the Application</h4>
                            <ul>
                                <li> Submit the completed application form along with all necessary documents to the school office within the specified application period. Incomplete applications may not be considered.</li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className="step">
                    <div className="step-btn">
                        <button type="button" onClick={handleButtonClick4} className="fill">STEP 4</button>
                    </div>
                    <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="142" viewBox="0 0 18 142" fill="none">
                            <path d="M8.99999 142L17.6602 127L0.33974 127L8.99999 142ZM7.5 -6.55671e-08L7.5 2.95833L10.5 2.95833L10.5 6.55671e-08L7.5 -6.55671e-08ZM7.5 8.875L7.5 14.7917L10.5 14.7917L10.5 8.875L7.5 8.875ZM7.5 20.7083L7.5 26.625L10.5 26.625L10.5 20.7083L7.5 20.7083ZM7.5 32.5417L7.5 38.4583L10.5 38.4583L10.5 32.5417L7.5 32.5417ZM7.5 44.375L7.5 50.2917L10.5 50.2917L10.5 44.375L7.5 44.375ZM7.5 56.2083L7.5 62.125L10.5 62.125L10.5 56.2083L7.5 56.2083ZM7.5 68.0417L7.5 73.9583L10.5 73.9583L10.5 68.0417L7.5 68.0417ZM7.5 79.875L7.5 85.7917L10.5 85.7917L10.5 79.875L7.5 79.875ZM7.5 91.7083L7.5 97.625L10.5 97.625L10.5 91.7083L7.5 91.7083ZM7.5 103.542L7.5 109.458L10.5 109.458L10.5 103.542L7.5 103.542ZM7.49999 115.375L7.49999 121.292L10.5 121.292L10.5 115.375L7.49999 115.375ZM7.49999 127.208L7.49999 133.125L10.5 133.125L10.5 127.208L7.49999 127.208Z" fill="black" />
                        </svg>
                    </div>
                    <div className="msg">
                        {isVisible4 && <div className="text">
                            <h4>Written Entrance Test</h4>
                            <ul>
                                <li>After reviewing the applications, eligible candidates will be invited to take a written entrance test. The test will assess the child's proficiency in subjects such as Mathematics, English, and Science.</li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className="step">
                    <div className="step-btn">
                        <button type="button" onClick={handleButtonClick5} className="fill">STEP 5</button>
                    </div>
                    <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="142" viewBox="0 0 18 142" fill="none">
                            <path d="M8.99999 142L17.6602 127L0.33974 127L8.99999 142ZM7.5 -6.55671e-08L7.5 2.95833L10.5 2.95833L10.5 6.55671e-08L7.5 -6.55671e-08ZM7.5 8.875L7.5 14.7917L10.5 14.7917L10.5 8.875L7.5 8.875ZM7.5 20.7083L7.5 26.625L10.5 26.625L10.5 20.7083L7.5 20.7083ZM7.5 32.5417L7.5 38.4583L10.5 38.4583L10.5 32.5417L7.5 32.5417ZM7.5 44.375L7.5 50.2917L10.5 50.2917L10.5 44.375L7.5 44.375ZM7.5 56.2083L7.5 62.125L10.5 62.125L10.5 56.2083L7.5 56.2083ZM7.5 68.0417L7.5 73.9583L10.5 73.9583L10.5 68.0417L7.5 68.0417ZM7.5 79.875L7.5 85.7917L10.5 85.7917L10.5 79.875L7.5 79.875ZM7.5 91.7083L7.5 97.625L10.5 97.625L10.5 91.7083L7.5 91.7083ZM7.5 103.542L7.5 109.458L10.5 109.458L10.5 103.542L7.5 103.542ZM7.49999 115.375L7.49999 121.292L10.5 121.292L10.5 115.375L7.49999 115.375ZM7.49999 127.208L7.49999 133.125L10.5 133.125L10.5 127.208L7.49999 127.208Z" fill="black" />
                        </svg>
                    </div>
                    <div className="msg">
                        {isVisible5 && <div className="text">
                            <h4>Interview (if required)</h4>
                            <ul>
                                <li>Some applicants may be called for an interview with the school's admission committee. This interview provides an opportunity for both parents and the child to interact with school representatives and discuss their aspirations and expectations.</li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className="step">
                    <div className="step-btn">
                        <button type="button" onClick={handleButtonClick6} className="fill">STEP 6</button>
                    </div>
                    <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="142" viewBox="0 0 18 142" fill="none">
                            <path d="M8.99999 142L17.6602 127L0.33974 127L8.99999 142ZM7.5 -6.55671e-08L7.5 2.95833L10.5 2.95833L10.5 6.55671e-08L7.5 -6.55671e-08ZM7.5 8.875L7.5 14.7917L10.5 14.7917L10.5 8.875L7.5 8.875ZM7.5 20.7083L7.5 26.625L10.5 26.625L10.5 20.7083L7.5 20.7083ZM7.5 32.5417L7.5 38.4583L10.5 38.4583L10.5 32.5417L7.5 32.5417ZM7.5 44.375L7.5 50.2917L10.5 50.2917L10.5 44.375L7.5 44.375ZM7.5 56.2083L7.5 62.125L10.5 62.125L10.5 56.2083L7.5 56.2083ZM7.5 68.0417L7.5 73.9583L10.5 73.9583L10.5 68.0417L7.5 68.0417ZM7.5 79.875L7.5 85.7917L10.5 85.7917L10.5 79.875L7.5 79.875ZM7.5 91.7083L7.5 97.625L10.5 97.625L10.5 91.7083L7.5 91.7083ZM7.5 103.542L7.5 109.458L10.5 109.458L10.5 103.542L7.5 103.542ZM7.49999 115.375L7.49999 121.292L10.5 121.292L10.5 115.375L7.49999 115.375ZM7.49999 127.208L7.49999 133.125L10.5 133.125L10.5 127.208L7.49999 127.208Z" fill="black" />
                        </svg>
                    </div>
                    <div className="msg">
                        {isVisible6 && <div className="text">
                            <h4>Notification of Admission</h4>
                            <ul>
                                <li>Successful candidates will receive an admission offer letter from the school. This letter will include details regarding fees, required documents, and other important information.</li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className="step">
                    <div className="step-btn">
                        <button type="button" onClick={handleButtonClick7} className="fill">STEP 7</button>
                    </div>
                    <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="142" viewBox="0 0 18 142" fill="none">
                            <path d="M8.99999 142L17.6602 127L0.33974 127L8.99999 142ZM7.5 -6.55671e-08L7.5 2.95833L10.5 2.95833L10.5 6.55671e-08L7.5 -6.55671e-08ZM7.5 8.875L7.5 14.7917L10.5 14.7917L10.5 8.875L7.5 8.875ZM7.5 20.7083L7.5 26.625L10.5 26.625L10.5 20.7083L7.5 20.7083ZM7.5 32.5417L7.5 38.4583L10.5 38.4583L10.5 32.5417L7.5 32.5417ZM7.5 44.375L7.5 50.2917L10.5 50.2917L10.5 44.375L7.5 44.375ZM7.5 56.2083L7.5 62.125L10.5 62.125L10.5 56.2083L7.5 56.2083ZM7.5 68.0417L7.5 73.9583L10.5 73.9583L10.5 68.0417L7.5 68.0417ZM7.5 79.875L7.5 85.7917L10.5 85.7917L10.5 79.875L7.5 79.875ZM7.5 91.7083L7.5 97.625L10.5 97.625L10.5 91.7083L7.5 91.7083ZM7.5 103.542L7.5 109.458L10.5 109.458L10.5 103.542L7.5 103.542ZM7.49999 115.375L7.49999 121.292L10.5 121.292L10.5 115.375L7.49999 115.375ZM7.49999 127.208L7.49999 133.125L10.5 133.125L10.5 127.208L7.49999 127.208Z" fill="black" />
                        </svg>
                    </div>
                    <div className="msg">
                        {isVisible7 && <div className="text">
                            <h4>Fee Payment and Document Submission</h4>
                            <ul>
                                <li>Upon receiving the admission offer letter, parents/guardians must complete the admission process by paying the prescribed fees and submitting all required documents. Failure to do so within the specified timeframe may result in the forfeiture of the admission offer.</li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className="step">
                    <div className="step-btn">
                        <button type="button" onClick={handleButtonClick8} className="fill">STEP 8</button>
                    </div>
                    {/* <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="142" viewBox="0 0 18 142" fill="none">
                            <path d="M8.99999 142L17.6602 127L0.33974 127L8.99999 142ZM7.5 -6.55671e-08L7.5 2.95833L10.5 2.95833L10.5 6.55671e-08L7.5 -6.55671e-08ZM7.5 8.875L7.5 14.7917L10.5 14.7917L10.5 8.875L7.5 8.875ZM7.5 20.7083L7.5 26.625L10.5 26.625L10.5 20.7083L7.5 20.7083ZM7.5 32.5417L7.5 38.4583L10.5 38.4583L10.5 32.5417L7.5 32.5417ZM7.5 44.375L7.5 50.2917L10.5 50.2917L10.5 44.375L7.5 44.375ZM7.5 56.2083L7.5 62.125L10.5 62.125L10.5 56.2083L7.5 56.2083ZM7.5 68.0417L7.5 73.9583L10.5 73.9583L10.5 68.0417L7.5 68.0417ZM7.5 79.875L7.5 85.7917L10.5 85.7917L10.5 79.875L7.5 79.875ZM7.5 91.7083L7.5 97.625L10.5 97.625L10.5 91.7083L7.5 91.7083ZM7.5 103.542L7.5 109.458L10.5 109.458L10.5 103.542L7.5 103.542ZM7.49999 115.375L7.49999 121.292L10.5 121.292L10.5 115.375L7.49999 115.375ZM7.49999 127.208L7.49999 133.125L10.5 133.125L10.5 127.208L7.49999 127.208Z" fill="black" />
                        </svg>
                    </div> */}
                    <div className="msg">
                        {isVisible8 && <div className="text">
                            <h4>Orientation</h4>
                            <ul>
                                <li>Prior to the start of the academic year, the school will conduct an orientation program for new students and their parents. This program will provide essential information about the school, its policies, and the curriculum.</li>
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>

            {/* ... Your other components ... */}
        </div>
    );
};

export default Admission;
