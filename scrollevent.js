/*! Mini-utils 2014-02-06 */
var __bind=function(a,b){return function(){return a.apply(b,arguments)}};define(["./customevent"],function(){var a,b;return b=function(){function a(a,b){this.target=a,this.idleTime=b,this.endScroll=__bind(this.endScroll,this),this.target.addEventListener("scroll",this)}return a.prototype.isScrolling=!1,a.prototype.timeoutID=null,a.prototype.handleEvent=function(){return this.isScrolling?null!=this.timeoutID&&clearTimeout(this.timeoutID):(this.isScrolling=!0,this.target.dispatchEvent(new CustomEvent("scrollstart"))),this.timeoutID=setTimeout(this.endScroll,this.idleTime)},a.prototype.endScroll=function(){return this.isScrolling=!1,this.timeoutID=null,this.target.dispatchEvent(new CustomEvent("scrollend"))},a}(),a={register:function(a,c){return null==c&&(c=120),new b(a,c)}},{ScrollEvent:a}});