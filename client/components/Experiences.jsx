import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

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
          OTransform: "translateX(" + index * -50 + "%)"
        }
    }
  }

  render() {
    return (
      <>
       <BannerExperiences/>
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
                    <p>
                      I hit the ground running as soon as my feet touched NZ
                      soil three years ago. I quickly adapted to a new culture
                      and worked my way up from a front-of-house role at a
                      winery to a retail store manager at a craft brewery (all
                      within my second language—no biggie).
                    </p>

                    <p>
                      Working in customer service exposed me to a kaleidoscope
                      of critical situations. Being empathetic meant I could
                      face these situations head-on, with an innate
                      understanding that we all come from different backgrounds
                      and experiences.
                    </p>
                    <p>
                      I have a deep love of teaching. My experience as a
                      volunteer home English tutor with former refugees has not
                      only strengthened my English, but my teaching skills as
                      well. In the context of coding, I love learning from and
                      teaching others, always with a view of strengthening a
                      team’s capabilities.
                    </p>
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
                    {/* <h5>I work with:</h5>
                    <ul>
                      <li>GIT - Version Control</li>
                      <li>npm</li>
                    </ul> */}

                    <h5>Front-end:</h5>
                    <ul>
                      <li>HTML</li>
                      <li>CSS(includes (includes: Materialize, Bootstrap)</li>
                      <li>Javascript</li>
                      <li>React, React-Redux, Redux-Thunk</li>
                    </ul>
                    <h5>Back-end:</h5>
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
            <span className="arrow-experiences left-experiences">
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
            <span className="arrow-experiences right-experiences">
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
