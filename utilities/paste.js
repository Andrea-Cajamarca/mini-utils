/*! Mini-utils 2013-07-18 */
define(["./promise","./dommy","polyfills/raf"],function(a,b){var c,d,e;return d=b.remove_itself,e=b.remove_new_lines,c=function(b){var c,e,f,g;return g=new a,b.clipboardData?(b.preventDefault(),c=b.clipboardData.getData("text/plain"),g.resolve(c)):window.clipboardData?(b.preventDefault(),c=window.clipboardData.getData("Text"),g.resolve(c)):(f=document.createElement("div"),f.style.opacity="0",f.style.position="fixed",f.setAttribute("contenteditable","true"),document.body.appendChild(f),f.focus(),e=b.currentTarget,requestAnimationFrame(function(){var a,b,h,i;for(c="",i=f.children,b=0,h=i.length;h>b;b++)a=i[b],c+=a.textContent.replace(/\n/g,"")+"\n";return d(f),e.focus(),g.resolve(c)})),g},{clipboard_data:c}});