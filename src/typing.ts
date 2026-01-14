export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;

  canonical?: string;

  robots?: MetaDataRobots;

  description?: string;

}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}
