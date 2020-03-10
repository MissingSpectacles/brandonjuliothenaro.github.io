import React, { memo } from "react"
import { faArrowLeft, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { library, config } from "@fortawesome/fontawesome-svg-core"

import "../styles/styles.scss"
import Footer from "./footer"
import SEO from "./seo"
import Header from "./header"

// Prevent Font Awesome Icons being large then small on first load
library.add(fab, faMoon, faSun, faArrowLeft)
config.autoAddCss = false

export default memo(({ children }) => {
  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
})
