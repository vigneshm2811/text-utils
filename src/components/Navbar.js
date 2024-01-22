import '../css/navbar.css'

import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <header>
        <nav>
          <Link to="/" className="logo">{props.title} <span>MVP</span></Link>
          <ul id="navmenu">
            <li>
              <Link to="/">{props.home}</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <i className="fa-solid fa-xmark" id="icon-remove" ></i>
          </ul>
          <div className="hamburger"><i className="fa-solid fa-bars"></i></div>

          <div className="toggle-switch" onClick={props.toggle}>
            <label className="switch-label">
              <input type="checkbox" className="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </nav>
      </header>
    </div>
  )
}

Navbar.propTypes = {
  title:
    PropTypes.string,
}


Navbar.defaultProps = {
  title: "enter the title",
  home: "home will reach soon"
}