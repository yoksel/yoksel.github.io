---
layout: default
title: Весёлая консолька
type: post

tags: [js, tools]

image: https://img-fotki.yandex.ru/get/64326/5091629.a4/0_8db28_39e1a15b_orig
desc: Недавно мне пришлось отлаживать капризный скрипт, в котором явно происходило что-то паранормальное. Чтобы найти проблему, понадобилось вывести в консоль браузера большое количество отладочной информации. Содержимое консоли превратилось в бесконечную колбасу однообразного текста, и с этим надо было что-то делать.

links:
- url: https://developers.google.com/web/tools/chrome-devtools/debug/console/console-reference
  name: Console API Reference
- url: https://developer.mozilla.org/en-US/docs/Web/API/Console
  name: developer.mozilla.org/en-US/docs/Web/API/Console
---

Недавно мне пришлось отлаживать очень капризный скрипт, в котором, по ощущениям, происходили какие-то паранормальные явления. Чтобы найти проблему, понадобилось вывести в консоль браузера большое количество отладочной информации. <!--more-->С одной стороны, так стало удобнее искать ошибку, с другой — содержимое консоли превратилось в бесконечную колбасу однообразного текста, и с этим надо было что-то делать.

Должна сказать, что я довольно редко пишу Javascript, поэтому заинтересовавшись возможностями консоли узнала много нового.

Чтобы просто вывести что-то в консоль, используется <code>console.log()</code>:

{% highlight javascript %}
console.log ( 'Что-нибудь' );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig1.png" alt="Что-нибудь">

Таким образом можно выводить любые типы данных — строки, числа, массивы, объекты:

{% highlight javascript %}

var str = 'Главный вопрос жизни вселенной и всего такого';

var num = 42;

var fruitsList = [ 'apple', 'pear', 'banana' ];

var fruitsObj = {
    'apple': {
        color: 'red',
        seeds: true
    },
    'pear': {
        color: 'green',
        seeds: true
    },
    'banana': {
        color: 'yellow',
        seeds: false
    }
};

console.log ( str );
console.log ( num );
console.log ( fruitsList );
console.log ( fruitsObj );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig2.png" alt="Вывод разных типов данных">

Код подсвечен, вложенные элементы объектов свёрнуты.

Как этот вывод можно улучшить? Мы видим в консоли содержимое переменных, но не видим их названий. Самый очевидный способ — добавить название перед выводимыми данными:

{% highlight javascript %}
console.log ( 'Строка: ' + str );
console.log ( 'Число: ' + num );
console.log ( 'Массив: ' + fruitsList );
console.log ( 'Объект: ' + fruitsObj );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig3.png" alt="Добавляем названия">

При этом все значения переменных приведутся к строке. Для строк и чисел это не проблема, массив потеряет подсветку, хотя и останется читабельным, а вот объект превратится в строку [object Object], и содержимое объекта теперь нельзя ни прочитать, ни развернуть.

Так себе вариант, есть способ получше: можно передавать в <code>console.log()</code> список переменных, разделённых запятой, и в этом случае они будут выведены корректно:

{% highlight javascript %}
console.log ( 'Строка:', str );
console.log ( 'Число:', num );
console.log ( 'Массив:', fruitsList );
console.log ( 'Объект:', fruitsObj );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig4.png" alt="А теперь правильно">

И так тоже можно:

{% highlight javascript %}
console.log ( 'Всё сразу:', str, num, fruitsList, fruitsObj );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig5.png" alt="Всё сразу">

Передаваемые переменные можно выводить не только одну за другой, но и в более управляемом виде:

{% highlight javascript %}
console.log ( 'Сначала строчка: "%s", потом число: %i', str, num );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig6.png" alt="Изменяем вывод">

Переменные точно также передаются в функцию списком, а для их вставки в конкретное место строки используются указатели, которые заодно отвечают и за формат вывода:

<code>%s</code> — в виде строки;
<code>%d</code> или <code>%i</code> — в виде числа;
<code>%f</code> — в виде числа с плавающей точкой;
<code>%o</code> — в виде разворачиваемого DOM-элемента;
<code>%O</code> — в виде разворачиваемого JavaScript-объекта;
<code>%c</code> — оформляет вывод с соответствии с CSS, переданным дополнительным параметром.

