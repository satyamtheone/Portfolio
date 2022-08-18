import React from 'react'
import {BsLinkedin,} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

function Social() {
  return (
    <>
    <div className='header_social'>
        <a href="https://linkedin" target="_blank"><BsLinkedin/></a>
        <a href="https://linkedin" target="_blank"><FaGithub/></a>
       <a href="https://linkedin" target="_blank"><FiDribbble/></a>
    </div>
    <div className='scroll_down'>Scroll Down</div>
    </>
    
  )
}

export default Social