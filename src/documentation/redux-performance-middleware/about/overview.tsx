import React from "react"
import { Paragraph, XXXL } from "@zendeskgarden/react-typography"

import { DocumentationSection } from "../../../components/documentation"

const Overview = React.memo(() => (
  <DocumentationSection>
    <XXXL>Overview</XXXL>
    <Paragraph>Hello</Paragraph>
  </DocumentationSection>
))

export default Overview
