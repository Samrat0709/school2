import React from 'react'
import person3 from '../img/person3.webp';
const Talks = () => {
    return (
        <div className="talks">
            <h2>
                They talk about us
            </h2>
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
        </div>
    )
}

export default Talks
