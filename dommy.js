/*! Mini-utils 2014-02-06 */
define(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;return d=function(){function a(a){this.element=a,this.classList=a.classList}var b,c,d,e;return b=function(a){return a.className.split(/\s+/)},d=function(a,c){return-1!==b(a).indexOf(c)},c=function(a,b){return a.className+=" "+b},e=function(a,b,c){return b.splice(c,1),a.className=b.join(" ")},a.prototype.contains=function(a){var b;return b=this.classList,b?b.contains(a):d(this.element,a)},a.prototype.add=function(a){var b,e;return b=this.classList,b?b.add(a):(e=this.element,d(e,a)||c(e,a)),this},a.prototype.remove=function(a){var c,d,f,g;return c=this.classList,c?c.remove(a):(g=this.element,f=b(g),d=f.indexOf(a),-1!==d&&e(g,f,d)),this},a.prototype.toggle=function(a){var c,d,f,g;return c=this.classList,c?c.toggle(a):(g=this.element,f=b(g),d=f.indexOf(a),-1===d?add_class(g,a):e(g,f,d))},a.prototype.item=function(a){return b(this.element).filter(function(a){return a})[a]},a}(),e=function(){function a(a){this.element=a,this.dataset=this.element.dataset}return a.prototype.contains=function(a){var b;return b=this.element.dataset,b?a in b:this.element.hasAttribute("data-"+a)},a.prototype.get=function(a){var b;return b=this.element.dataset,b?b[a]:this.element.getAttribute("data-"+a)},a.prototype.set=function(a,b){var c;return c=this.element.dataset,b?c?c[a]=b:this.element.setAttribute("data-"+a,b):c?delete c[a]:this.element.removeAttribute("data-"+a)},a}(),p=function(a,b){var c;return c=b.parentNode,c.insertBefore(a,b)},o=function(a,b){var c;return c=b.parentNode,c.insertBefore(a,b.nextSibling)},v=function(a,b){var c;return c=b.parentNode,c.replaceChild(a,b)},u=function(a){var b;return b=a.parentNode,a.parentNode.removeChild(a),0===b.childNodes.length?u(b):void 0},a=function(a,b){return null==b&&(b=document),b.querySelector(a)},b=function(a,b){return null==b&&(b=document),Array.prototype.slice.call(b.querySelectorAll(a))},s=function(a,b,c){return a.addEventListener(b,c)},w=function(a,b,c){return a.removeEventListener(b,c)},n=function(a,b){return a.parentNode.querySelector(b)===a},r=function(a){return n(a,":hover")},q=function(a){return n(a,":empty")},l="phrasing",h="heading",m="sectioning",g="flow",i="interactive",j="metadata",f="embedded",k={DT:[l],DD:[g],P:[l],H1:[l],H2:[l],H3:[l],H4:[l],H5:[l],H6:[l],ARTICLE:[g],ASIDE:[g],NAV:[g],SECTION:[g],FIGCAPTION:[g]},c={DT:[g],DD:[g],P:[g],H1:[g,h],H2:[g,h],H3:[g,h],H4:[g,h],H5:[g,h],H6:[g,h],ARTICLE:[g,m],ASIDE:[g,m],NAV:[g,m],SECTION:[g,m],FIGCAPTION:[]},t=function(a,b){return k[b].some(function(b){return-1!==c[a].indexOf(b)})},{ClassList:d,DataSet:e,listen:s,unlisten:w,$:a,$$:b,remove_itself:u,insert_before:p,insert_after:o,replace:v,permits_element:t,is_empty:q,is_hover:r}});