(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[21],{516:function(e,c,t){},541:function(e,c,t){"use strict";var r=t(2),a=t(0),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm144 452H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm445.7 51.5l-93.3-93.3C814.7 780.7 828 743.9 828 704c0-97.2-78.8-176-176-176s-176 78.8-176 176 78.8 176 176 176c35.8 0 69-10.7 96.8-29l94.7 94.7c1.6 1.6 3.6 2.3 5.6 2.3s4.1-.8 5.6-2.3l31-31a7.9 7.9 0 000-11.2zM652 816c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"file-search",theme:"outlined"},n=t(10),i=function(e,c){return a.createElement(n.a,Object(r.a)(Object(r.a)({},e),{},{ref:c,icon:s}))};i.displayName="FileSearchOutlined";c.a=a.forwardRef(i)},561:function(e,c,t){"use strict";t.r(c),t.d(c,"default",(function(){return v}));var r=t(0),a=t(46),s=t(537),n=t(541),i=t(34),o=t(167),d=t.n(o),l=t(142),h=t(165),j=t(38),u=t(400),b=t(398),m=t.n(b),p=t(3),f=new Intl.NumberFormat("vn");function O(e){var c=e.data,t=function(e,c){var t=e/c;return c>0?Object(p.jsxs)("div",{className:"revews-products",children:[Object(p.jsx)("div",{className:"start-review",children:Object(p.jsx)(m.a,{starDimension:"16px",starRatedColor:"#fed330",starHoverColor:"#fed330",rating:t,starEmptyColor:"white"})}),Object(p.jsxs)("p",{children:[c," \u0111\xe1nh gi\xe1"]})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m.a,{starDimension:"16px",starRatedColor:"#fed330",starHoverColor:"#fed330",starEmptyColor:"none",numberOfStars:5}),Object(p.jsx)("p",{children:"Ch\u01b0a c\xf3 \u0111\xe1nh gi\xe1"})]})};return Object(p.jsx)("div",{className:"group-search",children:c.map((function(e){return Object(p.jsxs)("div",{className:"item-products-search","data-aos":"zoom-in",children:[Object(p.jsxs)(j.b,{to:"/detail-products?id_product=".concat(e._id,"&key=").concat(e.key),children:[Object(p.jsx)("div",{className:"ig-products-search",children:Object(p.jsx)(u.LazyLoadImage,{effect:"blur",src:e.poster[0].url,alt:e._id,height:"100%",width:"100%"},e._id)}),Object(p.jsx)("div",{className:"name-products-search",children:Object(p.jsx)("p",{children:e.name})})]}),Object(p.jsx)("div",{className:"price-products-search",children:Object(p.jsx)("div",{className:"group-price",children:Object(p.jsxs)("span",{children:[f.format(e.price)," ",Object(p.jsx)("u",{children:"\u0111"})]})})}),Object(p.jsx)("div",{className:"group-start-review",children:t(e.rating,e.numReviews)})]},e._id)}))})}t(516);function v(e){var c=e.location,t=Object(a.b)(),o=Object(i.g)(),j=d.a.parse(c.search).query.replace(/-/g," "),u=Number(d.a.parse(c.search).page)||1;document.querySelector("title").innerHTML="T\xecm ki\u1ebfm - ".concat(j);var b=function(){window.scrollTo({top:0,behavior:"smooth"}),function(e){t(Object(l.a)(e))}({page:u||1,items:28,keyword:j})};Object(r.useEffect)((function(){b()}),[j]),Object(r.useEffect)((function(){b()}),[u]);var m=Object(a.c)((function(e){return e.search.data})),f=Object(a.c)((function(e){return e.search.length})),v=Object(a.c)((function(e){return e.search.loading})),x=function(e){var c={query:j,page:e},t=d.a.stringify(c),r="/search?".concat(t);o.push(r)};return Object(p.jsxs)(p.Fragment,{children:[v&&Object(p.jsx)(h.a,{}),Object(p.jsx)("div",{className:"main-search",children:Object(p.jsxs)("div",{className:"group-product-search",children:[Object(p.jsxs)("h3",{children:[f>0?"C\xf3 "+f:null," k\u1ebft qu\u1ea3 t\xecm ki\u1ebfm cho '","undefined"===j?"":j,"'"]}),Object(p.jsx)(O,{data:m}),function(e){if(e>0)return Object(p.jsx)(s.a,{onChange:x,total:e,defaultPageSize:28,current:u})}(f),0===f&&Object(p.jsxs)("div",{className:"group-no-data",children:[Object(p.jsx)(n.a,{style:{fontSize:"1.5em",color:"#596275"}}),Object(p.jsx)("p",{children:"R\u1ea5t ti\u1ebfc, kh\xf4ng t\xecm th\u1ea5y s\u1ea3n ph\u1ea9m ph\xf9 h\u1ee3p v\u1edbi l\u1ef1a ch\u1ecdn c\u1ee7a b\u1ea1n"})]})]})})]})}}}]);