import React from "react"
import { Link } from "react-scroll"

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-wrapper nav-bar">
        <ul id="nav-mobile" className="center hide-on-med-and-down">
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
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar
