---
title: 'Генератор цветовых тем'

image: //css.yoksel.ru/assets/img/articles/color-themes-generator/preview.png

tags: [tools]

desc: Расширяет палитры из CSS/SCSS/Less-переменных. Инструмент может быть полезен для карманных проектов без фиксированного дизайна. Я немного расскажу про историю его появления и покажу как его можно использовать.

links:
- url: https://www.w3.org/TR/css-variables/
  name: CSS Custom Properties for Cascading Variables
- url: https://yoksel.github.io/tema/
  name: Tema
- url: /tsveta
  name: Цвета в CSS
- url: https://yoksel.github.io/handy-colors/
  name: Handy colors
  desc: именованные цвета с палитрами
---

В конце марта я выпустила инструмент для генерации цветовых тем из CSS/SCSS/Less-переменных — [Tema](https://yoksel.github.io/tema/). Он может быть полезен для карманных проектов без фиксированного дизайна, когда цвета подбираются прямо в&nbsp;процессе разработки. Я немного расскажу про историю его появления и&nbsp;покажу как его можно использовать.

Идея генератора возникла когда я начала делать другой свой проект — [Grid Сheatsheet](https://yoksel.github.io/grid-cheatsheet/). У меня уже был очень похожий справочник, [Flex Сheatsheet](https://yoksel.github.io/flex-cheatsheet/), и&nbsp;изначально я собиралась просто поменять данные и&nbsp;легко и&nbsp;непринуждённо получить шпаргалку по гридам, но всё оказалось сложнее: у гридов немного другая структура спецификации, которая не ложилась в&nbsp;существующую структуру справочника, да и&nbsp;JavaScript я теперь знаю немного получше, поэтому движок для справочников в&nbsp;итоге пришлось переписать полностью. Но вернёмся к&nbsp;цветовым темам и&nbsp;посмотрим с чего всё началось.

В день запуска шпаргалки по флексам самым популярным вопросом стало «А что с цветами?» На тот момент страница справочника выглядела вот так:

<img
  src="/assets/img/articles/color-themes-generator/flex-first-theme.png"
  alt="Flex cheat sheet в&nbsp;момент старта"
  loading="lazy"
  width="600"
/>

Я подобрала палитру на свой вкус и&nbsp;мне было отлично, но желающих сделать что-то с цветами оказалось достаточно много, поэтому я по-быстрому прикрутила более нейтральную тему:

<img
  src="/assets/img/articles/color-themes-generator/flex-gray-theme.png"
  alt="Flex cheat sheet с серой темой"
  loading="lazy"
  width="600"
/>

Когда я начала делать справочник по гридам и&nbsp;переписывать движок, в&nbsp;нём менялось примерно всё, и&nbsp;вёрстка, конечно, тоже. Переключение тем хотелось сохранить, но с каждым новым изменением в&nbsp;разметке это становилось всё сложнее, потому что дополнительная тема была сделана путём простого переопределения дефолтных стилей элементов стилями из файла с темой. Если нужно было перекрасить какой-то элемент, его стили дублировались в&nbsp;файле с темой, и&nbsp;цвета менялись на новые.

Для проекта, который один раз сделали и&nbsp;забыли, это не проблема, но в&nbsp;процессе активной разработки поддерживать в&nbsp;актуальном состоянии файл с темой становилось проблематично. Хотелось сохранить цветную тему, но при этом как-то обойтись без дублирования стилей.

Препроцессорные переменные не помогают решить эту задачу, потому что их нельзя использовать в&nbsp;одном месте, а потом переопределить по классу и&nbsp;получить в&nbsp;другом месте CSS-свойство с новым значением:

<p class="codepen" data-height="350" data-theme-id="4974" data-default-tab="css,result" data-user="yoksel" data-slug-hash="VweNYRj" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="VweNYRj">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/VweNYRj">
  VweNYRj</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Чтобы второй квадратик стал жёлтым, придется продублировать всё свойство, где используется переменная.

Но есть [кастомные свойства](https://www.w3.org/TR/css-variables/), которые работают как нужно:

<p class="codepen" data-height="370" data-theme-id="4974" data-default-tab="css,result" data-user="yoksel" data-slug-hash="OJMGVyQ" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Custom property can be overwritten inside class">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/OJMGVyQ">
  Custom property can be overwritten inside class</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Сначала объявляем переменную `--color` и&nbsp;используем её в&nbsp;`background`. Если потом внутри класса с модификатором задать ей другое значение (например, `--color: gold;`), оно поменяется и&nbsp;в&nbsp;объявлении фона, но только для элемента с таким классом, при этом строчку с объявлением фона не нужно дублировать — просто переопределяем переменную и&nbsp;всё волшебным образом работает.

Кастомные свойства не поддерживаются в&nbsp;IE11, но посетителей с IE на интересующих меня ресурсах крайне мало (меньше 1%), так что я подумала, что уже вполне могу использовать CSS-переменные в&nbsp;своих проектах.

Делать темы с ними, конечно, гораздо удобнее. Например, есть такая карточка:

<p class="codepen" data-height="420" data-theme-id="4974" data-default-tab="result" data-user="yoksel" data-slug-hash="LYGvpVQ" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="LYGvpVQ">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/LYGvpVQ">
  LYGvpVQ</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

И вот такой набор цветов для неё:

```css
:root {
  --body-bg: whitesmoke
  --card-bg: #FFF;
  --border: #CCC;
  --shadow: rgba(0,0,0,.1);
  --title: teal;
  --text: #333;
  --link: mediumseagreen;
  --link-hover: turquoise;
}
```

Если потом потребуется добавить такую же карточку но с другими цветами, для этого не придется дублировать всю разметку, достаточно переопределить нужные переменные внутри класса:

```css
:root {
  /* Цвета по умолчанию */
  --body-bg: whitesmoke
  --card-bg: #FFF;
  --border: #CCC;
  --shadow: rgba(0,0,0,.1);
  --title: teal;
  --text: #333;
  --link: mediumseagreen;
  --link-hover: turquoise;
}

.widget--red {
  /* Цвета для красной карточки */
  --card-bg: mistyrose;
  --border: tomato;
  --shadow: rgba(200,0,0,.2);
  --title: orangered;
  --link: tomato;
  --link-hover: crimson;
}
```

<p class="codepen" data-height="420" data-theme-id="4974" data-default-tab="result" data-user="yoksel" data-slug-hash="bGEJeOp" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Custom properties example #2">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/bGEJeOp">
  Custom properties example #2</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Также, в&nbsp;отличие от препроцессорных переменных, кастомные свойства видны в&nbsp;веб-инспекторе:

<img
  src="/assets/img/articles/color-themes-generator/custom-props-in-devtools.png"
  alt="Кастомные свойства в&nbsp;веб-инспекторе"
  loading="lazy"
  width="500"
/>

И их подсказывает браузер:

<img
  src="/assets/img/articles/color-themes-generator/custom-prop-suggestions.png"
  alt="Браузер подсказывает кастомные свойства"
  loading="lazy"
  width="500"
/>

Можно просто листать переменные вверх-вниз и&nbsp;сразу видеть изменения на странице. Это невероятно удобно.

С кастомными свойствами работать с темами стало проще, но чем больше цветов я выносила в&nbsp;переменные, тем сложнее становилось подбирать оттенки.

В изначальной палитре 5 цветов, в&nbsp;оформлении справочника требуется около сорока цветовых переменных, где брать оттенки? Конечно, какие-то цвета можно использовать несколько раз, но всё равно их не хватает.

Ещё часто нужен оттенок чуть светлее, или чуть темнее (например, ссылка немного меняет цвет при наведении), сделать это в паре мест не проблема, но если таких вариаций десяток? С каким шагом будет меняться яркость? Шаг общий для всех или в каждом случае свой? Значит ещё надо как-то унифицировать шаги изменения цвета.

Или вот другая проблема: у справочника нет фиксированного дизайна, значит какие-то оттенки нужно подбирать в&nbsp;процессе вёрстки. Как удобно «ходить» по цветам? Например, взять оттенок, потом попробовать чуть более темную версию или более светлую, но при этом чтобы можно было легко перейти к&nbsp;любой из них?

Где-то в&nbsp;этом месте мне пришла в&nbsp;голову мысль, что хорошо бы палитра с вариациями оттенков светлее/темнее собиралась сама по себе — чтобы сразу были оттенки, по которым можно ходить, без необходимости подбирать их руками.

Для манипуляций с цветом удобно использовать формат HSL (Hue-Saturation-Lightness). Главные преимущества формата — читаемость и&nbsp;возможность поменять значение руками. Конечно, редактировать руками можно цвета, записанные в&nbsp;любом формате, но только в&nbsp;HSL это понятный и&nbsp;управляемый процесс (поэтому это мой любимый формат). Запись цвета в&nbsp;HSL выглядит вот так:

```css
hsl(0, 100%, 35%)
```

Первое значение — позиция на цветовом круге в&nbsp;градусах (от 0 до 360). Второе — насыщенность, третье — яркость. Второе и&nbsp;третье значения задаются в&nbsp;процентах, от 0 до 100%.

Если записать цвет в&nbsp;HSL, а потом менять яркость (третий параметр), из основного цвета можно получить дополнительные оттенки. Например:

<p class="codepen" data-height="450" data-theme-id="4974" data-default-tab="result" data-user="yoksel" data-slug-hash="GRoLmbX" style="height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HSL Variations">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/GRoLmbX">
  HSL Variations</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Из трёх изначальных цветов легко получается ещё шесть. Такую палитру можно просто написать руками.

В обе стороны можно сделать до 50 шагов изменения яркости, но тут встаёт проблема имён: если шагов слишком много, для них будет сложно подобрать вменяемые названия, так что количество шагов ограничивается доступными именами переменных. Я остановилась на такой системе именования:

```css
/* Тёмные оттенки */
--color-darkest: hsl(...);
--color-darker: hsl(...);
--color-dark: hsl(...);
/* Базовый цвет */
--color: hsl(...);
/* Светлые оттенки */
--color-light: hsl(...);
--color-lighter: hsl(...);
--color-lightest: hsl(...);
```

Чуть светлее — `light`, ещё светлее — `lighter`, самый светлый — `lightest`. С тёмными аналогично. Итого семь оттенков для каждого цвета: один базовый и&nbsp;по три шага в&nbsp;каждую сторону.

Чтобы автоматизировать процесс получения такой палитры, я сделала [Tema](https://yoksel.github.io/tema/). В&nbsp;поле ввода вставляются любые переменные с цветами в&nbsp;любом формате, включая именованные, и&nbsp;инструмент отдаёт готовую палитру:

<img
  src="/assets/img/articles/color-themes-generator/tema-io.png"
  alt="Tema, поля ввода и&nbsp;вывода"
  loading="lazy"
  width="700"
/>

Можно настроить шаг изменения яркости, количество шагов, и&nbsp;выбрать формат цветов в&nbsp;готовой палитре:

<img
  src="/assets/img/articles/color-themes-generator/tema-options.png"
  alt="Tema, настройки"
  loading="lazy"
  width="700"
/>

Затем новая палитра копируется в&nbsp;файлы со стилями и&nbsp;можно начинать пользоваться.

Правда, при такой системе именования цвета имеют абстрактные имена и&nbsp;уже не привязаны к&nbsp;месту использования. Это решается дополнительными переменными, которые связывают одно с другим:

```css
:root {
  /* Палитра */
  --color-1-darkest: #f7cd22;
  --color-1-darker: #f9d958;
  --color-1-dark: #fbe58f;
  /* ...  */
  --color-5-light: #988b78;
  --color-5-lighter: #b0a797;
  --color-5-lightest: #c8c2b7;

  /* Привязка цветов к переменным для стилизации интерфейса */
  --body-bg: var(--color-3-lighter);
  --card-bg: var(--color-1-light);
  --border: var(--color-3);
  --shadow: rgba(0,0,0,.1);
  --title: var(--color-4-darker);
  --text: #333;
  --link: var(--color-4-darker);
  --link-hover: var(--color-4);
}
```

<p class="codepen" data-height="420" data-theme-id="4974" data-default-tab="result" data-user="yoksel" data-slug-hash="yLerzJw" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Custom properties example #3">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/yLerzJw">
  Custom properties example #3</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

При таком подходе цвета лежат отдельно от переменных, используемых непосредственно для стилизации, и&nbsp;если во втором блоке поменять какой-либо цвет на другой, переменные с цветами палитры не потеряются и&nbsp;будут доступны для дальнейшего использования.

Также разделение хранения и&nbsp;использования цветов позволяет легко добавлять на сайт новые цветовые темы. Палитры добавляются в&nbsp;стили, в&nbsp;качестве селектора, который будет ограничивать их действие, удобно использовать data-атрибут (ему потом будет проще перезаписать значение через JS):

```css
[data-theme="red"] {
  --color-1-darkest: hsl(48, 93%, 61%);
  /* ... */
}

[data-theme="blue"] {
  --color-1-darkest: hsl(48, 93%, 61%);
  /* ... */
}
```

Затем атрибут `data-theme` добавляется на элемент `<html>` и&nbsp;его значения меняются по клику на переключатель темы:

<p class="codepen" data-height="420" data-theme-id="4974" data-default-tab="result" data-user="yoksel" data-slug-hash="QWyPqMz" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Custom properties example #4">
  <span>See the Pen <a href="https://codepen.io/yoksel/pen/QWyPqMz">
  Custom properties example #4</a> by yoksel (<a href="https://codepen.io/yoksel">@yoksel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

При изменении атрибута CSS-переменные, заданные для него в&nbsp;стилях, перезаписывают значения исходных переменных, и&nbsp;страница перекрашивается. Никакого дублирования стилей или перекрашивания переменных вручную — один набор переменных просто переопределяет другой. Работает как волшебство.

Если в&nbsp;какой-то из тем один из оттенков оказался не совсем подходящим, ниже под палитрой темы можно переопределить значение переменной для стилизации:

```css
[data-theme="red"] {
  --color-1-darkest: hsl(48, 93%, 61%);
  /* ... */

  --border: var(--color-3-light);
}
```

Например, в&nbsp;красной теме третий цвет (`--color-3`), используемый для рамки, оказался чуть темнее, чем хотелось бы, поэтому внутри темы я&nbsp;задала для `--border` более светлый оттенок (`--color-3-light`).

Именно этот подход позволил мне не только сохранить и&nbsp;поддерживать дополнительную тему, но&nbsp;и&nbsp;добавить 4&nbsp;новых. Я обычно использую эту:

<img
  src="/assets/img/articles/color-themes-generator/flex-sunny-theme.png"
  alt="Tema, настройки"
  loading="lazy"
  width="700"
/>

Но есть и&nbsp;более спокойные варианты : )

Генератор цветовых тем решает довольно узкую задачу, и&nbsp;вполне возможно, что он вам никогда и&nbsp;не потребуется, но если вы, как и&nbsp;я, не рисуете отдельный дизайн для своих карманных проектов, инструмент может упростить разработку и&nbsp;расширить возможности оформления.

При создании тем с помощью генератора нужно иметь в&nbsp;виду пару нюансов:

1. Количество цветов в&nbsp;наборах должно совпадать. Например, если где-то используется `var(--color-1-lightest)`, самый светлый оттенок самого светлого цвета, он должен быть во всех наборах цветов. Но при генерации палитры рассчитанное значение яркости может выйти за границы разумного, и&nbsp;тогда этих цветов в&nbsp;наборе не будет: <img
  src="/assets/img/articles/color-themes-generator/tema-broken-colors.png"
  alt="Tema, битые цвета"
  loading="lazy"
/> Нужно помнить, что так бывает, и&nbsp;обязательно проверять все ли цвета на месте.

2. Чтобы палитры были взаимозаменяемыми, порядок цветов в&nbsp;них должен совпадать. Например, во всех идти от самого светлого цвета к&nbsp;самому тёмному. Тогда для добавления новой темы будет достаточно положить новый набор переменных в&nbsp;CSS.
