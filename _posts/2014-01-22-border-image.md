---
layout: default
title: Border-image
type: post

tags: [borders]

image: http://img-fotki.yandex.ru/get/9264/5091629.9a/0_7ec6d_c2452b04_L.png
desc: Border-image — свойство, которое задает фоновое изображение для рамки элемента. Оно позволяет легко делать невероятные штуки, для которых раньше требовалось от 3-х до 8-ми картинок и манипуляции с разметкой.
---

<code>Border-image</code> — свойство, которое позволяет задавать фоновое изображение для рамки элемента. Свойство  заполняет рамку заданной картинкой, распределяя части изображения таким образом, чтобы угловые части находились в углах рамки, а пространства между ними заполнялись остальными частями изображения.

Спецификация: <a href="http://www.w3.org/TR/css3-background/#border-images">w3.org/TR/css3-background/#border-images</a>.

Это свойство позволяет легко делать невероятные штуки, для которых раньше требовалось от 3-х до 8-ми картинок и манипуляции с разметкой.<!--more-->

<b>Поддержка браузерами</b>
<a href="http://caniuse.com/#search=border-image">Не поддерживается в IE10 и ниже. В старой опере работает с префиксом.</a>
Пользователи старых браузеров (или с отключенными картинками) увидят стандартную рамку, заданную в <code>border</code>, поэтому имеет смысл задавать ей подходящие стиль и цвет.

Пример:

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/EyUWUqon/5/embed?output"></iframe>

Используемые изображения:

<a href="http://img-fotki.yandex.ru/get/9165/5091629.99/0_7eb45_d2e10a7a_L.jpg"><img src="http://img-fotki.yandex.ru/get/9165/5091629.99/0_7eb45_d2e10a7a_S.jpg" alt=""></a>  <a href="http://img-fotki.yandex.ru/get/9165/5091629.99/0_7eb47_d1bead75_XL.png"><img src="http://img-fotki.yandex.ru/get/9165/5091629.99/0_7eb47_d1bead75_S.png" alt=""></a>  <a href="http://img-fotki.yandex.ru/get/9250/981986.83/0_8f42c_b01bb34_XL.png"><img src="http://img-fotki.yandex.ru/get/9250/981986.83/0_8f42c_b01bb34_S.png" alt=""></a>

Можно использовать не только квадратные картинки, но и овальные:

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/aKIdUQu/1/embed?output"></iframe>

Картинки из примера:

<a href="http://img-fotki.yandex.ru/get/9754/5091629.9a/0_7eb4a_a1904500_L.png"><img src="http://img-fotki.yandex.ru/get/9754/5091629.9a/0_7eb4a_a1904500_S.png" alt=""></a> <a href="http://img-fotki.yandex.ru/get/9113/5091629.9a/0_7eb4b_694caad7_L.png"><img src="http://img-fotki.yandex.ru/get/9113/5091629.9a/0_7eb4b_694caad7_S.png" alt=""></a>

При этом <code>border-radius</code> не влияет на <code>border-image</code>, так что круглые картинки для рамки — единственный способ сделать округлую рамку.

Главное требование — симметричность изображений.

Рамка с изображением полность резиновая, и может быть добавлена объекту любого размера.

Поизменяйте размер браузера, чтобы увидеть как рамка адаптируется вместе с элементом:


<iframe class="jsbin" style="height: 420px" src="http://jsbin.com/IqeXiMEj/1/embed?output"></iframe>

Или откройте  <b><a href="http://jsbin.com/IqeXiMEj/1">этот пример</a></b> в отдельном окне.

В качестве рамки могут использоваться достаточно сложные изображения:


<iframe class="jsbin" style="height: 570px" src="http://jsbin.com/EwexIfUS/1/embed?output"></iframe>

Картинка:

<a href="http://img-fotki.yandex.ru/get/9165/5091629.99/0_7eb49_5c917238_XL.png"><img src="http://img-fotki.yandex.ru/get/9165/5091629.99/0_7eb49_5c917238_S.png" alt=""></a>

Самый короткий способ задать изображение для рамки выглядит вот так:

<pre><code class="language-css">border: 60px solid transparent;
border-image: url("http://img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_XL.png") 25% round;</code></pre>

Результат:


