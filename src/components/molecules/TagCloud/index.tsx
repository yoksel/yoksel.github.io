import classNames from 'classnames';
import { WidgetItem } from '../../../types';

import styles from './styles.module.scss';

interface ArticleWitTags extends WidgetItem {
  tags: string[];
}

interface TagWithPosts {
  id: string;
  name: string;
  posts: ArticleWitTags[];
  totalCount: number;
}

interface TagsByNameWithPosts {
  [key: string]: TagWithPosts;
}

interface TagCloudItemProps {
  tagWithPosts: TagWithPosts;
  step: number;
  isCurrent?: boolean;
  tagOnClick: () => void;
}

const TagCloudItem = ({ tagWithPosts, step, isCurrent, tagOnClick }: TagCloudItemProps) => {
  const { id, name, totalCount } = tagWithPosts;
  const tagIncrease = Math.round(totalCount / step) * 20;
  const tagFontSize = 100 + tagIncrease;

  return (
    <li
      className={styles['tagsCloud__item']}
      key={id}
    >
      {/* I use button instead of link to be able to toggle hash in document.location */}
      <button
        className={classNames(
          styles['tagsCloud__button'],
          isCurrent && styles['tagsCloud__button--current'],
        )}
        title={`Статей по тегу: ${totalCount}`}
        style={{ fontSize: `${tagFontSize}%` }}
        onClick={tagOnClick}
      >
        {name || id}
      </button>
    </li>
  );
};

interface TagCloudProps {
  tagsByNameWithPosts: TagsByNameWithPosts;
  currentId?: string;
  tagOnClick: (tagId: string) => void;
}

const TagCloud = ({ tagsByNameWithPosts, currentId, tagOnClick }: TagCloudProps) => {
  const tagsCounts = Object.values(tagsByNameWithPosts).map(({ totalCount }) => totalCount);
  const tagsMinCount = Math.min(...tagsCounts);
  const tagsMaxCount = Math.max(...tagsCounts);
  const step = Math.floor((tagsMaxCount - tagsMinCount) / 4);

  return (
    <ul className={classNames(styles['tagsCloud'], 'no-bullets')}>
      {Object.values(tagsByNameWithPosts).map((tagWithPosts) => {
        return (
          <TagCloudItem
            tagWithPosts={tagWithPosts}
            isCurrent={tagWithPosts.id === currentId}
            step={step}
            tagOnClick={() => tagOnClick(tagWithPosts.id)}
          />
        );
      })}
    </ul>
  );
};

export default TagCloud;
