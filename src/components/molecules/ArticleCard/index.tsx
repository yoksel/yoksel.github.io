import { WidgetItem } from '../../../types';
import ArticleDate from '../../atoms/ArticleDate';
import ContentAsHtml from '../../atoms/ContentAsHtml';
import Link from '../../atoms/Link';

import styles from './styles.module.scss';

export type ArticleWithDate = {
  text: string;
  date: string;
} & WidgetItem;

interface ArticleCardProps {
  article: ArticleWithDate;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  let { text, href, excerpt, date } = article;

  return (
    <div className={styles['articleCard']}>
      <h3 className={styles['articleCard__title']}>
        <Link href={href}>{text}</Link>
      </h3>

      {excerpt && (
        <ContentAsHtml
          className={styles['articleCard__text']}
          content={excerpt}
        />
      )}

      <div className={styles['articleCard__footer']}>
        <Link href={href}>Читать дальше →</Link>

        <ArticleDate date={date} />
      </div>
    </div>
  );
};

export default ArticleCard;
