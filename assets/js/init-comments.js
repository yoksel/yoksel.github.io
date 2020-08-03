const commentsContainer = document.querySelector('.post__comments');
const loadCommentsButton = document.querySelector('.post__load-comments')
const disqusShortname = 'css-yoksel';
const disqusCommentsStr = `<div class="widget widget--disqus" id="comments">
  <div id="disqus_thread"></div>
  <noscript>Включите JavaScript <a href="http://disqus.com/?ref_noscript">чтобы увидеть комментарии.</a></noscript>
  <div class="dsq-brlink faded-text">Загрузка...</div>
</div>`;

const initDisqus = () => {
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
};

export const initComments = () => {

  if (commentsContainer && loadCommentsButton) {
    loadCommentsButton.addEventListener('click', () => {

      commentsContainer.innerHTML = disqusCommentsStr;
      initDisqus();
    });
  }
};
