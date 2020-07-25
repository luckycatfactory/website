import {
  AnySection,
  AnySectionGroup,
  AboutSectionType,
  CommunitySectionType,
  DocumentationConfiguration,
  ExamplesSectionType,
  RecipesSectionType,
  SectionGroupType,
  UsageSectionType,
} from "./src/types"

// const expandDocumentationPaths = (
//   rawDocumentationConfiguration: DocumentationConfiguration
// ): DocumentationConfiguration => {
//   const sectionGroups: AnySectionGroup[] =
//     rawDocumentationConfiguration.sectionGroups
//   return {
//     ...rawDocumentationConfiguration,
//     sectionGroups: sectionGroups.map(rawSectionGroup => {
//       const sections: AnySection[] = rawSectionGroup.sections

//       return {
//         ...rawSectionGroup,
//         sections: sections.map(rawSection => ({
//           ...rawSection,
//           path: `${rawDocumentationConfiguration.path}${rawSection.path}`,
//         })),
//       }
//     }),
//   }
// }

// const documentation: DocumentationConfiguration = expandDocumentationPaths()
interface Package {
  readonly name: string
  readonly packageUrl: string
}

interface Project {
  readonly description: string
  readonly documentation: DocumentationConfiguration
  readonly name: string
  readonly packages: Package[]
}

const poolTimeDocumentation: DocumentationConfiguration = {
  path: "/pool-time",
  sectionGroups: [
    {
      sections: [
        {
          path: "/overview",
          title: "Overview",
          type: AboutSectionType.Overview,
        },
        {
          path: "/motivation",
          title: "Motivation",
          type: AboutSectionType.Motivation,
        },
      ],
      title: "About",
      type: SectionGroupType.About,
    },
    {
      sections: [
        {
          path: "/installation",
          title: "Installation",
          type: UsageSectionType.Installation,
        },
      ],
      title: "Usage",
      type: SectionGroupType.Usage,
    },
    {
      sections: [
        {
          path: "/basic-logging",
          title: "Basic Logging",
          type: ExamplesSectionType.Examples,
        },
      ],
      title: "Examples",
      type: SectionGroupType.Examples,
    },
    {
      sections: [
        {
          path: "/dev-only",
          title: "Dev-Only",
          type: RecipesSectionType.Recipes,
        },
      ],
      title: "Recipes",
      type: SectionGroupType.Recipes,
    },
    {
      sections: [
        {
          path: "/faqs",
          title: "FAQs",
          type: CommunitySectionType.Faqs,
        },
        {
          path: "/issues",
          title: "Open an Issue",
          type: CommunitySectionType.Issues,
        },
        {
          path: "/future-plans",
          title: "Future Plans",
          type: CommunitySectionType.Future,
        },
      ],
      title: "Community",
      type: SectionGroupType.Community,
    },
  ],
}

const poolTimeProject: Project = {
  description:
    "A declarative relative time management system meant to make applications more performant, accurate, and intentional in their time updates.",
  documentation: poolTimeDocumentation,
  name: "pool-time",
  packages: [
    {
      name: "pool-time-core",
      packageUrl:
        "https://www.npmjs.com/package/@luckycatfactory/pool-time-core",
    },
    {
      name: "react-pool-time",
      packageUrl:
        "https://www.npmjs.com/package/@luckycatfactory/react-pool-time",
    },
  ],
}

const reduxPerformanceMiddlewareDocumentation: DocumentationConfiguration = {
  path: "/redux-performance-middleware",
  sectionGroups: [
    {
      sections: [
        {
          path: "/overview",
          title: "Overview",
          type: AboutSectionType.Overview,
        },
        {
          path: "/motivation",
          title: "Motivation",
          type: AboutSectionType.Motivation,
        },
      ],
      title: "About",
      type: SectionGroupType.About,
    },
    {
      sections: [
        {
          path: "/installation",
          title: "Installation",
          type: UsageSectionType.Installation,
        },
      ],
      title: "Usage",
      type: SectionGroupType.Usage,
    },
    {
      sections: [
        {
          path: "/basic-logging",
          title: "Basic Logging",
          type: ExamplesSectionType.Examples,
        },
      ],
      title: "Examples",
      type: SectionGroupType.Examples,
    },
    {
      sections: [
        {
          path: "/dev-only",
          title: "Dev-Only",
          type: RecipesSectionType.Recipes,
        },
      ],
      title: "Recipes",
      type: SectionGroupType.Recipes,
    },
    {
      sections: [
        {
          path: "/faqs",
          title: "FAQs",
          type: CommunitySectionType.Faqs,
        },
        {
          path: "/issues",
          title: "Open an Issue",
          type: CommunitySectionType.Issues,
        },
        {
          path: "/future-plans",
          title: "Future Plans",
          type: CommunitySectionType.Future,
        },
      ],
      title: "Community",
      type: SectionGroupType.Community,
    },
  ],
}

const reduxPerformanceMiddleware: Project = {
  description:
    "A simple, lightweight package for measuring your application's Redux performance.",
  documentation: reduxPerformanceMiddlewareDocumentation,
  name: "redux-performance-middleware",
  packages: [
    {
      name: "redux-performance-middleware",
      packageUrl:
        "https://www.npmjs.com/package/@luckycatfactory/redux-performance-middleware",
    },
  ],
}

module.exports = {
  siteMetadata: {
    author: `@luckycatfactory`,
    description: `Providing open-source solutions to better the internet`,
    projects: [poolTimeProject, reduxPerformanceMiddleware],
    title: `luckycatfactory`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    "gatsby-plugin-layout",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
