import React, { memo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ChangeThemeButton from "./change_theme_button"
import Link from "./link"

export default memo(() => (
  <>
    <header className="d-flex justify-content-between">
      <h1 className="display-4 d-flex align-items-center">
        <Link
          className="text-reset mr-2"
          getProps={({ isCurrent }) =>
            isCurrent ? { className: "d-none" } : {}
          }
          isInternal={true}
          to="/"
          aria-label="Return to previous page button"
        >
          <FontAwesomeIcon icon="arrow-left" />
          <span className="sr-only">Return to previous page button</span>
        </Link>
        Brandon Julio Thenaro
      </h1>
      <ChangeThemeButton />
    </header>

    <hr className="bg-light" />
  </>
))
