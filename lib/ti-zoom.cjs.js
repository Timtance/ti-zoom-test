"use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)
/**
** Javascript
** 放大镜脚本
** Author： Tance Tui.txh (Tuxiaohua)
** webSite: https://github.com/Timtance
**/}window.tuiZoom=function(t){var o=1,e=100,n=.3,i={},l=1,f=1,s=0,u=0,d=document.createElement("canvas"),c=d.getContext("2d"),r=null,y=null;d.style.cssText="opacity: 1;position: absolute; border: solid; border-radius: 50%; z-index: 2;",d.width=e/n,d.height=e/n,document.body.append(d);t=t||"targetDiv";function h(){d.style.display="none",r=null}function a(){return e/2}this.setBoxObjZoom=function(t){o=t},this.setTarget=function(t){t&&("string"==typeof t?r=document.getElementById(t):(r=t,t.id||(t.id="tuiZoom_"+Math.random()),t=t.id,console.log(r.id)),r&&(f=r.naturalHeight!=r.offsetHeight?r.naturalHeight/r.offsetHeight:1,l=r.naturalWidth!=r.offsetWidth?r.naturalWidth/r.offsetWidth:1,y=r.getBoundingClientRect()))},this.setTarget(t),this.setZoomRate=function(t){n=t,d.width=e/n,d.height=e/n},this.destroy=function(){window.onmousemove=null,document.body.removeChild(d)},this.setZoomStyle=function(t){"object"===_typeof(t)&&Object.keys(t).forEach((function(o){d.style[o]=t[o]}))},window.onmousemove=function(t){if(r){var n=t.clientX,m=t.clientY;n>=y.left&&n<=y.right*o&&m>=y.top&&m<=y.bottom*o?function(t,n){i.left=((t-s)*l-a())/o,i.top=((n-u)*f-a())/o,function(t,o){d.style.left=t-d.width/2+"px",d.style.top=o-d.height/2+"px",d.style.display="inline",console.log(r.id),c.drawImage(r,i.left-y.left*l,i.top-y.top*f,e,e,0,0,d.width,d.height)}(t,n)}(n,m):h()}},h()};