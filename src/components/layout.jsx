import "../styles.scss"

import React, { memo } from "react"

import { Link } from "gatsby"

import { library, config } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

import Footer from "./footer"
import SEO from "../components/seo"

library.add(fab)
config.autoAddCss = false

export default memo(({ children }) => (
  <>
    <SEO />

    <header>
      <h1 className="display-4">
        <Link to="/" className="text-light">
          Brandon Julio Thenaro
        </Link>
      </h1>
    </header>

    <hr className="bg-light" />

    <main>{children}</main>

    <hr className="bg-light" />

    <Footer />
  </>
))
