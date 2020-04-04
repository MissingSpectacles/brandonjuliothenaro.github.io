import Helmet from "react-helmet"
import React, { memo } from "react"
import { connect } from "react-redux"

import "../styles/styles.scss"
import ChangeThemeButton from "../components/change_theme_button"
import Link from "../components/link"
import { mapStateToProps, THEME } from "../state/createStore"

export default connect(mapStateToProps)(
  memo(({ theme }) => (
    <>
      <Helmet>
        <html lang="en" className="h-100" />
        <body
          className={`h-100 d-flex justify-content-center align-items-center ${
            theme === THEME.DARK ? "bg-dark text-light" : ""
          }`}
        />

        <title>404 | Brandon Julio Thenaro</title>
      </Helmet>

      <header className="container">
        <h1 className="display-1">404: Not Found</h1>
      </header>

      <main className="container">
        <p className="display-4 text-center">
          <Link to="/" isInternal={true}>
            Click here to return
          </Link>
        </p>

        <div className="d-flex justify-content-center">
          <ChangeThemeButton />
        </div>
      </main>
    </>
  ))
)
