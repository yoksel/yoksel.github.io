---
title: Сколько весят селекторы?

tags: [selectors]

customCSS: 'specifity.css'

image: //img-fotki.yandex.ru/get/9797/5091629.9a/0_7ec6f_cda36757_M.png
desc: Все CSS-селекторы имеют свой вес, который определяет как взаимодействуют одинаковые свойства, заданные в разных местах кода одному и тому же элементу.

links:
- url: http://css-tricks.com/specifics-on-css-specificity/
  name: Specifics on CSS Specificity
- url: http://coding.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/
  name: 'CSS Specificity: Things You Should Know'
- url: http://cssspecificity.com/
  name: Специфичность в комиксах
- url: http://www.stuffandnonsense.co.uk/archives/css_specificity_wars.html
  name: Специфичность на примере "Звёздных войн"
---

Все CSS-селекторы имеют свой вес, который определяет как взаимодействуют одинаковые свойства, заданные в разных местах кода одному и тому же элементу.<!--more-->

Иногда это может создавать трудности, когда свойство, объявленное ниже в коде, перекрывается тем, что объявленно выше, потому что селектор первого более специфичен (имеет больший вес).

Вот пример проблемы. Есть див с <code>id="container"</code>, внутри него некоторый текст и список ссылок.

```markup
<div id="container">
  <p><a href="#">link in P</a></p>

  <ul class="list">
    <li><a href="#">Link1</a></li>
    <li><a href="#">Link2</a></li>
  </ul>
</div>
```

Сначала задаём всем ссылкам внутри <code>#container</code> оранжевый фон:

```css
#container A {
  background: orange;
}
```

А потом, чтобы в списке <code>.list</code> внутри контейнера ссылки имели зелёный фон, ниже дописываем такое:

```css
.list A {
  background: mediumspringgreen;
}
```

Казалось бы, ссылки в тексте должны получить оранжевый фон, а ссылки в списке — зеленый, но нет:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/specifity/demo_1.html?output"></iframe>

Почему так? Потому, что первый селектор содержит ID и перевешивает второй, то есть:

<code>#container A</code> <b>&gt;</b> <code>.list A</code>

<h2 id="specifity">Вес селектора</h2>

Специфичность селектора рассчитывается по 4-м позициям:

<iframe class="live-snippet" style="height: 220px" src="../assets/demo/specifity/demo_2.html?output"></iframe>

Для каждого из них подсчитывается количество подходящих элементов в селекторе, и это число помещается в соответствующую позицию.

<b>Пример:</b>

<iframe class="live-snippet" style="height: 500px" src="../assets/demo/specifity/demo_3.html?output"></iframe>

<b>Вес селекторов</b> (по убыванию):

<span class="wrapper-with-dottes"><code>style=""</code></span><code class="specifity"><b>1</b>,0,0,0</code>

<span class="wrapper-with-dottes"><code>#id</code></span><code class="specifity">0,<b>1</b>,0,0</code>

<span class="wrapper-with-dottes"><code>.class</code></span><code class="specifity">0,0,<b>1</b>,0</code>

<span class="wrapper-with-dottes"><code>[attr=value]</code></span><code class="specifity">0,0,<b>1</b>,0</code>

<span class="wrapper-with-dottes"><code>LI</code></span><code class="specifity">0,0,0,<b>1</b></code>

<span class="wrapper-with-dottes"><code>\*</code></span><code class="specifity">0,0,0,0</code>

У стилей, заданных в атрибуте <code>style</code>, на первой позиции будет единица — <code class="specifity"><b>1</b>,0,0,0</code>. Это самая высокая специфичность, которая перевешивает свойства, заданные другими способами.

Переопределить стили, заданные в <code>style</code>, можно дописав <code>!important</code> к значению свойства в таблице стилей.

Обратный вариант — универсальный селектор <code>\*</code>, он не имеет веса: <code class="specifity">0,0,0,0</code>.

<b>Примеры:</b>

<span class="wrapper-with-dottes"><code>LI</code></span><code class="specifity">0,0,0,<b>1</b></code> — селектор по тегу

<span class="wrapper-with-dottes"><code>UL LI</code></span><code class="specifity">0,0,0,<b>2</b></code> — селектор c двумя тегами весит больше, чем с одним.

<span class="wrapper-with-dottes"><code>.orange</code></span><code class="specifity">0,0,<b>1</b>,0</code> — селектор с классом весит больше, чем селектор с тегом.

<span class="wrapper-with-dottes"><code>.orange A SPAN</code></span><code class="specifity">0,0,<b>1</b>,<b>2</b></code> — селектор перевесит предыдущий, потому что помимо класса содержит два тега.

