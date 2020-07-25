import React from "react"
import { Button } from "@zendeskgarden/react-buttons"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = React.memo(() => (
  <>
    <SEO title="Home" />
    <h1>Wash your face of subpar software</h1>
    <p>@luckycatfactory offers high quality, open source software.</p>
    <Link to={"/projects"}>Projects</Link>
  </>
))

export default IndexPage
