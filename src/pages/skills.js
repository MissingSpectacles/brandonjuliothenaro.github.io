import React, { memo } from "react"

import Layout from "../components/layout"
import ExternalLink from "../components/ExternalLink"

export default memo(() => (
  <Layout>
    <article className="row">
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
          <li>Frontend</li>
          <ul className="pl-3">
            <li>Bootstrap</li>
            <li>Gatsby</li>
            <li>React</li>
          </ul>
          <li>Backend</li>
          <ul className="pl-3">
            <li>ASP.NET</li>
            <li>Flask</li>
            <li>Laravel</li>
            <li>Ruby on Rails</li>
            <li>Spring Boot</li>
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
            <li>IntelliJ IDEA</li>
            <li>PhpStorm</li>
            <li>PyCharm</li>
            <li>RubyMine</li>
            <li>WebStorm</li>
          </ul>
          <li>Microsoft Office 365</li>
          <li>Visual Studio Code</li>
          <li>Visual Studio IDE</li>
        </ul>
      </section>

      <section className="col">
        <header>
          <h2>Others</h2>
        </header>

        <ul className="pl-3">
          <li>
            <ExternalLink to="https://basecamp.com/" className="text-light">
              Basecamp
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://chocolatey.org/" className="text-light">
              Chocolatey{" "}
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              to="https://firebase.google.com/"
              className="text-light"
            >
              Firebase
            </ExternalLink>
          </li>
          <li>Git command-line</li>
          <li>Java Swing</li>
          <li>JavaFX</li>
          <li>Linux command-line</li>
        </ul>
      </section>
    </article>
  </Layout>
))
