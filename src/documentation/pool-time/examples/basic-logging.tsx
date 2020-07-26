import React from "react"
import { Paragraph, XXXL } from "@zendeskgarden/react-typography"

import { DocumentationSection } from "../../../components/documentation"

const BasicLogging = React.memo(() => (
  <DocumentationSection>
    <XXXL>Basic Logging</XXXL>
    <Paragraph>Hello</Paragraph>
  </DocumentationSection>
))

export default BasicLogging
