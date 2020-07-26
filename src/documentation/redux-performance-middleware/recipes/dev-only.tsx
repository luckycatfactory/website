import React from "react"
import { Paragraph, XXXL } from "@zendeskgarden/react-typography"

import { DocumentationSection } from "../../../components/documentation"

const DevOnly = React.memo(() => (
  <DocumentationSection>
    <XXXL>Development Only</XXXL>
    <Paragraph>Hello</Paragraph>
  </DocumentationSection>
))

export default DevOnly
