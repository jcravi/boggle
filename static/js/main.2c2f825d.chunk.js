(this.webpackJsonpboggle=this.webpackJsonpboggle||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"a":{"dies4":[["T","T","R","E","Y","L"],["A","S","P","F","K","F"],["N","H","N","L","R","Z"],["R","E","T","W","H","W"],["A","W","T","O","O","T"],["J","O","O","B","B","A"],["M","U","O","C","I","T"],["I","U","N","H","M","Qu"],["S","H","A","P","C","O"],["E","S","U","E","N","I"],["S","S","I","O","E","T"],["E","G","N","W","H","E"],["A","G","A","E","E","N"],["R","Y","V","D","L","E"],["D","T","Y","T","I","S"],["R","L","I","E","X","D"]]}}')},22:function(e,n,t){e.exports=t(42)},40:function(e,n){},42:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(11),c=t.n(o),i=t(3),u=t(12),l=t(1),f=t(2),s=t(4),d=t(17),p=t.n(d),b=t(18),v="SELECT_START",m="SELECT",y="SELECT_END",g="TILE_SELECT",O="TIME_END",h="NEW_GAME",E="SET_NEXT_SEED",w="START_GAME",x=4,j="0123456789abcdefghijklmnopqrstuvwxyz",S={COLUMNS:["a","b","c","d"],ROWS:["1","2","3","4"]},T=["N","M","W","Z"],P="Ready?",k="Steady ...",L="GO!",A=function(e,n){return Math.floor(e()*n)},N=function(e){for(var n="",t=0;t<x;t++)n+=j[A(e,j.length)];return n},M=function(e){for(var n=e.toLowerCase(),t=p.a.alea(n),r=function(e){for(var n=Array.from(Array(16).keys()),t=n.length-1;t>0;t--){var r=A(e,t+1),a=[n[r],n[t]];n[t]=a[0],n[r]=a[1]}return n}(t),a=[],o=0,c=b.a["dies".concat(4)],i=0;i<4;i++){a[i]=[];for(var u=0;u<4;u++){var l=c[r[o++]][A(t,6)];a[i][u]=l}}return{board:a,nextSeed:N(t)}},C=function(e,n){return!(e.length<3||n.includes(e))},I=function(e,n){var t=z(e.id),r=t.column,a=t.row,o=z(n.id),c=o.column,i=o.row,u=Math.abs(r-c)<=1,l=Math.abs(a-i)<=1;return u&&l},z=function(e){var n=e.split(""),t=Object(s.a)(n,2),r=t[0],a=t[1];return{column:S.COLUMNS.indexOf(r),row:S.ROWS.indexOf(a)}},R=function(e,n){return e.length>1&&e[e.length-2].id===n.id},W=function(e,n){return e.map((function(e){return e.id})).includes(n.id)};function D(){var e=Object(l.a)(["\n  cursor: pointer;\n  margin: 0 auto;\n  width: 75%;\n  height: 75%;\n  font-size: ","px;\n  text-decoration: ",";\n"]);return D=function(){return e},e}function G(){var e=Object(l.a)(["\n  cursor: pointer;\n  box-sizing: border-box;\n  text-align: center;\n  vertical-align: middle;\n  display: table-cell;\n  border: 1px solid black;\n  border-radius: ","px;\n  background-color: ",";\n  width: ","px;\n  height: ","px;\n"]);return G=function(){return e},e}var U=f.a.div(G(),(function(e){return e.inPlay?20:8}),(function(e){return e.selected?"yellow":"white"}),(function(e){var n=e.inPlay,t=e.size;return n?t:.4*t}),(function(e){var n=e.inPlay,t=e.size;return n?t:.4*t})),_=f.a.div(D(),(function(e){var n=e.inPlay,t=e.size;return n?t-50:.4*(t-50)}),(function(e){return e.underline?"underline":"none"})),H={tileSelect:function(e){return{type:g,current:e}}},B=Object(i.b)((function(e){return{coord:e.coord,selecting:e.selecting,currentTiles:e.currentTiles,inPlay:e.inPlay}}),H)((function(e){var n=e.tile,t=e.size,o=e.coord,c=e.selecting,i=e.currentTiles,u=e.inPlay,l=e.tileSelect,f=T.includes(n.value),s=Object(r.createRef)(),d=!!u&&i.map((function(e){return e.id})).includes(n.id);return Object(r.useEffect)((function(){var e=s.current;c&&e&&function(e,n){var t=e.offsetLeft<n.x&&n.x<e.offsetLeft+e.offsetWidth,r=e.offsetTop<n.y&&n.y<e.offsetTop+e.offsetHeight;return t&&r}(e,o)&&l(n)}),[o,c,n,l,s]),a.a.createElement(U,{size:t,selected:d,inPlay:u},a.a.createElement(_,{ref:s,size:t,underline:f,inPlay:u},n.value))})),F=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}};function J(){var e=Object(l.a)(["\n  display: table-row;\n"]);return J=function(){return e},e}function Y(){var e=Object(l.a)(["\n  cursor: pointer;\n  position: fixed;\n  top: 30px;\n  right: 5px;\n  display: table;\n  border-collapse: separate;\n  border-spacing: 4px;\n  background-color: #3366ff;\n  border-radius: 4px;\n"]);return Y=function(){return e},e}function X(){var e=Object(l.a)(["\n  display: table;\n  margin: auto;\n  border-collapse: separate;\n  border-spacing: 4px;\n  background-color: #3366ff;\n  border-radius: 20px;\n  touch-action: none;\n"]);return X=function(){return e},e}var V=f.a.div(X()),Z=f.a.div(Y()),q=f.a.div(J()),K={onPointerDown:function(e){return{type:v}},onPointerMove:function(e){return{type:m,coord:{x:e.clientX,y:e.clientY}}},onPointerUp:function(e){return{type:y}},setNextSeed:function(e){return{type:E,seed:e}}},Q=Object(i.b)((function(e){return{inPlay:e.inPlay,stateSeed:e.seed}}),K)((function(e){var n=e.inPlay,t=e.stateSeed,o=e.onPointerDown,c=e.onPointerMove,i=e.onPointerUp,u=e.setNextSeed,l=new URLSearchParams(window.location.search).get("seed"),f=M(l||t),d=f.board,p=f.nextSeed,b=function(){var e=Object(r.useState)(F()),n=Object(s.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){function e(){a(F())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}(),v=b.height,m=b.width,y=(m<v?m:v)/4-(m<v?0:10),g=n?V:Z;return u(p),a.a.createElement(g,{onPointerDown:o,onPointerMove:function(e){e.preventDefault(),c(e)},onPointerUp:i},d.map((function(e,n){return a.a.createElement(q,{key:n},e.map((function(e,t){var r=function(e,n){return S.COLUMNS[e]+S.ROWS[n]}(t,n);return a.a.createElement(B,{key:r,tile:{id:r,value:e},size:y})})))})))}));function $(){var e=Object(l.a)(["\n  font-family: 'Lucida Console', Monaco, monospace;\n  font-weight: bold;\n  position: fixed;\n  top: 5px;\n  right: 5px;\n"]);return $=function(){return e},e}var ee=f.a.div($()),ne={timerEnd:function(){return{type:O}}},te=Object(i.b)(null,ne)((function(e){var n=e.timerEnd,t=Object(r.useState)(120),o=Object(s.a)(t,2),c=o[0],i=o[1];Object(r.useEffect)((function(){var e=0;return c>0?e=setInterval((function(){i((function(e){return e-1}))}),1e3):c<=0&&(n(),clearInterval(e)),function(){return clearInterval(e)}}),[c,n]);var u=function(e){var n=(e%60+"").padStart(2,"0");return Math.floor(e/60)+":"+n}(c);return a.a.createElement(ee,null,u)})),re=function(e){return e.map((function(e){return e.value})).join("")},ae=function(e){return e.length>0?e[e.length-1]:null};function oe(){var e=Object(l.a)(["\n  margin-bottom: 1em;\n  margin-top: 1em;\n  box-shadow: inset 0px 1px 0px 0px #ffffff;\n  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);\n  background-color: #ffffff;\n  border-radius: 6px;\n  border: 1px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  color: #666666;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffffff;\n  :hover {\n    background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);\n    background-color: #f6f6f6;\n  }\n  :active {\n    position: relative;\n    top: 1px;\n  }\n"]);return oe=function(){return e},e}function ce(){var e=Object(l.a)(["\n  cursor: pointer;\n  font-size: 1.2em;\n  margin: 0.5em 0;\n  text-decoration: ",";\n"]);return ce=function(){return e},e}function ie(){var e=Object(l.a)([""]);return ie=function(){return e},e}function ue(){var e=Object(l.a)(["\n  float: left;\n"]);return ue=function(){return e},e}var le=f.a.div(ue()),fe=f.a.ol(ie()),se=f.a.li(ce(),(function(e){return e.cancelled?"line-through":"none"})),de=f.a.button(oe()),pe={newGame:function(){return{type:h}}},be=Object(i.b)((function(e){return{words:e.words}}),pe)((function(e){var n=e.words,t=e.newGame,o=n.map((function(e){return{word:re(e),cancelled:!1}})).sort((function(e,n){return e.word.localeCompare(n.word)})),c=Object(r.useState)(o),i=Object(s.a)(c,2),u=i[0],l=i[1],f=Object(r.useState)(!1),d=Object(s.a)(f,2),p=d[0],b=d[1],v=u.filter((function(e){return!e.cancelled})).map((function(e){return function(e){switch(e.length){case 3:case 4:return 1;case 5:return 2;case 6:return 3;case 7:return 5;default:return 11}}(e.word)})).reduce((function(e,n){return e+n}),0);return a.a.createElement(le,null,a.a.createElement("div",null,"Click on words that are invalid or taken"),u.length>0&&a.a.createElement(fe,null,u.map((function(e,n){return a.a.createElement(se,{key:"word-".concat(n),cancelled:e.cancelled,onClick:function(e){e.preventDefault(),p||function(e,n,t){var r=Array.from(e);r[t].cancelled=!r[t].cancelled,n(r)}(u,l,n)}},e.word.toLowerCase())}))),p?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{marginTop:"0.5em"}},"Score: ",v),a.a.createElement("div",{style:{marginTop:"0.5em"}},function(e){return 0===e?":( Better luck next time!":e>0&&e<10?"Nice!":e>=10&&e<20?"Oh look! Double digits":"Respect!"}(v)),a.a.createElement(de,{autoFocus:!0,onClick:t},"New Game")):a.a.createElement(de,{onClick:function(){return b(!0)}},"Tally"))}));function ve(){var e=Object(l.a)(["\n  font-size: 2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n"]);return ve=function(){return e},e}var me=f.a.div(ve()),ye={startGame:function(){return{type:w}}},ge=Object(i.b)(null,ye)((function(e){var n=e.startGame,t=Object(r.useState)(P),o=Object(s.a)(t,2),c=o[0],i=o[1],u=Object(r.useState)(3),l=Object(s.a)(u,2),f=l[0],d=l[1];return Object(r.useEffect)((function(){var e=0;return f>0?(1.5===f?i(k):.5===f&&i(L),e=setInterval((function(){d((function(e){return e-.5}))}),500)):f<=0&&(clearInterval(e),n()),function(){return clearInterval(e)}}),[f,n,i,d]),a.a.createElement(me,null,c)}));function Oe(){var e=Object(l.a)(["\n  padding-left: 10px;\n  padding-right: 10px;\n  background-color: #00ff99;\n  border-radius: 10px;\n  opacity: ",";\n  transition: opacity ","ms linear;\n"]);return Oe=function(){return e},e}function he(){var e=Object(l.a)(["\n  width: 100%;\n  text-align: center;\n"]);return he=function(){return e},e}var Ee=f.a.div(he()),we=f.a.span(Oe(),(function(e){return e.show?"1":"0"}),(function(e){return e.show?"0":"1000"})),xe=Object(i.b)((function(e){return{word:e.latestWord,words:e.words}}))((function(e){var n=e.word,t=e.words,o=Object(r.useState)(!0),c=Object(s.a)(o,2),i=c[0],u=c[1],l=Object(r.useState)("Good Luck!"),f=Object(s.a)(l,2),d=f[0],p=f[1];return Object(r.useEffect)((function(){u(!0),0===t.length?p("Good Luck!"):p(n);var e=setInterval((function(){u(!1)}),1e3);return function(){return clearInterval(e)}}),[n,t]),a.a.createElement(Ee,null,a.a.createElement(we,{show:i},d))}));function je(){var e=Object(l.a)(["\n  font-family: Verdana;\n  font-color: black;\n"]);return je=function(){return e},e}var Se=f.a.div(je()),Te=Object(i.b)((function(e){return{displaySplash:e.displaySplash,inPlay:e.inPlay}}))((function(e){var n=e.displaySplash,t=e.inPlay;return a.a.createElement(Se,null,n?a.a.createElement(ge,null):a.a.createElement(a.a.Fragment,null,t?a.a.createElement("div",{style:{marginBottom:"5px"}},a.a.createElement(xe,null),a.a.createElement(te,null)):a.a.createElement(be,null),a.a.createElement(Q,null)))})),Pe=t(6),ke={displaySplash:!0,inPlay:!1,selecting:!1,coord:{x:0,y:0},currentTiles:new Array,latestWord:"",words:new Array,seed:"blah",nextSeed:""},Le=Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case v:return e.inPlay?Object(Pe.a)({},e,{selecting:!0}):e;case m:return e.inPlay&&e.selecting?Object(Pe.a)({},e,{coord:n.coord}):e;case g:if(e.inPlay){var t=ae(e.currentTiles);if(null!==t){if(t.id===n.current.id)return e;if(R(e.currentTiles,n.current)){var r=Array.from(e.currentTiles);return r.pop(),Object(Pe.a)({},e,{currentTiles:r})}if(W(e.currentTiles,n.current))return e;if(I(t,n.current)){var a=Array.from(e.currentTiles);return a.push(n.current),Object(Pe.a)({},e,{currentTiles:a})}return e}var o=Array.from(e.currentTiles);return o.push(n.current),Object(Pe.a)({},e,{currentTiles:o})}return e;case y:if(e.inPlay&&e.selecting){var c=re(e.currentTiles),i=e.words;return C(c,i.map((function(e){return re(e)})))?(i.push(e.currentTiles),Object(Pe.a)({},e,{selecting:!1,currentTiles:new Array,words:i,latestWord:c,coord:{x:0,y:0}})):Object(Pe.a)({},e,{selecting:!1,currentTiles:new Array,coord:{x:0,y:0}})}return e;case O:return Object(Pe.a)({},e,{inPlay:!1,selecting:!1});case h:var u=new URLSearchParams(window.location.search);return u.set("seed",e.nextSeed),window.location.search=u.toString(),Object(Pe.a)({},ke,{seed:e.nextSeed});case E:return Object(Pe.a)({},e,{nextSeed:n.seed});case w:return Object(Pe.a)({},e,{inPlay:!0,displaySplash:!1});default:return e}})),Ae=function(){return a.a.createElement(i.a,{store:Le},a.a.createElement(Te,null))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ae,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.2c2f825d.chunk.js.map