Переменные перед выводом в консоль приводятся к заданному формату. При этом важно правильно выбрать подходящий указатель, потому что иначе результат может получиться некорректным или просто нечитабельным:

{% highlight javascript %}
var str = 'Главный вопрос жизни вселенной и всего такого';
var float = 12.34;
var fruitsList = [ 'apple', 'pear', 'banana' ];

console.log ( 'str: %i: ', str );
console.log ( 'float: %i', float );
console.log ( 'fruitsList: %O:', fruitsList );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig7.png" alt="Неверные форматы">

Строка не смогла привестись к числу, и получилось <code>NaN</code>, число с плавающей точкой потеряло свою десятичную часть, а массив вывелся в виде разворачиваемого объекта, и теперь придется кликнуть, чтобы увидеть его содержимое.

Форматы <code>%o</code> и <code>%O</code> особенно полезны для вывода элементов страницы:

{% highlight javascript %}
var h1Elem = document.querySelector('h1');

console.log ( '%o', h1Elem );
console.log ( '%O', h1Elem );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig8.png" alt="Разный вывод DOM-элементов">

В первом случае выведется код элемента, во втором — Javascript-объект. При этом если нет необходимости выводить вспомогательный текст, аналогичный результат можно получить воспользовавшись просто <code>console.log()</code> и <code>console.dir()</code>:

{% highlight javascript %}
console.log ( h1Elem ); // код элемента
console.dir ( h1Elem ); // Javascript-объект
{% endhighlight %}

Результат работы этого кода будет таким же, как на скрине выше.

Из всех указателей мне больше всего полюбился последний: <code>%c</code> — стилизующий текст, потому что именно он помог мне привести однообразную колбасу в консоли в более-менее читабельный вид.

Для того, чтобы задать оформление тексту, CSS-код нужно передать отдельным параметром, причем первым параметром в этом случае должна быть строка с указателями, вторым — строка с CSS, третьим — данные, которые нужно вывести.

Пример:

{% highlight javascript %}
var str = 'Главный вопрос жизни вселенной и всего такого';

console.log ( '%c%s', 'color: green; font: 1.2rem/1 Tahoma;', str );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig9.png" alt="Зеленый текст">

Ещё удобнее будет вынести стили в отдельную переменную, тогда их можно будет использовать повторно:

{% highlight javascript %}
var str = 'Главный вопрос жизни вселенной и всего такого';
var style = ['padding: 1rem;',
             'background: linear-gradient( gold, orangered);',
             'text-shadow: 0 2px orangered;',
             'font: 1.3rem/3 Georgia;',
             'color: white;'].join('');

console.log ( '%c%s', style, str );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig10.png" alt="Оранжевый градиент">

Так можно управлять отступами, фоном и оформлением текста. Какие-то штуки работать не будут, например, <code>box-shadow</code>, но и того, что есть, вполне достаточно, чтобы добавить в консоль немного красоты:

<img src="/assets/img/articles/funny-console/rainbow.png" alt="Радуга">
(<a href="http://stackoverflow.com/questions/7505623/colors-in-javascript-console/21457293#21457293" target="_blank">Отсюда</a>)

Для своих целей я заготовила несколько стилей:

 {% highlight javascript %}
 var consoleStyles = {
    'h1': 'font: 2.5em/1 Arial; color: crimson;',
    'h2': 'font: 2em/1 Arial; color: orangered;',
    'h3': 'font: 1.5em/1 Arial; color: olivedrab;',
    'bold': 'font: bold 1.3em/1 Arial; color: midnightblue;',
    'warn': 'padding: 0 .5rem; background: crimson; font: 1.6em/1 Arial; color: white;'
};
{% endhighlight %}

и функцию, которая избавила меня от необходимости формировать руками набор параметров и форматирование строки:

{% highlight javascript %}
function log ( msg, style ) {
    if ( !style || !consoleStyles[ style ] ) {
        style = 'bold';
    }
    console.log ( '%c' + msg, consoleStyles[ style ] );
}
{% endhighlight %}

Пример использования:

