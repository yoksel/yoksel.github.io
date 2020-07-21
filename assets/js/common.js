import { MarkerHandler } from './marker-handler.js';

document.documentElement.classList.remove('no-js');

const markerHandler = new MarkerHandler();
markerHandler.addEvents();

const commentsContainer = document.querySelector('.post__comments');
const loadCommentsButton = document.querySelector('.post__load-comments');
var disqusShortname = 'css-yoksel';

const disqusCommentsStr = `<div class="widget widget--disqus" id="comments">
  <div id="disqus_thread"></div>
  <noscript>Включите JavaScript <a href="http://disqus.com/?ref_noscript">чтобы увидеть комментарии.</a></noscript>
</div>`;

/* <a class="dsq-brlink">Комменты пытаются загрузиться. Если не у них не получилось, попробуйте обновить страницу.</a> */

if (commentsContainer && loadCommentsButton) {
  loadCommentsButton.addEventListener('click', () => {

    commentsContainer.innerHTML = disqusCommentsStr;
    initDisqus();
  });
}

function initDisqus () {
  var dsq = document.createElement('script');
  dsq.type = 'text/javascript';
  dsq.async = true;
  dsq.src = '//' + disqusShortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
}
