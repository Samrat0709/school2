import React from 'react'
import { NavLink } from 'react-router-dom';
const AcademicNav = () => {
    return (
        <div>
            <div className="banner">
                <ul>
                    <li>
                        <NavLink activeClassName="active" exact to={'/academic/subject'}>
                            subject
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to={'/academic/question'}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to={'/academic/paper'}>
                            Contact
                        </NavLink>
                    </li>
                </ul>


            </div>
        </div>
    )
}

export default AcademicNav
