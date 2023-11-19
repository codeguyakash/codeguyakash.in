import React from 'react'
import ProjectCard from "./ProjectCard"
import "./Projects.css"

const Projects = () => {

    const colors = ["#0ba95b", "#fc7428", "#7b5ea7", "#12b5e5", "#f9f4da", "#ed203d"]

    return (
        <>
            <section id='project-section'>
                <div id='heading'>
                <h1>PROJECT</h1>
                <h3>Our courses are the ultimate brain food</h3>
                </div>
                <div className='projects'>
                    {
                        colors.map((color, index) => (
                            <ProjectCard items={color} key={index} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Projects;