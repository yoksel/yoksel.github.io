---
layout: default
title: Поддержка @font-face
type: post
image: http://img-fotki.yandex.ru/get/9488/5091629.9d/0_82d8a_f3c1d233_orig.png
desc: Известно, что кастомные шрифты могут работать неожиданным образом. Если они не поддерживаются браузером или устройством, вместо символов может появиться всё что угодно. В идеале - не будет ничего, но могут быть и другие варианты, вплоть до цветных иконок непредсказуемого содержания.

---

Продолжая интересоваться разными способами сделать иконки, решила поискать что-нибудь про поддержку @font-face на мобильных устройствах.

Известно, что кастомные шрифты могут работать неожиданным образом. Если они не поддерживаются браузером или устройством, вместо символов может появиться всё что угодно. В идеале - не будет ничего, но могут быть и другие варианты, вплоть до <a href="http://cdn.css-tricks.com/wp-content/uploads/2014/03/icon-font-fail.png">цветных иконок непредсказуемого содержания</a>. <!--more-->

Увидеть как выглядит неработающий шрифт, можно, например, в Опере Мини:

<figure>
    <figcaption>Chrome</figcaption>
    <a href="http://img-fotki.yandex.ru/get/9542/5091629.9e/0_83050_af90c20f_orig"><img src="http://img-fotki.yandex.ru/get/9542/5091629.9e/0_83050_af90c20f_L.png" alt="entypo.com" title="entypo.com"/></a>
</figure>  <figure>
    <figcaption>Opera Mini</figcaption>
    <a href="http://img-fotki.yandex.ru/get/9307/5091629.9e/0_8304f_e631f284_L.png"><img src="http://img-fotki.yandex.ru/get/9307/5091629.9e/0_8304f_e631f284_L.png" alt="entypo.com in Opera Mini" title="entypo.com in Opera Mini"/></a>
</figure>


На каких девайсах могут быть сюрпризы с отображением шрифтов? Каков процент устройств не поддерживает кастомные шрифты?

Короткий ответ:

<img src="http://img-fotki.yandex.ru/get/9488/5091629.9d/0_82d8a_f3c1d233_orig.png" width="500" height="376" border="0" title="@font-face support" alt="@font-face support"/>

Картинка взята из этой презентации: <a href="https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.g178014302_047">@font-face for icons? Compatibility research</a>

Статья про тестирование поддержки @font-face: <a href="http://blog.kaelig.fr/post/33373448491/testing-font-face-support-on-mobile-and-tablet">Testing @font-face Support on Mobile and Tablet</a>

Можно сделать вывод, что если иконки должны быть одинаковыми на всех устройствах - шрифт лучше не использовать, более подходящим вариантом будет SVG.

Ещё пара полезных статей на тему выбора между SVG и шрифтом:

<a href="http://ianfeather.co.uk/ten-reasons-we-switched-from-an-icon-font-to-svg/">Ten reasons we switched from an icon font to SVG</a>

<a href="http://css-tricks.com/icon-fonts-vs-svg/">Inline SVG vs Icon Fonts</a>


