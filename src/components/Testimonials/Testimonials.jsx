import React from 'react'
import u1 from '../../assets/u1.png'
import u2 from '../../assets/u2.png'
import u3 from '../../assets/u3.png'
import './Testimonials.css'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
   { avatar: u1,
    uname:'Name1',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolorum molestias! Adipisci perspiciatis sed excepturi consectetur esse? Eos eveniet possimus cum. Nostrum tempora facere voluptas veniam error molestias deserunt nulla!'},

    { avatar: u2,
        uname:'Name2',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolorum molestias! Adipisci perspiciatis sed excepturi consectetur esse? Eos eveniet possimus cum. Nostrum tempora facere voluptas veniam error molestias deserunt nulla!'},

        { avatar: u3,
            uname:'Name3',
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolorum molestias! Adipisci perspiciatis sed excepturi consectetur esse? Eos eveniet possimus cum. Nostrum tempora facere voluptas veniam error molestias deserunt nulla!'}
]
function Testimonials() {
  return (
    <section id='testimonias'>
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials_container"
        
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
        >
            {
                data.map(({avatar, uname, review},index)=>
                {
                    return(
                 <SwiperSlide  key={index } className='testimonial'>
                <div className="client_avtar">
                    <img src={avatar} alt="" />
                    </div>
                    <h5 className='client_name'>{uname}</h5>
                    <small className='client_review'>
                       {review}
                    </small>               
            </SwiperSlide>  
                    )      
                })
            }
                         
        </Swiper>

    </section>
  )
}

export default Testimonials