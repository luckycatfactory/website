import React from "react"

import { Link } from "gatsby"

const Footer = React.memo(() => (
  <footer>
    © {new Date().getFullYear()} <Link to="/">@luckycatfactory</Link>
    <a href="https://github.com/luckycatfactory">npm</a>
  </footer>
))

export default Footer
