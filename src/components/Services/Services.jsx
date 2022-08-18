import React from 'react'
import './Services.css'
import{BiCheck} from 'react-icons/bi'

function Services() {
  return (
   <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services_container">
      <article className='services'>
        <div className="service_head">
          <h3>Ui/Ux Design</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
        </ul>
        </article>

        <article className='services'>
        <div className="service_head">
          <h3>Content creation</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
        </ul>
        </article>

        <article className='services'>
        <div className="service_head">
          <h3>Web development</h3>
        </div>
        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit, sunt! Quis.</p>
          </li>
        </ul>
        </article>
    </div>
   </section>
  )
}

export default Services