---
layout: onecolumn
title: Свойства Flexbox одной таблицей

links_title: К статье
links:
- url: /flexbox
  name: Flexbox
---

Таблица свойств с сайта <a href="http://www.w3.org/TR/css3-flexbox/">w3.org/TR/css3-flexbox/</a>

<table class="proptable">
  <thead>
    <tr>
      <th>Свойство</th>
      <th>Значения</th>
      <th>По умолчанию</th>
      <th>Применяется к</th>
      <th>Наследование</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><a class="property" href="http://www.w3.org/TR/css3-flexbox#align-content">align-content</a></th>
      <td>flex-start
        flex-end
        center
        space-between
        space-around
        stretch</td>
      <td>stretch</td>
      <td>multi-line flex containers</td>
      <td>no</td>
    </tr>
    <tr>
      <th><a class="property" href="http://www.w3.org/TR/css3-flexbox#align-items">align-items</a></th>
      <td>flex-start
        flex-end
        center
        baseline
        stretch</td>
      <td>stretch</td>
      <td>flex containers</td>
      <td>no</td>
    </tr>
    <tr>
      <th><a class="property" href="http://www.w3.org/TR/css3-flexbox#align-self">align-self</a></th>
      <td>auto
        flex-start
        flex-end
        center
        baseline
        stretch</td>
      <td>auto</td>
      <td>flex items</td>
      <td>no</td>
    </tr>
    <tr>
      <th><span class="property">display</span></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th><a class="property" href="http://www.w3.org/TR/css3-flexbox#flex-basis-propdef">flex-basis</a></th>
      <td>&lt;'width'&gt;</td>
      <td>auto</td>
      <td>flex items</td>
      <td>no</td>
    </tr>
    <tr>
      <th><a class="property" href="http://www.w3.org/TR/css3-flexbox#flex-direction">flex-direction</a></th>
      <td>row
        row-reverse
        column
        column-reverse</td>
      <td>row</td>
      <td>flex containers</td>
      <td>no</td>
    </tr>
    <tr>
      <th><a class="property" href="http://www.w3.org/TR/css3-flexbox#flex-flow">flex-flow</a></th>
      <td>&lt;‘flex-direction’&gt;
        &lt;‘flex-wrap’&gt;</td>
      <td>see individual properties</td>
      <td>flex containers</td>
      <td>see individual properties</td>
    </tr>
    <tr>
      <th><a class="property" href="http://www.w3.org/TR/css3-flexbox#flex-grow">flex-grow</a></th>
      <td>&lt;number&gt;</td>
      <td>0</td>
      <td>flex items</td>
      <td>no</td>
    </tr>
    <tr>
      <th><a class="property" href="http://www.w3.org/TR/css3-flexbox#flex-shrink">flex-shrink</a></th>
      <td>&lt;number&gt;</td>
      <td>1</td>
      <td>flex items</td>
      <td>no</td>
    </tr>
    <tr>
      <th><a class="property" href="http://www.w3.org/TR/css3-flexbox#flex">flex</a></th>
      <td>none
        [ &lt;'flex-grow'&gt; &lt;'flex-shrink'&gt;?|
        &lt;'flex-basis'&gt; ]</td>
      <td>see individual properties</td>
      <td>flex items</td>
      <td>see individual properties</td>
    </tr>
    <tr>
      <th><a class="property" href="http://www.w3.org/TR/css3-flexbox#flex-wrap">flex-wrap</a></th>
      <td>nowrap
        wrap
        wrap-reverse</td>
      <td>nowrap</td>
      <td>flex containers</td>
      <td>no</td>
    </tr>
    <tr>
      <th><a class="property" href="http://www.w3.org/TR/css3-flexbox#justify-content">justify-content</a></th>
      <td>flex-start
        flex-end
        center
        space-between
        space-around</td>
      <td>flex-start</td>
      <td>flex containers</td>
      <td>no</td>
    </tr>
    <tr>
      <th><span class="property">min-width</span>, <span class="property">min-height</span></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th><a class="property" href="http://www.w3.org/TR/css3-flexbox#order">order</a></th>
      <td>&lt;integer&gt;</td>
      <td>0</td>
      <td>flex items</td>
      <td>no</td>
    </tr>
  </tbody>
</table>
