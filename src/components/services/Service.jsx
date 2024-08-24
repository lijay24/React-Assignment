import React from 'react'
import './service.scss';
import design from '../../assets/design.png'
import deve from '../../assets/deve.png'
import maintain from '../../assets/maintenance.png'
import seperator from '../../assets/seperator.svg'
const Service = () => {
  return (
    <div id= "services">
      <div className="line_l1">
        <div className="boxa">
          <h3> DESIGN</h3>
          <img src={design} alt="design" />
          <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
        </div>
        <div className="boxb">
          <h3>DEVELOPMENT</h3>
          <img src={deve} alt="dev" />
          <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
        </div>
      </div>
      <div className="line_l2">
        <div className="boxc">
          <h3>MAINTENANCE</h3>
          <img src={maintain} alt="maintain" />
          <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
        </div>
      </div>
      <div className="divider">
      <img src={seperator} alt="seperator" />
      </div>
    </div>
  )
}

export default Service
