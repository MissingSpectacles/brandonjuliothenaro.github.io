import "../styles.scss"

import React, { memo } from "react"

import { Link } from "gatsby"

import Helmet from "react-helmet"

export default memo(() => {
  return (
    <>
      <Helmet>
        <html lang="en" className="h-100" />
        <body className="bg-dark h-100 d-flex justify-content-center align-items-center" />

        <title>404 Not Found | Brandon Julio Thenaro</title>
      </Helmet>

      <main className="container">
        <h1 className="display-3 text-center text-light">404</h1>
        <h1 className="display-4 text-center text-light">Page Not Found</h1>
        <br />
        <p className="text-center">
          <Link to="/" className="text-light">
            <u>Click here to return</u>
          </Link>
        </p>
      </main>
    </>
  )
})
