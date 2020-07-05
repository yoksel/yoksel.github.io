---
title: Контекст наложения
tags: [layout]

desc: Если с помощью z-index изменять порядок наложения элементов друг на друга, в некоторых случаях могут возникать проблемы из-за свойств, создающих новый контекст наложения.
---
Если с помощью <code>z-index</code> изменять порядок наложения элементов друг на друга, в некоторых случаях могут возникать проблемы из-за свойств, создающих новый контекст наложения.<!--more-->

Свойства, создающие контекст{{ excerpt_separator }}:
— <code>opacity</code> со значением меньше 1,
— <code>transform</code>,
— <code>perspective</code>,
— <code>filter</code>.

В качестве подопытного кролика возьмем такую конструкцию:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/kontekst-nalozheniya/demo_1.html?output"></iframe>

По умолчанию голубой элемент накладывается на красный, но я задала красному элементу <code>z-index: 10;</code>, чтобы видеть действие свойств, создающих контекст.

Теперь зададим родителю первого элемента одно из вышеперечисленных свойств, например:  <code>opacity: .99</code>:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/kontekst-nalozheniya/demo_2.html?output"></iframe>

Первый элемент получил свой контекст наложения, и теперь <code>z-index</code> будет рассчитываться внутри него.

Здесь видно, что красный элемент перекрывает зеленый, потому что у красного задан высокий <code>z-index</code>, при этом весь левый элемент перекрывается правым, несмотря на высокое значение <code>z-index</code> у красного элемента:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/kontekst-nalozheniya/demo_3.html?output"></iframe>

Можно попробовать это обойти, добавив <code>z-index</code> самому родителю, но в этом случае родительский элемент будет перекрывать всё содержимое второго элемента, что не всегда может быть нужно:

<iframe class="live-snippet" style="height: 300px" src="../assets/demo/kontekst-nalozheniya/demo_4.html?output"></iframe>

Кроме того, частое использование <code>z-index</code> может затруднить дальнейшую отладку и поддержку кода.
