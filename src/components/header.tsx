import React from "react"
import { Link } from "gatsby"
import { XXL } from "@zendeskgarden/react-typography"
import styled from "styled-components"
import { IconButton } from "@zendeskgarden/react-buttons"
import MenuIcon from "@zendeskgarden/svg-icons/src/16/menu-fill.svg"

import { ResponsiveSizes } from "../types"

interface HeaderProps {
  readonly isProject: boolean
  readonly siteTitle: string
  readonly to?: string
  readonly onMobileNavigationToggle: () => void
}

const Container = styled.header`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: space-between;
  padding: 0 16px;
  @media (min-width: ${ResponsiveSizes.Tablet}) {
    justify-content: start;
  }
`

const MobileNavigationButton = styled(IconButton)`
  display: flex;
  @media (min-width: ${ResponsiveSizes.Tablet}) {
    display: none;
  }
`

const Header = React.memo<HeaderProps>(
  ({ isProject, onMobileNavigationToggle, siteTitle, to = "/" }) => (
    <Container>
      {isProject && (
        <MobileNavigationButton onClick={onMobileNavigationToggle}>
          <MenuIcon />
        </MobileNavigationButton>
      )}
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
  )
)

export default Header
