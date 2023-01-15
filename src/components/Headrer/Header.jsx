// import pc from "../Assets/pc2.jpg"
import { useState } from "react"
import "./header.css"

function Header() {
  // Toogle Menu

  const [toggle,showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Hawi</a>
        <div className={toggle?"nav__menu show-menu":"nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon active-link"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Project
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link">
              <i class="uil uil-book nav__icon"></i>Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close"  onClick={() => showMenu(!toggle)} ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
        <i class="uil uil-apps"></i>
        </div>
      </nav>
    
    </header>
  )
}

export default Header
