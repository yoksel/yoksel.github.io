(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+KJH":function(e,t,a){},INYr:function(e,t,a){"use strict";var n=a("XKFU"),r=a("CkkT")(6),i="findIndex",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),n(n.P+n.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(i)},lBEk:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("INYr");var n=a("q1tI"),r=a.n(n),i=a("Wbzz");a("+KJH");function s(e){var t=e.items,a=e.currentTag,s=void 0===a?null:a,l=e.mod,c=void 0===l?"":l,o=e.type,d=void 0===o?"list":o;if(0!==t.length){var m="posts-list";return c&&(m+=" posts-list--"+c),d&&"list"!==d&&(m+=" posts-list--"+d,"cards"===d&&(m+=" no-bullets")),r.a.createElement("ul",{className:m},t.map((function(e){var t=e.node,a=t.excerpt,l=t.frontmatter,c=t.fields,o=t.id,m=l.title,u=l.desc,f=l.tags,p=c.date,v=c.url,E=c.isArchived;u=u||a;var h="post-item";(function(e,t){if(!t)return!1;return e.findIndex((function(e){return e===t}))<0})(f=f||[],s)&&(h+=" hidden");var k=E?r.a.createElement("span",{className:"posts-list__archive-mark faded-text"},"в архиве"):"",N=r.a.createElement(n.Fragment,null,r.a.createElement(i.a,{to:v},m),k);return"cards"===d&&(N=r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"post-item__title"},r.a.createElement(i.a,{to:v},l.title)),r.a.createElement("div",{className:"post-item__text"},u),r.a.createElement("div",{className:"post-item__footer"},r.a.createElement(i.a,{to:v},"Читать дальше →"),r.a.createElement("div",{className:"post-item__date faded-text"},p)))),r.a.createElement("li",{className:h,key:o},N)})))}}},nRki:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l})),a.d(t,"query",(function(){return c}));var n=a("q1tI"),r=a.n(n),i=a("Yyp9"),s=a("lBEk");function l(e){var t=e.data,a=e.path,n={title:"Архив",slug:"archive",hideComments:!0};return r.a.createElement(i.a,{title:"Архив",path:a,pageData:n},r.a.createElement("div",{className:"posts"},r.a.createElement(s.a,{items:t.allMarkdownRemark.edges,type:"cards"})))}var c="4186575098"}}]);