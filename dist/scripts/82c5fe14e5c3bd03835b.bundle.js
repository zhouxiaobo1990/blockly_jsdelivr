!function(e){function n(n){for(var o,a,u=n[0],i=n[1],c=n[2],p=0,d=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(s&&s(n);d.length;)d.shift()();return l.push.apply(l,c||[]),t()}function t(){for(var e,n=0;n<l.length;n++){for(var t=l[n],o=!0,u=1;u<t.length;u++){var i=t[u];0!==r[i]&&(o=!1)}o&&(l.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},r={32:0},l=[];function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=function(e){return a.p+"scripts/"+{68:"d23b82117b01c7339a27"}[e]+".bundle.js"}(e);var i=new Error;l=function(n){u.onerror=u.onload=null,clearTimeout(c);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,t[1](i)}r[e]=void 0}};var c=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="https://cdn.jsdelivr.net/gh/zhouxiaobo1990/blockly_jsdelivr@0.0.8/dist/",a.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var s=i;l.push([237,0,2,1,4,6,3,5]),t()}({237:function(e,n,t){"use strict";t.r(n);var o=t(9),r=t(84),l=t.n(r);document.getElementById("helpDialogContents").innerHTML=l.a,o.a({toolbox:'<xml xmlns="https://developers.google.com/blockly/xml">\n  <block type="custom_turtle_environment_move">\n    <value name="DISTANCE">\n      <shadow type="math_number">\n        <field name="NUM">100</field>\n      </shadow>\n    </value>\n  </block>\n  <block type="custom_turtle_environment_turn">\n    <value name="ANGLE">\n      <shadow type="custom_angle">\n        <field name="ANGLE">90</field>\n      </shadow>\n    </value>\n  </block>\n  <block type="custom_turtle_environment_set_pen">\n  </block>\n  <block type="custom_turtle_environment_set_pen_color">\n    <value name="COLOUR">\n      <shadow type="colour_picker">\n        <field name="COLOUR">#000000</field>\n      </shadow>\n    </value>\n  </block>\n  <block type="custom_turtle_environment_set_pen_width">\n    <value name="WIDTH">\n      <shadow type="math_number">\n        <field name="NUM">1</field>\n      </shadow>\n    </value>\n  </block>\n  <block type="custom_turtle_environment_fill">\n    <value name="COLOUR">\n      <shadow type="colour_picker">\n        <field name="COLOUR">#000000</field>\n      </shadow>\n    </value>\n  </block>\n  <block type="controls_repeat_ext">\n    <value name="TIMES">\n      <shadow type="math_number">\n        <field name="NUM">10</field>\n      </shadow>\n    </value>\n  </block>\n</xml>\n',fetchSolution:async function(){return await t.e(68).then(t.t.bind(null,274,3))}})},44:function(e,n,t){"use strict";t.r(n),n.default=t.p+"images/file-loader-f0ab166f2dc06b3554f6c9606e023617.png"},84:function(e,n,t){var o="<h2 id=任务目标>任务目标</h2> <p>画出下面的月亮。</p> <p><img src="+t(17)(t(44))+' alt=""></p> <p><strong><em>（记得右键保存截图，之后会用到。）</em></strong></p> <h2 id=扩展目标>扩展目标</h2> <p>发挥你的想象力，让月亮变得更好看一点吧。</p> ';e.exports=o}});