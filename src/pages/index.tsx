import React from "react"
import { Paragraph, XXL } from "@zendeskgarden/react-typography"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = React.memo(() => (
  <>
    <SEO title="Home" />
    <XXL>Wash your face of subpar software</XXL>
    <Paragraph>
      @luckycatfactory offers high quality, open source software.
    </Paragraph>
    <Link to={"/projects"}>Projects</Link>
  </>
))

export default IndexPage
