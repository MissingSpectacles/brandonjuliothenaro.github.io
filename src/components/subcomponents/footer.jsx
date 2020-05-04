import React, { memo } from "react"

import Link from "../link"
import Text from "../text"

import { Box, Divider } from "@material-ui/core"
import { Code } from "@material-ui/icons"
import { Gatsby, MaterialUi } from "mdi-material-ui"
import useTheme from "@material-ui/core/styles/useTheme"

const Footer = () => {
  const thisYear = new Date().getFullYear()
  const isDarkMode = useTheme().palette.type === "dark"

  return (
    <>
      <Divider />

      <Box my={4} component="footer">
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
    </>
  )
}

export default memo(Footer)
