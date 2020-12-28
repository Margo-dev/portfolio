import React from 'react';
import '../CV/CV.css';
import Skills from '../image/skills.png';
import Exper from '../image/exper.png';
import Education from '../image/education.png';
import AdEducation from '../image/ad_education.png'
import Abilities from '../image/abilities.png';
import AdInfo from '../image/ad_info.png';


function CV() {
  return (
    <>
      <div className="info">
        <div className="container">
          <div>
            <ul>
              <h3>Hrіnchuk Marharyta</h3>

              <li>Age: 25 years old</li>

              <li>City of residence:  Luhansk region, Sievierodonetsk</li>
            </ul>
          </div>
          <div>
            <ul>
              <h4> <img src={Skills} />Skills:</h4>

              <li>HTML5/CSS3;</li>
              <li>JavaScript;</li>
              <li>OOP;</li>
              <li>React.js(OOP);</li>
              <li>SCSS;</li>
              <li>Bootstrap4;</li>
              <li>Materialize;</li>
              <li>Firebase;</li>
              <li>Photoshop;</li>
              <li>React.js(Hooks)</li>

            </ul>
          </div>
          <div>
            <ul>
              <h4><img src={Exper} />Experience</h4>
              <li> <p>Company name: КП «ЛО «Фармація Північ», Sievierodonetsk</p>
                <p>Position: Chief Personnel Inspector1</p>
                <p>Period of work: December 2015 – June 2020</p>
              </li>

              <li><p>Company name: Укрпошта, Sievierodonetsk</p>
                <p>Position: postal operator</p>
                <p>Period of work: November 2014 - December 2015</p>

              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h4><img src={Education} />Education</h4>
              <li>
                <p> Educational institution: Volodymyr Dahl East Ukrainian University</p>
                <p>Degree: specialist</p>
                <p>Name of specialty: accounting and auditing</p>
                <p>Training period: 2014-2017</p>
              </li>
              <h4><img src={AdEducation} />Additional education</h4>
              <li>
                English language courses "Lingvomax" Sievierodonetsk February 2018 - I continue to study.
            </li>
              <li>	Courses React JS <a href='https://bit.ly/3k1XJl5'>https://bit.ly/3k1XJl5</a></li>
              <li>Participation in the hackathon IT Nation Hacks 2020</li>
              <h4><img src={Abilities} />Abilities</h4>
              <li>
                <p>Russian and Ukrainian language - fluent;</p>
                <p>English language - B1 Intermediate;</p>
              </li>
              <h4><img src={AdInfo} />Additional Information</h4>
              <li>
                Personal qualities: I work well in a team, I know how to compromise. I like to learn something new. I am convinced that everyone should develop and improve their skills, so every day I go with these beliefs. I am not afraid to study and work a lot to succeed in my professional activity.
</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CV;
