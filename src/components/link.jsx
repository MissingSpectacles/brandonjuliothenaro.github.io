import React, { memo } from "react"
import { Link } from "gatsby"

export default memo(({ children, className, getProps, isInternal, to }) => {
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
