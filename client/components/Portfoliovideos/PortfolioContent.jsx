import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

import ButtonLink from "./ButtonLink"

function PortfolioContent(props) {

  return (
    <>
      <div className="portfolio-content" id="row-portfolio">
        <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
          <div
            id={props.content.title === "Projects" ? "" : "columns"}
            className={
              props.content.title === "Projects"
                ? ""
                : "content-portfolio-title"
            }
          >
            <h1
              className={
                props.content.title === "Projects"
                  ? "project-title"
                  : "portfolio-title"
              }
            >
              {props.content.title}
            </h1>
            <p>{props.content.description}</p>
          </div>
          {props.content.video === "" ? (
            <></>
          ) : (
            <div className="content-portfolio-video" id="columns">
              <video
                width="600"
                autoPlay
                loop
                playsInline
                muted
                allowFullScreen={true}
                className={
                  props.content.title === "Pantree"
                    ? "pantree-video"
                    : props.content.title === "Task Manager"
                    ? "pantree-video"
                    : props.content.title === "QuizzApp"
                    ? "pantree-video"
                    : ""
                }
              >
                <source src={props.content.video} type="video/mp4" />
                <p>
                  projects I've worked on, meal planner, task manager, pong,
                  life of the party, games, lost and foud pets, pantree, quiz
                  app, mid eater. Broswer does not support this video format
                </p>
              </video>
              <ButtonLink content={props.content} />
            </div>
          )}
        </ScrollAnimation>
      </div>
    </>
  )
}

export default PortfolioContent
