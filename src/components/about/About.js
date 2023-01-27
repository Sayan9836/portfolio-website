import React from 'react'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { BsFolderPlus } from 'react-icons/bs'
import './About.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me__image'>
            <img src={ME} alt="" />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>clients</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <BsFolderPlus className='about__icon' />
              <h5>lawda kuch nahi ata</h5>
              <small>lawda+ Years Working</small>
            </article>
          </div>
          <p> passionate front-end web developer with a decent knowledge of
            react js. fetched data's from multiple API's ,learn a lot of indepth
            concept through making multiple personal projects in react js. ability to
            build responsive Web Apps.A self motivated,team work Oriented
            Aspiring web Developer. currently pursuing B.Tech in information technology
            from Haldia institute of technology</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default About
