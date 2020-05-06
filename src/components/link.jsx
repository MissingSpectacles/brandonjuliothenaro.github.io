import React, { memo } from "react"
import { Link as GatsbyLink } from "gatsby"

import Button from "@material-ui/core/Button"

const Link = props => {
  const { to, variant, icon, children } = props

  const isExternal = to.includes("http")

  const ExternalPage = (
    <Button
      component="a"
      href={to}
      variant={variant ?? "text"}
      rel="noreferrer noopener"
      target="_blank"
      startIcon={icon}
      {...props}
    >
      {children}
    </Button>
  )

  const InternalPage = (
    <Button
      component={GatsbyLink}
      to={to}
      startIcon={icon}
      variant={variant ?? "text"}
      {...props}
    >
      {children}
    </Button>
  )

  return isExternal ? ExternalPage : InternalPage
}

export default memo(Link)
