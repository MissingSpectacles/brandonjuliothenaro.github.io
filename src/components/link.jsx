import React, { memo } from "react"
import { Link as GatsbyLink } from "gatsby"

import Button from "@material-ui/core/Button"

const Link = ({ children, to, variant, icon }) => {
  const isExternal = to.includes("http")

  const ExternalPage = (
    <Button
      component="a"
      href={to}
      variant={variant ?? "text"}
      rel="noreferrer noopener"
      target="_blank"
      startIcon={icon}
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
    >
      {children}
    </Button>
  )

  return isExternal ? ExternalPage : InternalPage
}

export default memo(Link)
