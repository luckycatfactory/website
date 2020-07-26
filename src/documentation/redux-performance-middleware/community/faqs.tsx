import React from "react"
import { Paragraph, XXXL } from "@zendeskgarden/react-typography"

import { DocumentationSection } from "../../../components/documentation"

const Faqs = React.memo(() => (
  <DocumentationSection>
    <XXXL>FAQs</XXXL>
    <Paragraph>Hello</Paragraph>
  </DocumentationSection>
))

export default Faqs
