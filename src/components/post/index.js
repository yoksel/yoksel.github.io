import React from 'react';
import PropTypes from 'prop-types';
import { DiscussionEmbed, CommentCount } from 'disqus-react';

import './styles.scss';
import PostLinks from '../post-links';
import PostTags from '../post-tags';
import PostPrevNext from '../post-prevnext';
import { Link } from 'gatsby';

export default function Post ({
  slug,
  title,
  date,
  content,
  tags,
  links,
  articleType,
  previous,
  next
}) {
  const elementsWithContent = content.match(
    /<[^>]{1,20} id="([^>]{1,200})">([^>]{1,})<\/[^>]{1,20}>/g
  );
  const elemsWithDataAttr = content.match(
    /<[^>]{1,20} id="[^>]{1,200}" data-name="[^>]{1,200}">/g
  );

  // Post navigation through items with id
  const postNavItems = getPostNavItems(elementsWithContent || elemsWithDataAttr);

  const disqusConfig = ({ slug, title }) => ({
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title }
  });

  return (
    <article className="post">
      <header className="post__header">
        <h1 className="post__title">{title}</h1>

        <time className="post__date faded-text">{date}</time>

        {articleType === 'post' && <Link
          className="post__link-to-comments"
          to={`/${slug}#disqus_thread`}>
          <CommentCount {...disqusConfig({ slug, title })} />
        </Link>}
      </header>

      <PostLinks title="Содержание:" items={postNavItems} />

      <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <PostLinks title="Ссылки по теме:" items={links} />

      <PostTags items={tags} />

      <PostPrevNext previous={previous} next={next} />

      <DiscussionEmbed {...disqusConfig({ slug, title })}/>
    </article>
  );
}

function getPostNavItems (elementsWithId) {
  if (!elementsWithId) {
    return [];
  }
  let regexp = new RegExp(
    '<[^>]{1,20} id="([^>]{1,200})">([^>]{1,200})</[^>]{1,20}>'
  );

  if (elementsWithId[0].includes('data-name')) {
    regexp = new RegExp(
      '<[^>]{1,20} id="([^>]{1,200})" data-name="([^>]{1,200})">'
    );
  }

  return elementsWithId.map(item => {
    const [, id, name] = item.match(regexp);
    return {
      id,
      name
    };
  });
}

Post.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  tags: PropTypes.array,
  links: PropTypes.array,
  articleType: PropTypes.string,
  previous: PropTypes.object,
  next: PropTypes.object
};
