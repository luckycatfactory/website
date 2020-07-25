import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

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
      <h2>Projects</h2>
      {projects.map(project => (
        <div key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <Link to={project.documentation.path}>Documentation</Link>
        </div>
      ))}
    </div>
  )
})

export default Projects
