import "../styles.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"

import React, { memo } from "react"

import { Link } from "gatsby"

import { config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

import Footer from "../components/footer"
import SEO from "../components/seo"

config.autoAddCss = false

export default memo(({ children }) => (
  <>
    <SEO />

    <div className="container text-light shadow rounded-lg px-md-5 py-5 my-md-4">
      <header>
        <h1 className="display-4">
          <Link to="/" className="text-white">
            Brandon Julio Thenaro
          </Link>{" "}
          <FontAwesomeIcon icon={faLink} />
        </h1>
      </header>

      <hr className="bg-light" />

      <main>{children}</main>

      <hr className="bg-light" />

      <Footer />
    </div>
  </>
))
