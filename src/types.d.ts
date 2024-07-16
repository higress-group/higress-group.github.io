import ui from "@/i18n/zh-cn/ui";

type UiKeys = keyof typeof ui;


export interface Customer {
  name: UiKeys;
  theme: 'gray' | 'dark' | 'light'; 
  logo: string;
  href: string;
  description: UiKeys;
}

export interface Solution {
  checked: boolean;
  src: string;
  introduce: string,
  logo:string,
  user:string,
  userInfo:string,
  speed:string,
  unit:string,
  speedDes:string[]
}
export interface ChooseReason {
  title: UiKeys;
  svgKey: string;
  description: UiKeys;
}

export interface CommunityLink {
  href: string;
  icon: string;
  text: UiKeys;
}

export interface ContributeLink {
  href: string;
  text: UiKeys;
  depth: number;
  icon: string;
}

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

export interface Post {
  slug: string;
  body: string;
  collection: string;
  data: {
      title: string;
      description: string;
      date: string;
      keywords?: any[];
  };
  excerpt?: string;
};


export interface StarAndForkT {
  stargazers_count?: number;
  forks_count?: number;
  SITE?: any
};