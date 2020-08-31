import React from "react"
import data  from "../data"

import PortfolioContent from "./Portfoliovideos/PortfolioContent"


// import LifeOtheParty from './Portfoliovideos/LifeOfTheParty'
// import LostAndFound from "./Portfoliovideos/LostAndFound"
// import MindEater from "./Portfoliovideos/MindEater"
// import Pantree from "./Portfoliovideos/Pantree"
// import Pong from "./Portfoliovideos/Pong"
// import QuizApp from "./Portfoliovideos/QizzApp"
// import TaskManager from "./Portfoliovideos/TaskManager"
// import Website from "./Portfoliovideos/Website"


const Portfolio = () => {
  
  return (
    <>
      <section className="portfolio-background"></section>
      <section id="portfolio-section">
        <div className="carousel carousel-slider center portfolio">
          <div className="carousel-fixed-item center">
            <a className="btn waves-effect white grey-text darken-text-2">
              button
            </a>
          </div>
          <div className="carousel-item portfolio-background" href="#one!">
            <div className="portfolio-content">
              <h1>Projects I have worked on</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, at. Magni molestias neque laborum unde reiciendis
                illo consectetur blanditiis, suscipit sequi quasi possimus.
                Ipsum voluptatibus deleniti a animi esse veniam.
              </p>
            </div>
          </div>
          {data.map((content, index) => (
            <PortfolioContent content={content} key={index} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Portfolio
