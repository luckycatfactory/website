import React from "react"
import { AnySection, DocumentationConfiguration } from "../../types"

interface DocumentationLayoutContextValue {
  readonly registerDocumentation: (
    configuration: DocumentationConfiguration
  ) => void
}

const defaultValue = {
  registerDocumentation: () => {},
}

const DocumentationLayoutContext = React.createContext<
  DocumentationLayoutContextValue
>(defaultValue)

export default DocumentationLayoutContext
