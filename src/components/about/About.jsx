import React from 'react'
import './About.css'
import image2 from '../../assets/five.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'




const About =()=> {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About Me</h1>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'> 
          <img src={image2} alt="" />
          </div>
          </div>

          <div className='about_content'>
            <div className="about_cards">
              <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experince</h5>
                <small>6 Month woeking</small>
              </article>

              <article className='about_card'>
                <FiUsers className='about_icon'/>
                <h5>Experince</h5>
                <small>6 Month woeking</small>
              </article>

              <article className='about_card'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Experince</h5>
                <small>6 Month woeking</small>
              </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque soluta fugiat temporibus id officiis ab cum. Perferendis voluptatum fuga beatae laborum distinctio consequuntur fugiat pariatur eius vel officiis soluta et a, quisquam rerum ipsum nobis illo. Quo nobis reiciendis soluta vero. Quis tempora nostrum earum atque obcaecati ab inventore!</p>

            <a href="#contect" className='btn btn-pri mary'>Let's Talk</a>
          </div>
        
      </div>
    </section>
  )
}

export default About