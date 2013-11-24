---
layout: default
title: Тестируем селекторы
description: Тестируем селекторы в разных браузерах. Хотя бы пытаемся
path: /temp/

custom_css: selectors.css
---

<section class="selectors-css1">
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
</section>

<section class="selectors-css2">
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
			<span class="origin">2</span>
		</div>
	</li>
    <li class="s-item s-next">
    	<div class="s-wrapper">
			<span class="pattern">E + F</span>
			<span class="origin">2</span>
		</div>
	</li>
</ul>
</section>

<section  class="selectors-css3">
<h4>Css3</h4>
<ul>
	<li class="s-item s-attr--begins">
    	<div class="s-wrapper">
			<span class="pattern">E[foo^="bar"]</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-attr--ends">
    	<div class="s-wrapper">
			<span class="pattern">E[foo$="bar"]</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-attr--contains">
    	<div class="s-wrapper">
			<span class="pattern">E[foo*="bar"]</span>
			<span class="origin">3</span>
		</div>
	</li>
	<li class="s-item s-root">
    	<div class="s-wrapper">
			<span class="pattern">E:root</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-nth">
    	<div class="s-wrapper">
			<span class="pattern">E:nth-child(n)</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-last--n">
    	<div class="s-wrapper">
			<span class="pattern">E:nth-last-child(n)</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-nth--type">
    	<div class="s-wrapper">
			<span class="pattern">E:nth-of-type(n)</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-last--type-n">
    	<div class="s-wrapper">
			<span class="pattern">E:nth-last-of-type(n)</span>
			<span class="origin">3</span>
		</div>
	</li>
	<li class="s-item s-last">
    	<div class="s-wrapper">
			<span class="pattern">E:last-child</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-first--type">
    	<div class="s-wrapper">
			<span class="pattern">E:first-of-type</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-last--type">
    	<div class="s-wrapper">
			<span class="pattern">E:last-of-type</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-only">
    	<div class="s-wrapper">
			<span class="pattern">E:only-child</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-only--type">
    	<div class="s-wrapper">
			<span class="pattern">E:only-of-type</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-empty">
    	<div></div>
    	<div class="s-wrapper">
			<span class="pattern">E:empty</span>
			<span class="origin">3</span>
		</div>
	</li>
	<li class="s-item s-target">
    	<div class="s-wrapper" id="s-target__wrapper">
			<span class="pattern">E:target</span>
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-enabled">
    	<div class="s-wrapper">
			<span class="pattern">E:enabled, 
      E:disabled</span>
      		<input type="text">	
			<span class="origin">3</span>
		</div>
	</li>
    <li class="s-item s-checked">
    	<div class="s-wrapper">
			<span class="pattern">E:checked</span>
			<input type="checkbox" checked id="s-checkbox">	
			<label class="s-label" for="s-checkbox">Label</label>
			<span class="origin">3</span>
		</div>
	</li>
	<li class="s-item s-not">
    	<div class="s-wrapper">
			<span class="pattern">E:not(s)</span>
			<span class="origin">3</span>
		</div>
	</li>
	<li class="s-item s-allnext">
    	<div class="s-wrapper">
			<span class="pattern">E ~ F</span>
			<span class="origin">3</span>
		</div>
	</li>
</ul>
</section>
