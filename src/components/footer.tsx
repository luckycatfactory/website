import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

const StyledFooter = styled.footer`
  padding: 0 16px;
`

const Footer = React.memo(() => (
  <StyledFooter>
    © {new Date().getFullYear()} <Link to="/">@luckycatfactory</Link>
    <a href="https://github.com/luckycatfactory">npm</a>
  </StyledFooter>
))

export default Footer
