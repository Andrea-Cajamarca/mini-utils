/*! Mini-utils 2013-10-17 */
define(function(){var a,b,c;return a=function(a,b){var c;return c=document.createEvent("MouseEvents"),c.initMouseEvent(b,a.bubbles,a.cancelable,window,a.detail,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,a.relatedTarget),c},c={_elementIsHovered:!1,handleEvent:function(b){var c,d;switch(b.type){case"mouseover":if(!this._elementIsHovered)return this._elementIsHovered=!0,c=b.currentTarget,c.dispatchEvent(a(b,"rollover"));break;case"mouseout":if(c=b.currentTarget,d=b.relatedTarget,this._elementIsHovered&&!c.contains(d))return this._elementIsHovered=!1,c.dispatchEvent(a(b,"rollout"))}}},b=function(a){return a.addEventListener("mouseover",c),a.addEventListener("mouseout",c)}});