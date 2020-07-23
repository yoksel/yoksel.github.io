import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import PostLinks from '../post-links';
import PostTags from '../post-tags';
import PostPrevNext from '../post-prevnext';
import { dateToAttr } from '../../helpers';
import { getPostNavItems } from './get-post-nav-items';

export default function Post ({
  children,
  title,
  date,
  content,
  tags,
  links,
  previous,
  next,
  hideComments,
  hideSharing
}) {
  const elementsWithContent = content && content.match(
    /<[^>]{1,20} id="([^>]{1,200})">([^>]{1,})<\/[^>]{1,20}>/g
  );
  const elemsWithDataAttr = content && content.match(
    /<[^>]{1,20} id="[^>]{1,200}" data-name="[^>]{1,200}">/g
  );
  const dateAttr = dateToAttr(date);

  // Post navigation through items with id
  const postNavItems = getPostNavItems(elementsWithContent || elemsWithDataAttr);

  const shareStr = '<script src="https://yastatic.net/share2/share.js" async="async"></script><div class="ya-share2" data-services="vkontakte,facebook,twitter,telegram"></div>';

  const share = !hideSharing && <div className="post__share"
    dangerouslySetInnerHTML={{ __html: shareStr }}
  />;

  return (
    <article className="post" id="begin">
      <header className="post__header">
        <h1 className="post__title">{title}</h1>

        {date && <time className="post__date faded-text" dateTime={dateAttr}>{date}</time>}
      </header>

      <PostLinks title="Содержание:" items={postNavItems} />

      {content && <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: content }}
      />}

      {children && <div
        className="post__content">
          {children}
        </div>
      }

      <PostLinks title="Ссылки по теме:" items={links} />

      <PostTags items={tags} />

      {share}

      <PostPrevNext previous={previous} next={next} />

      {/* Comments are loaded using external script, see assets/js */}
      {!hideComments &&
        <div
        className="post__comments">
          <button type="button" className="post__load-comments">Показать комментарии</button>
        </div>
      }

      <a
        href="#begin"
        className="post__marker post__marker--hidden"
        title="Наверх">
        <span className="visually-hidden">Наверх</span>
      </a>
    </article>
  );
}

Post.propTypes = {
  slug: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  tags: PropTypes.array,
  links: PropTypes.array,
  articleType: PropTypes.string,
  previous: PropTypes.object,
  next: PropTypes.object,
  hideComments: PropTypes.bool,
  hideSharing: PropTypes.bool
};
