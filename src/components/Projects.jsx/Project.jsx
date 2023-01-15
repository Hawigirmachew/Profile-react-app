import React from 'react'
import './project.css'
import PC from '../../Assets/pc.jpg'
export default function Project() {
  return (
    <section className='section projects' id='projects'>
    <h2 className="section__title">
     Projects
    </h2>
    <p className="section__subtitle" >Demo and Code</p>
    <div className="projects__container container grid">
    <div class="projects__content">
       
        <div className="projects__box">
           <img src={PC} alt="" className='project__image'/>
           <div className='project__link'>
           <a href="https://melodious-florentine-9f505d.netlify.app/" className="button button-flex">Demo</a>
           <a href="https://github.com/Hawigirmachew/WeatherApp" className="button button-flex">Code</a>
           </div>
        </div>
    </div>  
    <div class="projects__content">
       
        <div className="projects__box">
        <img src={PC} alt=""  className='project__image'/>
           <div className='project__link'>
           <a href="#contact" className="button button-flex">Demo </a>
           <a href="#contact" className="button button-flex">Code</a>
           </div>
           
        </div>
    </div>  
          
    </div>
    </section>
  )
}
