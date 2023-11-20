import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import Divider from './Divider'
import About from './About'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Divider/>
            <Skills/>
            <Divider/>
            <Projects />
            <Divider/>
            <About/>
        </>
    )
}

export default Home;