import React from "react"
import { Link } from "gatsby"
import { XXL } from "@zendeskgarden/react-typography"
import styled from "styled-components"

interface HeaderProps {
  readonly siteTitle: string
  readonly to?: string
}

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
`

const Header = React.memo<HeaderProps>(({ siteTitle, to = "/" }) => (
  <Container>
    <XXL>
      <Link
        to={to}
        style={{
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </XXL>
  </Container>
))

export default Header
