import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

const Experiences = () => {
  return (
    <>
      <section className="experiences-background"></section>
      <section id="experiences">
        <div className="experiences-content">
          <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
            <h1 className="experience-title">My Journey</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              aut tempore. Animi, est eum alias dignissimos ullam nihil vero
              voluptatibus itaque commodi libero a error officiis soluta facere
              accusantium reiciendis?
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration={0.40}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              aut tempore. Animi, est eum alias dignissimos ullam nihil vero
              voluptatibus itaque commodi libero a error officiis soluta facere
              accusantium reiciendis?
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration={0.40}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              aut tempore. Animi, est eum alias dignissimos ullam nihil vero
              voluptatibus itaque commodi libero a error officiis soluta facere
              accusantium reiciendis?
            </p>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

export default Experiences
