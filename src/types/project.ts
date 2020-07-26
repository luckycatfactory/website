import { DocumentationConfiguration } from "./documentation"

export interface Package {
  readonly name: string
  readonly packageUrl: string
}

export interface ProjectConfiguration {
  readonly description: string
  readonly documentation: DocumentationConfiguration
  readonly name: string
  readonly packages: Package[]
}
