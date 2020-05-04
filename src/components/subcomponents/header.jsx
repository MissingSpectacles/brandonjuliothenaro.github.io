import React, { memo } from "react"

import Text from "../text"

import { Box, Divider } from "@material-ui/core"

const Header = ({ title }) => {
  const mainHeader = title ? title : "Brandon Julio Thenaro"

  return (
    <Box component="header" my={4}>
      <Text align="center" variant="h1">
        {mainHeader}
      </Text>

      <Divider />
    </Box>
  )
}

export default memo(Header)
