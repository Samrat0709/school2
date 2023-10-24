
import './App.css';
import './Faculty.css';
import './Achievement.css';
import './Contact.css';
import './Media.css';
import './About.css';
import './Gallery.css';
import './Admission.css';
import './Calendar.css';
import './Academics.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import NavBar from './components/NavBar';
import Faculty from './page/Faculty';
import Achievements from './page/Achievements';
import Contact from './page/Contact';
import About from './page/About';
import Gallery from './page/Gallery';
import Admission from './page/Admission';
import Calendar from './page/Calendar';
import Academic from './page/Academic';
import Subject from './components/Subject';
import Question from './components/Question';
import Paper from './components/Paper';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/faculty' Component={Faculty} />
        <Route path='/achievement' Component={Achievements} />
        <Route path='/contact' Component={Contact} />
        <Route path='/about' Component={About} />
        <Route path='/gallery' Component={Gallery} />
        <Route path='/admission' Component={Admission} />
        <Route path='/calendar' Component={Calendar} />
        <Route path='/academic' Component={Academic} />
        {/* <Route path={'/academic/subject'} Component={Subject} />
        <Route path={'/academic/question'} Component={Question} />
        <Route path={'/academic/paper'} Component={Paper} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
