import React, { useState } from "react";
import "./qualification.css";

export default function Qualification() {
    const [toggleState, setToggleState] = useState(1)
    const toggle = (i) =>{
        setToggleState(i)
    }
  return (
    <section className="section qualification" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <p className="section__subtitle">My Personal Joureny</p>
      <div className="qualification__contanier container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex":"qualification__button button--flex"}
          onClick = {() => toggle(1)}
          >
            <i className="uil uil-book-alt qualification__icon"></i>Education
          </div>
          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex":"qualification__button button--flex"}
           onClick = {() => toggle(2)}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZBJREFUSEu1lY0xRFEMhb+tABWgAjpABagAHVABKqADdEAFSwV0gA7owHw7yZtr9/3cZ21mdu7Muzc5yUlydsKKbbLi+NQA7ANT4B64iIRugCPgGHjuS7IG4A3YiSBfca7H+QFsjwXYBQ7DaQs4BT4BgfL7C+DdZlQmkPYU7xrMtgqugMu5rKTiEZAuTVqSuvLpNaB/FYBZGsjs5L/NBPFnNSdAFYDBWh/3cF0OwllXBXJ/B3hqPuzKfB5Ln9ei8frOpqvsgROyFg2Vx9rgCWYV+th4Y23MAyQ1NtOm/sUyxkNM368KnG0bahUHQwvUgp40fUfTZztTUiTAO+C5DICBXb4FgCzP8cx5H0tTL0XZZDdWzenVmBZkk3IK3QlpmslJSVE5Bd6NoakcU2VFeVkY00xqmUVrpieD9WmRGaRU6NglFXtBi1lXSUWb2OVW/4vYyad/JlqKmPth8/O7y+g7760u5drvvmus5g9HZ9dfczo0l1GzoYJ0Wg1AKqWZnkek21DcwUmrAehLcPBu5QA/dE1gGVycG2wAAAAASUVORK5CYII="
              className="qualification__icon"
            />
            Certification
          </div>
        </div>
        <div className="qualification__sections">
          <div className={toggleState === 1?"qualification__content qualification__content-active":"qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineering</h3>
                <span className="qualification__subtitle"><acronym title="Addis Ababa Science and Technology University">AASTU</acronym></span>
                  <div className="qualification__calender"><i className="uil uil-calendar-alt"></i>2019-present
                    
                  </div>
                
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
                <div></div>
                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Front-End Development</h3>
                <span className="qualification__subtitle">Tech4dev/Women Tecchsters Fellowhip</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2022-present
                  </div>
                
              </div>
              
            </div>
   
          </div>
          <div className={toggleState === 2 ?"qualification__content qualification__content-active":"qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Introduction to Front-end Devlopment</h3>
                <span className="qualification__subtitle">Coursera</span>
                  <div className="qualification__calender"><i className="uil uil-calendar-alt"></i>2022
                    
                  </div>
                
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
                <div></div>
                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Programming with javascript</h3>
                <span className="qualification__subtitle">Coursera</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2022
                  </div>
                
              </div>
              
            </div>
           </div> 
        </div>
      </div>
    </section>
  );
}
