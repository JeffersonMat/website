import React from "react"

function PortfolioContent (props) {

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
      return sortedArray = value
    })
   return sortedArray
  }


    return (
      <>
        <div className="carousel-item portfolio-background" href={`${hrefValue}`}>
          <div className="content-portfolio">
            <h1>{props.content.title}</h1>
            <p>{props.content.description}</p>
            <video width="600" controls>
              {props.content.video}
            </video>
          </div>
        </div>
      </>
    )

}

export default PortfolioContent
