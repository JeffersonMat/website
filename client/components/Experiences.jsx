import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import experiences, { keys } from "../experiences"

import BannerExperiences from "./banners/BannerExperiences"

class Experiences extends React.Component {
  state = {
    slide: false,
    index: 0,
    next: true,
    prevs: false,
  }

  handleClickNext = () => {
    this.setState({
      slider: true,
      index: this.state.index + 1,
      prevs: true,
      next: false,
    })
  }

  handleClickPrev = () => {
    this.setState({
      slider: true,
      index: this.state.index - 1,
      prevs: false,
      next: true,
    })
  }

  slideStyling = (index) => {
    switch (index) {
      case 1:
        return {
          transform: "translateX(" + index * -50 + "%)",
          WebKitTransform: "translateX(" + index * -50 + "%)",
          MozTransform: "translateX(" + index * -50 + "%)",
          OTransform: "translateX(" + index * -50 + "%)",
        }
    }
  }

  render() {
    return (
      <>
        <BannerExperiences />
        <section id="experiences">
          <div id="container-experiences">
            <div className="carousel-experiences">
              <div
                className="slider-experiences"
                style={this.slideStyling(this.state.index)}
              >
                <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
                  <div className="experiences-content">
                    <h1 className="experience-title">My Journey</h1>
                    {experiences.map((value, index) => {
                      return (
                        <>
                          <p>{value.myJourney.ParagraphOne}</p>
                          <p>{value.myJourney.ParagraphTwo}</p>
                          <p>{value.myJourney.ParagraphThree}</p>
                        </>
                      )
                    })}
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
                  <div className="experiences-content">
                    <h1 className="experience-title experience-second-title">
                      My tech toolbelt.
                    </h1>
                    <p>
                      I have just completed an 18-week intensive bootcamp at
                      Enspiral Dev Academy where I trained as a full stack
                      developer in a real-world environment. Working in pair and
                      group situations with tight deadlines enhanced my
                      self-awareness and improved my ability to deliver and
                      receive feedback.
                    </p>

                    <h5>Front-end</h5>
                    <ul>
                      <li>HTML, custom CSS —Materialize, Bootstrap</li>
                      <li>Javascript</li>
                      <li>React, React-Redux, Redux-Thunk</li>
                    </ul>
                    <h5>Back-end</h5>
                    <ul>
                      <li>Node.js</li>
                      <li>Knex</li>
                      <li>Express</li>
                      <li>RESTful API</li>
                    </ul>

                    <h5>Currently learning</h5>
                    <ul>
                      <li>Typescript</li>
                      <li>Vue.js</li>
                      <li>.Net</li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>

          <div className="control-experiences">
            <span
              className="arrow-experiences left-experiences"
              onClick={
                this.state.index == 0
                  ? this.handleClickNext
                  : this.handleClickPrev
              }
            >
              <i
                className="material-icons"
                onClick={
                  this.state.index == 0
                    ? this.handleClickNext
                    : this.handleClickPrev
                }
              >
                keyboard_arrow_left
              </i>
            </span>
            <span
              className="arrow-experiences right-experiences"
              onClick={
                this.state.index == 0
                  ? this.handleClickNext
                  : this.handleClickPrev
              }
            >
              <i
                className="material-icons"
                onClick={
                  this.state.index == 0
                    ? this.handleClickNext
                    : this.handleClickPrev
                }
              >
                keyboard_arrow_right
              </i>
            </span>
            <ul>
              <li
                className={this.state.index == 0 ? "selected-experiences" : ""}
                onClick={
                  this.state.index == 0
                    ? this.handleClickNext
                    : this.handleClickPrev
                }
              ></li>
              <li
                className={this.state.index == 1 ? "selected-experiences" : ""}
                onClick={
                  this.state.index == 0
                    ? this.handleClickNext
                    : this.handleClickPrev
                }
              ></li>
            </ul>
          </div>
        </section>
      </>
    )
  }
}

export default Experiences
