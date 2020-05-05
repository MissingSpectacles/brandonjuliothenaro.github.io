import React, { memo, useState } from "react"

import NavItem from "./nav_item"

import {
  AppBar,
  Button,
  Container,
  Drawer,
  Grid,
  Hidden,
  List,
  ListSubheader,
  Toolbar,
} from "@material-ui/core"

import {
  Brightness4,
  BrightnessHigh,
  Build,
  Home,
  Menu,
  QuestionAnswer,
} from "@material-ui/icons"

import { makeStyles } from "@material-ui/core/styles"
import ListItemLink from "./nav_item_list"

const useStyles = makeStyles({
  list: {
    width: 250, // https://material-ui.com/components/drawers/#temporary-drawer
  },
})

const Index = ({ isDarkMode, toggleTheme }) => {
  const navigations = [
    { label: "index", Icon: () => <Home /> },
    { label: "skills", Icon: () => <Build /> },
    { label: "contact", Icon: () => <QuestionAnswer /> },
  ]

  const classes = useStyles()

  const [drawerIsOpened, setDrawerIsOpened] = useState(false)

  const openDrawer = () => setDrawerIsOpened(true)
  const closeDrawer = () => setDrawerIsOpened(false)

  return (
    <AppBar component="nav" color="default" position="sticky">
      <Toolbar>
        <Container>
          <Grid container justify="space-between">
            <Grid item>
              <Hidden smDown>
                <Grid container spacing={2}>
                  {navigations.map(({ label, Icon }) => (
                    <Grid item key={label}>
                      <NavItem icon={<Icon />} label={label} />
                    </Grid>
                  ))}
                </Grid>
              </Hidden>

              <Hidden mdUp>
                <Button aria-label="open navigations" onClick={openDrawer}>
                  <Menu />
                </Button>

                <Drawer
                  ModalProps={{
                    keepMounted: true, // https://material-ui.com/components/drawers/#responsive-drawer
                  }}
                  open={drawerIsOpened}
                  onClose={closeDrawer}
                >
                  <List
                    className={classes.list}
                    component="nav"
                    subheader={<ListSubheader>Navigation</ListSubheader>}
                  >
                    {navigations.map(({ label, Icon }) => (
                      <ListItemLink
                        Icon={Icon}
                        closeDrawer={closeDrawer}
                        key={label}
                        label={label}
                      />
                    ))}
                  </List>
                </Drawer>
              </Hidden>
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

export default memo(Index)
