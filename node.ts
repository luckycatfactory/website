import { AboutSectionType, SectionGroupType } from "./src/types"

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

  projects.forEach(project => {
    actions.createPage({
      context: { projectConfiguration: project },
      component: require.resolve(
        `./src/documentation/${project.name}/about/overview.tsx`
      ),
      path: project.documentation.path,
    })

    project.documentation.sectionGroups.forEach(sectionGroup => {
      sectionGroup.sections.forEach(section => {
        if (
          sectionGroup.title === SectionGroupType.About &&
          section.type === AboutSectionType.Overview
        )
          return
        actions.createPage({
          context: { projectConfiguration: project },
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
