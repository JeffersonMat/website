import React from "react"

const Portfolio = () => {
  return (
    <div className="carousel carousel-slider center portfolio">
      <div className="carousel-fixed-item center">
        <a className="btn waves-effect white grey-text darken-text-2">button</a>
      </div>
      <div className="carousel-item yellow white-text" href="#one!">
        <h2>Projects I have worked on</h2>
        <p className="white-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Repudiandae, at. Magni molestias neque laborum unde reiciendis
          illo consectetur blanditiis, suscipit sequi quasi possimus.
          Ipsum voluptatibus deleniti a animi esse veniam.
          </p>
      </div>
      <div className="carousel-item red white-text" href="#one!">
        <h2>First Panel</h2>
        <p className="white-text">This is your first panel</p>
      </div>
      <div className="carousel-item amber white-text" href="#two!">
        <h2>Second Panel</h2>
        <p className="white-text">This is your second panel</p>
      </div>
      <div className="carousel-item green white-text" href="#three!">
        <h2>Third Panel</h2>
        <p className="white-text">This is your third panel</p>
      </div>
      <div className="carousel-item blue white-text" href="#four!">
        <h2>Fourth Panel</h2>
        <p className="white-text">This is your fourth panel</p>
      </div>
    </div>
  )
}

export default Portfolio
