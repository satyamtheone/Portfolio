import React from 'react'
import Cta from './Cta'
import image1 from '../../assets/img1.jpg'
import Social from './Social'
import './Header.css'
function Header() {
  return (
   <header>
    <div className="container header_container">
      <h5>hello i am</h5>
      <h1>Satyam Singh Chauhan</h1>
      <h5 className='text-light'>Full Stack Developer</h5>
      <Cta/>
      <Social/>
     <div>
      <img src={image1}  className='me' alt="me" />
     </div>
    </div>
   </header>
  )
}

export default Header