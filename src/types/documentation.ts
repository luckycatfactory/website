import { NonEmptyArray } from "./utility"

export enum AboutSectionType {
  Overview = "Overview",
  Motivation = "Motivation",
}

export enum CommunitySectionType {
  Faqs = "Faqs",
  Future = "Future",
  Issues = "Issues",
}

export enum ExamplesSectionType {
  Examples = "Examples",
}

export enum RecipesSectionType {
  Recipes = "Recipes",
}

export enum UsageSectionType {
  Configuration = "Configuration",
  Installation = "Installation",
}

export type AnySectionType =
  | AboutSectionType
  | CommunitySectionType
  | ExamplesSectionType
  | RecipesSectionType
  | UsageSectionType

interface BaseSection<T extends AnySectionType> {
  readonly routeKey: string
  readonly title: string
  readonly type: T
}

export interface AboutSection extends BaseSection<AboutSectionType> {}

export interface CommunitySection extends BaseSection<CommunitySectionType> {}

export interface ExamplesSection extends BaseSection<ExamplesSectionType> {}

export interface RecipesSection extends BaseSection<RecipesSectionType> {}

export interface UsageSection extends BaseSection<UsageSectionType> {}

export type AnySection =
  | AboutSection
  | CommunitySection
  | ExamplesSection
  | RecipesSection
  | UsageSection

export enum SectionGroupType {
  About = "About",
  Community = "Community",
  Examples = "Examples",
  Recipes = "Recipes",
  Usage = "Usage",
}

export interface BaseSectionGroup<
  T extends SectionGroupType,
  U extends AnySection
> {
  readonly routeKey: string
  readonly sections: NonEmptyArray<U>
  readonly title: string
  readonly type: T
}

export interface AboutSectionGroup
  extends BaseSectionGroup<SectionGroupType.About, AboutSection> {}

export interface CommunitySectionGroup
  extends BaseSectionGroup<SectionGroupType.Community, CommunitySection> {}

export interface ExamplesSectionGroup
  extends BaseSectionGroup<SectionGroupType.Examples, ExamplesSection> {}

export interface RecipesSectionGroup
  extends BaseSectionGroup<SectionGroupType.Recipes, RecipesSection> {}

export interface UsageSectionGroup
  extends BaseSectionGroup<SectionGroupType.Usage, UsageSection> {}

export type AnySectionGroup =
  | AboutSectionGroup
  | CommunitySectionGroup
  | ExamplesSectionGroup
  | RecipesSectionGroup
  | UsageSectionGroup

export interface DocumentationConfiguration {
  readonly routeKey: string
  readonly sectionGroups: AnySectionGroup[]
}
