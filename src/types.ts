export type ArticleType = 'post' | 'page' | 'service-page';

export interface ArticleData {
  slug?: string;
  title?: string;
  date?: string;
  description?: string;
  excerpt?: string;
  type?: ArticleType;
  content?: string;
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
type HrefOrId = { id: string } | { href: string };

export type PageUrl = {
  text: string;
  desc?: string;
  level?: number;
} & HrefOrId;
