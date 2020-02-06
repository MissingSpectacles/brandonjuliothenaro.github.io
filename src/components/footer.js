import React, { memo } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default memo(() => (
  <footer>
    <div className="row">
      <section className="col">
        <header>
          <h2>Contact</h2>
        </header>

        <ul className="list-unstyled">
          <li>
            <FontAwesomeIcon icon={faFacebookSquare} />{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100008724798107"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              aria-label="Facebook logo"
            >
              Facebook
            </a>{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitterSquare} />{" "}
            <a
              href="https://twitter.com/BThenaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              aria-label="Twitter logo"
            >
              Twitter
            </a>{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />{" "}
            <a
              href="https://www.instagram.com/brandonjuliothenaro/?hl=id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              aria-label="Instagram logo"
            >
              Instagram
            </a>{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGithubSquare} />{" "}
            <a
              href="https://github.com/brandon-thenaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              aria-label="GitHub logo"
            >
              GitHub
            </a>{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />{" "}
            <a
              href="https://www.linkedin.com/in/brandon-julio-thenaro-602486193/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              aria-label="LinkedIn logo"
            >
              LinkedIn
            </a>{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </li>
          <li>
            <a href="mailto:bandut2036@gmail.com" className="text-light">
              bandut2036@gmail.com
            </a>
          </li>
        </ul>
      </section>

      <section className="col">
        <header>
          <h2>Credits</h2>
        </header>

        <ul className="list-unstyled">
          <li>
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              Gatsby
            </a>{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </li>
          <li>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              Bootstrap
            </a>{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </li>
          <li>
            <a
              href="https://pages.github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              GitHub
            </a>{" "}
            Pages <FontAwesomeIcon icon={faExternalLinkAlt} />
          </li>
          <li>
            <a
              href="https://www.jetbrains.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              JetBrains
            </a>{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </li>
          <li>
            <a
              href="https://binus.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              Binus
            </a>{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
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
      <a
        href="https://www.jetbrains.com/webstorm/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted"
      >
        WebStorm
      </a>{" "}
      <FontAwesomeIcon icon={faExternalLinkAlt} />.
    </p>
  </footer>
))
