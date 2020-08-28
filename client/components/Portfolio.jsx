import React from "react"

import LifeOtheParty from './Portfoliovideos/LifeOfTheParty'
import LostAndFound from "./Portfoliovideos/LostAndFound"
import MindEater from "./Portfoliovideos/MindEater"
import Pantree from "./Portfoliovideos/Pantree"
import Pong from "./Portfoliovideos/Pong"
import QuizApp from "./Portfoliovideos/QizzApp"
import TaskManager from "./Portfoliovideos/TaskManager"
import Website from "./Portfoliovideos/Website"


const Portfolio = () => {
  
  return (
    <section id="portfolio-section">
    <div className="carousel carousel-slider center portfolio">
      <div className="carousel-fixed-item center">
        <a className="btn waves-effect white grey-text darken-text-2">button</a>
      </div>
      <div className="carousel-item yellow white-text" href="#one!">
        <h2>Projects I have worked on</h2>
        <p className="white-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          at. Magni molestias neque laborum unde reiciendis illo consectetur
          blanditiis, suscipit sequi quasi possimus. Ipsum voluptatibus deleniti
          a animi esse veniam.
        </p>
      </div>
      <div className="carousel-item red white-text" href="#one!">
        <h2>First Panel</h2>
        <p className="white-text">This is your first panel</p>
        <div className="item-1">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            facilis! Consequatur, libero possimus expedita blanditiis quod,
            quidem ratione recusandae in delectus voluptate unde consectetur
            tempore exercitationem officiis accusantium dolor aliquam.
          </p>
        </div>
      </div>
      <div className="carousel-item amber white-text" href="#two!">
      <LifeOtheParty/>
      </div>
      <div className="carousel-item yellow white-text" href="#three!">
     <LostAndFound/>
      </div>
      <div className="carousel-item blue white-text" href="#four!">
       <Pantree/>
      </div>
      <div className="carousel-item gree white-text" href="#five!">
       <QuizApp/>
      </div>
      <div className="carousel-item black white-text" href="#six!">
      <TaskManager/>
      </div>
      <div className="carousel-item orange white-text" href="#seven!">
       <Pong/>
      </div>
      <div className="carousel-item orange white-text" href="#eight!">
       <MindEater/>
      </div>
      <div className="carousel-item orange white-text" href="#nine!">
       <Website/>
      </div>
      </div>
      </section>
  )
}

export default Portfolio
