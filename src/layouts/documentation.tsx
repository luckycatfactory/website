import React from "react"
import { Link } from "gatsby"
import { LG } from "@zendeskgarden/react-typography"
import styled from "styled-components"

import {
  AnySection,
  AnySectionGroup,
  ProjectConfiguration,
  AboutSectionType,
} from "../types"

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

const Section = React.memo<SectionProps>(({ path, title }) => (
  <li>
    <Link to={path}>{title}</Link>
  </li>
))

const SectionGroup = React.memo<SectionGroupProps>(
  ({ rootPath, sections, title }) => (
    <div>
      <LG isBold>{title}</LG>
      <ul>
        {sections.map(section => (
          <Section
            key={section.title}
            path={
              section.type === AboutSectionType.Overview
                ? rootPath
                : `${rootPath}${section.path}`
            }
            title={section.title}
          />
        ))}
      </ul>
    </div>
  )
)

const StyledNav = styled.nav`
  width: 240px;
`

const DocumentationNavigation = React.memo<DocumentationNavigationProps>(
  ({ path, sectionGroups }) => (
    <StyledNav>
      {sectionGroups.map(({ sections, title }) => (
        <SectionGroup
          key={title}
          rootPath={path}
          sections={sections}
          title={title}
        />
      ))}
    </StyledNav>
  )
)

const DocumentationDivider = styled.div`
  display: flex;
`

const DocumentationLayout = React.memo<DocumentationLayoutProps>(
  ({ children, projectConfiguration }) => (
    <DocumentationDivider>
      {
        <DocumentationNavigation
          path={projectConfiguration.documentation.path}
          sectionGroups={projectConfiguration.documentation.sectionGroups}
        />
      }
      {children}
    </DocumentationDivider>
  )
)

export default DocumentationLayout
