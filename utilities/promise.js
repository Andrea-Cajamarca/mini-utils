/*! Mini-utils 2013-07-25 */
var __slice=[].slice;define(function(){var a,b,c,d;return a=0,c=1,d=2,b=function(){function b(){this.status=a,this.response=null,this.resolvedCallbacks=[],this.rejectedCallbacks=[]}return b.prototype.then=function(b){return this.status===d?b.apply(null,this.values):this.status===a&&this.resolvedCallbacks.push(b),this},b.prototype.fail=function(b){return this.status===c?b.apply(null,this.values):this.status===a&&this.rejectedCallbacks.push(b),this},b.prototype.resolve=function(){var a,b,e,f,g;if(b=1<=arguments.length?__slice.call(arguments,0):[],this.values=b,this.status===d)throw"Promise already resolved!";if(this.status===c)throw"Can't resolve a promise that has been rejected!";for(g=this.resolvedCallbacks,e=0,f=g.length;f>e;e++)a=g[e],a.apply(null,this.values);return this.resolvedCallbacks.length=0,this.resolvedCallbacks=null,this.status=d},b.prototype.reject=function(){var a,b,e,f,g;if(b=1<=arguments.length?__slice.call(arguments,0):[],this.values=b,this.status===c)throw"Promise already rejected!";if(this.status===d)throw"Can't reject a promise that has been resolved!";for(g=this.rejectedCallbacks,e=0,f=g.length;f>e;e++)a=g[e],a.apply(null,this.values);return this.rejectedCallbacks.length=0,this.rejectedCallbacks=null,this.status=c},b.all=function(a){var c,d,e,f,g,h,i;for(d=[],e=function(){var a;return a=1<=arguments.length?__slice.call(arguments,0):[],d.push(a),c++,c===f?g.resolve(d):void 0},f=a.length,c=0,h=0,i=a.length;i>h;h++)g=a[h],g.then(e);return g=new b},b}()});