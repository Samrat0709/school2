import React from 'react'
import AcademicNav from './AcademicNav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
const Paper = () => {
  return (
    <div id='academicPaper'>
      <AcademicNav />
      <div id='content'>
        <div className="head">
          <h3>Model Paper All Subject Class wise 2022-23</h3>
          <p>Model Question Papers for Classes X and XII were prepared by NCERT and communicated to CBSE. The question papers are prepared in the light of recommendations of position paper on Examination Reforms and National Curriculum Framework, 2023.</p>
        </div>
        <div className="items">
          <div className="item">
            <h4>Class X</h4>
            <ul>
              <li><FontAwesomeIcon icon={faHandPointRight} />Hindi-A</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Hindi-B</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Sanskrit</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Urdu</li>
            </ul>
          </div>
          <div className="item">
            <h4>Class XII (Science)</h4>
            <ul>
              <li><FontAwesomeIcon icon={faHandPointRight} />Hindi Core</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Hindi Elective</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />English Elective</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Sanskrit Core</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Sanskrit Elective</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Urdu Core</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Physics</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Mathematics</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Chemistry</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Biology</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Business Studies</li>
            </ul>
          </div>
          <div className="item">
            <h4>Class XII(Commerce)</h4>
            <ul>
              <li><FontAwesomeIcon icon={faHandPointRight} />Hindi Core</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Hindi Elective</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />English Elective</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Sanskrit Core</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Sanskrit Elective</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Urdu Core</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Physics</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Mathematics</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Chemistry</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Biology</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Business Studies</li>
            </ul>
          </div>
          <div className="item">
            <h4>Class XII (Arts)</h4>
            <ul>
              <li><FontAwesomeIcon icon={faHandPointRight} />Hindi Core</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Hindi Elective</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />English Elective</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Sanskrit Core</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Sanskrit Elective</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Urdu Core</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Physics</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Mathematics</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Chemistry</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Biology</li>
              <li><FontAwesomeIcon icon={faHandPointRight} />Business Studies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paper
