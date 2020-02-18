import React, { memo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import { connect } from "react-redux"

import { mapStateToProps, mapDispatchToProps } from "../state/createStore"

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

          <button className="btn" onClick={toggleTheme}>
            <FontAwesomeIcon
              className={theme === "dark" ? "text-light" : ""}
              icon={theme === "dark" ? "moon" : "sun"}
              size="3x"
            ></FontAwesomeIcon>
          </button>
        </h1>
      </header>

      <hr className="bg-light" />
    </>
  ))
)
