import React, { memo } from "react"

import { Layout } from "../components"

import { Paper, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  iframe: {
    height: "80vh",
    width: "100%",
  },
})

const Resume = props => {
  const classes = useStyles()

  return (
    <Layout title="Resume">
      <Paper className={classes.iframe}>
        <iframe
          frameborder="0"
          height="100%"
          scrolling="no"
          src="https://onedrive.live.com/embed?cid=D5A3B6C8950A0143&resid=D5A3B6C8950A0143%219587&authkey=ANNUMOepZdfMDBI&em=2"
          width="100%"
          title="My Resume"
        />
      </Paper>
    </Layout>
  )
}

export default memo(Resume)
