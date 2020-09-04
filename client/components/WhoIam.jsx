import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

const WhoIam = () => {
  return (
    <>
      <section className="who-i-am-background">
        <div className="banner-title">
          <ScrollAnimation animateIn="fadeInDown" duration={1.2} delay={500}>
            <div className="content-banner">
              <h1 className="banner-title-name">Jefferson M.</h1>
              <p className="profession-banner">Full Stack Web Developer.</p>
          
            </div>
            </ScrollAnimation>
        </div>
      </section>
      <section id="who-i-am">
        <div className=" carousel carousel-slider  who-i-am">
          <div className="carousel-item" href="#one!">
            <div className="content-who-i-am">
              <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
                <h1 className="who-i-am-title">Who I am...</h1>

                <p>
                  Over the past year, I've allowed my curiosity and appetite for
                  learning to lead me through the various stages of web
                  development. Initially self-taught, I started my education on
                  online resources such as Codeacademy, freeCodeCamp.
                </p>

                <p>
                  I was drawn to tech thanks to my passion for learning new
                  skills. I believe in lifelong learning and thrive in
                  environments that allow for problem-solving and continuous
                  professional development, which is why I chose web
                  development.
                </p>

                <p>
                  I'm looking for opportunities where I can build on my existing
                  web development skills whilst adding value using the varied
                  knowledge base I already have. Friends and colleagues describe
                  me as self-driven, highly approachable, and would agree that I
                  bring a unique and positive energy to the workplace.
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="carousel-item " href="#three!">
            <div className="content-who-i-am">
              <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
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
