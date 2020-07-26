import React from "react"
import { Paragraph, XXXL } from "@zendeskgarden/react-typography"

import { DocumentationSection } from "../../../components/documentation"

const Motivation = React.memo(() => (
  <DocumentationSection>
    <XXXL>Motivation</XXXL>
    <Paragraph>Hello</Paragraph>
  </DocumentationSection>
))

export default Motivation
