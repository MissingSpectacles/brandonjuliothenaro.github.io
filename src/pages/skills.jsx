import React, { memo } from "react"

import Layout from "../components/layout/layout"
import ExternalLink from "../components/link"

export default memo(({location}) => (
  <Layout location={location} title="Developer Skills">
    <article className="row">
      <section className="col">
        <header>
          <h2>Programming Languages</h2>
        </header>

        <ul>
          <li>C#</li>
          <li>C/C++</li>
          <li>Dart</li>
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

        <ul>
          <li>Frontend</li>
          <ul>
            <li>Bootstrap</li>
            <li>Flutter</li>
            <li>Gatsby</li>
            <li>React</li>
          </ul>
          <li>Backend</li>
          <ul>
            <li>ASP.NET Core</li>
            <li>Flask</li>
            <li>Laravel</li>
            <li>Ruby on Rails</li>
            <li>Spring Boot</li>
          </ul>
        </ul>
      </section>

      <section className="col">
        <header>
          <h2>Database</h2>
        </header>

        <ul>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>SQL Server</li>
          <li>SQLite</li>
        </ul>
      </section>

      <section className="col">
        <header>
          <h2>Tools</h2>
        </header>

        <ul>
          <li>Adobe Xd</li>
          <li>GitHub Desktop</li>
          <li>JetBrain IDEs</li>
          <ul>
            <li>Android Studio</li>
            <li>DataGrip</li>
            <li>IntelliJ IDEA</li>
            <li>PhpStorm</li>
            <li>PyCharm</li>
            <li>RubyMine</li>
            <li>WebStorm</li>
          </ul>
          <li>Microsoft Office 365</li>
          <li>SQL Server Management Studio</li>
          <li>Visual Studio Code</li>
          <li>Visual Studio IDE</li>
        </ul>
      </section>

      <section className="col">
        <header>
          <h2>Other</h2>
        </header>

        <ul>
          <li>
            <ExternalLink to="https://basecamp.com/">Basecamp</ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://chocolatey.org/">Chocolatey</ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://firebase.google.com/">
              Firebase
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://www.docker.com/">Docker</ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://www.heroku.com/">Heroku</ExternalLink>
          </li>
          <li>Git CLI</li>
          <li>Java Swing</li>
          <li>JavaFX</li>
          <li>Linux CLI</li>
        </ul>
      </section>
    </article>
  </Layout>
))
