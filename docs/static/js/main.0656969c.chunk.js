(this.webpackJsonpcomunica=this.webpackJsonpcomunica||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(5),s=n.n(i),a=(n(11),n(0)),o=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Mi app de comunicaci\xf3n"})})},j=n(2);var u=function(e){var t=e.setCategorias,n=Object(c.useState)("Ingrese un nuevo producto"),r=Object(j.a)(n,2),i=r[0],s=r[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h1",{children:"Agregar Productos"}),Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>=2&&(t(i),console.log(i),s(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){s(e.target.value),console.log(i)}})}),Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsx)("button",{type:"button",className:"btn btn-success w-50",children:"Agregar Productos"})}),Object(a.jsx)("hr",{})]})},l=n(4),b=n.n(l),d=n(6),O=function(e,t,n){return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{src:n,alt:t}),Object(a.jsx)("p",{children:t})]})},h=function(e){e.categorias;var t=Object(c.useState)([]),n=Object(j.a)(t,2),r=n[0],i=n[1];Object(c.useEffect)((function(){s()}));var s=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.giphy.com/v1/gifs/trending?q=Superman&Limit=10&api_key=XfTrLeRLQnMp091kQoOLQXHzHrMs0Cb2",e.next=3,fetch("https://api.giphy.com/v1/gifs/trending?q=Superman&Limit=10&api_key=XfTrLeRLQnMp091kQoOLQXHzHrMs0Cb2");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.data,r=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),console.log(r),i(r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Coleccion"}),Object(a.jsx)("ol",{children:r.map((function(e){var t=e.id,n=e.title;return Object(a.jsx)("li",{children:n},t)}))}),Object(a.jsx)("hr",{}),r.map((function(e){var t=e.id,n=e.title,c=e.url;return Object(a.jsx)(O,{title:n,url:c},t)}))]})};var p=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Productos"}),Object(a.jsx)(u,{setCategorias:r}),Object(a.jsx)("ol",{}),Object(a.jsx)(h,{categorias:n})]})};var x=function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(o,{}),Object(a.jsx)(p,{})]})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0656969c.chunk.js.map