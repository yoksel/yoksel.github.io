---
title: Анимируем CSS-градиенты

tags: [gradients, animation, box-shadow, draw-on-css]

image: http://img-fotki.yandex.ru/get/9104/5091629.9a/0_7ec7a_bce9f6bd_M.png
desc: Как анимировать градиенты если очень нужно.

links:
- url: /box-shadow/
  name: Box-shadow
- url: /css-animation/
  name: Css Animation
---

Как известно, градиенты не любят анимироваться.<!--more-->

Если быть точным, положение и размер градиента анимируются успешно (как и любого другого фона):

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/animation-for-gradients/demo_1.html?css"></iframe>

Но попытка манипулировать цветами, составляющим градиент, терпит крах:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/animation-for-gradients/demo_2.html?css"></iframe>

В FF цвета в примере не будут меняться вообще, в Хроме — будут, но резко, без плавного перехода.

<i><b>UPD:</b> В Webkit с помощью Sass можно сделать имитацию плавной смены цветов, но код получается неприличных размеров. Пример: <a href="http://codepen.io/yoksel/pen/gBDFj">codepen.io/yoksel/pen/gBDFj</a>.
На момент правки демо не работает в Firefox (27.0.1), анимация просто игнорируется.</i>

В некоторых случаях при необходимости сделать градиент с плавной сменой цветов можно использовать <code>box-shadow</code>, который прекрасно анимируется. Тест:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/animation-for-gradients/demo_
3.html?output"></iframe>

Примерный код:

```css
DIV {
  background: gold;
  box-shadow: 0 -200px 100px -120px crimson inset;
  animation: background 3s infinite alternate;
}

@keyframes background {
  50% {
    background: skyblue;
    box-shadow: 0 -200px 100px -100px yellowgreen inset;
  }
}
```

Фоновый цвет в данном случае является частью градиента.

Тень задается с параметром <code>inset</code> (внутреняя тень), с большим радиусом размытия (в примере <code>100px</code>), чтобы сымитировать градиент, и с большими отрицательными отступами (<code>-120px</code>) — чтобы от обычной внутренней тени была видна только нижняя часть. Почитать подробнее про тени можно <a href="/box-shadow/">тут</a>.

Сложные градиенты делаются несколькими тенями:

<iframe class="live-snippet" style="height: 350px" src="../assets/demo/animation-for-gradients/demo_4.html?css"></iframe>

Код конечно получается большим и неудобным, но он вполне решает задачу.

Способ придумался когда мне захотелось сделать анимацию, в которой можно было менять цвет неба в зависимости от времени суток:

<iframe class="live-snippet" style="height: 400px" src="../assets/demo/animation-for-gradients/demo_5
.html?output"></iframe>

Тени отлично справились. Я думаю, что способ может быть полезен в некоторых случах и вполне имеет право на сущестование.
