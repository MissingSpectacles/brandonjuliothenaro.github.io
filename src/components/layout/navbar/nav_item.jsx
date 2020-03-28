import React, { memo } from "react"

import Link from "../../link"

export default memo(({ label, location }) => {
  const lowerLabel = label.toLowerCase()
  const isIndex = lowerLabel === "index"
  const pathname = location.pathname
  const path = isIndex ? "/" : `/${lowerLabel}`

  return (
    <li
      className={`nav-item ${
        (isIndex ? pathname === "/" : pathname.startsWith(path)) ? "active" : ""
      }`}
    >
      <Link className="nav-link" to={path}>
        {/* Title case */}
        {isIndex
          ? "Home"
          : label
              .split("")
              .map((s, i) => (i === 0 ? s.toUpperCase() : s.toLowerCase()))
              .join("")}

        {(isIndex ? (
          pathname === "/"
        ) : (
          pathname.startsWith(path)
        )) ? (
          <span className="sr-only">(current)</span>
        ) : null}
      </Link>
    </li>
  )
})
