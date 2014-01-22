---
layout: default
title: Border-image
type: post
---

<code>Border-image</code> - свойство, которое позволяет задавать фоновое изображение для рамки элемента. Свойство  заполняет рамку заданной картинкой, распределяя части изображения таким образом, чтобы угловые части находились в углах рамки, а пространства между ними заполнялись остальными частями изображения.


Спецификация: <a href="http://www.w3.org/TR/css3-background/#border-images">w3.org/TR/css3-background/#border-images</a>.

Это свойство позволяет легко делать невероятные штуки, для которых раньше требовалось от 3-х до 8-ми картинок и манипуляции с разметкой.<!--more-->

Пример:

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/EyUWUqon/5"></iframe>

Используемые изображения:

<a href="http://img-fotki.yandex.ru/get/9165/5091629.99/0_7eb45_d2e10a7a_L.jpg"><img src="http://img-fotki.yandex.ru/get/9165/5091629.99/0_7eb45_d2e10a7a_S.jpg" alt=""></a>  <a href="http://img-fotki.yandex.ru/get/9165/5091629.99/0_7eb47_d1bead75_XL.png"><img src="http://img-fotki.yandex.ru/get/9165/5091629.99/0_7eb47_d1bead75_S.png" alt=""></a>  <a href="http://img-fotki.yandex.ru/get/9250/981986.83/0_8f42c_b01bb34_XL.png"><img src="http://img-fotki.yandex.ru/get/9250/981986.83/0_8f42c_b01bb34_S.png" alt=""></a>

Можно использовать не только квадратные картинки, но и овальные:
<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/aKIdUQu/1/"></iframe>

Картинки из примера:

<a href="http://img-fotki.yandex.ru/get/9754/5091629.9a/0_7eb4a_a1904500_L.png"><img src="http://img-fotki.yandex.ru/get/9754/5091629.9a/0_7eb4a_a1904500_S.png" alt=""></a> <a href="http://img-fotki.yandex.ru/get/9113/5091629.9a/0_7eb4b_694caad7_L.png"><img src="http://img-fotki.yandex.ru/get/9113/5091629.9a/0_7eb4b_694caad7_S.png" alt=""></a>

При этом <code>border-radius</code> не влияет на <code>border-image</code>, так что круглые картинки для рамки - единственный способ сделать округлую рамку.

Главное требование - симметричность изображений.

Рамка с изображением полность резиновая, и может быть добавлена объекту любого размера. 

Поизменяйте размер браузера, чтобы увидеть как рамка адаптируется вместе с элементом:

<iframe class="jsbin" style="height: 350px" src="http://jsbin.com/IqeXiMEj/1"></iframe>

Или откройте  <b><a href="http://jsbin.com/IqeXiMEj/1">этот пример</a></b> в отдельном окне.

В качестве рамки могут использоваться достаточно сложные изображения:

<iframe class="jsbin" style="height: 500px" src="http://jsbin.com/EwexIfUS/1"></iframe>

Картинка:

<a href="http://img-fotki.yandex.ru/get/9165/5091629.99/0_7eb49_5c917238_XL.png"><img src="http://img-fotki.yandex.ru/get/9165/5091629.99/0_7eb49_5c917238_S.png" alt=""></a>

Самый короткий способ задать изображение для рамки выглядит вот так:

<pre><code class="language-css">border: 60px solid transparent;
border-image: url("http://img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_XL.png") 25% round;</code></pre>

Результат:

<iframe class="jsbin" style="height: 500px" src="http://jsbin.com/EyUWUqon/8/"></iframe>

Для  <code>border</code> обязатетельно нужно задать толщину и стиль рамки. 
Цвет - опционально, но рамку именно такого цвета увидят пользователи, браузеры которых не поддерживают <code>border-image</code>. 
По умолчанию это будет цвет текста. Можно задавать <code>transparent</code> - прозрачный.

Для <code>border-image</code> обязательно задавать изображение (<code>border-image-source</code>), размер угловой части (<code>border-image-slice</code>) и повторение картинки (<code>border-image-repeat</code>).

Рассмотрим отдельные свойства <code>border-image</code>.

<section id="border-image-source" data-name="border-image-source"><h4>Border-image-source</h4>

Возможные значения:  <code>none</code> или <code>&lt;image></code>.

Теоретически, можно задавать и градиенты, но они работают в Хроме и не работают в FF. С их помощью можно было бы делать резиновые тени неправильной формы, <a href="http://jsbin.com/aGECIwe/2/edit">вот такие, например (смотреть в Хроме)</a>.

Размер картинки равен толщине рамки. Цвет и стиль рамки игнорируются.

Если задать только <code>border-image-source</code>, картинка заполнит собой уголки, не зная что ей делать дальше:

<pre><code class="language-css">border: 80px solid transparent;
border-image: url("http://img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_XL.png");</code></pre>

