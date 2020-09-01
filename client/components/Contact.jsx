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
            <h1 className="contact-title">Contact Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              aut tempore. Animi, est eum alias dignissimos ullam nihil vero
              voluptatibus itaque commodi libero a error officiis soluta facere
              accusantium reiciendis?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              aut tempore. Animi, est eum alias dignissimos ullam nihil vero
              voluptatibus itaque commodi libero a error officiis soluta facere
              accusantium reiciendis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              aut tempore. Animi, est eum alias dignissimos ullam nihil vero
              voluptatibus itaque commodi libero a error officiis soluta facere
              accusantium reiciendis?
            </p>
          </ScrollAnimation>
          {/* </Fade> */}
        </div>
      </section>
    </>
  )
}

export default Contact
