/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useMemo } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Meta {
  readonly content: string
  readonly name: string
}

interface SeoProps {
  readonly description?: string
  readonly lang?: string
  readonly meta?: Meta[]
  readonly title: string
}

const SEO = React.memo<SeoProps>(
  ({ description = "", lang = "en", meta = [], title }) => {
    const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `
    )

    const metaDescription = description || site.siteMetadata.description

    const metaToUse = useMemo(
      () =>
        [
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta),
      [metaDescription, site.siteMetadata.author, title]
    )

    return (
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={metaToUse}
      />
    )
  }
)

export default SEO
