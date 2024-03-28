export type ArticleType = 'post' | 'page' | 'service-page';

type HrefOrId = { id: string } | { href: string };

export type PageUrl = {
  text: string;
  desc?: string;
  level?: number;
} & HrefOrId;

export interface ArticleData {
  slug?: string;
  title?: string;
  date?: string;
  description?: string;
  excerpt?: string;
  type?: ArticleType;
  content?: string;
  navItems?: PageUrl[];
  order?: number;
  links?: PageUrl[];
  additional_links?: PageUrl[];
  tags?: string[];
  image?: string;
  customStyles?: string;
  customScripts?: string;
  layout?: 'onecolumn';
  disableCounter?: boolean;
}

export interface SlugData {
  date?: string;
  fullSlug: string;
}

export interface DataBySlag {
  [key: string]: SlugData;
}

export interface EventProps {
  name: string;
  href: string;
  date: string;
}

export interface WidgetItem {
  text: string;
  href: string;
  desc?: string;
  excerpt?: string;
  stars?: number;
  event?: EventProps;
}

export interface PrevNextItem extends WidgetItem {
  id: string;
}

export interface PrevNextProps {
  prev?: PrevNextItem;
  next?: PrevNextItem;
}
