import React, { memo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { connect } from "react-redux"

import {
  mapDispatchToProps,
  mapStateToProps,
  THEME,
} from "../state/createStore"

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  memo(({ theme, toggleTheme }) => (
    <button
      className="btn"
      onClick={toggleTheme}
      aria-label="Change theme button"
    >
      <FontAwesomeIcon
        className={theme === THEME.DARK ? "text-light" : ""}
        icon={theme === THEME.DARK ? "sun" : "moon"}
        size="3x"
      ></FontAwesomeIcon>
      <span className="sr-only">Change theme button</span>
    </button>
  ))
)
