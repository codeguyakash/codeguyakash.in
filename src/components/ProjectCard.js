import React from 'react'
import './ProjectCard.css'

const projectCard = ({ items }) => {
  return (
    <div className='card-container'>
      <div className='cards' style={{ background: items.color }}>
        <img src="https://cdn-icons-png.flaticon.com/512/10832/10832132.png" alt='project-1' id='project-image' />

        <h3 className='color'>{items.title}</h3>
        <p className='color' >{items.description}</p>
        <a className='color' href={items.sourceCodeLink }>Source Code</a> <br />
        <a className='color' href={items.demoLink}>Demo Code</a>

      </div>

    </div>
  )
}

export default projectCard;