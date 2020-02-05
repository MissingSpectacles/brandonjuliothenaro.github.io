import React, { memo } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"

export default memo(() => (
  <Layout>
    <div className="row">
      <section className="col">
        <header>
          <h2>Programming Languages</h2>
        </header>

        <ul className="pl-3">
          <li>C#</li>
          <li>C/C++</li>
          <li>Go</li>
          <li>Java</li>
          <li>Javascript</li>
          <li>Kotlin</li>
          <li>PHP</li>
          <li>Python</li>
          <li>Ruby</li>
          <li>SQL</li>
          <li>Typescript</li>
        </ul>
      </section>

      <section className="col">
        <header>
          <h2>Frameworks</h2>
        </header>

        <ul className="pl-3">
          <li>Backend</li>
          <ul className="pl-3">
            <li>ASP.NET</li>
            <li>Flask</li>
            <li>Laravel</li>
            <li>Ruby on Rails</li>
            <li>Spring Boot</li>
          </ul>
          <li>Frontend</li>
          <ul className="pl-3">
            <li>Bootstrap</li>
            <li>Gatsby</li>
            <li>React</li>
          </ul>
        </ul>
      </section>

      <section className="col">
        <header>
          <h2>Tools</h2>
        </header>

        <ul className="pl-3">
          <li>Adobe Xd</li>
          <li>GitHub Desktop</li>
          <li>JetBrain IDEs</li>
          <ul className="pl-3">
            <li>Android Studio</li>
            <li>DataGrip</li>
            <li>Intell iJ IDEA</li>
            <li>PhpStorm</li>
            <li>PyCharm</li>
            <li>RubyMine</li>
            <li>WebStorm</li>
          </ul>
          <li>Microsoft Office 365</li>
          <li>Visual Studio Code</li>
        </ul>
      </section>

      <section className="col">
        <header>
          <h2>Others</h2>
        </header>

        <ul className="pl-3">
          <li>
            <a
              href="https://chocolatey.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Chocolatey{" "}
              <small>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </small>
            </a>
          </li>
          <li>
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Firebase{" "}
              <small>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </small>
            </a>
          </li>
          <li>Git command-line</li>
          <li>Java Swing</li>
          <li>JavaFX</li>
          <li>Linux command-line</li>
        </ul>
      </section>
    </div>
  </Layout>
))
