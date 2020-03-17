import React, { memo } from "react"
import { faArrowLeft, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { library, config } from "@fortawesome/fontawesome-svg-core"

import "../../styles/styles.scss"
import Footer from "./footer"
import Header from "./header"
import Navbar from "./navbar"
import SEO from "../seo"

// Prevent Font Awesome Icons being large then small on first load
library.add(fab, faMoon, faSun, faArrowLeft)
config.autoAddCss = false

export default memo(({ children, className, location, structuredData, title }) => (
  <>
    <Navbar location={location} />
    <div className="container">
      <SEO title={title} structuredData={structuredData} />
      <Header location={location} title={title} />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  </>
))
