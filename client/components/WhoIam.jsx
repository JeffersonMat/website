import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

const WhoIam = () => {
  return (
    <>
      <section className="who-i-am-background"></section>
      <section id="who-i-am">
        <div className=" carousel carousel-slider  who-i-am">
          <div className="carousel-item" href="#one!">
            <div className="content-who-i-am">
              <ScrollAnimation animateIn="fadeInUp" duration="1">
                <h1 className="who-i-am-title">Who I am...</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, aut tempore. Animi, est eum alias dignissimos ullam
                  nihil vero voluptatibus itaque commodi libero a error officiis
                  soluta facere accusantium reiciendis?
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, aut tempore. Animi, est eum alias dignissimos ullam
                  nihil vero voluptatibus itaque commodi libero a error officiis
                  soluta facere accusantium reiciendis?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, aut tempore. Animi, est eum alias dignissimos ullam
                  nihil vero voluptatibus itaque commodi libero a error officiis
                  soluta facere accusantium reiciendis?
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="carousel-item " href="#two!">
            <div className="content-who-i-am">
              <ScrollAnimation animateIn="fadeInUp" duration="1.5" delay="500">
                <h1 className="who-i-am-title">What I Love...</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, aut tempore. Animi, est eum alias dignissimos ullam
                  nihil vero voluptatibus itaque commodi libero a error officiis
                  soluta facere accusantium reiciendis?
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, aut tempore. Animi, est eum alias dignissimos ullam
                  nihil vero voluptatibus itaque commodi libero a error officiis
                  soluta facere accusantium reiciendis?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, aut tempore. Animi, est eum alias dignissimos ullam
                  nihil vero voluptatibus itaque commodi libero a error officiis
                  soluta facere accusantium reiciendis?
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhoIam
