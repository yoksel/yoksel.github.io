---
layout: default
title: Весёлая консолька
type: post
image:
desc:

links:
- url: https://developer.chrome.com/devtools/docs/console-api
  name: developer.chrome.com/devtools/docs/console-api
- url: https://developer.mozilla.org/en-US/docs/Web/API/Console
  name: developer.mozilla.org/en-US/docs/Web/API/Console
---

Недавно мне пришлось отлаживать очень капризный скрипт, в котором, по ощущениям, происходили какие-то паранормальные явления. Чтобы найти проблему, мне понадобилось вывести в консоль браузера большое количество отладочной информации. <!-- more -->С одной стороны, так стало удобнее, с другой — содержимое консоли превратилось в бесконечную колбасу однообразного текста, и с этим надо было что-то делать.

Должна сказать, что я довольно редко пишу Javascript, поэтому заинтересовавшись возможностями консоли узнала для себя много нового.

Чтобы просто вывести что-то в консоль, мы используем <code>console.log()</code>:

{% highlight javascript %}
console.log ( 'Что-нибудь' );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig1.png" alt="Что-нибудь">

Таким образом можно выводить любые данные — строки, числа, массивы, объекты:

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

При этом все значения переменных станут строками. Для строки и числа это вполне подходит, массив потеряет подсветку, хотя и останется читабельным, а вот объект превратится в строку [object Object], и содержимое объекта теперь нельзя ни прочитать, ни развернуть.

Так себе вариант, есть способ получше: вы можете передавать в <code>console.log()</code> список переменных, разделённых запятой, и в этом случае они будут выведены корректно:

{% highlight javascript %}
console.log ( 'Строка:', str );
console.log ( 'Число:', num );
console.log ( 'Массив:', fruitsList );
console.log ( 'Объект:', fruitsObj );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig4.png" alt="А теперь правильно">

И даже так можно:

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
<code>%c</code> — оформить с соответствии с CSS, переданным дополнительным параметром.

Переменные перед выводом приводятся к заданному формату. При этом важно правильно выбрать подходящий формат, потому что иначе результат может получиться некорректным или просто нечитабельным:

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

Форматы <code>%o</code> и <code>%O</code> особенно полезны для вывода DOM-элементов:

{% highlight javascript %}
var h1Elem = document.querySelector('h1');

console.log ( '%o', h1Elem );
console.log ( '%O', h1Elem );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig8.png" alt="Разный вывод DOM-элементов">

В первом случае выведется именно DOM-элемент, во втором - он же, но в виде Javascript-объекта. При этом если нет необходимости в дополнительном тексте, аналогичный результат можно получить воспользовавшись просто <code>console.log ()</code> и <code>console.dir ()</code>: первое выведет код элемента, второе — Javascript-объект.

{% highlight javascript %}
console.log ( h1Elem ); // == console.log ( '%o', h1Elem )
console.dir ( h1Elem ); // == console.log ( '%O', h1Elem )
{% endhighlight %}

Результат работы этого кода будет таким же, как на скрине выше.

Из всех указателей мне больше всего полюбился последний: <code>%c</code> — стилизующий текст, потому что именно он помог мне привести однообразную колбасу в консоли в более-менее читабельный вид.

Для того, чтобы задать оформление тексту, CSS-код нужно передать отдельным параметром, причем первым в этом случае должна быть строка с указателями, вторым — строка с CSS и третьим параметром данные, которые нужно вывести.

Пример:

{% highlight javascript %}
var str = 'Главный вопрос жизни вселенной и всего такого';

console.log ( '%c%s', 'color: green; font: 1.2rem/1 Tahoma;', str );
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig9.png" alt="Зеленый текст">

Ещё удобнее будет, если вынести стили в отдельную переменную, тогда их можно сделать подлинее:

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

Так можно управлять отступами, фоном и оформлением текста. Какие-то штуки работать не будут, например, <code>box-shadow</code>, но и того, что есть, вполне достаточно, чтобы добавить в консоль немножко безумия:

<img src="/assets/img/articles/funny-console/rainbow.png" alt="Радуга">
(<a href="http://stackoverflow.com/questions/7505623/colors-in-javascript-console/21457293#21457293" target="_blank">Отсюда</a>)

Для своих целей я заготовила несколько заголовков разного уровня:

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
    console.log( '%c' + msg, consoleStyles[ style ] );
}
{% endhighlight %}

Пример использования:

{% highlight javascript %}
log('Заголовок 1', 'h1');
log('Заголовок 2', 'h2');
log('Заголовок 3', 'h3');
log('Жирный текст', 'bold');
log('Ошибка', 'warn');
{% endhighlight %}

<img src="/assets/img/articles/funny-console/fig11.png" alt="Заголовки">

Таким образом из вот такой колбасы безликого текста

<img src="/assets/img/articles/funny-console/fig12.png" alt="Некрашеная консоль">

можно получить вот такое:

<img src="/assets/img/articles/funny-console/fig13.png" alt="Разноцветная консоль">

По-моему, так гораздо лучше, особенно если отладочной информации много и в ней легко потеряться.


