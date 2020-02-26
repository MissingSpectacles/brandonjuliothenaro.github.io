import React, { memo } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import { mapStateToProps, THEME } from "../state/createStore"

export default connect(mapStateToProps)(
  memo(({ children, className, getProps, isInternal, theme, to }) => {
    className = className || (theme === THEME.DARK ? "text-info" : "")

    return isInternal ? (
      <Link to={to} getProps={getProps} className={className}>
        {children}
      </Link>
    ) : (
      <a
        href={to}
        className={className}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    )
  })
)
