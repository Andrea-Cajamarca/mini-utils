/*! Mini-utils 2013-07-18 */
define(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;return l=function(a,b){var c;return c=a.dataset,c?b in c:a.hasAttribute("data-"+b)},k=function(a,b){var c;return c=a.dataset,c?c[b]:a.getAttribute("data-"+b)},j=function(a){return null!=a.textContent.match(/^\s*$/)},n=function(a,b){var c;return c=b.parentNode,c.insertBefore(a,b)},m=function(a,b){var c;return c=b.parentNode,c.insertBefore(a,b.nextSibling)},s=function(a,b){var c;return c=b.parentNode,c.replaceChild(a,b)},r=function(a){var b;return b=a.parentNode,a.parentNode.removeChild(a),0===b.childNodes.length?r(b):void 0},q=function(a,b){return null==b&&(b=document),Array.prototype.slice.call(b.querySelectorAll(a))},o=function(a,b,c){return a?a.addEventListener(b,c):console.log("target is null")},t=function(a,b,c){return a?a.removeEventListener(b,c):console.log("target is null")},h="phrasing",d="heading",i="sectioning",c="flow",e="interactive",f="metadata",b="embedded",g={DT:[h],DD:[c],P:[h],H1:[h],H2:[h],H3:[h],H4:[h],H5:[h],H6:[h],ARTICLE:[c],ASIDE:[c],NAV:[c],SECTION:[c],FIGCAPTION:[c]},a={DT:[c],DD:[c],P:[c],H1:[c,d],H2:[c,d],H3:[c,d],H4:[c,d],H5:[c,d],H6:[c,d],ARTICLE:[c,i],ASIDE:[c,i],NAV:[c,i],SECTION:[c,i],FIGCAPTION:[]},p=function(b,c){return g[c].some(function(c){return-1!==a[b].indexOf(c)})},{listen:o,unlisten:t,qsa:q,remove_itself:r,element_is_empty:j,insert_before:n,insert_after:m,replace:s,from_dataset:k,in_dataset:l,permits_element:p}});