import React, { memo } from "react"

import Layout from "../components/layout/layout"

export default memo(({ location }) => (
  <Layout location={location} title="Contact">
    <form
      className="d-flex flex-column align-items-center"
      name="Contact"
      method="POST"
      data-netlify={true}
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Contact" />

      <div className="form-group w-75">
        <label htmlFor="name">Name (Optional)</label>
        <input className="form-control" type="text" name="name" id="name" />
      </div>

      <div className="form-group w-75">
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          name="message"
          id="message"
          rows={7}
          required={true}
        />
      </div>

      <button className="btn btn-primary w-75" type="submit">
        Send
      </button>
    </form>
  </Layout>
))
