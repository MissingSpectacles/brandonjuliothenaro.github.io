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
        >
          <FontAwesomeIcon icon="arrow-left" />
        </Link>
        Brandon Julio Thenaro
      </h1>
      <ChangeThemeButton />
    </header>

    <hr className="bg-light" />
  </>
))
