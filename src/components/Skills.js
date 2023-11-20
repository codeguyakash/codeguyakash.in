import React from "react"
import './Skills.css'

const Skills = () => {
    return (
        <>
            <section id="skill-section">
                <div id='heading'>
                    <h1>SKILLS</h1>
                    <h3>Expertise in technologies</h3>
                </div>
                <div className="container">
                    <div className="skill skill-1" >
                        <div className="skill-title">MongoDB</div>
                        {/* <div className="skill-rating">
                        </div> */}
                    </div>
                    <div className="skill skill-2" >Express.js</div>
                    <div className="skill skill-3" >React.js</div>
                    <div className="skill skill-4" >Node.js</div>
                    <div className="skill skill-5" >JavaScript</div>
                    <div className="skill skill-6" >Material UI</div>
                    <div className="skill skill-7" >Git/GitHub</div>
                    <div className="skill skill-8" >HTML</div>
                    <div className="skill skill-9" >CSS</div>
                    <div className="skill skill-10" >BootStrap</div>
                </div>

            </section>
        </>
    )
}

export default Skills