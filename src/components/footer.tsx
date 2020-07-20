import React from "react"

const Footer = React.memo(() => (
  <footer>
    © {new Date().getFullYear()}{" "}
    <a href="https://github.com/luckycatfactory">@luckycatfactory</a>
  </footer>
))

export default Footer
