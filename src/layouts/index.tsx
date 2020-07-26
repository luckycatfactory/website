/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "@zendeskgarden/css-bedrock"

import { ProjectConfiguration } from "../types"
import DocumentationLayout from "./documentation"
import Header from "../components/header"
import Footer from "../components/footer"

interface LayoutProps {
  readonly children: any
  readonly pageContext: {
    readonly projectConfiguration: ProjectConfiguration
  }
}

const titleQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const InnerContainer = styled.div`
  flex: 1;
  max-width: 1600px;
`

const StyledMain = styled.main`
  flex: 1;
`

const Layout = React.memo<LayoutProps>(
  ({ children, pageContext: { projectConfiguration } }) => {
    const {
      site: {
        siteMetadata: { title },
      },
    } = useStaticQuery(titleQuery)
    const isProject = Boolean(projectConfiguration)

    const mainToRender = isProject ? (
      <DocumentationLayout projectConfiguration={projectConfiguration}>
        <StyledMain>{children}</StyledMain>
      </DocumentationLayout>
    ) : (
      <StyledMain>{children}</StyledMain>
    )

    const siteTitleToUse = isProject ? projectConfiguration.name : title

    const headerTo = isProject ? projectConfiguration.documentation.path : "/"

    return (
      <ThemeProvider theme={DEFAULT_THEME}>
        <OuterContainer>
          <InnerContainer>
            <Header siteTitle={siteTitleToUse} to={headerTo} />
          </InnerContainer>
        </OuterContainer>
        <OuterContainer>
          <InnerContainer>{mainToRender}</InnerContainer>
        </OuterContainer>
        <OuterContainer>
          <InnerContainer>
            <Footer />
          </InnerContainer>
        </OuterContainer>
      </ThemeProvider>
    )
  }
)

export default Layout
