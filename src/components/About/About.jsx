import React from 'react'
import './about.css'
import AboutIamge from '../../Assets/dp.png'
import CV from '../../Assets/CV1.pdf'
// import Info from './Info'
export default function About() {
  return (
    <section className='section about' id='about'>
      <h2 className="section__title">
        About Me
      </h2>
      <p className="section__subtitle" >My introduction</p>
      <div className="about__container container grid">
        <img src={AboutIamge} alt="" className='about__img' />
        <div className="about__data">
            {/* <Info/> */}
            <p className="about__description">An enthusiastic Software Engineering major, with an aptitude for
research who is striving to solve my community's problem using
technology.</p>
            <a href = {CV}download="" className="button button--flex">Download CV<i class="uil uil-file-download-alt"></i></a>
        </div>
      </div>
    </section>
  )
}


