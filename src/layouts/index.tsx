/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming"
import { useStaticQuery, graphql } from "gatsby"

import DocumentationLayout from "./documentation"
import Header from "../components/header"
import Footer from "../components/footer"
import { LayoutType } from "./types"
import "./layout.css"

interface LayoutProps {
  readonly children: any
  readonly location: {
    readonly pathname: string
  }
  readonly pageContext: {
    readonly layout: LayoutType
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
  ({ children, location: { pathname }, pageContext }) => {
    const data = useStaticQuery(titleQuery)
    const { layout } = pageContext
    const isDocumentation = layout === LayoutType.documentation

    console.log("***", isDocumentation, layout)

    const mainToRender = isDocumentation ? (
      <DocumentationLayout pathname={pathname}>
        <main>{children}</main>
      </DocumentationLayout>
    ) : (
      <main>{children}</main>
    )

    return (
      <ThemeProvider>
        <Header siteTitle={data.site.siteMetadata.title} />
        {mainToRender}
        <Footer />
      </ThemeProvider>
    )
  }
)

export default Layout
