import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Subject from '../components/Subject';
import Question from '../components/Question';
import Paper from '../components/Paper';
import AcademicNav from '../components/AcademicNav';
const Academic = () => {
    return (
        <div id="academic">
            <div className="top-text">
                <h2>ACADEMICS</h2>
            </div>
            <AcademicNav/>
            <Routes>
                <Route path='/academic/subjeect' Component={Subject}/>
                <Route path='/academic/question' Component={Question} />
                <Route path='/academic/paper' Component={Paper} />
            </Routes>
            

        </div>
    )
}

export default Academic
