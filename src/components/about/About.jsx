import React from 'react'
import './about.scss';
import seperator from '../../assets/seperator.svg'


const About = () => {
  return (
    <div id="About">
            <h2>ABOUT ME</h2>
            <p>
                Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
                varius finibus. Sed ornare sit amet lorem sed viverra.In vel urna
                quis libero viverra facilisis ut ac est.
            </p>
            <h2 className="about-me-explore outline">EXPLORE</h2>

            <div>
            <img src={seperator} alt="seperator" />
            </div>
        </div>
  )
}

export default About
