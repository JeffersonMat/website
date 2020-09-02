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
              <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
                <h1 className="who-i-am-title">Who I am...</h1>

                <p>
                  Over the past year, I've allowed my curiosity and appetite for
                  learning to lead me through the various stages of web
                  development. Initially self-taught, I started my education on
                  online resources such as Codeacademy, freeCodeCamp, and tech
                  startup groups before finally landing at EDA. My strengths are
                  in the front end, and I have a particular interest in UI/UX
                  design.
                </p>

                <p>
                  I was drawn to tech thanks to my passion for learning new
                  skills. I believe in lifelong learning and thrive in
                  environments that allow for problem-solving and continuous
                  professional development, which is why I chose web
                  development. Personally, I enjoy the beauty of building a
                  functional code that adds value to a project. Code can have a
                  significant visual impact on the user and has the potential to
                  shape their experience.
                </p>

                <p className="last-p-who-i-am">
                  I'm looking for opportunities where I can build on my existing
                  web development skills whilst adding value using the varied
                  knowledge base I already have. Friends and colleagues describe
                  me as self-driven, highly approachable, and would agree that I
                  bring a unique and positive energy to the workplace. I come
                  from a diverse professional background across a range of
                  industries, so I can bring a holistic view to any role.
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
