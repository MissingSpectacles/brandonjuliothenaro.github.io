import "../styles.scss"

import React, { memo } from "react"

import { Link } from "gatsby"

import Footer from "../components/footer"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

export default memo(({ children }) => (
  <>
    <SEO />

    <div className="container text-light shadow rounded-lg px-md-5 py-5 my-md-4">
      <header>
        <h1 className="display-4">
          <Link to="/" className="text-white">
            Brandon Julio Thenaro <FontAwesomeIcon icon={faLink} />
          </Link>
        </h1>
      </header>

      <hr className="bg-light" />

      <main>{children}</main>

      <hr className="bg-light" />

      <Footer />
    </div>
  </>
))
