import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

class Contact extends React.Component {
  state = {
    display: false,
  }

  handleClick = () => {
    this.setState({ display: true })
  }

  handleClickOverLay = () => {
    this.setState({ display: false })
  }

  render() {
    return (
      <>
        <div
          className="contact-background"
          title="Nepal: Landscape, mountains sunshine - Photographer:Emma Coombe NZ"
        ></div>
        <section id="contact">
          <div
            className="contact-content"
            data-wow-duration="2s"
            data-wow-delay="5s"
          >
            <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
              <h1 className="contact-title">Let's Chat!</h1>

              <div className="contact-container">
                <h5>GET IN TOUCH</h5>
                <ul>
                  <li>
                    <a href="mailto:jeff_08062011@hotmail.com">
                      jeff_08062011@hotmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:0210445115">0210445115</a>
                  </li>
                </ul>
                <h5>FIND ME ONLINE</h5>
                <ul>
                  <li>
                    <a target="_blank" href="https://github.com/JeffersonMat">
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/jeffersonm-189212179"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div
                id="overlay"
                style={{ display: this.state.display ? "block" : "none" }}
                onClick={this.handleClickOverLay}
              >
                <div id="overlay-background" onClick={this.handleClickOverLay}>
                  <img src="../images/Jefferson.png" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
  
          <footer>
            <div className="container-credit">
              <p className="credit-footer">
                <span id="copy-right">&copy;</span> by Jefferson Matamba -
                Photography by
                <a id="link-emma-site" href="emmacoombe.com" target="_blank">
                   Emma Coombe
                </a>
              </p>
            </div>
            <ul className="social-icons" id="social-icons">
              <li>
                <a target="_blank" href="https://github.com/JeffersonMat">
                  <i className=" fab fa-github-square"></i>
                </a>
              </li>
              <li>
                <a
                  onClick={
                    !this.state.display
                      ? this.handleClick
                      : this.handleClickOverLay
                  }
                >
                  <i className="fas fa-smile-wink"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/jeffersonm-189212179"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              </ul>
         
            </footer>
          
        </section>
      </>
    )
  }
}

export default Contact
