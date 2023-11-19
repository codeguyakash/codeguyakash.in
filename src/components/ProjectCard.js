import React from 'react'
import './ProjectCard.css'

const projectCard = ({ items }) => {
  return (
    <div className='card-container'>
      <div className='cards' style={{ background: items }}></div>

    </div>
  )
}

export default projectCard;