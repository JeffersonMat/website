import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import Banner from './banner/Banner'

const WhoIam = () => {
  return (
    <>
      <Banner />
      <section id="who-i-am">
        <div className=" carousel carousel-slider  who-i-am">
          <div className="carousel-item" href="#one!">
            <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
              <div id="content-who-i-am">
                <div>
                  <h1 className="who-i-am-title">Hello. I'm Jefferson.</h1>
                </div>
                <div>
                  <p>
                    A Colombian with an intrepid spirit and a creative mind. I
                    believe technology has the potential to transform our world
                    for the better. I do what I do because I love using
                    technology to solve problems and do good.
                  </p>

                  <p>
                    People describe me as a go-getter. I’m not afraid to travel
                    off the beaten track if that means a breakthrough is just
                    around the corner. I’m an innovator, a creator, and a
                    lifelong learner. And I make a mean empanada.
                  </p>

                  <p>
                    When it comes to life, my motto is simple; never stop
                    learning. It was this enthusiasm for learning and growth
                    that lead me to tech—an industry of constant innovation and
                    adaptability.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="carousel-item " href="#two!">
            <div id="content-who-i-am">
              <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
                <h1 className="who-i-am-title">A few things about me.</h1>
                <p>
                  I call Lyall Bay home. I love a fresh hop IPA. I once climbed
                  the highest peak in the Colombian West Andes. I support
                  Manchester United. Don’t talk to me about rugby; football and
                  rugby are no comparison.
                </p>

                <p>
                  I love taking photos. I once had a chocolate labrador called
                  Coffee. I live with my Kiwi partner and fiancé. I don’t like
                  cricket. Mountains over beach. Camping over hotels. Hiking
                  over swimming.
                </p>

                <p>
                  I’ve seen The Matrix nine times. I love black coffee. I play
                  FIFA like a boss. I box. My favourite food is bacon. I can
                  quote all the lyrics to Pink Floyd’s Pulse album. I’m a
                  terrible singer.
                </p>
              </ScrollAnimation>
            </div>
          </div>
          <button
            className=" indicators indicator-item"
            style={{ color: "red" }}
          >
            Click
          </button>
          <button
            className=" indicators indicator-item"
            style={{ color: "red" }}
          >
            Click
          </button>
        </div>
      </section>
    </>
  )
}

export default WhoIam
