import React from "react"
import data from "../data"
// import ScrollAnimation from "react-animate-on-scroll"

import PortfolioContent from "./Portfoliovideos/PortfolioContent"

class Portfolio extends React.Component {
  state = {
    slide: false,
    index: 0,
    next: true,
    prevs: false,
  }

  handleClickNext = () => {
    this.setState({
      slider: true,
      index: ((this.state.index < 6) && this.state.index + 1 )  , 
      prevs: true,
      next: false,
    })
  }

  handleClickPrev = () => {
    this.setState({
      slider: true,
      index:
        this.state.index >= 1 && this.state.index >= 0
          ? this.state.index - 1
          : this.state.index + 6,
      prevs: false,
      next: true,
    })
  }

  slideStyling = (index) => {
    switch (index) {
      case index:
        return {
          transform: "translateX(" + index * -14.2857143 + "%)",
          WebKitTransform: "translateX(" + index * -14.2857143 + "%)",
          MozTransform: "translateX(" + index * -14.2857143 + "%)",
          OTransform: "translateX(" + index * -14.2857143 + "%)",
        }
    }
  }

  render() {
    return (
      <>
        <div
          className="portfolio-background-image"
          title="Himalaya's Landscape mountains snowcaps - Photographer:Emma Coombe NZ"
        ></div>

        <section id="portfolio-section">
          <div className="container-portfolio">
            <div className="carousel-portfolio portfolio-background">
              <div
                className="slider-portfolio"
                style={this.slideStyling(this.state.index)}
              >
                {data.map((content, index) => (
                  <PortfolioContent content={content} key={index} />
                ))}
              </div>
            </div>
          </div>

          <div className="control-portfolio">
            <span className="arrow-portfolio left-portfolio">
              <i className="material-icons" onClick={this.handleClickPrev}>
                keyboard_arrow_left
              </i>
            </span>
            <span className="arrow-portfolio right-portfolio">
              <i className="material-icons" onClick={this.handleClickNext}>
                keyboard_arrow_right
              </i>
            </span>
            <ul>
              {data.map((value, index) => (
                <li
                  key={index}
                  className={
                    this.state.index == index ? "selected-portfolio" : ""
                  }
                  onClick={
                    this.state.index === index
                      ? this.handleClickNext
                      : this.handleClickPrev
                  }
                ></li>
              ))}
            </ul>
          </div>
        </section>
      </>
    )
  }
}

export default Portfolio
