import React from "react"
import { Link } from "gatsby"
import { LG } from "@zendeskgarden/react-typography"
import styled from "styled-components"
import { IconButton } from "@zendeskgarden/react-buttons"
import CloseIcon from "@zendeskgarden/svg-icons/src/16/x-fill.svg"

import SEO from "../components/seo"

import {
  AboutSectionType,
  AnySection,
  AnySectionGroup,
  ProjectConfiguration,
  ResponsiveSizes,
} from "../types"

interface SectionProps {
  readonly onClick?: () => void
  readonly path: string
  readonly title: string
}

interface SectionGroupProps {
  readonly onClick?: () => void
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
  readonly isMobileNavigationOpen: boolean
  readonly onMobileNavigationToggle: () => void
  readonly projectConfiguration: ProjectConfiguration
}

const Section = React.memo<SectionProps>(({ onClick, path, title }) => (
  <li>
    <Link onClick={onClick} to={path}>
      {title}
    </Link>
  </li>
))

const SectionGroup = React.memo<SectionGroupProps>(
  ({ onClick, rootPath, sections, title }) => (
    <div>
      <LG isBold>{title}</LG>
      <ul>
        {sections.map(section => (
          <Section
            key={section.title}
            onClick={onClick}
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
  display: none;
  padding: 0 16px;
  width: 240px;
  @media (min-width: ${ResponsiveSizes.Tablet}) {
    display: flex;
    flex-direction: column;
  }
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

const MobileNavigationModal = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 16px;
  position: fixed;
  top: 0;
  width: 100%;
`

const MobileNavigationContent = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const MobileNavigationInnerContent = styled.div``

const DocumentationLayout = React.memo<DocumentationLayoutProps>(
  ({
    children,
    isMobileNavigationOpen,
    onMobileNavigationToggle,
    projectConfiguration,
  }) => {
    return (
      <DocumentationDivider>
        <SEO title={projectConfiguration.name} />
        {
          <DocumentationNavigation
            path={projectConfiguration.documentation.path}
            sectionGroups={projectConfiguration.documentation.sectionGroups}
          />
        }
        {isMobileNavigationOpen && (
          <MobileNavigationModal aria-modal="true" role="dialog">
            <IconButton onClick={onMobileNavigationToggle}>
              <CloseIcon />
            </IconButton>
            <MobileNavigationContent>
              <MobileNavigationInnerContent>
                {projectConfiguration.documentation.sectionGroups.map(
                  ({ sections, title }) => (
                    <SectionGroup
                      key={title}
                      onClick={onMobileNavigationToggle}
                      rootPath={projectConfiguration.documentation.path}
                      sections={sections}
                      title={title}
                    />
                  )
                )}
              </MobileNavigationInnerContent>
            </MobileNavigationContent>
          </MobileNavigationModal>
        )}
        {children}
      </DocumentationDivider>
    )
  }
)

export default DocumentationLayout
