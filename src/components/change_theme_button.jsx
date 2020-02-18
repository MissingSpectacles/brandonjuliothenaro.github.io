import React, { memo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { connect } from "react-redux"

import { mapDispatchToProps, mapStateToProps } from "../state/createStore"

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  memo(({ theme, toggleTheme }) => (
    <button className="btn" onClick={toggleTheme}>
      <FontAwesomeIcon
        className={theme === "dark" ? "text-light" : ""}
        icon={theme === "dark" ? "sun" : "moon"}
        size="3x"
      ></FontAwesomeIcon>
    </button>
  ))
)
