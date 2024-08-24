import React from 'react'

const Learn = () => {
  return (
    <div>
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
  )
}

export default Learn
