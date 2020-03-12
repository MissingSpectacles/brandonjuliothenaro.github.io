import React, { memo } from "react"

export default memo(({ src, alt }) => (
  <img className="img-fluid my-4 rounded" src={src} alt={alt} />
))
