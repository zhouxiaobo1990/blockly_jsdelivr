!function(e){function n(n){for(var o,r,u=n[0],c=n[1],i=n[2],m=0,d=[];m<u.length;m++)r=u[m],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&d.push(l[r][0]),l[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(s&&s(n);d.length;)d.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,u=1;u<t.length;u++){var c=t[u];0!==l[c]&&(o=!1)}o&&(a.splice(n--,1),e=r(r.s=t[0]))}return e}var o={},l={13:0},a=[];function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.e=function(e){var n=[],t=l[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=l[e]=[n,o]}));n.push(t[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=function(e){return r.p+"scripts/"+{45:"48a24918d2c706935180"}[e]+".bundle.js"}(e);var c=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(i);var t=l[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,t[1](c)}l[e]=void 0}};var i=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},r.m=e,r.c=o,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="https://cdn.jsdelivr.net/gh/zhouxiaobo1990/blockly_jsdelivr@0.0.8/dist/",r.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var i=0;i<u.length;i++)n(u[i]);var s=c;a.push([242,0,2,1,4,6,3,5]),t()}({216:function(e,n,t){"use strict";t.r(n),n.default=t.p+"images/file-loader-03d0834b0fdd227cc1db10680f01f848.png"},242:function(e,n,t){"use strict";t.r(n);var o=t(9),l=t(89),a=t.n(l);document.getElementById("helpDialogContents").innerHTML=a.a,o.a({toolbox:'<xml xmlns="https://developers.google.com/blockly/xml">\n  <category name="乌龟" colour="%{BKY_CUSTOM_TURTLE_ENVIRONMENT_MOVE_HUE}">\n    <block type="custom_turtle_environment_move">\n      <value name="DISTANCE">\n        <shadow type="math_number">\n          <field name="NUM">0</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="custom_turtle_environment_move_to_coordinate">\n      <value name="X">\n        <shadow type="math_number">\n          <field name="NUM">0</field>\n        </shadow>\n      </value>\n      <value name="Y">\n        <shadow type="math_number">\n          <field name="NUM">0</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="custom_turtle_environment_turn">\n      <value name="ANGLE">\n        <shadow type="custom_angle">\n          <field name="ANGLE">90</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="custom_turtle_environment_turn_to_angle">\n      <value name="ANGLE">\n        <shadow type="custom_angle">\n          <field name="ANGLE">90</field>\n        </shadow>\n      </value>\n    </block>\n  </category>\n  <category name="画笔" colour="%{BKY_CUSTOM_TURTLE_ENVIRONMENT_PEN_HUE}">\n    <block type="custom_turtle_environment_set_pen">\n    </block>\n    <block type="custom_turtle_environment_set_pen_color">\n      <value name="COLOUR">\n        <shadow type="colour_picker">\n          <field name="COLOUR">#000000</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="custom_turtle_environment_set_pen_width">\n      <value name="WIDTH">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="custom_turtle_environment_fill">\n      <value name="COLOUR">\n        <shadow type="colour_picker">\n          <field name="COLOUR">#000000</field>\n        </shadow>\n      </value>\n    </block>\n  </category>\n  <category name="其他" colour="%{BKY_CUSTOM_HUE}">\n    <block type="custom_turtle_environment_set_visibility">\n    </block>\n    <block type="custom_breakpoint">\n    </block>\n  </category>\n  <sep></sep>\n  <category name="循环" colour="%{BKY_LOOPS_HUE}">\n    <block type="controls_repeat_ext">\n      <value name="TIMES">\n        <shadow type="math_number">\n          <field name="NUM">10</field>\n        </shadow>\n      </value>\n    </block>\n  </category>\n  <category name="数学" colour="%{BKY_MATH_HUE}">\n    <block type="math_number">\n      <field name="NUM">123</field>\n    </block>\n    <block type="math_arithmetic">\n      <value name="A">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n      <value name="B">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_constant"></block>\n  </category>\n  <category name="颜色" colour="%{BKY_COLOUR_HUE}">\n    <block type="colour_picker"></block>\n    <block type="colour_rgb">\n      <value name="RED">\n        <shadow type="math_number">\n          <field name="NUM">100</field>\n        </shadow>\n      </value>\n      <value name="GREEN">\n        <shadow type="math_number">\n          <field name="NUM">50</field>\n        </shadow>\n      </value>\n      <value name="BLUE">\n        <shadow type="math_number">\n          <field name="NUM">0</field>\n        </shadow>\n      </value>\n    </block>\n  </category>\n  <sep></sep>\n  <category name="变量" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>\n</xml>\n',fetchSolution:async function(){return await t.e(45).then(t.t.bind(null,280,3))}})},89:function(e,n,t){var o="<div class=unlock> <p>现在已经解锁了更多代码块：</p> <ol> <li>通过指定红色、绿色、蓝色的数值创建一种颜色。数值必须在0到255之间。</li> </ol> </div> <h2 id=任务目标>任务目标</h2> <p>画一个美国队长的盾牌</p> <p><img src="+t(17)(t(216))+' alt=""></p> <div class=hint> <p>提示：</p> <ol> <li><p>盾牌的各个颜色数值分别为：酒红（红170、绿20、蓝40），鲸鱼蓝（红0、绿0、蓝66）</p> </li> <li><p>五角星的边长（一共10条边）约为五角星半径的0.726542528倍。</p> </li> </ol> </div> <p><strong><em>（记得右键保存截图，之后会用到。）</em></strong></p> <h2 id=扩展目标>扩展目标</h2> <p>发挥你的想象力，让盾牌变得更好看一点吧。</p> ';e.exports=o}});