import React, { memo } from "react"
import { faArrowLeft, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { library, config } from "@fortawesome/fontawesome-svg-core"

import "../../styles/styles.scss"
import Footer from "./footer"
import Header from "./header"
import Navbar from "./navbar"
import SEO from "../seo"
import {
  getThemeByTime,
  mapDispatchToProps,
  mapStateToProps,
} from "../../state/createStore"
import { connect } from "react-redux"

library.add(fab, faMoon, faSun, faArrowLeft)
config.autoAddCss = false // Prevent Font Awesome Icons being large then small on first load

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  memo(
    ({
      /* Props */
      children,
      className,
      location,
      additionalStructuredData,
      title,

      /* Redux Store */
      theme,
      isFirstLoad,
      toggleTheme,
    }) => {
      // Automatically change theme according to time on first load
      if (isFirstLoad && theme !== getThemeByTime()) {
        console.log("Theme is not in sync. Changing...")
        toggleTheme()
      }

      return (
        <>
          <Navbar location={location} />
          <div className="container">
            <SEO
              title={title}
              additionalStructuredData={additionalStructuredData}
            />
            <Header location={location} title={title} />
            <main className={className}>{children}</main>
            <Footer />
          </div>
        </>
      )
    }
  )
)
