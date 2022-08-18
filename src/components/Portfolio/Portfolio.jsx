import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/port1.webp'
import img2 from '../../assets/port2.webp'
import img3 from '../../assets/port3.webp'
import img4 from '../../assets/port4.webp'
import img5 from '../../assets/port5.webp'
import img6 from '../../assets/port6.webp'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
           <div className="portfolio_item-cta">
           <a href="#" className='btn'>GitHub</a>
            <a href="#" className='btn btn-primary'targe='_blank'>Live demo</a>
           </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={img2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
           <div className="portfolio_item-cta">
           <a href="#" className='btn'>GitHub</a>
            <a href="#" className='btn btn-primary'targe='_blank'>Live demo</a>
           </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={img3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
           <div className="portfolio_item-cta">
           <a href="#" className='btn'>GitHub</a>
            <a href="#" className='btn btn-primary'targe='_blank'>Live demo</a>
           </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={img4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
           <div className="portfolio_item-cta">
           <a href="#" className='btn'>GitHub</a>
            <a href="#" className='btn btn-primary'targe='_blank'>Live demo</a>
           </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={img5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
           <div className="portfolio_item-cta">
           <a href="#" className='btn'>GitHub</a>
            <a href="#" className='btn btn-primary'targe='_blank'>Live demo</a>
           </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={img6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
           <div className="portfolio_item-cta">
           <a href="#" className='btn'>GitHub</a>
            <a href="#" className='btn btn-primary'targe='_blank'>Live demo</a>
           </div>
        </article>

        
      </div>
    </section>
  )
}

export default Portfolio