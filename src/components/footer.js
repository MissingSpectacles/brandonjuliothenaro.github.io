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
            <a
              href="https://www.facebook.com/profile.php?id=100008724798107"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              aria-label="Facebook logo"
            >
              <FontAwesomeIcon icon={faFacebookSquare} /> Facebook{" "}
              <small>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </small>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/BThenaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              aria-label="Twitter logo"
            >
              <FontAwesomeIcon icon={faTwitterSquare} /> Twitter{" "}
              <small>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </small>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/brandonjuliothenaro/?hl=id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              aria-label="Instagram logo"
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram{" "}
              <small>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </small>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/brandon-thenaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              aria-label="GitHub logo"
            >
              <FontAwesomeIcon icon={faGithubSquare} /> GitHub{" "}
              <small>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </small>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/brandon-julio-thenaro-602486193/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
              aria-label="LinkedIn logo"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn{" "}
              <small>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </small>
            </a>
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
              Gatsby{" "}
              <small>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </small>
            </a>
          </li>
          <li>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              Bootstrap{" "}
              <small>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </small>
            </a>
          </li>
          <li>
            <a
              href="https://pages.github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              GitHub Pages{" "}
              <small>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </small>
            </a>
          </li>
          <li>
            <a
              href="https://www.jetbrains.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              JetBrains{" "}
              <small>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </small>
            </a>
          </li>
          <li>
            <a
              href="https://binus.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              Binus{" "}
              <small>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </small>
            </a>
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
        WebStorm{" "}
        <small>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </small>
      </a>
      .
    </p>
  </footer>
))
