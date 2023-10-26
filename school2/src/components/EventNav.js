import React from 'react'
import { NavLink } from 'react-router-dom';
const EventNav = () => {
    return (
        <div id='eventNav'>
            <div className="head">
                <ul>
                    <li>
                        <NavLink activeClassName="active" exact to={'/ongoing'}>
                            Ongoing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" exact to={'/'}>
                            Upcoming
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to={'/completed'}>
                            Completed
                        </NavLink>
                    </li>
                </ul>
                {/* <ul>
                            <li><Link to='/ongoing'>Ongoing</Link></li>
                            <li>Ongoing</li>
                            <li className='select'>Upcoming</li>
                            <li>Completed</li>
                        </ul> */}
            </div>
        </div>
    )
}

export default EventNav
