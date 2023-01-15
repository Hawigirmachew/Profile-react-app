import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h3 className="footer__title">Hawi</h3>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li className="footer__item">
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li className="footer__item">
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/hawi-girmachee-010036228/" className="footer__social-icon" target="_blank">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="https://twitter.com/girmachee_h" className="footer__social-icon" target="_blank">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="https://www.instagram.com/hawi4251/" className="footer__social-icon" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
