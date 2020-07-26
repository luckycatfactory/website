import React from "react"
import { Paragraph, XXXL } from "@zendeskgarden/react-typography"

import { DocumentationSection } from "../../../components/documentation"

const Issues = React.memo(() => (
  <DocumentationSection>
    <XXXL>Issues</XXXL>
    <Paragraph>Hello</Paragraph>
  </DocumentationSection>
))

export default Issues