<span class="wrapper-with-dottes"><code>#page .orange</code></span><code class="specifity">0,<b>1</b>,<b>1</b>,0</code> — селектор с ID перевесит всё, кроме inline-стилей.

Теперь сравним селекторы из исходного примера:

<span class="wrapper-with-dottes"><code>#container A</code></span><code class="specifity">0,<b>1</b>,0,<b>1</b></code>

<span class="wrapper-with-dottes"><code>.list A</code></span><code class="specifity">0,0,<b>1</b>,<b>1</b></code>

<code class="specifity">0,<b>1</b>,0,<b>1</b></code> <b>&gt;</b> <code class="specifity">0,0,<b>1</b>,<b>1</b></code>  — хорошо видно, что селектор с ID весит больше, чем селектор с классом, поэтому все ссылки имеют оранжевый фон, хотя ниже в коде им задан зеленый.

<h2 id="solutions">Варианты решений</h2>

<b>1.</b> Добавить <code>!important</code>

```css
#container A {
  background: orange;
}

.list A {
  background: mediumspringgreen !important;
}
```

Ссылки получат зеленый фон, быстро и легко.
Но это плохой способ, потому что код запутывается ещё больше.
Со временем для переопределения <code>!important</code> в одном месте может потребоваться добавить его в других местах. Иерархичность начнет работать не сверху низ и от общего к частному, а как попало. В конце-концов поддерживать такой код будет весьма проблематично.

В общих случаях использовать <code>!important</code> не рекомендуется, но может пригодиться, если нужно, чтобы часто используемый блок на всех страницах выглядел одинаково, независимо от окружения.
В любом случае нужно всегда четко понимать зачем вы его используете.

<b>2.</b> Следующий очевидный способ — добавить <code>#container</code> ко второму селектору, чтобы увеличить его вес:

```css
#container A {
  background: orange;
}

#container .list A {
  background: mediumspringgreen;
}
```

Это тоже сработает, но решение так себе: удлиняется цепочка селекторов (что может отразиться на скорости отрисовки страницы) и ухудшается читаемость кода.
Так тоже делать не стоит.

1-й и 2-й способ могут использоваться, если у вас нет доступа к разметке, а в ней нет нужных классов.
Если же вы можете редактировать разметку либо классы у элементов таки есть — используйте последний способ, самый правильный:

<b>3.</b> Просто не используйте в стилях селекторы с ID, используйте классы.

Посмотрим на разницу между <code>#container</code> и с <code>.container</code>:

<span class="wrapper-with-dottes"><code>#container A</code></span><code class="specifity">0,<b>1</b>,0,<b>1</b></code> — селектор с ID перевешивает всё вне зависимости от своего расположения в коде.

Заменим в разметке страницы <code>id</code> на <code>class</code>:

<span class="wrapper-with-dottes"><code>.container A</code></span><code class="specifity">0,0,<b>1</b>,<b>1</b></code> — селектор с классом весит меньше, он менее специфичен.

Селектор ссылок в списке весит столько же:

<span class="wrapper-with-dottes"><code>.list A</code></span><code class="specifity">0,0,<b>1</b>,<b>1</b></code>

Это означает, что при равном весе селекторов применятся стили, объявленные ниже в коде.
То есть достаточно будет просто написать стили, следуя от общего к частному, сверху вниз.

В итоге разметка может быть такой:

```markup
<div class="container">
  <p><a href="#">link in P</a></p>

  <ul class="list">
    <li><a href="#">Link1</a></li>
    <li><a href="#">Link2</a></li>
  </ul>
</div>

```

А стили — такими:


```css
.container A {
  background: orange;
}

.list A {
  background: mediumspringgreen;
}
```

И код работает так, как ожидается:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/specifity/demo_4.html?output"></iframe>

<i>Если <code>id</code> в вашей разметке уже используется в Js, логичнее будет добавить элементу класс и перевесить стили на него. Если же <code>id</code> участвует только в разметке — лучше заменить его на <code>class</code>.</i>

В качестве общих рекомендаций так же следует упомянуть, что нужно как можно меньше использовать селекторы по тегу и как можно больше — селекторы по классу. Это поможет избежать проблем при повторном использовании блоков сайта, а при использовании "умных" классов — может значительно сократить цепочки селекторов, увеличить читабельность кода и скорость отрисовки страницы.

Спецификации:
* <a href="http://www.w3.org/TR/CSS2/cascade.html#specificity">w3.org/TR/CSS2/cascade.html#specificity</a>
* <a href="http://www.w3.org/TR/css3-selectors/#specificity">w3.org/TR/css3-selectors/#specificity</a>
