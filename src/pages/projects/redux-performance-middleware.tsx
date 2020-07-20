import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../../components/seo"

interface Package {
  readonly name: string
}

interface PackageProps {
  readonly name: string
}

interface Project {
  readonly name: string
  readonly packages: Package[]
}

type ProjectProps = Project

const Package = React.memo<PackageProps>(({ name }) => (
  <div key={name}>{name}</div>
))

const Project = React.memo<ProjectProps>(({ name, packages }) => (
  <div>
    <h3>{name}</h3>
    <p>This generally does something</p>
    <h4>Packages</h4>
    {packages.map(({ name }) => (
      <Package key={name} name={name} />
    ))}
  </div>
))

const query = graphql`
  query {
    site {
      siteMetadata {
        projects {
          name
          packages {
            name
          }
        }
      }
    }
  }
`

const ReduxPerformanceMiddleware = React.memo(() => {
  return (
    <>
      <SEO title="redux-performance-middleware" />
      <h2>redux-performance-middleware</h2>
    </>
  )
})

export default ReduxPerformanceMiddleware