<iframe class="jsbin" style="height: 370px" src="http://jsbin.com/EyUWUqon/14/"></iframe>

</section><section id="border-image-slice" data-name="border-image-slice"><h4>Border-image-slice</h4>

Важное свойство, которое определяет размер куска изображения, которое заполнит углы рамки. 
Остальные части будут использованы для заполнения пространства между углами по алгоритму, заданному в <code>border-image-repeat</code>.

Возможные значения:

<code>&lt;проценты></code> - рассчитываются относительно размера изображения. Горизонтальные относительно ширины, вертикальные - относительно высоты.
<code>&lt;числа></code> - пиксели (для растрового изображения) или координаты (для векторного). Единицы измерения не указываются.
<code>fill</code> - ключевое слово, дополняющее предыдущие значения. Если оно задано, изображение не обрезается внутренним краем рамки, а заполняет также область внутри рамки.
Очень полезно для округлых рамок.

Чтобы определить значения для каждой стороны, несколько значений можно задать через пробел.

Сумма значений противоположных сторон должна быть меньше размера картинки, иначе будет нечем заполнять пространство между углами.

<pre><code class="language-css">border: 80px solid transparent;
border-image: url("http://img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_L.png");
border-image-slice: 100;</code></pre>

<iframe class="jsbin" style="height: 370px" src="http://jsbin.com/EyUWUqon/18/"></iframe>

</section><section id="border-image-repeat" data-name="border-image-repeat"><h4>Border-image-repeat</h4>

Свойство определяет как будут заполняться промежутки между углами.

Возможные значения:
<code>stretch</code> - растягивает заполняющий участок картинки. Значение по умолчанию;
<code>repeat</code> - повторяет заполняющий участок, при этом видны места стыков с угловой картинкой;
<code>round</code> - аккуратно заполняет промежуток между углами. Может быть заметен стык в середине стороны. Самое аккуратное действие.
<code>space</code> - действует похоже на <code>repeat</code>. Разницы не обнаружила.

Можно задать два значения сразу, первое будет отвечать за поведение картинки в верхней и нижней рамке, второе - за левую и правую.

<pre><code class="language-css">border-image: url("http://img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_L.png");
border-image-slice: 100;
border-image-repeat: repeat;</code></pre>

Слева <code>repeat</code>, справа <code>round</code>.
<iframe class="jsbin" style="height: 370px" src="http://jsbin.com/EyUWUqon/19/"></iframe>

</section><section id="border-image-width" data-name="border-image-width"><h4>border-image-width</h4>

<code>border-image-width</code>

Свойство управляет шириной видимой части рамки, масштабирует её.
Если это значение больше ширины <code>border-width</code>, картинка рамки заползет под содержимое, даже есть не заданно свойство <code>fill</code>.

Возможные значения:
<code>&lt;длина></code> - значения в px или em;
<code>&lt;%></code> - значения в процентах относительно размера изображения;
<code>&lt;числа></code> - числовое значение, на которое умножается <code>border-width</code>
<code>auto</code> - ключевое слово. <i>If ‘auto’ is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice (see ‘border-image-slice’). If the image does not have the required intrinsic dimension then the corresponding border-width is used instead.</i> Пока не получилось перевести.

<pre><code class="language-css">border: 60px solid transparent;
border-image: url("http://img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_L.png");
border-image-slice: 80;
border-image-repeat: round;
border-image-width: 160px;</code></pre>

Справа рамка с <code>border-image-width</code>. На примере слева видно, как картинка обрезалась внутренними краями рамки. Правая рамка засчет увеличенной ширины заползла под контент.
<iframe class="jsbin" style="height: 370px" src="http://jsbin.com/EyUWUqon/22/"></iframe>

</section><section id="border-image-outset" data-name="border-image-outset"><h4>Border-image-outset</h4>

Интересное свойство, позволяющие отодвинуть рамку за пределы элемента. Отрицательные значения не поддерживаются.

Возможные значения:
<code>&lt;длина></code> - значения в px или em;
<code>&lt;числа></code> - числовое значение, на которое умножается <code>border-width</code>.

<pre><code class="language-css">border: 60px solid transparent;
border-image: url("http://img-fotki.yandex.ru/get/6730/5091629.9a/0_7eb4e_e27786d4_L.png");
border-image-slice: 120;
border-image-repeat: round;
border-image-outset: 60px 10px 50px 120px;</code></pre>

Справа пример с <code>border-image-outset</code>. Это свойство не влияет на размеры элемента, а рамка может перекрывать соседние элементы:
<iframe class="jsbin" style="height: 370px" src="http://jsbin.com/EyUWUqon/23/"></iframe>
</section>

<code>Border-image</code> - довольно сложное, но очень интересное свойство. Мне очень нравится идея использовать его вместо традиционного способа для резиновых элементов.
Примеры в посте несколько диковаты, но я уверена, что свойство можно применять более изящно, а от его возможностей просто захватывает дух : )