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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              aut tempore. Animi, est eum alias dignissimos ullam nihil vero
              voluptatibus itaque commodi libero a error officiis soluta facere
              accusantium reiciendis? Animi, est eum alias dignissimos ullam
              nihil vero voluptatibus itaque commodi libero a error officiis
              soluta facere accusantium reiciendis? Animi, est eum alias
              dignissimos ullam nihil vero voluptatibus itaque commodi libero a
              error officiis soluta facere accusantium reiciendis? Animi, est
              eum alias dignissimos ullam nihil vero voluptatibus itaque commodi
              libero a error officiis soluta facere accusantium reiciendis?
            </p>

            {/* <div className="social-container"> */}
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            {/* </div> */}
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

export default Contact
