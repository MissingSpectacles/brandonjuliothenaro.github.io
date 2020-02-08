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

        <ul className="list-unstyled d-flex justify-content-around">
          <li>
            <ExternalLink
              to="https://www.facebook.com/profile.php?id=100008724798107"
              className="text-light"
            >
              <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2x" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              to="https://twitter.com/brandon_julio_t"
              className="text-light"
            >
              <FontAwesomeIcon icon={["fab", "twitter-square"]} size="2x" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              to="https://www.instagram.com/brandon.julio.t"
              className="text-light"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              to="https://github.com/brandon-julio-t"
              className="text-light"
            >
              <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              to="https://www.linkedin.com/in/brandonjuliothenaro"
              className="text-light"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </ExternalLink>
          </li>
        </ul>
        <p>
          Email:{" "}
          <ExternalLink
            to="mailto: brandon.julio.t@icloud.com"
            className="text-light text-center"
          >
            brandon.julio.t@icloud.com
          </ExternalLink>
        </p>
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
            <ExternalLink to="https://www.jetbrains.com" className="text-light">
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
