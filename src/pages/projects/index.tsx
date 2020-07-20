import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import SEO from "../../components/seo"

interface Package {
  readonly name: string
}

interface PackageProps {
  readonly name: string
}

interface Project {
  readonly description: string
  readonly name: string
  readonly packages: Package[]
}

type ProjectProps = Project

const Package = React.memo<PackageProps>(({ name }) => (
  <div key={name}>{name}</div>
))

const Project = React.memo<ProjectProps>(({ description, name, packages }) => (
  <div>
    <h3>{name}</h3>
    <p>{description}</p>
    <Link to={`/projects/${name}`}>Documentation</Link>
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

const Projects = React.memo(() => {
  const {
    site: {
      siteMetadata: { projects },
    },
  } = useStaticQuery(query)

  return (
    <>
      <SEO title="Projects" />
      <h2>projects</h2>
      {projects.map(project => (
        <Project
          description={project.description}
          key={project.name}
          name={project.name}
          packages={project.packages}
        />
      ))}
    </>
  )
})

export default Projects
