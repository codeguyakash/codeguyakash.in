import React from 'react'
import heroimage from "../utils/heroimage.png"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section id='hero-section'>
        <div id='hero-content'>
          <h1>WELCOME, FRIEND</h1>
          <h2>Stuck in tutorial hell?</h2>
          <div>
            <p>You’ve come to the right place. We make learning the JavaScript ecosystem fun, approachable, and easy...</p>
          </div>
          <button id='hire-btn'>HIRE ME</button>
        </div>
        <div id='hero-image-div'>
          <div>
            <img src={heroimage} alt='hero-image' id='hero-image' />
          </div>
        </div>

      </section>
    </>
  )
}

export default Hero