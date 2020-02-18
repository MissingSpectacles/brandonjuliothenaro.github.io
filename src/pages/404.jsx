import Helmet from "react-helmet"
import React, { memo } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import "../styles/styles.scss"
import { mapStateToProps, mapDispatchToProps } from "../state/createStore"
import  ChangeThemeButton  from "../components/change_theme_button"

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  memo(({ theme, toggleTheme }) => {
    return (
      <>
        <Helmet>
          <html lang="en" className="h-100" />
          <body
            className={`h-100 d-flex justify-content-center align-items-center ${
              theme === "dark" ? "bg-dark text-light" : ""
            }`}
          />

          <title>404 | Brandon Julio Thenaro</title>
        </Helmet>

        <header className="container">
          <h1 className="display-1">404: Not Found</h1>
        </header>

        <main className="container">
          <p className="display-4 text-center">
            <Link
              to="/"
              className={theme === "dark" ? "text-light" : "text-dark"}
            >
              <u>Click here to return</u>
            </Link>
          </p>

          <div className="d-flex justify-content-center">
            <ChangeThemeButton />
          </div>
        </main>
      </>
    )
  })
)
