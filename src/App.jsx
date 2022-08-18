import React from 'react'
// import { ReactDOM } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import Experience from './components/experience/Experience'
import Testimonials from './components/Testimonials/Testimonials'


function App  (){
  return (
   <>
   <Header/>
   <About/>
   <Experience/>
   <Nav/>
   <Services/>
   <Portfolio/>
   <Testimonials/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App