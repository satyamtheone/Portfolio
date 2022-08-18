import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>what skill i have</h5>
      <h2>My Experiance</h2>
      <div className="container experiance_container">
        <div className="experiance_frontend">
          <h3>Frontend Developer</h3>
          <div className="experiance_content">
            <article className='experiance_details'>
             <BsPatchCheckFill className='react-icon'/>
             <div>
             <h4>HTML</h4>
             <small className='text_light'>Experiance</small>
             </div>
            </article>
            <article className='experiance_details'>
             <BsPatchCheckFill className='react-icon' />
             <div>
             <h4>HTML</h4>
             <small className='text_light'>Experiance</small>
             </div>
            </article>
            <article className='experiance_details'>
             <BsPatchCheckFill className='react-icon' />
             <div>
             <h4>HTML</h4>
             <small className='text_light'>Experiance</small>
             </div>
            </article>
            <article className='experiance_details'>
             <BsPatchCheckFill className='react-icon' />
             <div>
             <h4>HTML</h4>
             <small className='text_light'>Experiance</small>
             </div>
            </article>
            <article className='experiance_details'>
             <BsPatchCheckFill className='react-icon' />
             <div>
             <h4>HTML</h4>
             <small className='text_light'>Experiance</small>
             </div>
            </article>
          </div>
        </div>


        <div className="experiance_backend">
        <h3>Backend Developer</h3>
        <div className="experiance_content">
        <article className='experiance_details'>
             <BsPatchCheckFill className='react-icon' />
             <div>
             <h4>HTML</h4>
             <small className='text_light'>Experiance</small>
             </div>
            </article>
            <article className='experiance_details'>
             <BsPatchCheckFill className='react-icon' />
             <div>
             <h4>HTML</h4>
             <small className='text_light'>Experiance</small>
             </div>
            </article>
            <article className='experiance_details'>
             <BsPatchCheckFill className='react-icon' />
             <div>
             <h4>HTML</h4>
             <small className='text_light'>Experiance</small>
             </div>
            </article>
            <article className='experiance_details'>
             <BsPatchCheckFill className='react-icon' />
             <div>
             <h4>HTML</h4>
             <small className='text_light'>Experiance</small>
             </div>
            </article>
            <article className='experiance_details'>
             <BsPatchCheckFill className='react-icon' />
             <div>
             <h4>HTML</h4>
             <small className='text_light'>Experiance</small>
             </div>
            </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience