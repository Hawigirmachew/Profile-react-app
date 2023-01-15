import React from 'react'
import './home.css'
export default function Data() {
  return (
    <div className='home__data'>
        <h1 className='home__title'>
            Hawi Girmachew
        </h1>
        <h3 className="home__subtitle">Junior Front-end Developer</h3>
        <p className="home__description">
            I'm software engineer student from Ethiopia. I'm very passionate and delicated to work. 
        </p>
        <a href="#contact" className="button button-flex">Say Hello<i class='bx bxs-send bx-tada home__data-icon' ></i></a>
      
    </div>
  )
}
