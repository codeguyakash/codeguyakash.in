import React from "react"
import expresslogo from "../utils/icons/express.png"
import reactlogo from "../utils/icons/reactjs.png"
import javascriptlogo from "../utils/icons/javasript.png"
import mongodblogo from "../utils/icons/mongodb.png"
import nodelogo from "../utils/icons/node-js.png"
import bootstraplogo from "../utils/icons/bootstrap.png"
import gitlogo from "../utils/icons/git.png"
import csslogo from "../utils/icons/css.png"
import htmllogo from "../utils/icons/html.png"
import materiallogo from "../utils/icons/material.png"
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
                        <div className="skill-title">
                            <img src={mongodblogo} alt="MongoDB-Logo" className="skills-logos" />
                            <span>MongoDB</span>
                        </div>

                    </div>
                    <div className="skill skill-2" >
                        <img src={expresslogo} alt="Express.js-Logo" className="skills-logos" />
                        <span>Express.js</span>
                    </div>
                    <div className="skill skill-3" >
                        <img src={reactlogo} alt="React.js-Logo" className="skills-logos" />
                        <span >React.js</span>
                    </div>
                    <div className="skill skill-4" >
                        <img src={nodelogo} alt="Node.js-Logo" className="skills-logos" />
                        <span style={{ color: "#0f0d0e" }}>Node.js</span>
                    </div>
                    <div className="skill skill-5" >
                        <img src={javascriptlogo} alt="JavaScript-Logo" className="skills-logos" />
                        <span >JavaScript</span>
                    </div>
                    <div className="skill skill-6" >
                        <img src={htmllogo} alt="HTML-Logo" className="skills-logos" />
                        <span >HTML5</span>
                    </div>
                    <div className="skill skill-7" >
                        <img src={csslogo} alt="Css-Logo" className="skills-logos" />
                        <span >CSS/CSS3</span>
                    </div>
                    <div className="skill skill-8" >
                        <img src={bootstraplogo} alt="BootStrap-Logo" className="skills-logos" />
                        <span >BootStrap </span>
                    </div>
                    <div className="skill skill-9" >
                        <img src={gitlogo} alt="Git-Logo" className="skills-logos" />
                        <span >Git/Github</span>
                    </div>
                    <div className="skill skill-10" >
                        <img src={materiallogo} alt="Material" className="skills-logos" />
                        <span style={{ color: "#0f0d0e" }}>Material UI</span>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Skills