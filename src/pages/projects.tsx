import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import { Paragraph, XL, XXL } from "@zendeskgarden/react-typography"

const projectsQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        projects {
          description
          documentation {
            path
          }
          name
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
  } = useStaticQuery(projectsQuery)

  return (
    <div>
      <XXL>Projects</XXL>
      {projects.map(project => (
        <div key={project.name}>
          <XL>{project.name}</XL>
          <Paragraph>{project.description}</Paragraph>
          <Link to={project.documentation.path}>Documentation</Link>
        </div>
      ))}
    </div>
  )
})

export default Projects
