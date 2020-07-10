import React from 'react';
import PropTypes from 'prop-types';
import { DiscussionEmbed, CommentCount } from 'disqus-react';

import './styles.scss';
import PostLinks from '../post-links';
import PostTags from '../post-tags';
import PostPrevNext from '../post-prevnext';
import { Link } from 'gatsby';

export default function Post ({
  children,
  slug,
  title,
  date,
  content,
  tags,
  links,
  articleType,
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

  // Post navigation through items with id
  const postNavItems = getPostNavItems(elementsWithContent || elemsWithDataAttr);

  const disqusConfig = ({ slug, title }) => ({
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title }
  });

  const share = !hideSharing && '<script src="https://yastatic.net/share2/share.js" async="async"></script><div class="ya-share2" data-services="vkontakte,facebook,twitter,telegram"></div>';

  return (
    <article className="post">
      <header className="post__header">
        <h1 className="post__title">{title}</h1>

        {date && <time className="post__date faded-text">{date}</time>}

        {articleType === 'post' && <Link
          className="post__link-to-comments"
          to={`/${slug}#disqus_thread`}>
          <CommentCount {...disqusConfig({ slug, title })} />
        </Link>}
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

      <div className="post__share"
        dangerouslySetInnerHTML={{ __html: share }}
      />

      <PostPrevNext previous={previous} next={next} />

      {!hideComments && <DiscussionEmbed {...disqusConfig({ slug, title })}/>}
    </article>
  );
}

function getPostNavItems (elementsWithId) {
  if (!elementsWithId) {
    return [];
  }
  const regexpNoName =
    '<[^>]{1,20} id="([^>]{1,200})">([^>]{1,200})</[^>]{1,20}>';
  const regexpDataName = '<[^>]{1,20} id="([^>]{1,200})" data-name="([^>]{1,200})">';

  // fix later
  return elementsWithId.map(item => {
    let regexp = new RegExp(regexpNoName);

    if (item.includes('data-name')) {
      regexp = new RegExp(regexpDataName);
    }

    const [, id, name] = item.match(regexp);
    return {
      id,
      name
    };
  });
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
  hideComments: PropTypes.bool
};
