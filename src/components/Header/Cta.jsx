import React from 'react'
import CV from '../.././assets/Satyam Singh Chauhan[1].pdf'


function Cta() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#Contect" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default Cta