<iframe class="jsbin" style="height: 570px" src="http://jsbin.com/EyUWUqon/8/embed?output"></iframe>

Для  <code>border</code> обязательно нужно задать толщину и стиль рамки.
Цвет — опционально, но рамку именно такого цвета увидят пользователи, браузеры которых не поддерживают <code>border-image</code>.
По умолчанию это будет цвет текста. Можно задавать <code>transparent</code> — прозрачный.

Для <code>border-image</code> обязательно задавать изображение (<code>border-image-source</code>), размер угловой части (<code>border-image-slice</code>) и повторение картинки (<code>border-image-repeat</code>).

Заданная картинка режется вот по такой схеме:

<img src="http://img-fotki.yandex.ru/get/9264/5091629.9a/0_7ec39_cf694bde_orig" alt="">

Желтым выделены угловые части, размер которых задается свойством <code>border-image-slice</code>, зеленым — заполняющие.

Рассмотрим отдельные свойства <code>border-image</code>.

<section markdown="1" id="border-image-source" data-name="border-image-source"><h4>Border-image-source</h4>

Возможные значения:  <code>none</code> или <code>&lt;image></code>.

Теоретически, можно задавать и градиенты, но они работают в Хроме/Сафари и не работают в FF. С их помощью можно было бы делать резиновые тени неправильной формы, <a href="http://jsbin.com/aGECIwe/2/edit">вот такие, например (смотреть в Хроме)</a>.
С градиентами можно делать и более странные варианты, причем узоры сами заботятся о своей пропорциональности.
Примеры ниже на момент написания записи работают только в Хроме и Сафари.
<a href="http://jsbin.com/edOHEwOQ/5">Пример 1</a>
<a href="http://jsbin.com/edOHEwOQ/4">Пример 2</a>
<a href="http://jsbin.com/edOHEwOQ/6">Пример 3</a>

<b>Upd:</b> В Firefox работают начиная с <a href="https://developer.mozilla.org/en-US/Firefox/Releases/29">29-й версии</a>.

Размер картинки равен толщине рамки. Цвет и стиль рамки игнорируются.

Если задать только <code>border-image-source</code>, картинка заполнит собой уголки, не зная что ей делать дальше:

<pre><code class="language-css">border: 80px solid transparent;
border-image: url("http://img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_XL.png");</code></pre>


<iframe class="jsbin" style="height: 400px" src="http://jsbin.com/EyUWUqon/14/embed?output"></iframe>

</section><section markdown="1" id="border-image-slice" data-name="border-image-slice"><h4>Border-image-slice</h4>

Важное свойство, которое определяет размер куска изображения, которое заполнит углы рамки.
Остальные части будут использованы для заполнения пространства между углами по алгоритму, заданному в <code>border-image-repeat</code>.

Возможные значения:

<code>&lt;проценты></code> — рассчитываются относительно размера изображения. Горизонтальные относительно ширины, вертикальные — относительно высоты.
<code>&lt;числа></code> — пиксели (для растрового изображения) или координаты (для векторного). Единицы измерения не указываются.
<code>fill</code> — ключевое слово, дополняющее предыдущие значения. Если оно задано, изображение не обрезается внутренним краем рамки, а заполняет также область внутри рамки.
Очень полезно для округлых рамок.

Чтобы определить значения для каждой стороны, несколько значений можно задать через пробел.

Сумма значений противоположных сторон должна быть меньше размера картинки, иначе будет нечем заполнять пространство между углами.

<pre><code class="language-css">border: 80px solid transparent;
border-image: url("http://img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_L.png");
border-image-slice: 100;</code></pre>


<iframe class="jsbin" style="height: 450px" src="http://jsbin.com/EyUWUqon/18/embed?output"></iframe>

</section><section markdown="1" id="border-image-repeat" data-name="border-image-repeat"><h4>Border-image-repeat</h4>

Свойство определяет как будут заполняться промежутки между углами.

Возможные значения:
<code>stretch</code> — растягивает заполняющий участок картинки. Значение по умолчанию;
<code>repeat</code> — повторяет заполняющий участок, при этом видны места стыков с угловой картинкой;
<code>round</code> — заполняет промежуток между углами. Может быть заметен стык в середине стороны. Самое аккуратное действие.
<code>space</code> — действует похоже на <code>repeat</code>. Разницы не обнаружила.

