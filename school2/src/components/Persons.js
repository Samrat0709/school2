import React from 'react'
import Teacher from '../img/teacher.webp';
const Persons = () => {
    return (
        <div className="person">
            <div className="img-container">
                <img src={Teacher} alt="" />
            </div>
            <div className="text">
                <h5>dr. Strange </h5>
                <h6>(M.Tech in DS)</h6>
            </div>
        </div>
    )
}

export default Persons
