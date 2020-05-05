import React, { memo } from "react"
import { Link as GatsbyLink } from "gatsby"

import { createNavLabelFromLabel, createNavPathFromLabel } from "../../helpers"

import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"

const ListItemLink = ({ Icon, closeDrawer, label }) => (
  <ListItem
    button
    component={GatsbyLink}
    key={label}
    onClose={closeDrawer}
    to={createNavPathFromLabel(label)}
  >
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText>{createNavLabelFromLabel(label)}</ListItemText>
  </ListItem>
)

export default memo(ListItemLink)
