import React from 'react'
import { NavLink } from 'react-router-dom';
const AcademicNav = () => {
    return (
        <div id='academicNav'>
            <div className="top-text">
                <h2>ACADEMICS</h2>
            </div>
            <div className="banner">
                <ul>
                    <li>
                        <NavLink activeClassName="active" exact to={'/academic/subject'}>
                            Subject Offered
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" exact to={'/academic/'}>
                            Previous Year Questions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to={'/academic/paper'}>
                            Model Paper
                        </NavLink>
                    </li>
                </ul>


            </div>
        </div>
    )
}

export default AcademicNav