{% highlight javascript %}
log ( 'Заголовок 1', 'h1' );
log ( 'Заголовок 2', 'h2' );
log ( 'Заголовок 3', 'h3' );
log ( 'Жирный текст', 'bold' );
log ( 'Ошибка', 'warn' );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig11.png" alt="Заголовки">

Таким образом из вот такой колбасы скучного текста

<img src="/assets/img/articles/funny-console/fig12.png" alt="Некрашеная консоль">

можно получить вот такое:

<img src="/assets/img/articles/funny-console/fig13.png" alt="Разноцветная консоль">

По-моему, так гораздо лучше, особенно если отладочной информации много и в ней легко потеряться.

Чтобы использовать в одной строке несколько стилей, надо каждый из них указать отдельным параметром, а затем с помощью <code>%c</code> задавать в тексте начало нового стиля:

{% highlight javascript %}
var styles = [
'background: red',
'background: orange',
'background: gold',
'background: yellowgreen',
'background: skyblue',
'background: steelblue',
'background: darkviolet'
];
console.log ( '%c R %c A %c I %c N %c B %c O %c W ',
    styles[0], styles[1], styles[2], styles[3],
    styles[4], styles[5], styles[6] );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig21.png" alt="Rainbow">

Чтобы покрасить только часть строки, один из стилей можно задать пустым:

{% highlight javascript %}
console.log ( '%c text1 %c text2', 'color: crimson;', '' );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig22.png" alt="Двухцветный текст">

Если не хочется заморачиваться с раскрашиванием, для вывода большого количества данных можно воспользоваться <code>console.table()</code>:

<img src="/assets/img/articles/funny-console/fig14.png" alt="Таблицы">

Может, таблица выглядит не очень читабельно, но всё же это лучше списка свёрнутых объектов, к тому же она позволяет окинуть взглядом сразу весь массив.

Также можно выделять из общего потока отдельные строчки, используя <code>console.info()</code> и <code>console.warn()</code>:

{% highlight javascript %}
console.info ( 'your text' );
console.warn ( 'your text' );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig15.png" alt="warn & info">

Они работают как обычный <code>console.log()</code>, только добавляют иконки в начало строки (а <code>console.warn()</code> ещё и фон).

Ещё можно выводить сообщения об ошибке и дополнительную отладочную информацию. Например, с помощью <code>console.error()</code>:

{% highlight javascript %}
console.error ( 'Houston, we have a problem' );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig16.png" alt="console.error()">

<code>console.error()</code> ничего не проверяет, она просто выводит сообщение, оформленное определённым образом. Чтобы сообщение выводилось только при соблюдении заданных условий, можно использовать <code>console.assert()</code>:

{% highlight javascript %}
var fruitsObj = {
    'apple': {
        color: 'red',
        seeds: true
    }
};
var expression = fruitsObj.apple.color === 'blue';

console.assert ( expression, 'There is no blue apple' );
{% endhighlight %}

Сообщение будет выведено только если <code>expression</code> будет равно <code>false</code>:

<img src="/assets/img/articles/funny-console/fig17.png" alt="console.assert()">

Чтобы просто вывести в консоль сообщение с отладочной информацией, можно использовать <code>console.trace()</code>:

{% highlight javascript %}
console.trace ( 'Hello' );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig18.png" alt="console.trace()">

Для визуальной группировки сообщений можно использовать <code>console.group()</code> и <code>console.groupEnd()</code>, обозначающие начало и конец группы соответственно:

{% highlight javascript %}
console.group ( 'Animals' );
console.log ( 'cat' );
console.log ( 'dog' );
console.groupEnd ();
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig19.png" alt="console.group()">

Чтобы группа была по умолчанию свёрнута, вместо <code>console.group()</code> используется <code>console.groupCollapsed()</code>.

А ещё можно подсчитывать вызовы функций с помощью <code>console.count()</code>:

{% highlight javascript %}
function myFunc() {
    console.count ( 'myFunc() called' );
}

for (var i = 0; i < 3; i++) {
    myFunc ();
}
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig20.png" alt="console.count()">

В консоли можно делать и другие интересные вещи, вроде измерения времени выполнения кода. Также умные ребята для отладки используют <code>debugger</code> и точки остановки (breakpoints), но это уже совсем другая история.
