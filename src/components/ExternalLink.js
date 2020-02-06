import React, { memo } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default memo(({ to, children, className }) => (
  <>
    <a
      href={to}
      className={className}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>{" "}
    <FontAwesomeIcon icon={faExternalLinkAlt} />
  </>
))
