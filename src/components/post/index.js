import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CommentCount } from 'disqus-react';

import './styles.scss';
import PostLinks from '../post-links';
import PostTags from '../post-tags';
import PostPrevNext from '../post-prevnext';
import { Link } from 'gatsby';
import { dateToAttr } from '../../helpers';
import { getPostNavItems } from './get-post-nav-items';
import { MarkerHandler } from './marker-handler';

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
  const dateAttr = dateToAttr(date);

  // Post navigation through items with id
  const postNavItems = getPostNavItems(elementsWithContent || elemsWithDataAttr);

  const disqusConfig = ({ slug, title }) => ({
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title }
  });

  const shareStr = '<script src="https://yastatic.net/share2/share.js" async="async"></script><div class="ya-share2" data-services="vkontakte,facebook,twitter,telegram"></div>';

  const share = !hideSharing && <div className="post__share"
    dangerouslySetInnerHTML={{ __html: shareStr }}
  />;

  const disqusCommentsStr = `<div class="widget widget--disqus" id="comments">
    <div id="disqus_thread"></div>
    <script type="text/javascript">
        var disqus_shortname = 'css-yoksel';
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    </script>
    <noscript>Включите JavaScript <a href="http://disqus.com/?ref_noscript">чтобы увидеть комментарии.</a></noscript>
    <a href="http://disqus.com" class="dsq-brlink">Система комментирования от <span class="logo-disqus">Disqus</span></a>
  </div>`;

  useEffect(() => {
    const markerHandler = new MarkerHandler();
    markerHandler.addEvents();
  });

  return (
    <article className="post" id="begin">
      <header className="post__header">
        <h1 className="post__title">{title}</h1>

        {date && <time className="post__date faded-text" dateTime={dateAttr}>{date}</time>}

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

      {share}

      <PostPrevNext previous={previous} next={next} />

      {!hideComments &&
        <div
          className="post__comments"
          dangerouslySetInnerHTML={{ __html: disqusCommentsStr }}>
        </div>
      }

      <a href="#begin" className="post__marker post__marker--hidden"></a>
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
