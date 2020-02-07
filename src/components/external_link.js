import React, { memo } from "react"

export default memo(({ to, children, className }) => (
  <a href={to} className={className} target="_blank" rel="noreferrer noopener">
    <u>{children}</u>
  </a>
))
