---
title: Адаптивное видео с помощью встроенных математических функций CSS

image: //css.yoksel.ru/assets/img/articles/adaptive-video-with-css-math/preview.jpg

tags: [css-math]

desc: Как можно при ресайзе подогнать видео по высоте без дополнительных обёрток и JS?

links:
- href: https://drafts.csswg.org/css-sizing-4/#ratios
  text: 'aspect-ratio'
- href: https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/
  text: Designing An Aspect Ratio Unit For CSS
- href: https://stackoverflow.com/questions/6148012/setting-element-width-based-on-height-via-css
  text: Setting Element Width Based on Height Via CSS
- href: https://stackoverflow.com/questions/1495407/maintain-the-aspect-ratio-of-a-div-with-css
  text: Maintain the aspect ratio of a div with CSS
- href: https://css-tricks.com/fluid-width-video/
  text: Fluid Width Video
- href: https://www.w3.org/TR/css-values-4/#calc-notation
  text: 'Mathematical Expressions: calc(), min(), max(), and clamp()'
- href: https://www.w3.org/TR/css-values-3/#attr-notation
  text: 'Attribute References: attr()'
- href: https://developer.mozilla.org/en-US/docs/Web/CSS/attr
  text: 'attr()'
- href: https://css-tricks.com/when-sass-and-new-css-features-collide/
  text: 'When Sass and New CSS Features Collide'
- href: /size-units/#relative-units
  text: Единицы размеров в CSS
- href: /css-math
  text: Математические функции в CSS
---

Когда я в твиттере спросила для чего могут быть нужны в CSS [типизированные значения атрибутов](https://www.w3.org/TR/css-values-3/#attr-notation), Вадим Макеев [предположил](https://twitter.com/pepelsbey/status/1304036385599508480), что это было бы очень удобно для адаптивных картинок.

Но я подумала, что картинки как-то [умеют](https://codepen.io/yoksel/pen/wvGNrro) при ресайзе изменять высоту, сохраняя пропорции, а вот фреймы — совсем нет. При этом на адаптивных сайтах важно иметь возможность подгонять под ширину окна любой контент, и видео тоже. Что тут можно сделать?<!--more-->

Для решения этой задачи существуют [разные способы](https://css-tricks.com/fluid-width-video/): дополнительная обёртка с паддингом или варианты с JS, но простого изящного решения на чистом CSS до сих пор нет. В черновиках W3C для этих целей есть свойство [aspect-ratio](https://drafts.csswg.org/css-sizing-4/#ratios), подробнее про него можно почитать в статье [Designing An Aspect Ratio Unit For CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/), но на данный момент оно [не поддерживается](https://caniuse.com/mdn-css_properties_aspect-ratio) ни одним браузером ([демо для потестить](https://codepen.io/yoksel/pen/WNwPEoV)).

Пока копалась в [математических функциях](/css-math), пришло в голову, что `aspect-ratio` можно попробовать воспроизвести с помощью этих функций и кастомных свойств. Крис Койер [предлагал](https://css-tricks.com/fluid-width-video/) использовать кастомные свойства и `calc()` для вычисления паддинга в способе с обёрткой:

```html
<div class="videoWrapper" style="--aspect-ratio: 3 / 4;">
  <iframe ...>
```

```css
.videoWrapper {
  ...
  /* falls back to 16/9, but otherwise uses ratio from HTML */
  padding-bottom: calc(var(--aspect-ratio, .5625) * 100%);
}
```

Но что если получать соотношения сторон из ширины и высоты, а потом на основе этого динамически вычислять высоту самого фрейма?

Мне потребовалось некоторое время, чтобы понять как написать работающий код. Одной из проблем было то, что, если поделить друг на друга значения с одинаковыми единицами измерения, `calc()` возвращает `0`, а не соотношение. Следовательно, чтобы получить соотношение сторон, нужно использовать именно числа без единиц измерения.

После этого всё стало просто: в атрибутах элемента, который нужно ресайзить, в кастомных свойствах указываются размеры элемента без единиц измерения:

```html
<iframe
    width="560" height="315"
    style="--width: 560; --height: 315;"
    class="video"
    ...
></iframe>
```

А в CSS добавляется немного математики с использованием этих свойств:

```css
.video {
  /* Находим соотношение сторон */
  --index: calc(var(--height) / var(--width));
  /* Добавляем пиксели к высоте */
  --height-with-units: calc(var(--height) * 1px);

  /* Запрещаем фрейму растягиваться шире родителя */
  max-width: 100%;

  /* Выбираем минимальное значение из исходной высоты
    и вычисленной на основе ширины вьюпорта  */
  height: min(calc(100vw * var(--index)), var(--height-with-units));
}
```

<div class="resizable resizable--x"><p class="codepen" data-height="550" data-theme-id="dark" data-default-tab="result" data-user="yoksel" data-slug-hash="oNxmgYq" style="height: 550px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Adaptive video with custom properties &amp;amp; without padding">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/oNxmgYq">
  Adaptive video with custom properties &amp; without padding</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script></div>

Посжимайте демо, чтобы увидеть как это работает, или откройте в [отдельной вкладке](https://codepen.io/yoksel/pen/oNxmgYq?editors=0100) и попробуйте там.

Когда фрейм упрётся в края окна и начнёт сужаться вместе с ним, ширина фрейма будет равна ширине вьюпорта (`100vw`), следовательно, её можно использовать для вычисления высоты. Полученная таким образом высота окажется меньше исходной, и в `min()` выберется именно она. При растягивании окна высота, вычисленная на основе ширины вьюпорта, станет больше исходной высоты фрейма, поэтому в `min()` выиграет исходная высота, и фрейм не будет тянуться за пределы исходной высоты.

Возможно, не для всех случаев ширина фрейма будет равна ширине окна, и в некоторых случаях может потребоваться поменять `100vw` на другое значение. Например, в демо ширина видео будет `calc(100vw - 2rem)`, но в рассчётах это не учтено, а поправлять я не стала, чтобы не усложнять понимание логики в `min()`.

Также следует помнить, что при использовании препроцессоров они попытаются вычислить `min()` внутри себя, но не смогут этого сделать из-за несовместимых единиц. Почитать о проблеме можно в статье Аны Тюдор [When Sass and New CSS Features Collide](https://css-tricks.com/when-sass-and-new-css-features-collide/). Чтобы SCSS проигнорировал `min()`, название функции достаточно написать с заглавной буквы: `Min(...)` (как сделано в коде демо), а в Less — обернуть кавычками: `~"min(...)"`.

Было бы здорово не дублировать размеры в кастомных свойствах, а брать из атрибутов, но в данный момент это не поддерживается [ни одним браузером](https://caniuse.com/mdn-css_types_attr_type-or-unit), хотя в том же [aspect-ratio](https://drafts.csswg.org/css-sizing-4/#ratios) предполагается использовать именно значения размеров из атрибутов ширины и высоты.

Однажды наступит светлое завтра, и у нас появятся `aspect-ratio` и умная функция `attr()`. Но уже сейчас можно рассчитывать соотношения сторон фреймов и видеороликов, используя кастомные свойства и встроенные в CSS математических функции, они работают в [большинстве современных браузеров](https://caniuse.com/css-math-functions). Для поддержки старых браузеров всё-таки придётся воспользоваться способом с паддингом или JS.
