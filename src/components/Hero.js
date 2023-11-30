import React from 'react'
import heroimage from "../utils/heroimage.png"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section id='hero-section'>
        <div id='hero-content'>
          <h1 className='welcome'>WELCOME, FRIEND</h1>
          <h2>Stuck in tutorial hell?</h2>
          <div>
            <p>You’ve come to the right place. We make learning the JavaScript ecosystem fun, approachable, and easy...</p>
          </div>
          <a id='hire-btn' href="mailto:codeguyakash@gmail.com" >HIRE ME</a>
        </div>
        <div id='hero-image-div'>
          <div>
            <img src={heroimage} alt='heroimage' id='hero-image' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero