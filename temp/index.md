---
layout: default
title: Тестируем селекторы
description: Тестируем селекторы в разных браузерах. Хотя бы пытаемся
path: /temp/

custom_css: selectors.css
---

<h4>Css1</h4>

<ul>
	<li class="s-item s-type">
    	<div class="s-wrapper">
			<span class="pattern">E</span>
			<span class="origin">1</span>
		</div>
	</li>
	<li class="s-item s-item--text s-link">
    	<div class="s-wrapper">
			<span class="pattern"><a href="#">E:link</a></span>
			<span class="origin">1</span>
		</div>
	</li>
	<li class="s-item s-item--text s-first--line">
    	<div class="s-wrapper">
			<span class="pattern">E::first-line</span>
			<span class="origin">1</span>
		</div>
	</li>
    <li class="s-item s-item--text s-first--letter">
    	<div class="s-wrapper">
			<span class="pattern">E::first-letter</span>
			<span class="origin">1</span>
		</div>
	</li>
	<li class="s-item s-class">
    	<div class="s-wrapper">
			<span class="pattern">E.warning</span>
			<span class="origin">1</span>
		</div>
	</li>
    <li class="s-item s-id">
    	<div class="s-wrapper" id="s-id__wrapper">
			<span class="pattern">E#myid</span>
			<span class="origin">1</span>
		</div>
	</li>   
    <li class="s-item s-desc">
    	<div class="s-wrapper">
			<span class="pattern">E F</span>
			<span class="origin">1</span>
		</div>
	</li>
</ul>

<h4>Css2</h4>
<ul>
	<li class="s-item s-universal">
		<div class="s-wrapper">
			<span class="pattern">*</span>
			<span class="meaning">any element</span>

			<span class="origin">2</span>
		</div>
	</li>
	<li class="s-item s-attr">
    	<div class="s-wrapper">
			<span class="pattern">E[foo]</span>
			<span class="origin">2</span>
		</div>
	</li>
    <li class="s-item s-attr--val">
    	<div class="s-wrapper">
			<span class="pattern">E[foo="bar"]</span>
			<span class="origin">2</span>
		</div>
	</li>
    <li class="s-item s-attr--val-wtspl">
    	<div class="s-wrapper">
			<span class="pattern">E[foo~="bar"]</span>
			<span class="origin">2</span>
		</div>
	</li>
	<li class="s-item s-attr--val-hpspl">
    	<div class="s-wrapper">wtf
			<span class="pattern">E[foo|="en"]</span>
			<span class="origin">2</span>
		</div>
	</li>
    
    <li class="s-item s-first--child">
    	<div class="s-wrapper">
			<span class="pattern">E:first-child</span>
			<span class="origin">2</span>
		</div>
	</li>
	<li class="s-item s-lang">
    	<div class="s-wrapper" lang="en">
			<span class="pattern">E:lang(fr)</span>
			<span class="origin">2</span>
		</div>
	</li>
	<li class="s-item s-before">
    	<div class="s-wrapper">
			<span class="pattern">E::before, E::after</span>
			<span class="origin">2</span>
		</div>
	</li>
	<li class="s-item s-child">
    	<div class="s-wrapper">
			<span class="pattern">E &gt; F</span>
			<span class="meaning">an F element child of an E element</span>
			<span class="origin">2</span>
		</div>
	</li>
    <li class="s-item s-next">
    	<div class="s-wrapper">
			<span class="pattern">E + F</span>
			<span class="meaning">an F element immediately preceded by an E element</span>
			<span class="origin">2</span>
		</div>
	</li>
</ul>

<h4>Css3</h4>
<ul>
	<li class="s-item s-attr--begins">
    	<div class="s-wrapper">
			<span class="pattern">E[foo^="bar"]</span>
			<span class="meaning">an E element whose "foo" attribute value begins
      exactly with the string
     </span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-attr--ends">
    	<div class="s-wrapper">
			<span class="pattern">E[foo$="bar"]</span>
			<span class="meaning">an E element whose "foo" attribute value ends exactly
      with the string
     </span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-attr--contains">
    	<div class="s-wrapper">
			<span class="pattern">E[foo*="bar"]</span>
			<span class="meaning">an E element whose "foo" attribute value contains the
      substring
     </span>
			<span class="origin">3</span>
		</div>
	</li>
	<li class="s-item s-root">
    	<div class="s-wrapper">
			<span class="pattern">E:root</span>
			<span class="meaning">an E element, root of the document</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-nth">
    	<div class="s-wrapper">
			<span class="pattern">E:nth-child(n)</span>
			<span class="meaning">an E element, the n-th child of its parent</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item">
    	<div class="s-wrapper">
			<span class="pattern">E:nth-last-child(n)</span>
			<span class="meaning">an E element, the n-th child of its parent, counting
      from the la
     </span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item">
    	<div class="s-wrapper">
			<span class="pattern">E:nth-of-type(n)</span>
			<span class="meaning">an E element, the n-th sibling of its type</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item">
    	<div class="s-wrapper">
			<span class="pattern">E:nth-last-of-type(n)</span>
			<span class="meaning">an E element, the n-th sibling of its type, counting
      from the la
     </span>
			<span class="origin">3</span>
		</div>
	</li>
	<li class="s-item">
    	<div class="s-wrapper">
			<span class="pattern">E:last-child</span>
			<span class="meaning">an E element, last child of its parent</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item">
    	<div class="s-wrapper">
			<span class="pattern">E:first-of-type</span>
			<span class="meaning">an E element, first sibling of its type</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item">
    	<div class="s-wrapper">
			<span class="pattern">E:last-of-type</span>
			<span class="meaning">an E element, last sibling of its type</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item">
    	<div class="s-wrapper">
			<span class="pattern">E:only-child</span>
			<span class="meaning">an E element, only child of its parent</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item">
    	<div class="s-wrapper">
			<span class="pattern">E:only-of-type</span>
			<span class="meaning">an E element, only sibling of its type</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item">
    	<div class="s-wrapper">
			<span class="pattern">E:empty</span>
			<span class="origin">3</span>
		</div>
	</li>
	<li class="s-item">
    	<div class="s-wrapper">
			<span class="pattern">E:target</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item">
    	<div class="s-wrapper">
			<span class="pattern">E:enabled<br>
      E:disabled</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item">
    	<div class="s-wrapper">
			<span class="pattern">E:checked<!--<br>E:indeterminate--></span>
			<span class="origin">3</span>
		</div>
	</li>
	<li class="s-item">
    	<div class="s-wrapper">
			<span class="pattern">E:not(s)</span>
			<span class="origin">3</span>
		</div>
	</li>
	<li class="s-item">
    	<div class="s-wrapper">
			<span class="pattern">E ~ F</span>
			<span class="origin">3</span>
		</div>
	</li>
</ul>
