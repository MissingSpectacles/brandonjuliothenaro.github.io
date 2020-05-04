import React, { memo } from "react"

import NavItem from "./nav_item"

import { AppBar, Button, Container, Grid, Toolbar } from "@material-ui/core"
import { Brightness4, BrightnessHigh } from "@material-ui/icons"

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const pages = ["index", "skills", "contact"]

  return (
    <AppBar component="nav" color="default" position="sticky">
      <Toolbar>
        <Container>
          <Grid container justify="space-between">
            <Grid item>
              <Grid container spacing={2}>
                {pages.map(nav => (
                  <Grid item key={nav}>
                    <NavItem label={nav} />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item>
              <Button aria-label="toggle dark mode" onClick={toggleTheme}>
                {isDarkMode ? <BrightnessHigh /> : <Brightness4 />}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default memo(Navbar)
