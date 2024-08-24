import React from "react";
import "./skill.scss";
import html3 from "../../assets/html3.png";
import css3 from "../../assets/css3.png";
import sacss from "../../assets/sass.png";
import java from "../../assets/js.png";
import react from "../../assets/react.png";
import bootstrap from "../../assets/bootstrap.png";
import git from "../../assets/Git-Icon.png";
import figma from "../../assets/figma.png";
import node from "../../assets/nodejs.png";
import Mysql from "../../assets/mysql.png";
import mango from "../../assets/mongodb.png";
import typescript from "../../assets/typescript.png";
import angle from "../../assets/angleski.png";
import spanish from "../../assets/spanish.png";
import cee from "../../assets/c++.png";
import ceee from "../../assets/c.png";

const Skills = () => {
  return (
    <div id="Skills">
      <h2>SKILLS</h2>
      <div className="present-skills">
        <h3>USING NOW:</h3>
        <div className="skills_con">
          <div className="overall">
            <div className="icon-card">
              <img src={html3} alt="html3" />
              <p>HTMLS</p>
            </div>
            <div className="icon-card">
              <img src={css3} alt="css" />
              <p>CSS3</p>
            </div>
            <div className="icon-card">
              <img src={sacss} alt="sass" />
              <p>SASS</p>
            </div>
            <div className="icon-card">
              <img src={java} alt="javascript" />
              <p>JAVASCRIPT</p>
            </div>
            <div className="icon-card">
              <img src={react} alt="react" />
              <p>REACT</p>
            </div>
            <div className="icon-card">
              <img src={bootstrap} alt="boostrap" />
              <p>BOOTSTRAP</p>
            </div>
            <div className="icon-card">
              <img src={git} alt="git" />
              <p>GIT</p>
            </div>
            <div className="icon-card">
              <img src={figma} alt="figma" />
              <p>FIGMA</p>
            </div>
          </div>
        </div>
      </div>
      <div class="learning-skills">
    <h3>LEARNING:</h3>
    <div class="flex__card">
        <div class="icon-card">
        <img src={node} alt="nodejs" />
            <p>NODEJS</p>
        </div>
        <div class="icon-card">
        <img src={Mysql} alt="mysql" />
            <p>MYSQL</p>
        </div>
        <div class="icon-card">
        <img src={mango} alt="mango" />
            <p>MONGODB</p>
        </div>
        <div class="icon-card">
        <img src={typescript} alt="typescript" />
            <p>TYPESCRIPT</p>
        </div>
    </div>
</div>
<div class="other-skills">
    <h3>OTHER SKILLS:</h3>

    <div class="flex__card">
        <div class="icon-card">
        <img src={angle} alt="angle" />
            <p>ANGIELSKI C1/C2</p>
        </div>
        <div class="icon-card">
        <img src={spanish} alt="spanish" />
            <p>HISZPAŃSKI B1/B2</p>
        </div>
        <div class="icon-card">
        <img src={cee} alt="c++" />
            <p>C++</p>
        </div>
        <div class="icon-card">
        <img src={ceee} alt="c" />
            <p>C</p>
        </div>
    </div>
</div>
    </div>
  );
};

export default Skills;
