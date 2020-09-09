import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { render } from "enzyme"

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
        return { transform: "translateX(" + index * -50 + "%)" }
    }
  }

  render() {
    return (
      <>
        <div
          className="experiences-background"
          title="Trees Forest - Photographer:Emma Coombe"
        ></div>
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta, aut tempore. Animi, est eum alias dignissimos ullam
                      nihil vero voluptatibus itaque commodi libero a error
                      officiis soluta facere accusantium reiciendis?
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta, aut tempore. Animi, est eum alias dignissimos ullam
                      nihil vero voluptatibus itaque commodi libero a error
                      officiis soluta facere accusantium reiciendis?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta, aut tempore. Animi, est eum alias dignissimos ullam
                      nihil vero voluptatibus itaque commodi libero a error
                      officiis soluta facere accusantium reiciendis?
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
                  <div className="experiences-content">
                    <h1 className="experience-title">My Journey</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta, aut tempore. Animi, est eum alias dignissimos ullam
                      nihil vero voluptatibus itaque commodi libero a error
                      officiis soluta facere accusantium reiciendis?
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta, aut tempore. Animi, est eum alias dignissimos ullam
                      nihil vero voluptatibus itaque commodi libero a error
                      officiis soluta facere accusantium reiciendis?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta, aut tempore. Animi, est eum alias dignissimos ullam
                      nihil vero voluptatibus itaque commodi libero a error
                      officiis soluta facere accusantium reiciendis?
                    </p>
                  </div>
                </ScrollAnimation>
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
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Experiences
