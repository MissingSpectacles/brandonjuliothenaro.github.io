import React, { memo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"

import Link from "../link"
import { connect } from "react-redux"
import { mapStateToProps, THEME } from "../../state/createStore"

export default connect(mapStateToProps)(
  memo(({ theme }) => {
    const {
      site: {
        siteMetadata: {
          facebookUrl,
          freeCodeCampUrl,
          githubUrl,
          instagramUrl,
          linkedinUrl,
          twitterUrl,
        },
      },
    } = useStaticQuery(graphql`
      query Contacts {
        site {
          siteMetadata {
            facebookUrl
            freeCodeCampUrl
            githubUrl
            instagramUrl
            linkedinUrl
            twitterUrl
          }
        }
      }
    `)

    return (
      <>
        <hr className={theme === THEME.DARK ? "bg-light" : "bg-dark"} />

        <footer>
          <div className="row">
            <section className="col">
              <header>
                <h2>Social Medias</h2>
              </header>

              <ul className="list-unstyled pl-0">
                <li>
                  <Link
                    aria-label="Facebook"
                    className="text-reset"
                    to={facebookUrl}
                  >
                    <FontAwesomeIcon icon={["fab", "facebook"]} /> Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="freeCodeCamp"
                    className="text-reset"
                    to={freeCodeCampUrl}
                  >
                    <FontAwesomeIcon icon={["fab", "free-code-camp"]} />{" "}
                    freeCodeCamp
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="GitHub"
                    className="text-reset"
                    to={githubUrl}
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} /> GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="Instagram"
                    className="text-reset"
                    to={instagramUrl}
                  >
                    <FontAwesomeIcon icon={["fab", "instagram"]} /> Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="LinkedIn"
                    className="text-reset"
                    to={linkedinUrl}
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} /> LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="Twitter"
                    className="text-reset"
                    to={twitterUrl}
                  >
                    <FontAwesomeIcon icon={["fab", "twitter"]} /> Twitter
                  </Link>
                </li>
              </ul>
            </section>

            <section className="col">
              <header>
                <h2>Credits</h2>
              </header>

              <ul className="list-unstyled pl-0">
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
            </section>
          </div>

          <p className="text-muted">
            Copyright &copy; 2019 - {new Date().getFullYear()} Brandon Julio
            Thenaro. All rights reserved.
            <br />
            Developed with{" "}
            <Link to="https://www.gatsbyjs.org/" className="text-reset">
              Gatsby
            </Link>{" "}
            and{" "}
            <Link
              to="https://www.jetbrains.com/webstorm"
              className="text-reset"
            >
              WebStorm
            </Link>
          </p>
        </footer>
      </>
    )
  })
)
