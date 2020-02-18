import React, { memo } from "react"
import { connect } from "react-redux"

import { mapStateToProps } from "../state/createStore"

export default connect(mapStateToProps)(
  memo(({ children, className, theme, to }) => (
    <a
      href={to}
      className={`${className} ${
        theme === "dark" ? "text-light" : "text-dark"
      }`.trim()}
      target="_blank"
      rel="noreferrer noopener"
    >
      <u>{children}</u>
    </a>
  ))
)
