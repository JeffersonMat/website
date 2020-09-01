import React from "react"
import { Link } from "react-scroll"

const NavBarMenu = () => {
  return (
    <ul className="sidenav" id="mobile-demo">
      <li>
        <Link
          activeClass="active"
          to="who-i-am"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Who I Am
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="experiences"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Experience
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="contact"
          spy={false}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact Me
        </Link>
      </li>
    </ul>
  )
}

export default NavBarMenu
