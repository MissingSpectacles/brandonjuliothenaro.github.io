import React, { memo } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import { mapStateToProps, mapDispatchToProps } from "../state/createStore"
import ChangeThemeButton from "./change_theme_button"

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  memo(({ theme, toggleTheme }) => (
    <>
      <header>
        <h1 className="display-4 d-flex justify-content-between">
          <Link
            to="/"
            className={theme === "dark" ? "text-light" : "text-dark"}
          >
            Brandon Julio Thenaro
          </Link>

          <ChangeThemeButton />
        </h1>
      </header>

      <hr className="bg-light" />
    </>
  ))
)
