(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(16),r=n.n(s),i=n(19),o=n(7),u=n.n(o),l=n(17),j=n(3),d=(n(25),n(26),n(0));function p(){var e=Object(c.useContext)(T);return Object(d.jsxs)("div",{className:"rate-container",children:[Object(d.jsxs)("span",{children:[e.RUB.value.toFixed(4)," \u20bd/\uffe5"]}),Object(d.jsxs)("span",{children:[(e.RUB.value/e.USD.value).toFixed(4)," \u20bd/$"]}),Object(d.jsxs)("span",{children:[(1/e.USD.value).toFixed(4)," \uffe5/$"]})]})}n(28);function b(e){var t=e.tast,n=e.setTast;return Object(d.jsx)("input",{className:"task-input",placeholder:"\u4efb\u52a1",value:t,onChange:function(e){console.log(e),n(e.target.value)}})}function x(e){var t=e.price,n=e.setPrice;return Object(d.jsx)("input",{type:"number",className:"price-input",placeholder:"\u4ef7\u683c",value:t,onChange:function(e){n(e.target.value)}})}function O(e){var t=e.currencyType,n=e.setCurrencyType,a=Object(c.useContext)(T);return Object(d.jsxs)("select",{className:"curency-select",required:!0,value:t,onChange:function(e){n(e.target.value)},children:[Object(d.jsx)("option",{value:"",disabled:!0,defaultValue:!0,children:"\u8d27\u5e01\u7c7b\u578b"}),Object.keys(a).map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},t)}))]})}function v(e){var t=e.addPlan,n=Object(c.useState)(""),a=Object(j.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(0),o=Object(j.a)(i,2),u=o[0],l=o[1],p=Object(c.useState)(""),v=Object(j.a)(p,2),h=v[0],f=v[1];return Object(d.jsxs)("div",{className:"option-container",children:[Object(d.jsx)(b,{tast:s,setTast:r}),Object(d.jsx)(x,{price:u,setPrice:l}),Object(d.jsx)(O,{currencyType:h,setCurrencyType:f}),Object(d.jsx)("button",{className:"add-button",onClick:function(){r(""),l(0),f(""),t({tast:s,price:u,currencyType:h,done:!1})},children:"\u6dfb\u52a0"})]})}n(29);function h(e){var t=e.noBorderTop,n=e.id,a=e.item,s=e.changeStatus,r=Object(c.useContext)(T),i=1/r[a.currencyType].value*a.price;return Object(d.jsxs)("div",{className:"plan-item-container ".concat(!0===t?"no-border-top":""),children:[Object(d.jsxs)("div",{className:"plan-name-tag",children:[Object(d.jsx)("input",{id:n,name:"plan-name",type:"checkbox",value:a.done,checked:a.done,onClick:function(){s(a)}}),Object(d.jsx)("label",{htmlFor:n,children:a.tast})]}),Object(d.jsxs)("span",{children:["P",(i/r.RUB.value).toFixed(4)]}),Object(d.jsxs)("span",{children:["\uffe5",i.toFixed(4)]}),Object(d.jsxs)("span",{children:["$",(i/r.USD.value).toFixed(4)]})]})}function f(e){var t=e.type,n=e.itemList,a=e.changeStatus,s=Object(c.useContext)(T),r={plan:{title:"\u8ba1\u5212:",total:"\u5c06\u8981\u82b1\u8d39:"},complete:{title:"\u5df2\u5b8c\u6210:",total:"\u4e00\u5171\u82b1\u4e86:"}},i="plan"!==t,o=n.filter((function(e){return e.done===i})),u=r[t]||r.plan,l=u.title,j=u.total,p=o.reduce((function(e,t){return e+1/s[t.currencyType].value*t.price}),0);return Object(d.jsxs)("div",{className:"plan-list-container",children:[Object(d.jsx)("span",{children:l}),o.map((function(e,t){return Object(d.jsx)(h,{noBorderTop:o.length>1&&t>0,id:"".concat(l,"-").concat(t),item:e,changeStatus:a},t)})),Object(d.jsxs)("div",{className:"total-container",children:[Object(d.jsx)("span",{style:{width:"50%"},children:j}),Object(d.jsxs)("span",{children:["P",(p/s.RUB.value).toFixed(4)]}),Object(d.jsxs)("span",{children:["\uffe5",p.toFixed(4)]}),Object(d.jsxs)("span",{style:{marginRight:"2%"},children:["$",(p/s.USD.value).toFixed(4)]})]})]})}var m=n(18),y=n.n(m),g={USD:{value:.1520248078866076,previous:.15222544878563884,date:"2020-11-25T11:30:00+03:00"},RUB:{value:11.5257,previous:11.5326,date:"2020-11-25T11:30:00+03:00"}},S=[{tast:"\u6253\u9ebb\u5c06",price:5,currencyType:"USD",done:!1}],T=a.a.createContext(g);function C(){var e=Object(c.useState)(g),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(S),r=Object(j.a)(s,2),o=r[0],b=r[1];Object(c.useEffect)(Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()("https://api.globus.furniture/forex");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)}))),[]);var x=function(e){var t=o.map((function(t){return t.tast===e.tast&&(t.done=!t.done),t}));b(t)};return Object(d.jsx)("div",{className:"plan-board-container",children:Object(d.jsxs)(T.Provider,{value:n,children:[Object(d.jsx)(v,{addPlan:function(e){""===e.tast||""===e.currencyType?alert("not allow empty selected"):b([].concat(Object(i.a)(o),[e]))}}),Object(d.jsx)(p,{}),Object(d.jsx)(f,{type:"plan",itemList:o,changeStatus:x}),Object(d.jsx)(f,{type:"complete",itemList:o,changeStatus:x})]})})}var N=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(C,{})})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.2ab6a8cb.chunk.js.map