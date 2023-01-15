import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
export default function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ww6dym5', 'template_ozogoa9', form.current, '6GT-CKLXidpw3C_jB')
      e.target.reset()
  };
  return (
    <section className="section contact" id="contact">
      <h2 className="section__title">Contact</h2>
      <p className="section__subtitle">Get in touch</p>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Send Message</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">hawigirmchee@gmail.com</span>
              <a
                href="malito:hawigirmachee@gmail.com"
                className="contact__card-button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__card-button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bx1-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+251-924-950-125</span>
              <a
                href="https://wa.me/1924950125"
                className="contact__card-button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__card-button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i class="bx bxl-microsoft-teams contact__card-icon"></i>
              <h3 className="contact__card-title">Teams</h3>
              <span className="contact__card-data">hawigirmachew@womentechsters.org</span>
              <a
                href="malito:hawigirmachew@womentechsters.org"
                className="contact__card-button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__card-button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
            <h3 className="contact__title">Write me your Suggestion</h3>
            <form ref={form} className="contact__form" onSubmit={sendEmail}>
                <div className="contact__form-div">
                    <label htmlFor="name" className="contact__form-tag">Name</label>
                    <input type="text" name="text" className="contact__form-input" id="name" placeholder="Inter your name"/>
                </div>
                <div className="contact__form-div">
                    <label htmlFor="email" className="contact__form-tag">Email</label>
                    <input type="email" name="email" className="contact__form-input" id="email" placeholder="Inter your email"/>
                </div>
                <div className="contact__form-div contact__form-area">
                    <label htmlFor="name" className="contact__form-tag">Suggestion</label>
                    <textarea cols="30" rows="10" className="contact__form-input" name="suggestion" placeholder="Your suggestion">
                        </textarea>
                </div>
                <button type="submit" className="button button-flex contact__button">Send Message<i class='bx bxs-send bx-tada' ></i></button>
            </form>
        </div>
      </div>
    </section>
  );
}
