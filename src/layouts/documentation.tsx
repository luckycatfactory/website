import React, { useCallback, useMemo, useState } from "react"
import { Link } from "gatsby"

import DocumentationLayoutContext from "./contexts/DocumentationLayoutContext"
import {
  AnySection,
  AnySectionGroup,
  DocumentationConfiguration,
} from "../types"

interface SectionProps {
  readonly path: string
  readonly title: string
}

interface SectionGroupProps {
  readonly sections: AnySection[]
  readonly title: string
}

interface DocumentationNavigationProps {
  readonly sectionGroups: AnySectionGroup[]
}

interface DocumentationLayoutProps {
  readonly children: React.ReactNode
  readonly pathname: string
}

const Section = React.memo<SectionProps>(({ path, title }) => {
  return (
    <li>
      <Link to={path}>{title}</Link>
    </li>
  )
})

const SectionGroup = React.memo<SectionGroupProps>(({ sections, title }) => (
  <div>
    <h4>{title}</h4>
    <ul>
      {sections.map(section => (
        <Section
          key={section.title}
          path={section.path}
          title={section.title}
        />
      ))}
    </ul>
  </div>
))

const DocumentationNavigation = React.memo<DocumentationNavigationProps>(
  ({ sectionGroups }) => (
    <nav>
      {sectionGroups.map(({ sections, title }) => (
        <SectionGroup key={title} sections={sections} title={title} />
      ))}
    </nav>
  )
)

const DocumentationLayout = React.memo<DocumentationLayoutProps>(
  ({ children }) => {
    const [configuration, setConfiguration] = useState<
      DocumentationConfiguration
    >()

    const handleDocumentationRegistration = useCallback(configuration => {
      setConfiguration(configuration)
    }, [])

    const documentationLayoutContextValue = useMemo(
      () => ({
        registerDocumentation: handleDocumentationRegistration,
      }),
      [handleDocumentationRegistration]
    )

    return (
      <DocumentationLayoutContext.Provider
        value={documentationLayoutContextValue}
      >
        {configuration && (
          <DocumentationNavigation
            sectionGroups={configuration.sectionGroups}
          />
        )}
        {children}
      </DocumentationLayoutContext.Provider>
    )
  }
)

export default DocumentationLayout
