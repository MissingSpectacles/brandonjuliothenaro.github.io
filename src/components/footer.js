import React, { memo } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ExternalLink from "./external_link"

export default memo(() => (
  <footer>
    <div className="row">
      <section className="col">
        <header>
          <h2>Contact</h2>
        </header>

        <ul className="list-unstyled">
          <li>
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />{" "}
            <ExternalLink
              to="https://www.facebook.com/profile.php?id=100008724798107"
              className="text-light"
            >
              Facebook
            </ExternalLink>
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "twitter-square"]} />{" "}
            <ExternalLink
              to="https://twitter.com/brandon_julio_t"
              className="text-light"
            >
              Twitter
            </ExternalLink>
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "instagram"]} />{" "}
            <ExternalLink
              to="https://www.instagram.com/brandon.julio.t"
              className="text-light"
            >
              Instagram
            </ExternalLink>
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "github-square"]} />{" "}
            <ExternalLink
              to="https://github.com/brandon-thenaro"
              className="text-light"
            >
              GitHub
            </ExternalLink>
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />{" "}
            <ExternalLink
              to="https://www.linkedin.com/in/brandon-julio-thenaro-602486193"
              className="text-light"
            >
              LinkedIn
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              to="mailto:bandut2036@gmail.com"
              className="text-light"
            >
              bandut2036@gmail.com
            </ExternalLink>
          </li>
        </ul>
      </section>

      <section className="col">
        <header>
          <h2>Credits</h2>
        </header>

        <ul className="list-unstyled">
          <li>
            <ExternalLink to="https://www.gatsbyjs.org" className="text-light">
              Gatsby
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://getbootstrap.com" className="text-light">
              Bootstrap
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://www.netlify.com" className="text-light">
              Netlify
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              to="https://www.jetbrains.com"
              className="text-light"
            >
              JetBrains
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://binus.ac.id" className="text-light">
              Binus
            </ExternalLink>
          </li>
          <li>Mom &hearts; & Dad &hearts;</li>
          <li>And you, random citizen</li>
        </ul>
      </section>
    </div>

    <p className="text-muted">
      Copyright &copy; 2019 - {new Date().getFullYear()} Brandon Julio Thenaro.
      All rights reserved.
    </p>
    <p className="text-muted">
      Developed with{" "}
      <ExternalLink
        to="https://www.jetbrains.com/webstorm"
        className="text-muted"
      >
        WebStorm
      </ExternalLink>
      .
    </p>
  </footer>
))
