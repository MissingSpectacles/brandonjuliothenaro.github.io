import React, { memo } from "react"
import { faArrowLeft, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { library, config } from "@fortawesome/fontawesome-svg-core"

import "../../styles/styles.scss"
import Footer from "./footer"
import Header from "./header"
import Navbar from "./navbar"
import SEO from "../seo"

library.add(fab, faMoon, faSun, faArrowLeft)
config.autoAddCss = false // Prevent Font Awesome Icons being large then small on first load

export default memo(
  ({ children, className, location, additionalStructuredData, title }) => (
    <>
      <Navbar location={location} />
      <div className="container">
        <SEO title={title} additionalStructuredData={additionalStructuredData} />
        <Header location={location} title={title} />
        <main className={className}>{children}</main>
        <Footer />
      </div>
    </>
  )
)