Можно задать два значения сразу, первое будет отвечать за поведение картинки в верхней и нижней рамке, второе — за левую и правую.

<pre><code class="language-css">border-image: url("http://img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_L.png");
border-image-slice: 100;
border-image-repeat: repeat;</code></pre>

Слева <code>repeat</code>, справа <code>round</code>.

<iframe class="jsbin" style="height: 370px" src="http://jsbin.com/EyUWUqon/19/embed?output"></iframe>

Если рамка сложная и стороны плохо стыкуются между собой, <code>stretch</code> сработает корректнее, <a href="http://jsbin.com/EyUWUqon/25/">вот пример</a>.

</section><section markdown="1" id="border-image-width" data-name="border-image-width"><h4>Border-image-width</h4>

<code>border-image-width</code>

Свойство управляет шириной видимой части рамки, масштабирует её.
Если это значение больше ширины <code>border-width</code>, картинка рамки заползет под содержимое, даже если не заданно свойство <code>fill</code>.

Возможные значения:
<code>&lt;длина></code> — значения в px или em;
<code>&lt;%></code> — значения в процентах относительно размера изображения;
<code>&lt;числа></code> — числовое значение, на которое умножается <code>border-width</code>
<code>auto</code> — ключевое слово. Если оно задано, значение равно соответственному <code>border-image-slice</code>. Если подходящего размера нет, используется значение <code>border-width</code>, при этом картинка заполняет весь угол рамки, заползая под контент. Немного странно работает.

<pre><code class="language-css">border: 60px solid transparent;
border-image: url("http://img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_L.png");
border-image-slice: 80;
border-image-repeat: round;
border-image-width: 160px;</code></pre>

Справа рамка с <code>border-image-width</code>. На примере слева видно, как картинка обрезалась внутренними краями рамки. Правая рамка засчет увеличенной ширины заползла под контент.

<iframe class="jsbin" style="height: 370px" src="http://jsbin.com/EyUWUqon/22/embed?output"></iframe>

</section><section markdown="1" id="border-image-outset" data-name="border-image-outset"><h4>Border-image-outset</h4>

Интересное свойство, позволяющие отодвинуть рамку за пределы элемента. Отрицательные значения не поддерживаются.

Возможные значения:
<code>&lt;длина></code> — значения в px или em;
<code>&lt;числа></code> — числовое значение, на которое умножается <code>border-width</code>.

<pre><code class="language-css">border: 60px solid transparent;
border-image: url("http://img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_L.png");
border-image-slice: 120;
border-image-repeat: round;
border-image-outset: 60px 10px 50px 120px;</code></pre>

Справа пример с <code>border-image-outset</code>. Это свойство не влияет на размеры элемента, а рамка может перекрывать соседние элементы:

<iframe class="jsbin" style="height: 370px" src="http://jsbin.com/EyUWUqon/23/embed?output"></iframe>
</section>

<code>Border-image</code> — довольно сложное, но очень интересное свойство. Мне очень нравится идея использовать его вместо традиционного способа сделать графическую рамку для резиновых элементов.
Примеры в посте несколько диковаты, но я уверена, что свойство можно применять более изящно, а от его возможностей просто захватывает дух : )

Например, <a href="http://pepelsbey.net/">Вадим Макеев</a> предложил с помощью <code>border-image</code> делать тень сложной формы для блока, размеры которого могут быть заранее неизвестны.

Приготовьте <a href="http://img-fotki.yandex.ru/get/9555/5091629.9a/0_7ec51_1cf902d3_L.png">подходящую картинку</a> и посмотрите как <code>border-image</code> легко справится с задачей с помощью всего лишь пары строчек кода:


<iframe class="jsbin" style="height: 550px" src="http://jsbin.com/UGahucOq/3/embed?output"></iframe>

Можно менять размеры блока и добавлять в него сколько угодно текста — тень будет растянется вслед за ним.

Прекрасная простота. Будет здорово, когда это свойство можно будет полноценно использовать без оглядки на старые браузеры.

<i>Изображения рамок нагуглены по запросу "рамки". Картинка с джедаями — <a href="http://fotki.yandex.ru/users/yoksel/view/118947?page=2">фотожаба</a></i>
