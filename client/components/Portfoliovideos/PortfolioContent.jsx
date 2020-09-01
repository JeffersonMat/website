import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

function PortfolioContent(props) {
  function hrefValue() {
    let array = [
      "#two",
      "#three",
      "#four",
      "#five",
      "#six",
      "#even",
      "#eight",
      "#nine",
    ]
    let sortedArray
    array.map((value) => {
      return (sortedArray = value)
    })
    return sortedArray
  }

  return (
    <>
      <div className="carousel-item portfolio-background" href={`${hrefValue}`}>
        <div className="portfolio-content">
          <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
            <h1 className="portfolio-title">{props.content.title}</h1>
            <p>{props.content.description}</p>
            <video width="600" autoPlay alt="projects I've worked on, meal planner, task manager, pong, life of the party, games, lost and foud pets, pantree, quiz app, mid eater">
              {props.content.video}
            </video>
          </ScrollAnimation>
        </div>
      </div>
    </>
  )
}

export default PortfolioContent
