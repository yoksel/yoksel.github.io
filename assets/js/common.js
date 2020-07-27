import { MarkerHandler } from './marker-handler.js';

document.documentElement.classList.remove('no-js');

const markerHandler = new MarkerHandler();
markerHandler.addEvents();

// Tags
initTagsList();

function initTagsList () {
  const tagsList = document.querySelector('.tags-list');

  if (!tagsList) {
    return;
  }

  const posts = document.querySelectorAll('.post-item');
  const postsListTitle = document.querySelector('.posts-list-title');
  let currentTag = document && document.location.hash
    ? document.location.hash.substring(1)
    : '';
  const currentTagClass = 'tags-button--current';
  let currentTagButton;

  if (currentTag) {
    currentTagButton = document.querySelector(`button[data-target-tag="${currentTag}"]`);
    currentTagButton.classList.add(currentTagClass);
    postsListTitle.innerHTML = `Статьи по тегу «${currentTagButton.innerHTML}»`;
    showPostsByTag();
  } else {
    postsListTitle.innerHTML = 'Все статьи';
  }

  tagsList.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-target-tag]');

    if (!button) {
      return;
    }

    const buttonTag = button.dataset.targetTag;

    if (buttonTag === currentTag) {
      currentTag = null;
      button.classList.remove(currentTagClass);
      currentTagButton = null;
      history.pushState('', document.title, `${window.location.pathname}${window.location.search}`);
      postsListTitle.innerHTML = 'Все статьи';
    } else {
      currentTag = buttonTag;
      if (currentTagButton) {
        currentTagButton.classList.remove(currentTagClass);
      }
      button.classList.add(currentTagClass);
      currentTagButton = button;
      document.location.hash = currentTag;
      postsListTitle.innerHTML = `Статьи по тегу «${currentTagButton.innerHTML}»`;
    }

    showPostsByTag();
  });

  function showPostsByTag () {
    posts.forEach(post => {
      if (currentTag) {
        if (post.classList.contains(`tag-${currentTag}`)) {
          post.classList.remove('hidden');
        } else {
          post.classList.add('hidden');
        }
      } else {
        post.classList.remove('hidden');
      }
    });
  }
}

// Comments
const commentsContainer = document.querySelector('.post__comments');
const loadCommentsButton = document.querySelector('.post__load-comments');
const disqusShortname = 'css-yoksel';

const disqusCommentsStr = `<div class="widget widget--disqus" id="comments">
  <div id="disqus_thread"></div>
  <noscript>Включите JavaScript <a href="http://disqus.com/?ref_noscript">чтобы увидеть комментарии.</a></noscript>
  <div class="dsq-brlink faded-text">Загрузка...</div>
</div>`;

if (commentsContainer && loadCommentsButton) {
  loadCommentsButton.addEventListener('click', () => {

    commentsContainer.innerHTML = disqusCommentsStr;
    initDisqus();
  });
}

function initDisqus () {
  const dsqConfig = document.createElement('script');
  const { origin, pathname } = document.location;
  dsqConfig.innerHTML = (
    `const disqus_config = function () {
        this.page.url = '${origin + pathname}';
        this.page.title = '${commentsContainer.dataset.title}';
    };`
  );
  (document.getElementsByTagName('head')[0]).appendChild(dsqConfig);

  const dsq = document.createElement('script');
  dsq.async = true;
  dsq.src = '//' + disqusShortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0]).appendChild(dsq);
}
