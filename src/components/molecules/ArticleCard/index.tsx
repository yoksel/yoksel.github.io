import ArticleDate from '../../atoms/ArticleDate';
import ContentAsHtml from '../../atoms/ContentAsHtml';
import FadedText from '../../atoms/FadedText';
import Link from '../../atoms/Link';
import { WidgetItem } from '../Widget';

import styles from './styles.module.scss';

export interface ArticleWithDate extends WidgetItem {
  date: string;
}

interface ArticleCardProps {
  post: ArticleWithDate;
}

const ArticleCard = ({ post }: ArticleCardProps) => {
  let { text, href, excerpt, date } = post;

  return (
    <div className={styles['articleCard']}>
      <h3 className={styles['articleCard__title']}>
        <Link href={href}>{text}</Link>
      </h3>

      {excerpt && (
        <ContentAsHtml
          element="p"
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
