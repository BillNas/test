(function(t){function e(e){for(var n,a,u=e[0],i=e[1],l=e[2],p=0,d=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);s&&s(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(c.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},c=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=i;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("Counter"),r("Home")],1)},c=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-jumbotron",[r("h1",{staticClass:"display-1"},[t._v("Products ("+t._s(t.products.length)+")")])]),r("hr"),r("div",{staticClass:"text-center mt-5"},[t.loading?r("b-spinner",{attrs:{variant:"primary",type:"grow"}}):t._e()],1),r("b-container",{staticClass:"bv-example-row mb-3"},[r("b-row",{attrs:{cols:"4"}},t._l(t.products,(function(t){return r("b-col",{key:t.id},[r("Product",{attrs:{product:t}})],1)})),1)],1)],1)},u=[],i=r("1da1"),l=(r("96cf"),r("bc3a")),s=r.n(l),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{staticClass:"mb-5",staticStyle:{"max-width":"30rem"},attrs:{title:t.product.title,"sub-title":t.product.description,"img-src":t.product.image,"img-top":"",tag:"product"}},[r("b-card-text",[t._v(" €"+t._s(t.product.price)+" EUR ")])],1)],1)},d=[],f={props:["product"]},b=f,h=r("2877"),m=Object(h["a"])(b,p,d,!1,null,null,null),v=m.exports,g="https://fakestoreapi.com/products/?limit=10",_={name:"Home",components:{Product:v},data:function(){return{products:[],loading:!1}},mounted:function(){this.fetchProducts()},methods:{fetchProducts:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,s.a.get(g);case 4:r=e.sent,t.products=r.data,t.loading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0),t.loading=!0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}},y=_,w=Object(h["a"])(y,a,u,!1,null,null,null),x=w.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-5 text-center"},[r("b-button",{attrs:{size:"lg",variant:"success"},on:{click:t.handleClick}},[t._v("Increase")]),r("br"),r("h1",[t._v(t._s(t.counter))])],1)},j=[],P={data:function(){return{counter:0}},methods:{handleClick:function(){this.counter++}}},k=P,C=Object(h["a"])(k,O,j,!1,null,null,null),S=C.exports,E={name:"App",components:{Home:x,Counter:S}},$=E,M=Object(h["a"])($,o,c,!1,null,null,null),H=M.exports,R=r("5f5b");r("f9e3"),r("2dd8");n["default"].config.productionTip=!1,n["default"].use(R["a"]),new n["default"]({render:function(t){return t(H)}}).$mount("#app")}});
//# sourceMappingURL=app.f8effbb1.js.map