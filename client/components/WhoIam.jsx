import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import whoIam from "../whoIam"

import Banner from "./banners/Banner"

class WhoIam extends React.Component {
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
        <Banner />
        <section id="who-i-am">
          <div className="container">
            <div className=" carousel-who-i-am  who-i-am">
              <div
                className="slider-who-i-am"
                style={this.slideStyling(this.state.index)}
              >
                <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
                  <div id="content-who-i-am">
                    <h1 className="who-i-am-title">Kia ora. I'm Jefferson.</h1>
                    {whoIam.map((value) => (
                      <>
                        <p>{value.kiaOraTitle.paragraphOne}</p>
                        <p>{value.kiaOraTitle.paragraphTwo}</p>
                        <p>{value.kiaOraTitle.paragraphThree}</p>
                      </>
                    ))}
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
                  <div id="content-who-i-am-second-section">
                    <h1 className="who-i-am-title">A few things about me.</h1>

                    {whoIam.map((value) => {
                      return (
                        <>
                          <p>{value.fewThingsTitle.paragraphOne}</p>
                          <p>{value.fewThingsTitle.paragraphTwo}</p>
                          <p>{value.fewThingsTitle.paragraphThree}</p>
                        </>
                      )
                    })}
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            <span className="arrow" id="left-who-i-am">
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
            <span className="arrow"  id="right-who-i-am">
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
          </div>
          <div className="control">
            <ul>
              <li
                className={this.state.index == 0 ? "selected" : ""}
                onClick={
                  this.state.index == 0
                    ? this.handleClickNext
                    : this.handleClickPrev
                }
              ></li>
              <li
                className={this.state.index == 1 ? "selected" : ""}
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

export default WhoIam
