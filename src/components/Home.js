import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import Divider from './Divider'
import About from './About'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Divider />
            <Skills />
            <Divider />
            <Projects />
            <Divider />
            <About />
            <Divider />
            <Footer />
        </>
    )
}

export default Home;