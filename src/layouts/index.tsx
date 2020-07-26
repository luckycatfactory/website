/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming"
import { useStaticQuery, graphql } from "gatsby"

import { ProjectConfiguration } from "../types"
import DocumentationLayout from "./documentation"
import Header from "../components/header"
import Footer from "../components/footer"
import "./layout.css"

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
        <main>{children}</main>
      </DocumentationLayout>
    ) : (
      <main>{children}</main>
    )

    const siteTitleToUse = isProject ? projectConfiguration.name : title

    return (
      <ThemeProvider>
        <Header siteTitle={siteTitleToUse} />
        {mainToRender}
        <Footer />
      </ThemeProvider>
    )
  }
)

export default Layout
