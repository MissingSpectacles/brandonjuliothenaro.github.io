import React, { memo } from "react"

import Link from "../link"
import Spacer from "../spacer"
import Text from "../text"

import useTheme from "@material-ui/core/styles/useTheme"
import { Box, Divider } from "@material-ui/core"
import { Code } from "@material-ui/icons"
import { Gatsby, MaterialUi } from "mdi-material-ui"

const Footer = () => {
  const thisYear = new Date().getFullYear()
  const isDarkMode = useTheme().palette.type === "dark"

  return (
    <Box my={4} component="footer">
      <Divider />

      <Spacer />

      <Text align="center" variant="caption" component="p">
        Copyright &copy; 2019 - {thisYear} Brandon Julio Thenaro. All rights
        reserved.
        <br />
        Developed with{" "}
        <Link to="https://www.gatsbyjs.org/" icon={<Gatsby />}>
          Gatsby
        </Link>
        ,{" "}
        <Link to="https://material-ui.com/" icon={<MaterialUi />}>
          Material UI
        </Link>
        , and
        <Link to="https://www.jetbrains.com/webstorm" icon={<Code />}>
          WebStorm
        </Link>
        <br />
        <Link to="https://www.netlify.com">
          <img
            src={`https://www.netlify.com/img/global/badges/netlify-${
              isDarkMode ? "dark" : "light"
            }.svg`}
            alt="Deploys by Netlify"
          />
        </Link>
      </Text>
    </Box>
  )
}

export default memo(Footer)
