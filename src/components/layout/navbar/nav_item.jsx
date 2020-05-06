import React, { memo } from "react"

import Link from "../../link"

import { createNavLabelFromLabel, createNavPathFromLabel } from "../../helpers"

const NavItem = props => {
  const { label } = props

  return (
    <Link to={createNavPathFromLabel(label)} {...props}>
      {createNavLabelFromLabel(label)}
    </Link>
  )
}

export default memo(NavItem)
