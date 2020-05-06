import "normalize.css"
import "typeface-roboto"

import React, { memo, useEffect, useMemo, useState } from "react"

import Footer from "./footer"
import Header from "./header"
import Navbar from "./navbar"
import SEO from "./seo"

import { Box, Container, useMediaQuery } from "@material-ui/core"

import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles"

const Layout = ({ children, className, title }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const [isDarkMode, setDarkMode] = useState(prefersDarkMode)

  /*--------------------------------------------------------------------------*
   |             Note: localStorage's value is always a String                |
   *--------------------------------------------------------------------------*/

  const key = "isDarkMode"

  useEffect(() => {
    const storedSetting = localStorage.getItem(key)
    setDarkMode(
      storedSetting ? storedSetting.toLowerCase() === "true" : isDarkMode
    )
  }, [isDarkMode])

  const toggleTheme = () => {
    setDarkMode(!isDarkMode)
    localStorage.setItem(key, String(!isDarkMode))
  }

  let theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDarkMode ? "dark" : "light",
          background: {
            default: isDarkMode ? "#121212" : "#ffffff",
          },
        },
      }),
    [isDarkMode]
  )

  theme = useMemo(() => responsiveFontSizes(theme), [theme])

  return (
    <ThemeProvider theme={theme}>
      <SEO title={title} />

      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <Container>
        <Header title={title} />

        <Box my={4}>
          <main className={className}>{children}</main>
        </Box>

        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default memo(Layout)
