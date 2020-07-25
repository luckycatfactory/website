const titleToPath = (title: string) => title.toLowerCase().replace(" ", "-")

exports.createPages = async ({ actions, graphql }) => {
  const {
    data: {
      site: {
        siteMetadata: { projects },
      },
    },
  } = await graphql(`
    query DocumentationQuery {
      site {
        siteMetadata {
          projects {
            description
            documentation {
              path
              sectionGroups {
                sections {
                  path
                  title
                  type
                }
                title
                type
              }
            }
            name
          }
        }
      }
    }
  `)

  console.log("data", projects)

  projects.forEach(project => {
    actions.createPage({
      component: require.resolve(
        `./src/documentation/${project.name}/about/overview.tsx`
      ),
      path: project.documentation.path,
    })
    project.documentation.sectionGroups.forEach(sectionGroup => {
      sectionGroup.sections.forEach(section => {
        actions.createPage({
          component: require.resolve(
            `./src/documentation/${project.name}/${titleToPath(
              sectionGroup.title
            )}/${section.path}.tsx`
          ),
          path: `${project.documentation.path}${section.path}`,
        })
      })
    })
  })
}

// exports.onCreatePage = async ({ actions, page }) => {
//   const { createPage } = actions

//   if (page.path.startsWith("/projects/")) {
//     page.context.layout = "documentation"
//     createPage(page)
//   } else {
//     page.context.layout = "normal"
//     createPage(page)
//   }
// }
