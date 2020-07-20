import {
  AboutSectionType,
  CommunitySectionType,
  DocumentationConfiguration,
  ExamplesSectionType,
  RecipesSectionType,
  SectionGroupType,
  UsageSectionType,
} from "./src/types"

const configuration: DocumentationConfiguration = {
  routeKey: "pool-time",
  sectionGroups: [
    {
      routeKey: "about",
      sections: [
        {
          routeKey: "overview",
          title: "Overview",
          type: AboutSectionType.Overview,
        },
        {
          routeKey: "motivation",
          title: "Motivation",
          type: AboutSectionType.Motivation,
        },
      ],
      title: "About",
      type: SectionGroupType.About,
    },
    {
      routeKey: "usage",
      sections: [
        {
          routeKey: "installation",
          title: "Installation",
          type: UsageSectionType.Installation,
        },
      ],
      title: "Usage",
      type: SectionGroupType.Usage,
    },
    {
      routeKey: "examples",
      sections: [
        {
          routeKey: "basic-logging",
          title: "Basic Logging",
          type: ExamplesSectionType.Examples,
        },
      ],
      title: "Examples",
      type: SectionGroupType.Examples,
    },
    {
      routeKey: "recipes",
      sections: [
        {
          routeKey: "dev-only",
          title: "Dev-Only",
          type: RecipesSectionType.Recipes,
        },
      ],
      title: "Recipes",
      type: SectionGroupType.Recipes,
    },
    {
      routeKey: "community",
      sections: [
        {
          routeKey: "faqs",
          title: "FAQs",
          type: CommunitySectionType.Faqs,
        },
        {
          routeKey: "issues",
          title: "Open an Issue",
          type: CommunitySectionType.Issues,
        },
        {
          routeKey: "future-plans",
          title: "Future Plans",
          type: CommunitySectionType.Future,
        },
      ],
      title: "Community",
      type: SectionGroupType.Community,
    },
  ],
}

module.exports = {
  siteMetadata: {
    author: `@luckycatfactory`,
    description: `Providing open-source solutions to better the internet`,
    projects: [
      {
        description:
          "A declarative relative time management system meant to make applications more performant, accurate, and intentional in their time updates.",
        name: "pool-time",
        packages: [
          {
            name: "pool-time-core",
          },
          {
            name: "react-pool-time",
          },
        ],
      },
      {
        description:
          "A simple, lightweight package for measuring your application's Redux performance.",
        name: "redux-performance-middleware",
        packages: [
          {
            name: "redux-performance-middleware",
          },
        ],
      },
    ],
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
