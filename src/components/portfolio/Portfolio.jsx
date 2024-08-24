import React from 'react'
import './portfolio.scss';
import project1 from "../../assets/Project1.png";
import project2 from "../../assets/project2.png";
import Project6 from "../../assets/Project6.png";
import Project3 from "../../assets/Project3.png";
import Project4 from "../../assets/Project4.png";
import Project5 from "../../assets/Project5.png";


const Portfolio = () => {
  return (
    <div id= "Portfolio">
       <div className="portfolio-wrapper">
            <h2 className="portfolio-heading outline">PORTFOLIO</h2>
        </div>    
    <div className="tab-flitters">
        <div className="filter">
            <span
                ><a href="#">ALL</a>
                <hr
            /></span>
            <span
                ><a href="#"
                    >CODED
                    <hr /> </a
            ></span>
            <span
                ><a href="#">DESIGN</a>
                <hr
            /></span>
        </div>
    </div>

    <div className="project__line">
        <div className="projects">
            <div>
            <img src={project1} alt="p1" />
            </div>
            <div><img src={project2} alt="p2" /></div>
            <div><img src={Project6} alt="p6" /></div>
            <div className="hidden"><img src={Project3} alt="p3" /></div>
            <div className="hidden"><img src={Project4} alt="p4" /></div>
            <div className="hidden"> <img src={Project5} alt="p5" /></div>
        </div>
        <h3>And many more to come</h3>
    </div>
    </div>
  );
};

export default Portfolio
