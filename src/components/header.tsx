import React from "react"
import { Link } from "gatsby"

interface HeaderProps {
  readonly siteTitle: string
}

const Header = React.memo<HeaderProps>(({ siteTitle }) => (
  <header>
    <h1>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
))

export default Header
