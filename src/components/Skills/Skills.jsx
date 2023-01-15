import React from 'react'
import './skills.css'
import FrontEnd from './FrontEnd'
export default function Skills() {
  return (
    <section className='section skills' id='skills'>
      <h2 className="section__title">
       Skills
      </h2>
      <p className="section__subtitle" >My Skills</p>
      <div className="skills__container container grid">
            <FrontEnd/>
      </div>
      </section>
  )
}
