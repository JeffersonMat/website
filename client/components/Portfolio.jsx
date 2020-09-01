import React from "react"
import data from "../data"
import ScrollAnimation from "react-animate-on-scroll"

import PortfolioContent from "./Portfoliovideos/PortfolioContent"



const Portfolio = () => {
  
  return (
    <>
      <section className="portfolio-background"></section>
      <section id="portfolio-section">
        <div className="carousel carousel-slider center portfolio">
          <div className="carousel-fixed-item center">
            <a className="btn waves-effect white grey-text darken-text-2 portfolio-button">
              button
            </a>
          </div>
          <div className="carousel-item portfolio-background" href="#one!">
            <div className="portfolio-content animate__fadeInUp">
              <ScrollAnimation animateIn="fadeInUp" duration="1">
              <h1 className="portfolio-title">Projects</h1>
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, at. Magni molestias neque laborum unde reiciendis
                  illo consectetur blanditiis, suscipit sequi quasi possimus.
                  Ipsum voluptatibus deleniti a animi esse veniam.
              </p>
                </ScrollAnimation>
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
