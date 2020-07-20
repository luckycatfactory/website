import React, { useContext, useLayoutEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../../../components/seo"
import DocumentationLayoutContext from "../../../layouts/contexts/DocumentationLayoutContext"
import {
  DocumentationConfiguration,
  ExamplesSectionType,
  RecipesSectionType,
  SectionGroupType,
  UsageSectionType,
  CommunitySectionType,
  AboutSectionType,
} from "../../../types"

interface DocumentationProps {
  readonly configuration: DocumentationConfiguration
}

const Documentation = React.memo<DocumentationProps>(({ configuration }) => {
  return <div>{JSON.stringify(configuration)}</div>
})

const query = graphql`
  query {
    site {
      siteMetadata {
        projects {
          description
          name
          packages {
            name
          }
        }
      }
    }
  }
`

const PoolTime = React.memo(() => {
  const {
    site: {
      siteMetadata: { projects },
    },
  } = useStaticQuery(query)

  console.log("***", projects)

  return (
    <>
      <SEO title="pool-time" />
      <h2>pool-time</h2>
      <Documentation configuration={null} />
    </>
  )
})

export default PoolTime
