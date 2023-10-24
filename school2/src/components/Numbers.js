import React from 'react'
import circle from '../img/numbers.webp';
import dots from '../img/dots.webp';
const Numbers = () => {
    return (
        <div className="numbers">
            <img src={dots} alt="" className='dots' />
            <img src={circle} alt="" className='circle' />
            <div className='number'>
                <h3>100+</h3>
                <p>TOP RANKERS</p>
            </div>
            <div className='number'>
                <h3>100+</h3>
                <p>OLYMPIADS</p>
            </div>
            <div className='number'>
                <h3>100+</h3>
                <p>ALUMNI NETWORK</p>
            </div>
        </div>
    )
}

export default Numbers
