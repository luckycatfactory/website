import React, { useCallback, useMemo, useState } from "react"
import { Link } from "gatsby"

import DocumentationLayoutContext from "./contexts/DocumentationLayoutContext"
import {
  AnySection,
  AnySectionGroup,
  DocumentationConfiguration,
} from "../types"

interface SectionProps {
  readonly projectRouteKey: string
  readonly routeKey: string
  readonly sectionGroupRouteKey: string
  readonly title: string
}

interface SectionGroupProps {
  readonly projectRouteKey: string
  readonly routeKey: string
  readonly sections: AnySection[]
  readonly title: string
}

interface DocumentationNavigationProps {
  readonly routeKey: string
  readonly sectionGroups: AnySectionGroup[]
}

interface DocumentationLayoutProps {
  readonly children: React.ReactNode
  readonly pathname: string
}

const Section = React.memo<SectionProps>(
  ({ projectRouteKey, routeKey, sectionGroupRouteKey, title }) => {
    const url = useMemo(
      () => `/projects/${projectRouteKey}/${sectionGroupRouteKey}/${routeKey}`,
      []
    )

    return (
      <li>
        <Link to={url}>{title}</Link>
      </li>
    )
  }
)

const SectionGroup = React.memo<SectionGroupProps>(
  ({ projectRouteKey, routeKey, sections, title }) => (
    <div>
      <h4>{title}</h4>
      <ul>
        {sections.map(section => (
          <Section
            key={section.title}
            projectRouteKey={projectRouteKey}
            routeKey={section.routeKey}
            sectionGroupRouteKey={routeKey}
            title={section.title}
          />
        ))}
      </ul>
    </div>
  )
)

const DocumentationNavigation = React.memo<DocumentationNavigationProps>(
  ({ routeKey: projectRouteKey, sectionGroups }) => (
    <nav>
      {sectionGroups.map(({ routeKey, sections, title }) => (
        <SectionGroup
          key={title}
          projectRouteKey={projectRouteKey}
          routeKey={routeKey}
          sections={sections}
          title={title}
        />
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
            routeKey={configuration.routeKey}
            sectionGroups={configuration.sectionGroups}
          />
        )}
        {children}
      </DocumentationLayoutContext.Provider>
    )
  }
)

export default DocumentationLayout
