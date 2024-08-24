import React from 'react'
import './hero.scss';
import main from '../../assets/main.svg'

const Hero = () => {
  return (
    <div id="Hero">
      <div className="boxes">
        <div className="box">About me</div>
        <div className="box">Skills</div>
        <div className="box">Portfolio</div>
        <div className="contact">CONTACT ME</div>
        </div>
        <img src={main} alt="main" />
      
      
    </div>
  )
}

export default Hero
