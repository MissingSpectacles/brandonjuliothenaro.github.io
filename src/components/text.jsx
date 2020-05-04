import React, { memo } from "react"

import Typography from "@material-ui/core/Typography"

const Text = props => (
  <Typography
    color="textPrimary"
    gutterBottom={
      props.gutterBottom ??
      (["h1", "h2", "h3"].includes(props.variant))
    }
    {...props}
  >
    {props.children}
  </Typography>
)

export default memo(Text)
