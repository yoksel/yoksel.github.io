---
layout: onecolumn
title: CSS-селекторы одной таблицей
categories: []
tags: []
status: publish
type: page
published: true

links_title: К статье
links:
- url: /css-selectors/
  name: Css-селекторы
---
Таблица отсюда: <a href="http://www.w3.org/TR/css3-selectors/#selectors">w3.org/TR/css3-selectors/#selectors</a>

<table class="selectorsReview">
   <thead>
    <tr>
     <th class="pattern">Pattern

     </th><th class="meaning">Meaning

     </th><th class="described">Described in section

     </th><th class="origin">First defined in CSS level

   </th></tr></thead><tbody>
    <tr>
     <td class="pattern">*

     </td><td class="meaning">any element

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#universal-selector">Universal selector</a>

     </td><td class="origin">2

    </td></tr><tr>
     <td class="pattern">E

     </td><td class="meaning">an element of type E

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#type-selectors">Type selector</a>

     </td><td class="origin">1

    </td></tr><tr>
     <td class="pattern">E[foo]

     </td><td class="meaning">an E element with a "foo" attribute

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors">Attribute
      selectors</a>

     </td><td class="origin">2

    </td></tr><tr>
     <td class="pattern">E[foo="bar"]

     </td><td class="meaning">an E element whose "foo" attribute value is exactly
      equal to "bar"

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors">Attribute
      selectors</a>

     </td><td class="origin">2

    </td></tr><tr>
     <td class="pattern">E[foo~="bar"]

     </td><td class="meaning">an E element whose "foo" attribute value is a list of
      whitespace-separated values, one of which is exactly equal to "bar"

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors">Attribute
      selectors</a>

     </td><td class="origin">2

    </td></tr><tr>
     <td class="pattern">E[foo^="bar"]

     </td><td class="meaning">an E element whose "foo" attribute value begins
      exactly with the string "bar"

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors">Attribute
      selectors</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E[foo$="bar"]

     </td><td class="meaning">an E element whose "foo" attribute value ends exactly
      with the string "bar"

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors">Attribute
      selectors</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E[foo*="bar"]

     </td><td class="meaning">an E element whose "foo" attribute value contains the
      substring "bar"

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors">Attribute
      selectors</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E[foo|="en"]

     </td><td class="meaning">an E element whose "foo" attribute has a
      hyphen-separated list of values beginning (from the left) with "en"

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors">Attribute
      selectors</a>

     </td><td class="origin">2

    </td></tr><tr>
     <td class="pattern">E:root

     </td><td class="meaning">an E element, root of the document

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos">Structural
      pseudo-classes</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E:nth-child(n)

     </td><td class="meaning">an E element, the n-th child of its parent

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos">Structural
      pseudo-classes</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E:nth-last-child(n)

     </td><td class="meaning">an E element, the n-th child of its parent, counting
      from the last one

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos">Structural
      pseudo-classes</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E:nth-of-type(n)

     </td><td class="meaning">an E element, the n-th sibling of its type

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos">Structural
      pseudo-classes</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E:nth-last-of-type(n)

     </td><td class="meaning">an E element, the n-th sibling of its type, counting
      from the last one

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos">Structural
      pseudo-classes</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E:first-child

     </td><td class="meaning">an E element, first child of its parent

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos">Structural
      pseudo-classes</a>

     </td><td class="origin">2

    </td></tr><tr>
     <td class="pattern">E:last-child

     </td><td class="meaning">an E element, last child of its parent

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos">Structural
      pseudo-classes</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E:first-of-type

     </td><td class="meaning">an E element, first sibling of its type

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos">Structural
      pseudo-classes</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E:last-of-type

     </td><td class="meaning">an E element, last sibling of its type

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos">Structural
      pseudo-classes</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E:only-child

     </td><td class="meaning">an E element, only child of its parent

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos">Structural
      pseudo-classes</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E:only-of-type

     </td><td class="meaning">an E element, only sibling of its type

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos">Structural
      pseudo-classes</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E:empty

     </td><td class="meaning">an E element that has no children (including text
      nodes)

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#structural-pseudos">Structural
      pseudo-classes</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E:link<br>
      E:visited

     </td><td class="meaning">an E element being the source anchor of a hyperlink of
      which the target is not yet visited (:link) or already visited
      (:visited)

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#link">The link pseudo-classes</a>

     </td><td class="origin">1

    </td></tr><tr>
     <td class="pattern">E:active<br>
      E:hover<br>
      E:focus

     </td><td class="meaning">an E element during certain user actions

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#useraction-pseudos">The user action
      pseudo-classes</a>

     </td><td class="origin">1 and 2

    </td></tr><tr>
     <td class="pattern">E:target

     </td><td class="meaning">an E element being the target of the referring URI

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#target-pseudo">The target pseudo-class</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E:lang(fr)

     </td><td class="meaning">an element of type E in language "fr" (the document
      language specifies how language is determined)

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#lang-pseudo">The :lang() pseudo-class</a>

     </td><td class="origin">2

    </td></tr><tr>
     <td class="pattern">E:enabled<br>
      E:disabled

     </td><td class="meaning">a user interface element E which is enabled or
      disabled

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#UIstates">The UI element states
      pseudo-classes</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E:checked<!--<br>E:indeterminate-->

     </td><td class="meaning">a user interface element E which is
      checked<!-- or in an
      indeterminate state--> (for instance a
      radio-button or checkbox)

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#UIstates">The UI element states
      pseudo-classes</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E::first-line

     </td><td class="meaning">the first formatted line of an E element

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#first-line">The ::first-line
      pseudo-element</a>

     </td><td class="origin">1

    </td></tr><tr>
     <td class="pattern">E::first-letter

     </td><td class="meaning">the first formatted letter of an E element

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#first-letter">The ::first-letter
      pseudo-element</a>

     </td><td class="origin">1

    </td></tr><tr>
     <td class="pattern">E::before

     </td><td class="meaning">generated content before an E element

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#gen-content">The ::before
      pseudo-element</a>

     </td><td class="origin">2

    </td></tr><tr>
     <td class="pattern">E::after

     </td><td class="meaning">generated content after an E element

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#gen-content">The ::after
      pseudo-element</a>

     </td><td class="origin">2

    </td></tr><tr>
     <td class="pattern">E.warning

     </td><td class="meaning">an E element whose class is "warning" (the document
      language specifies how class is determined).

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#class-html">Class selectors</a>

     </td><td class="origin">1

    </td></tr><tr>
     <td class="pattern">E#myid

     </td><td class="meaning">an E element with ID equal to "myid".

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#id-selectors">ID selectors</a>

     </td><td class="origin">1

    </td></tr><tr>
     <td class="pattern">E:not(s)

     </td><td class="meaning">an E element that does not match simple selector s

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#negation">Negation pseudo-class</a>

     </td><td class="origin">3

    </td></tr><tr>
     <td class="pattern">E F

     </td><td class="meaning">an F element descendant of an E element

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#descendant-combinators">Descendant
      combinator</a>

     </td><td class="origin">1

    </td></tr><tr>
     <td class="pattern">E &gt; F

     </td><td class="meaning">an F element child of an E element

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#child-combinators">Child combinator</a>

     </td><td class="origin">2

    </td></tr><tr>
     <td class="pattern">E + F

     </td><td class="meaning">an F element immediately preceded by an E element

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#adjacent-sibling-combinators">Adjacent
      sibling combinator</a>

     </td><td class="origin">2

    </td></tr><tr>
     <td class="pattern">E ~ F

     </td><td class="meaning">an F element preceded by an E element

     </td><td class="described"><a href="http://www.w3.org/TR/css3-selectors/#general-sibling-combinators">General
      sibling combinator</a>

     </td><td class="origin">3
  </td></tr></tbody></table>