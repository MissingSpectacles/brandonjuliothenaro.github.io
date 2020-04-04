import React, { memo } from "react"
import { faArrowLeft, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { library, config } from "@fortawesome/fontawesome-svg-core"

import "../../styles/styles.scss"
import Footer from "./footer"
import Header from "./header"
import Navbar from "./navbar/navbar"
import SEO from "../seo"
import { connect } from "react-redux"
import {
  getThemeByTime,
  mapDispatchToProps,
  mapStateToProps,
  THEME,
} from "../../state/createStore"

library.add(fab, faMoon, faSun, faArrowLeft)
config.autoAddCss = false // Prevent Font Awesome Icons being large then small on first load

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  memo(
    ({
      children,
      className,
      location,
      additionalStructuredData,
      title,

      theme,
      isFirstLoad,
      toggleTheme,
    }) => {
      if (isFirstLoad && theme !== getThemeByTime()) {
        toggleTheme()
      }

      return (
        <>
          <SEO
            title={title}
            additionalStructuredData={additionalStructuredData}
          />

          <Navbar location={location} />

          <div className="container">
            <Header title={title} />

            <main className={className}>{children}</main>

            <Footer />
          </div>
        </>
      )
    }
  )
)
