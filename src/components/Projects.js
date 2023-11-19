import React, { useState, useEffect } from 'react'
import axios from "axios"
import ProjectCard from "./ProjectCard"
import "./Projects.css"

const Projects = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://codeguyakash.github.io/server/projects.json").then((res) => setData(res.data))
    }, [])
    return (
        <>
            <section id='project-section'>
                <div id='heading'>
                    <h1>PROJECT</h1>
                    <h3>Our courses are the ultimate brain food</h3>
                </div>
                <div className='projects'>
                    {
                        data.map((color, index) => (
                            <ProjectCard items={color} key={index} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Projects;