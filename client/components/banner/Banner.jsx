import React from 'react'
import ScrollAnimation from "react-animate-on-scroll"

const Banner = () => {
    return (
           <section className="who-i-am-background">
      <div className="banner-title">
        <ScrollAnimation animateIn="fadeInDown" duration={1.2} delay={500}>
          <div className="content-banner">
            <h1 className="banner-title-name">Jefferson M.</h1>
            <p className="profession-banner">Full Stack Web Developer.</p>
          </div>
        </ScrollAnimation>
            </div>
            </section>
    )
}

export default Banner