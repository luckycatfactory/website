/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = ({ actions, page }) => {
  const { createPage } = actions

  if (page.path.startsWith("/projects/")) {
    page.context.layout = "documentation"
    createPage(page)
  } else {
    page.context.layout = "normal"
    createPage(page)
  }
}
