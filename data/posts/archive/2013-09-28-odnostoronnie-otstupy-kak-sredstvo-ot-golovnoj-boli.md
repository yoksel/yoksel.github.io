---
title: Односторонние отступы как средство от головной боли

tags: [layout]
---

Прекрасная статья от <strong>Harry Roberts</strong>
<a href="http://csswizardry.com/2012/06/single-direction-margin-declarations/">csswizardry.com/2012/06/single-direction-margin-declarations/</a>.

Суть идеи состоит в использовании односторонних вертикальных марджинов.<!--more--> Это создает аккуратный вертикальный ритм и позволяет менять элементы местами не опасаясь, что вертикальные отступы разной величины где-то схлопнутся непредсказуемым образом.

В качестве подопытного кролика возьмем такой макет:

<iframe class="live-snippet" style="height: 550px" src="../assets/demo/odnostoronnie-otstupy-kak-sredstvo-ot-golovnoj-boli/demo_1.html?output"></iframe>

Всем элементам шапки задан одинаковый отступ в одном направлении. В данном случае, вниз.

Вот код, управляющий отступами:

```css
.header-item {
  margin-bottom: 1.2em;
}

.header-item:last-child {
  margin-bottom: 0;
}
```

Первый блок задает одинаковый отступ вниз для всех блоков в шапке, второй убирает его у последнего элемента.

<iframe class="live-snippet" style="height: 550px" src="../assets/demo/odnostoronnie-otstupy-kak-sredstvo-ot-golovnoj-boli/demo_2.html?output"></iframe>

Теперь можно сколько угодно менять местами элементы шапки, и всё равно все варианты будут аккуратно смотреться:

<iframe class="live-snippet" style="height: 1020px" src="../assets/demo/odnostoronnie-otstupy-kak-sredstvo-ot-golovnoj-boli/demo_3.html?output"></iframe>

По-моему, идея гениальна в своей простоте.
