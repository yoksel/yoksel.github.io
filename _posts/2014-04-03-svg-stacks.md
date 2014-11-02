---
layout: default
title: "SVG-стеки"
type: post
image: "http://img-fotki.yandex.ru/get/9809/5091629.9d/0_80720_8dc116f0_L.png"
desc: "Стеки — это ещё один способ организации SVG. Как спрайт, только лучше — как если бы мы могли использовать use в CSS. К сожалению, способ очень неравномерно поддерживается современными браузерами."
links:
- url: "http://simurai.com/blog/2012/04/02/svg-stacks/"
  name: SVG Stacks
- url: "https://github.com/preciousforever/SVG-Stacker"
  name: "SVG-Stacker"
published: true
---

Стеки — это ещё один способ организации SVG. Как спрайт, только лучше — как если бы мы могли использовать <code>use</code> в CSS.

К сожалению, способ очень неравномерно поддерживается современными браузерами. <!--more-->

Метод был предложен тут: <a href="http://simurai.com/blog/2012/04/02/svg-stacks/">simurai.com/blog/2012/04/02/svg-stacks/</a> 2 года назад. Ниже, собственно, мой вольный пересказ: объяснение принципа и демо для тестов.

В чем состоит способ?

Допустим, у нас есть SVG-спрайт. Чтобы показать нужный кусочек картинки мы двигаем его с помощью <code>background-position</code>. Чем больше спрайт, тем утомительней задавать для каждой картинки свое положение фона. Конечно, можно автоматизировать процесс, но что если бы можно было просто внутри файла сложить картинки стопкой, скрыть их все и показывать нужную картинку, обратившись к ней по ID?

Например, есть два квадратика, один поверх другого, зеленый сверху:

<svg width="200" height="200" viewbox="0 0 200 200"><g id="svg-no"><rect fill="#FF4646" width="200" height="200" rx="8"/><text id="No." font-family="Palatino" font-size="90" fill="#fff"><tspan x="28" y="130">No.</tspan></text></g><g id="svg-yes"><rect fill="#a2d529" width="200" height="200" rx="8"/><text id="Yes!" font-family="Palatino" font-size="90" fill="#fff"><tspan x="18" y="130">Yes!</tspan></text></g></svg>

Примерный код:

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

<svg width="200" height="200" viewbox="0 0 200 200"><style>.hidden { display: none; } :target { display: block; }</style><g><rect fill="#FF4646" width="200" height="200" rx="8"/><text id="No." font-family="Palatino" font-size="90" fill="#fff"><tspan x="28" y="130">No.</tspan></text></g><g class="hidden"><rect fill="#a2d529" width="200" height="200" rx="8"/><text id="Yes!" font-family="Palatino" font-size="90" fill="#fff"><tspan x="18" y="130">Yes!</tspan></text></g></svg>

А теперь воспользуемся селектором <code>:target</code>, чтобы показать только нужный:

<pre><code class="language-css">:target { display: block; }</code></pre>

Добавим в адрес страницы ID элемента (<code>#yes</code>) <a href="#yes">Клик!</a> и мы видим зеленый квадратик:

<svg width="200" height="200" viewbox="0 0 200 200"><style>.hidden { display: none; } :target { display: block; }</style><g id="no"><rect fill="#FF4646" width="200" height="200" rx="8"/><text id="No." font-family="Palatino" font-size="90" fill="#fff"><tspan x="28" y="130">No.</tspan></text></g><g id="yes" class="hidden"><rect fill="#a2d529" width="200" height="200" rx="8"/><text id="Yes!" font-family="Palatino" font-size="90" fill="#fff"><tspan x="18" y="130">Yes!</tspan></text></g></svg>

Аналогично можно поиграться запрашивая файл по прямой ссылке: <a href="http://yoksel.github.io/assets/img/svg/yes-no.svg">без ID</a> и <a href="http://yoksel.github.io/assets/img/svg/yes-no.svg#yes">с ID</a>

Отлично работает!

А что если попробовать разные способы вставки, например <code>embed</code>, <code>img</code> или <code>background-image</code>?

Я сделала демо c разными способами, чтобы это проверить: <a href="http://codepen.io/yoksel/full/KDpqu/">http://codepen.io/yoksel/full/KDpqu/</a>.

И вот тут обнаруживается интересное:

- вставка через <code>embed</code> и <code>iframe</code> работает во всех браузерах;
- вставка через <code>img</code> и <code>background-image</code> — в IE9+, Firefox и старой Опере (только <code>img</code>), и совсем не работает в вебкитах.

Отсутствие поддержки ID для <code>background-image</code> в вебкитах означает, что стеками пользоваться пока нельзя.

Мне очень нравится идея и изящество SVG-стеков, и я надеюсь, что однажды мы сможем использовать их во всех браузерах без ограничений.
