import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

const Banner = () => {
  return (
    <div
      className="who-i-am-background"
      title="Man in the ocean. - Photographer:Emma Coombe NZ"
    >
      <div className="banner-title">
        <ScrollAnimation animateIn="fadeInDown" duration={1.2} delay={500}>
          <div className="content-banner">
            <h1 className="banner-title-name">Jefferson M.</h1>
            <p className="profession-banner">Full Stack Web Developer.</p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Banner
