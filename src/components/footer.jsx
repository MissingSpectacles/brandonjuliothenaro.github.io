import React, { memo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"

import Link from "./link"

export default memo(() => {
  const {
    site: {
      siteMetadata: {
        email,
        facebook_url,
        freeCodeCamp_url,
        github_url,
        instagram_url,
        linkedin_url,
        twitter_url,
      },
    },
  } = useStaticQuery(graphql`
    query Contacts {
      site {
        siteMetadata {
          email
          facebook_url
          freeCodeCamp_url
          github_url
          instagram_url
          linkedin_url
          twitter_url
        }
      }
    }
  `)

  return (
    <>
      <hr className="bg-light" />

      <footer>
        <div className="row">
          <section className="col">
            <header>
              <h2>Contact</h2>
            </header>

            <ul className="list-unstyled d-flex justify-content-around text-center">
              <li>
                <Link
                  aria-label="Facebook"
                  className="text-reset"
                  to={facebook_url}
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="3x" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </li>
              <li className="mx-1">
                <Link
                  aria-label="freeCodeCamp"
                  className="text-reset"
                  to={freeCodeCamp_url}
                >
                  <FontAwesomeIcon icon={["fab", "free-code-camp"]} size="3x" />
                  <span className="sr-only">freeCodeCamp</span>
                </Link>
              </li>
              <li className="mx-1">
                <Link
                  aria-label="GitHub"
                  className="text-reset"
                  to={github_url}
                >
                  <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </li>
              <li className="mx-1">
                <Link
                  aria-label="Instagram"
                  className="text-reset"
                  to={instagram_url}
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </li>
              <li className="mx-1">
                <Link
                  aria-label="LinkedIn"
                  className="text-reset"
                  to={linkedin_url}
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Twitter"
                  className="text-reset"
                  to={twitter_url}
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </li>
            </ul>
            <p>
              Email:{" "}
              <Link to={`mailto:${email}`} className="text-reset">
                {email}
              </Link>
            </p>
          </section>

          <section className="col">
            <header>
              <h2>Credits</h2>
            </header>

            <div className="row">
              <ul className="col list-unstyled">
                <li>
                  <Link to="https://binus.ac.id" className="text-reset">
                    Binus
                  </Link>
                </li>
                <li>
                  <Link to="https://fontawesome.com/" className="text-reset">
                    Font Awesome
                  </Link>
                </li>
                <li>
                  <Link to="https://getbootstrap.com" className="text-reset">
                    Bootstrap
                  </Link>
                </li>
                <li>
                  <Link to="https://www.gatsbyjs.org" className="text-reset">
                    Gatsby
                  </Link>
                </li>
              </ul>

              <ul className="col list-unstyled">
                <li>
                  <Link to="https://www.jetbrains.com" className="text-reset">
                    JetBrains
                  </Link>
                </li>
                <li>
                  <Link to="https://www.netlify.com" className="text-reset">
                    Netlify
                  </Link>
                </li>
                <li>Mom &hearts; & Dad &hearts;</li>
                <li>And you, random citizen</li>
              </ul>
            </div>
          </section>
        </div>

        <p className="text-muted">
          Copyright &copy; 2019 - {new Date().getFullYear()} Brandon Julio
          Thenaro. All rights reserved.
          <br />
          Developed with{" "}
          <Link to="https://www.gatsbyjs.org/" className="text-reset">
            Gatsby
          </Link>
          {" and "}
          <Link to="https://www.jetbrains.com/webstorm" className="text-reset">
            WebStorm
          </Link>
        </p>
      </footer>
    </>
  )
})
