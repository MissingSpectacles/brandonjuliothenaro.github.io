import React, { memo } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
    <FontAwesomeIcon icon="external-link-alt" size="1x" />
  </>
))
