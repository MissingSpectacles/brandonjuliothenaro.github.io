import React, { memo } from "react"

import Link from "../link"

function toTitleCase(label) {
  return label
    .split("")
    .map((s, i) => (i === 0 ? s.toUpperCase() : s.toLowerCase()))
    .join("")
}

const NavItem = (props) => {
  const lowerLabel = props.label.toLowerCase()
  const isIndex = lowerLabel === "index"
  const anchorLink = isIndex ? "/" : `/${lowerLabel}`

  return (
    <Link to={anchorLink} {...props}>
      {isIndex ? "Home" : toTitleCase(props.label)}
    </Link>
  )
}

export default memo(NavItem)

export { toTitleCase }