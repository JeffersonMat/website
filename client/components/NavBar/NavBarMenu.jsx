import React from "react"
import { Link } from "react-scroll"

const NavBarMenu = () => {
  return (
    <ul className="sidenav" id="mobile-demo">
      <li>
        <Link
          className="link-tags"
          activeClass="active"
          to="who-i-am"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="link-tags"
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
          className="link-tags"
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
          className="link-tags"
          activeClass="active"
          to="contact"
          spy={false}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default NavBarMenu
