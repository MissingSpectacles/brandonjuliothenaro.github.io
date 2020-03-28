import React, { memo } from "react"
import { connect } from "react-redux"

import Link from "../../link"
import NavItem from "./nav_item"
import ChangeThemeButton from "../../change_theme_button"
import { mapStateToProps, THEME } from "../../../state/createStore"

export default connect(mapStateToProps)(
  memo(({ location, theme }) => (
    <nav
      className={`navbar navbar-expand sticky-top shadow rounded mb-4 ${
        theme === THEME.DARK ? "navbar-dark bg-dark" : "navbar-light bg-white"
      }`}
    >
      <div className="container pl-3">
        <Link className="navbar-brand" isInternal={true} to="/">
          B.J.T.
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavItem label="index" location={location} />
            <NavItem label="skills" location={location} />
            <NavItem label="blogs" location={location} />
          </ul>
        </div>

        <ChangeThemeButton />
      </div>
    </nav>
  ))
)
