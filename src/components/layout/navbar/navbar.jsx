import React, { memo } from "react"
import { connect } from "react-redux"

import NavItem from "./nav_item"
import ChangeThemeButton from "../../change_theme_button"
import { mapStateToProps, THEME } from "../../../state/createStore"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default connect(mapStateToProps)(
  memo(({ location, theme }) => (
    <nav
      className={`navbar navbar-expand-md sticky-top shadow rounded mb-4 ${
        theme === THEME.DARK ? "navbar-dark bg-dark" : "navbar-light bg-white"
      }`}
    >
      <div className="container">
        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul className="navbar-nav">
            <NavItem label="index" location={location} />
            <NavItem label="skills" location={location} />
            <NavItem label="contact" location={location} />
            <NavItem label="blogs" location={location} />
          </ul>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={["fas", "bars"]} />
        </button>

        <ChangeThemeButton />
      </div>
    </nav>
  ))
)
