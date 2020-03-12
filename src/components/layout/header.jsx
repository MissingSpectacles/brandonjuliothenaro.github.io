import React, { memo } from "react"
import { connect } from "react-redux"

import { mapStateToProps, THEME } from "../../state/createStore"

export default connect(mapStateToProps)(
  memo(({ theme, title }) => {
    const mainHeader = title ? title : "Brandon Julio Thenaro"

    return (
      <>
        <header>
          <h1 className="display-4">{mainHeader}</h1>
        </header>

        <hr className={`${theme === THEME.DARK ? "bg-light" : "bg-dark"}`}/>
      </>
    )
  })
)
