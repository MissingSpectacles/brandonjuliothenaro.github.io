import React, { memo } from "react"

export default memo(({ src, alt }) => (
  <img className="img-fluid my-4 rounded mx-auto d-block" src={src} alt={alt} />
))
