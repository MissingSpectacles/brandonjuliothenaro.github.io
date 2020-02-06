import "../styles.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"

import React, { memo } from "react"

import { Link } from "gatsby"

import { library, config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import Footer from "../components/footer"
import SEO from "../components/seo"

library.add(faLink, faExternalLinkAlt, fab)
config.autoAddCss = false

export default memo(({ children }) => (
  <>
    <SEO />

    <header>
      <h1 className="display-4">
        <Link to="/" className="text-light">
          Brandon J. Thenaro
        </Link>{" "}
        <FontAwesomeIcon icon="link" />
      </h1>
    </header>

    <hr className="bg-light" />

    <main>{children}</main>

    <hr className="bg-light" />

    <Footer />
  </>
))
