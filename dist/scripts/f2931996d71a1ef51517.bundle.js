!function(e){function n(n){for(var r,a,u=n[0],i=n[1],c=n[2],p=0,f=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(n);f.length;)f.shift()();return l.push.apply(l,c||[]),t()}function t(){for(var e,n=0;n<l.length;n++){for(var t=l[n],r=!0,u=1;u<t.length;u++){var i=t[u];0!==o[i]&&(r=!1)}r&&(l.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={18:0},l=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=function(e){return a.p+"scripts/"+{51:"933f7724c7a5a8fd0b28"}[e]+".bundle.js"}(e);var i=new Error;l=function(n){u.onerror=u.onload=null,clearTimeout(c);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+l+")",i.name="ChunkLoadError",i.type=r,i.request=l,t[1](i)}o[e]=void 0}};var c=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="https://cdn.jsdelivr.net/gh/zhouxiaobo1990/blockly_jsdelivr@0.0.8/dist/",a.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var s=i;l.push([235,0,2,1,4,6,3,5]),t()}({213:function(e,n,t){"use strict";t.r(n),n.default=t.p+"images/file-loader-c8126e26a5f2ea6f48f4511bd591a4c2.png"},235:function(e,n,t){"use strict";t.r(n);var r=t(9),o=t(82),l=t.n(o);document.getElementById("helpDialogContents").innerHTML=l.a,r.a({toolbox:'<xml xmlns="https://developers.google.com/blockly/xml">\n  <block type="custom_turtle_environment_move">\n    <value name="DISTANCE">\n      <shadow type="math_number">\n        <field name="NUM">100</field>\n      </shadow>\n    </value>\n  </block>\n  <block type="custom_turtle_environment_turn">\n    <value name="ANGLE">\n      <shadow type="custom_angle">\n        <field name="ANGLE">90</field>\n      </shadow>\n    </value>\n  </block>\n  <block type="custom_turtle_environment_set_pen">\n  </block>\n  <block type="controls_repeat_ext">\n    <value name="TIMES">\n      <shadow type="math_number">\n        <field name="NUM">10</field>\n      </shadow>\n    </value>\n  </block>\n</xml>\n',fetchSolution:async function(){return await t.e(51).then(t.t.bind(null,272,3))}})},82:function(e,n,t){var r="<h2 id=任务目标>任务目标</h2> <p>画出下面的房子。</p> <p><img src="+t(17)(t(213))+' alt=""></p> <h2 id=扩展目标>扩展目标</h2> <p>发挥你的想象力，让房子变得更好看一点吧。</p> ';e.exports=r}});