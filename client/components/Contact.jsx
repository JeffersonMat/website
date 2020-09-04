import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

const Contact = () => {
  return (
    <>
      <section className="contact-background"></section>
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
                <li>jeff_08062011@hotmail.com</li>
                <li>0210445115</li>
              </ul>
              <h5>FIND ME ONLINE</h5>
              <ul>
                <li>
                  <a href="#">Github</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>

        <footer>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fab fa-github-square"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-smile-wink"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </>
  )
}

export default Contact
