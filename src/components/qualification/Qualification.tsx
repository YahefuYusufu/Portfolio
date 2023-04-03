import React, { useState } from "react"
import { Slide } from "react-awesome-reveal"
import "./Qualification.css"

const Qualification: React.FC = () => {
  const [toggleModal, setToggleModal] = useState<number>(1)
  const toggleTab = (index: number): void => {
    setToggleModal(index)
  }

  return (
    <section className="qualification section" id="qualification">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Qualification</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">My personal journey</span>
      </Slide>
      <div className="qualification__container container">
        {/* START BUTTON */}
        <div className="qualification__tabs">
          <div
            className={
              toggleModal === 1
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleModal === 2
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        {/* END BUTTON */}

        {/* Content 1 */}
        <Slide direction="left" triggerOnce>
          <div className="qualification__sections">
            <div
              className={
                toggleModal === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {/* GRP 1 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">International Trade</h3>
                  <span className="qualification__subtitle">
                    Ürumqi University{" "}
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2007 - 2011
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* GRP 2 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualififaction__title">
                    Software Development
                  </h3>
                  <span className="qualification__subtitle">
                    Sangmyung University - Seoul(south korea)
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2018 - 2020
                  </div>
                </div>
              </div>
              {/* GRP 3 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">
                    Front end development
                  </h3>
                  <span className="qualification__subtitle">
                    Sundsgarden Folkhögskola- Helsingborg
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2021 - 2022
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* GRP 4 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualififaction__title">Polyglot</h3>
                  <span className="qualification__subtitle">
                    I speak 5 Languages
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2023 - present
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Content 2 */}
          <div className="qualification__sections">
            <div
              className={
                toggleModal === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {/* GRP 5 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">
                    Regional Manager,Sale
                  </h3>
                  <span className="qualification__subtitle">
                    Ürumqi - China
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2012 - 2014
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* GRP 6 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualififaction__title">
                    Language Coordinator
                  </h3>
                  <span className="qualification__subtitle">
                    Kazan Soda Elektrik-Turkey(turkish-chinese)
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2014 - 2018
                  </div>
                </div>
              </div>
              {/* GRP 7 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">Volunteer</h3>
                  <span className="qualification__subtitle">
                    Rädda Barnen-Skellefteå
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2020 - 2021
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* GRP 8 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualififaction__title">Freelancing</h3>
                  <span className="qualification__subtitle">Remote</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2023 - present
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  )
}

export default Qualification
