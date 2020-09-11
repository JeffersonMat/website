import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

function PortfolioContent(props) {

  return (
    <>
     
        <div className="portfolio-content">
          <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
            <h1 className="portfolio-title">{props.content.title}</h1>
          <p>{props.content.description}</p>
          {props.content.video === "" ? <></> :
            
            <video
              width="600"
              autoPlay
              loop
              playsInline
              muted
              allowFullScreen={true}
            >
              <source src={props.content.video} type="video/mp4" />
              <p>
                projects I've worked on, meal planner, task manager, pong, life
                of the party, games, lost and foud pets, pantree, quiz app, mid
                eater. Broswer does not support this video format
              </p>
            </video>
          }
            {props.content.src === "" ? (
              <></>
            ) : (
              <div className="button-fixed">
                <a
                    className="btn waves-effect white grey-text darken-text-2 portfolio-button"
                    target="_blank"
                    href={`${props.content.src}`}
                >
                  Visit App
                </a>
              </div>
            )}
          </ScrollAnimation>
        </div>
   
    </>
  )
}

export default PortfolioContent
