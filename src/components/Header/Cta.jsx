import React from 'react'
import CV from '../.././assets/cv.docx'


function Cta() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#Contect" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default Cta