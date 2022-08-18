import React from 'react'
import{MdOutlineEmail} from 'react-icons/md'
import{RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'
import './Contact.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


function Contact() {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lhd3wff', 'template_tc0c7bi', form.current, 'pQ3vt7CCtaK7NsBdB')
      e.target.reset()
      
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contect Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_icon'/>
            <h4>Email</h4>
            <h5>satyamsingh7417@gmail.com</h5>
            <a href="mailto:satyamsingh7417@gmail.com" target='_blank'> Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_icon'/>
            <h4>Whatsapp</h4>
            <h5>+918533924968</h5>
            <a href="https://api.whatsapp.com/send?phone+918533924968" target='_blank'> Send a Message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_icon'/>
            <h4>Messenger</h4>
            <h5>satyamsingh7417@gmail.com</h5>
            <a href="https://www.facebook.com/profile.php?id=100005448188705" target='_blank'> Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required  />
            <textarea name="massage" placeholder='Your Massage' id="" rows="10" required></textarea>
            <button type="submit" className='btn btn-primary'> Send a Massage</button>

          </form>
          
      </div>
    </section>
  )
}

export default Contact