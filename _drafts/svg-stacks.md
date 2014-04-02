---
layout: default
title: SVG-стеки
type: post
image: 
desc: 

---

Стеки - это ещё один способ вставки SVG. Как спрайт, только лучше - как если бы мы могли использовать <code>use</code> в CSS.

К сожалению, способ работает в Firefox, Opera 12 и ниже, но не работает в Webkittens. <!--more-->

Способ был предложен тут: <a href="http://simurai.com/blog/2012/04/02/svg-stacks/">simurai.com/blog/2012/04/02/svg-stacks/</a>. Ниже, собственно, мой вольный пересказ: объяснение принципа и демо для тестов.

В чем состоит способ?

Допустим, у нас есть SVG-спрайт. Чтобы показать нужный кусочек картинки мы двигаем его с помощью <code>background-position</code>. Чем больше спрайт, тем утомительней задавать для каждой картинки свое положение фона. Конечно, можно автоматизировать процесс, но что если бы можно было просто показывать нужную картинку обратившись к ней по ID?

Например, есть два квадратика, один поверх другого, зеленый сверху:

<svg class="" width="150" height="150"><g id="no"> <rect fill="crimson" width="150" height="150" rx="8"/> </g> <g id="yes"> <rect fill="yellowgreen" width="150" height="150" rx="8"/> </g> </svg>

<pre><code class="language-markup">&lt;svg width="150" height="150">
	&lt;g id="no">
		&lt;rect fill="crimson" width="150" height="150" rx="8"/>
	&lt;/g>
	&lt;g id="yes" class="hidden">
		&lt;rect fill="yellowgreen" width="150" height="150" rx="8"/>
	&lt;/g>
&lt;/svg></code></pre>

По умолчанию должен показываться нижний элемент (красный), так что добавим CSS:

<pre><code class="language-css">.hidden { display: none; }</code></pre>

Зеленый квадратик скрыт: <a href="http://yoksel.github.io/assets/img/svg/yes-no.svg">http://yoksel.github.io/assets/img/svg/yes-no.svg</a>

А теперь воспользуемся селектором <code>:target</code>, чтобы показать только нужный:

<pre><code class="language-css">:target { display: block; }</code></pre>

Добавим в урл ID элемента (<code>#yes</code>) и увидим зеленый квадратик:

<a href="http://yoksel.github.io/assets/img/svg/yes-no.svg#yes">http://yoksel.github.io/assets/img/svg/yes-no.svg#yes</a>

Отлично работает!

А что если попробовать разные способы вставки, например <code>embed</code>, <code>img</code> или <code>background-image</code>?

Я сделала демо, где в квадратик покажет Yes, если вызов по ID поддерживается и No если нет: <a href="http://codepen.io/yoksel/full/KDpqu/">http://codepen.io/yoksel/full/KDpqu/</a>.

И вот тут обнаруживается интересное: вставка через <code>embed</code> и <code>iframe</code> работает во всех браузерах, а через <code>img</code> и <code>background-image</code> - только в IE9, Firefox и старой Опере, а в вебкитах не работает совсем.



-----------

http://r.va.gg/2012/05/data-uri-svg.html

<svg width="150" height="150" viewbox="0 0 200 200"><style>.hidden { display: none; } :target { display: block; }</style><g id="no"><rect fill="#FF4646" width="200" height="200" rx="8"/><text id="No." font-family="Palatino" font-size="90" fill="#fff"><tspan x="28" y="130">No.</tspan></text></g><g id="yes" class="hidden"><rect fill="#7ED321" width="200" height="200" rx="8"/><text id="Yes!" font-family="Palatino" font-size="90" fill="#fff"><tspan x="18" y="130">Yes!</tspan></text></g></svg>