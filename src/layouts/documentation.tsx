import React from "react"
import { Link } from "gatsby"

import { AnySection, AnySectionGroup, ProjectConfiguration } from "../types"

interface SectionProps {
  readonly path: string
  readonly title: string
}

interface SectionGroupProps {
  readonly rootPath: string
  readonly sections: AnySection[]
  readonly title: string
}

interface DocumentationNavigationProps {
  readonly path: string
  readonly sectionGroups: AnySectionGroup[]
}

interface DocumentationLayoutProps {
  readonly children: React.ReactNode
  readonly projectConfiguration: ProjectConfiguration
}

const Section = React.memo<SectionProps>(({ path, title }) => {
  return (
    <li>
      <Link to={path}>{title}</Link>
    </li>
  )
})

const SectionGroup = React.memo<SectionGroupProps>(
  ({ rootPath, sections, title }) => (
    <div>
      <h4>{title}</h4>
      <ul>
        {sections.map(section => (
          <Section
            key={section.title}
            path={`${rootPath}${section.path}`}
            title={section.title}
          />
        ))}
      </ul>
    </div>
  )
)

const DocumentationNavigation = React.memo<DocumentationNavigationProps>(
  ({ path, sectionGroups }) => (
    <nav>
      {sectionGroups.map(({ sections, title }) => (
        <SectionGroup
          key={title}
          rootPath={path}
          sections={sections}
          title={title}
        />
      ))}
    </nav>
  )
)

const DocumentationLayout = React.memo<DocumentationLayoutProps>(
  ({ children, projectConfiguration }) => {
    return (
      <>
        {
          <DocumentationNavigation
            path={projectConfiguration.documentation.path}
            sectionGroups={projectConfiguration.documentation.sectionGroups}
          />
        }
        {children}
      </>
    )
  }
)

export default DocumentationLayout
