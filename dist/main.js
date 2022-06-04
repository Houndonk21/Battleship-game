(()=>{"use strict";function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.length=e,this.ship=this.createShip()}var r,n;return r=t,(n=[{key:"createShip",value:function(){for(var e=[],t=this.length;t>0;)e.push({hit:!1}),t--;return e}},{key:"getShip",value:function(){return this.ship}},{key:"getShipLength",value:function(){return this.ship.length}},{key:"hit",value:function(e){this.ship[e].hit=!0}},{key:"checkHit",value:function(e){return 1==e.hit}},{key:"isSunk",value:function(){return!!this.ship.every(this.checkHit)}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gameBoardArray=this.createGameBoard(),this.missedAttacks=[]}var t,n;return t=e,(n=[{key:"createGameBoard",value:function(){for(var e=[],t=[],r=0;r<10;r++){for(var n=0;n<10;n++)t.push({shipName:void 0,shipIndex:void 0});e.push(t),t=[]}return e}},{key:"getGameBoard",value:function(){return this.gameBoardArray}},{key:"chechIfShipPlacementIsValid",value:function(e,t,r){if(t>10||t<0||r>10||r<0||r+e>10)return!1;for(var n=r;n<r+e;n++)if(null!=this.gameBoardArray[n][t].shipName)return!1;return!0}},{key:"placeShip",value:function(e,t,r){if(this.chechIfShipPlacementIsValid(e.getShipLength(),t,r))for(var n=0;n<e.getShipLength();n++)this.gameBoardArray[r+n][t].shipName=e,this.gameBoardArray[r+n][t].shipIndex=n}},{key:"receiveAttack",value:function(e,t){null==this.gameBoardArray[t][e].shipName?this.missedAttacks.push({x:e,y:t}):this.gameBoardArray[t][e].shipName.hit(this.gameBoardArray[t][e].shipIndex)}},{key:"getMissedAttacksArray",value:function(){return this.missedAttacks}},{key:"checkIfAllShipSunk",value:function(){var e=!0;return this.gameBoardArray.forEach((function(t){t.forEach((function(t){t.shipName&&0==t.shipName.isSunk()&&(e=!1)}))})),e}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.turn=!0}var t,r;return t=e,(r=[{key:"getName",value:function(){return this.name}},{key:"setName",value:function(e){this.name=e}},{key:"endTurn",value:function(e){1==this.turn&&(this.turn=!1,e.startTurn())}},{key:"startTurn",value:function(){0==this.turn&&(this.turn=!0)}},{key:"checkTurn",value:function(){return this.turn}},{key:"attack",value:function(e,t,r,n){this.checkTurn()&&(n.receiveAttack(e,t),this.endTurn(r))}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function l(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(i,e);var t,r,n,a,o=(n=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(n);if(a){var r=s(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return l(this,e)});function i(e,t,r){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this,e,r)).turn=!1,n.enemyPlayer=t,n.enemyBoard=r,n.attackArray=[],n}return t=i,(r=[{key:"generateRandomAttack",value:function(){var e=this;this.checkTurn()&&function(){for(var t={x:void 0,y:void 0};;){var r=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());if(t.x=r,t.y=n,!e.attackArray.some((function(e){return e.x==t.x&&e.y==t.y}))){e.attackArray.push(t),e.attack(t.x,t.y,e.enemyPlayer,e.enemyBoard);break}}}()}},{key:"getAttackArray",value:function(){return this.attackArray}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o),d=document.querySelector("#battleship"),f=document.querySelector("#carrier"),y=document.querySelector("#submarine"),p=document.querySelector("#destroyer"),m=document.querySelector("#patrolboat"),v=document.querySelector(".addShips"),b=document.querySelector(".aiSide"),g=document.querySelector("#modal"),k=document.querySelector("#nameInput"),S=document.querySelector("#modalContent"),w=document.querySelector("#playerName"),A=(document.querySelector("#endGameContent"),document.querySelector("#endGameModal")),B=document.querySelector("#playAgainButton"),x=document.querySelector("#winnerText"),I=new t(5),P=new t(4),q=new t(3),N=new t(3),O=new t(2),E=new t(5),j=new t(4),C=new t(3),T=new t(3),L=new t(2),M=new n,R=new n,V=new o("Kuzuha"),_=new h("AI",V,M);function D(e){for(;;){var t;if(t=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],R.chechIfShipPlacementIsValid(e.getShipLength(),t[0],t[1])){R.placeShip(e,t[0],t[1]);break}}}function G(e){e.addEventListener("dragstart",(function(e){e.dataTransfer.setData("text/plain",e.target.id)}))}function H(e){var t=e.dataTransfer.getData("text"),r=parseInt(e.target.getAttribute("data-x")),n=parseInt(e.target.getAttribute("data-y"));switch(t){case"battleship":if(M.chechIfShipPlacementIsValid(P.length,r,n)){M.placeShip(P,r,n),K("playerBoard",M);var a=document.querySelector("#".concat(t));v.removeChild(a),v.childNodes.length<=6&&(v.style.display="none",b.style.display="flex")}break;case"carrier":if(M.chechIfShipPlacementIsValid(I.length,r,n)){M.placeShip(I,r,n),K("playerBoard",M);var o=document.querySelector("#".concat(t));v.removeChild(o),v.childNodes.length<=6&&(v.style.display="none",b.style.display="flex")}break;case"submarine":if(M.chechIfShipPlacementIsValid(N.length,r,n)){M.placeShip(N,r,n),K("playerBoard",M);var i=document.querySelector("#".concat(t));v.removeChild(i),v.childNodes.length<=6&&(v.style.display="none",b.style.display="flex")}break;case"destroyer":if(M.chechIfShipPlacementIsValid(q.length,r,n)){M.placeShip(q,r,n),K("playerBoard",M);var c=document.querySelector("#".concat(t));v.removeChild(c),v.childNodes.length<=6&&(v.style.display="none",b.style.display="flex")}break;case"patrolboat":if(M.chechIfShipPlacementIsValid(O.length,r,n)){M.placeShip(O,r,n),K("playerBoard",M);var u=document.querySelector("#".concat(t));v.removeChild(u),v.childNodes.length<=6&&(v.style.display="none",b.style.display="flex")}}}function X(e){for(var t=document.querySelector(".".concat(e)),r=0;r<10;r++)for(var n=0;n<10;n++){var a=document.createElement("div");a.classList.add("cell"),a.setAttribute("data-x",n),a.setAttribute("data-y",r),"aiBoard"==e?a.addEventListener("click",(function(e){var t,r,n;t=e.target,r=t.getAttribute("data-x"),n=t.getAttribute("data-y"),V.attack(r,n,_,R),K("aiBoard",R),t.style.pointerEvents="none",R.checkIfAllShipSunk()&&z(V.getName()),_.generateRandomAttack(),K("playerBoard",M),M.checkIfAllShipSunk()&&z("AI")})):"playerBoard"==e&&(a.addEventListener("dragover",(function(e){e.preventDefault()})),a.addEventListener("drop",(function(e){e.preventDefault(),H(e)}))),t.appendChild(a)}}function z(e){A.style.display="block",x.textContent="".concat(e," is the winner!!")}function K(e,t){var r=t.getGameBoard(),n=t.getMissedAttacksArray();r.forEach((function(t,r){t.forEach((function(t,n){if(t.shipName)if(1==t.shipName.checkHit(t.shipName.getShip()[t.shipIndex])){var a=document.querySelector(".".concat(e,' [data-x="').concat(n,'"][data-y ="').concat(r,'"]'));a.textContent="X",a.classList.add("hit"),a.classList.remove("occupied")}else 0==t.shipName.checkHit(t.shipName.getShip()[t.shipIndex])&&"playerBoard"==e&&document.querySelector(".".concat(e,' [data-x="').concat(n,'"][data-y ="').concat(r,'"]')).classList.add("occupied")}))})),n.forEach((function(t){var r=document.querySelector(".".concat(e,' [data-x="').concat(t.x,'"][data-y ="').concat(t.y,'"]'));r.textContent="X",r.classList.add("missed")}))}G(d),G(f),G(y),G(p),G(m),D(E),D(j),D(C),D(T),D(L),X("playerBoard"),X("aiBoard"),K("playerBoard",M),K("aiBoard",R),S.addEventListener("submit",(function(e){e.preventDefault();var t=k.value||"Player 1";V.setName(t),w.textContent="".concat(V.getName(),"'s Board"),g.style.display="none"})),B.addEventListener("click",(function(){location.reload()}))})();