(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[14],{402:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(150);var s=t(168);function c(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(s.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},419:function(e,n,t){"use strict";t.d(n,"a",(function(){return V}));var a=t(147),s=t(402),c=t(8),r=t.n(c),i=t(18),o=t(25),u=t(0),l=t(422),d=t(11),p=t(38),h=t(444),m=t(381),b=t(383),j=t(88),y=t(553),O=t(445),g=t(380),k=t(220),x=t(564),v=t(446),f=t(222).a,T=t(138).a,w=t(61),z=[{key:"adidas",name:"Adidas",productType:[{key:"adidas",type:"adidas alphabounce",name:"Adidas lphabounce"},{key:"adidas",type:"adidas nmd",name:"Adidas Nmd"},{key:"adidas",type:"adidas superstar",name:"Adidas Superstar"},{key:"adidas",type:"adidas yeezy",name:"Adidas Yeezy"},{key:"adidas",type:"adidas prophere",name:"Adidas Prophere"},{key:"adidas",type:"adidas falcon",name:"Adidas Falcon"},{key:"adidas",type:"adidas stan smith",name:"Adidas Stan Mmith"},{key:"adidas",type:"adidas ultraboost",name:"Adidas Ultraboost"}]},{key:"nike",name:"Nike",productType:[{key:"nike",type:"nike m2k tekno",name:"Nike M2k Tekno"},{key:"nike",type:"nike jordan",name:"Nike Jordan"},{key:"nike",type:"nike cortez",name:"Nike Cortez"},{key:"nike",type:"nike air max",name:"Nike Air Max"}]},{key:"newbalance",name:"New Balance",productType:[{key:"newbalance",type:"new balance",name:"New Balance"}]},{key:"vans",name:"Vans",productType:[{key:"vans",type:"new balance",name:"Vans Anaheim Factory"},{key:"vans",type:"vans sk8 hi",name:"Vans Sk8 Hi"},{key:"vans",type:"vans era",name:"Vans Era"},{key:"vans",type:"vans sneaker",name:"Vans Sneaker"},{key:"vans",type:"vans authentic",name:"Vans Authentic"},{key:"vans",type:"vans classic",name:"Vans Classic"}]},{key:"puma",name:"Puma",productType:[{key:"puma",type:"puma rsx",name:"Puma Rsx"},{key:"puma",type:"puma rsx puzzle",name:"Puma Rsx Puzzle"},{key:"puma",type:"puma rsx super",name:"Puma Rsx Super"}]},{key:"converse",name:"Converse",productType:[{key:"converse",type:"converse renew",name:"Converse Renew"},{key:"converse",type:"converse sneakers",name:"Converse Sneakers"},{key:"converse",type:"converse chuck 70",name:"Converse Chuck 70"}]}],S=[{size:"28",value:28},{size:"29",value:29},{size:"30",value:30},{size:"31",value:31},{size:"32",value:32},{size:"33",value:33},{size:"34",value:34},{size:"35",value:35},{size:"36",value:36},{size:"37",value:37},{size:"38",value:38},{size:"39",value:39},{size:"40",value:40},{size:"41",value:41},{size:"42",value:42},{size:"43",value:43},{size:"44",value:44},{size:"45",value:45},{size:"46",value:46},{size:"47",value:47},{size:"48",value:48}],N=t(75),C={labelCol:{xs:{span:24},sm:{span:24},lg:{span:24},xl:{span:24}},wrapperCol:{xs:{span:0},sm:{span:24}}},F=t(3);function P(e){return new Promise((function(n,t){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return n(a.result)},a.onerror=function(e){return t(e)}}))}function V(e){var n=e.actionPostAddProduct,t=e.id_product,c=e.valuesEdit,V=e.actionUpdateProduct,q=h.a.Option,A=m.a.useForm(),I=Object(o.a)(A,1)[0],B=b.a.TextArea,E=Object(u.useContext)(N.a),G=Object(o.a)(E.token,1)[0],X=Object(u.useState)(""),J=Object(o.a)(X,2),M=J[0],L=J[1],_=Object(u.useState)(""),R=Object(o.a)(_,2),H=R[0],U=R[1],D=Object(u.useState)(""),Y=Object(o.a)(D,2),K=Y[0],Q=Y[1],W=Object(u.useState)(""),Z=Object(o.a)(W,2),$=Z[0],ee=Z[1],ne=Object(u.useState)(""),te=Object(o.a)(ne,2),ae=te[0],se=te[1],ce=Object(u.useState)([]),re=Object(o.a)(ce,2),ie=re[0],oe=re[1],ue=Object(u.useState)([]),le=Object(o.a)(ue,2),de=le[0],pe=le[1],he=Object(u.useState)(!1),me=Object(o.a)(he,2),be=me[0],je=me[1],ye=Object(u.useState)(!1),Oe=Object(o.a)(ye,2),ge=Oe[0],ke=Oe[1],xe=Object(u.useState)(!1),ve=Object(o.a)(xe,2),fe=ve[0],Te=ve[1];Object(u.useEffect)((function(){I.resetFields(["NSX"])}),[M]),Object(u.useEffect)((function(){if(c){I.setFieldsValue(c);var e=c.color,n=c.poster,t=c.key,a=c.NSX;oe([e]),L(t),U(a),n&&pe(n)}}),[c]),Object(u.useEffect)((function(){I.setFieldsValue({NSX:H})}),[H]);var we=function(){var e=Object(i.a)(r.a.mark((function e(a){var s,c,i,o,u,l,p,h,m,b,y,O,g,k,x,v,f,T,w,z,S,N;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a){e.next=30;break}if(s=a.name,c=a.size,i=a.price,o=a.sex,u=a.collections,l=a.productType,p=a.key,h=a.NSX,m=a.description,b=new FormData,!t){e.next=19;break}if(Te(!0),y=[],!(de.length<4)){e.next=11;break}j.a.error({message:"Th\xf4ng B\xe1o",description:"Vui l\xf2ng t\u1ea3i l\xean 4 \u1ea3nh"}),e.next=19;break;case 11:for(O=0;O<de.length;O++)(g=de[O]).uid&&b.append("poster",de[O].originFileObj),g.url&&y.push(de[O]);return k={name:s,size:c,price:i,sex:o,color:ie,description:m,collections:u,productType:l,key:p,NSX:h,imageOld:y,id_product:t},b.append("product",JSON.stringify(k)),e.next=16,V(b,G);case 16:x=e.sent,(v=Object(d.d)(x))&&(Te(!1),window.scrollTo({top:0,behavior:"smooth"}),f=v.product,se("/detail-products?id_product=".concat(f._id,"&key=").concat(f.key)),j.a.success({message:"Th\xf4ng B\xe1o !",description:"C\u1eadp nh\u1eadt th\xe0nh c\xf4ng "}));case 19:if(t){e.next=29;break}for(Te(!0),T={name:s,size:c,price:i,sex:o,color:ie,description:m,collections:u,productType:l,key:p,NSX:h},w=0;w<de.length;w++)b.append("poster",de[w].originFileObj);return b.append("product",JSON.stringify(T)),e.next=26,n(b,G);case 26:z=e.sent,(S=Object(d.d)(z))&&(Te(!1),I.resetFields(),pe([]),oe([]),window.scrollTo({top:0,behavior:"smooth"}),N=S.product,se("/detail-products?id_product=".concat(N._id,"&key=").concat(N.key)),j.a.success({message:"Th\xf4ng B\xe1o !",description:"Th\xeam m\u1edbi th\xe0nh c\xf4ng"}));case 29:case 30:e.next=35;break;case 32:e.prev=32,e.t0=e.catch(0),console.log(e.t0);case 35:case 36:case"end":return e.stop()}}),e,null,[[0,32]])})));return function(n){return e.apply(this,arguments)}}(),ze=function(){K&&-1===ie.indexOf(K)?(oe([].concat(Object(s.a)(ie),[K])),Q(""),je(!1)):(je(!1),Q(""))},Se=function(){var e=Object(i.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.url||n.preview){e.next=5;break}return e.next=4,P(n.originFileObj);case 4:n.preview=e.sent;case 5:ee(n.url||n.preview),ke(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();return Object(F.jsxs)(F.Fragment,{children:[ae&&Object(F.jsxs)("h4",{children:[" Click xem s\u1ea3n ph\u1ea9m v\u1eeba  ",t?"c\u1eadp nh\u1eadt":"th\xeam"," ",Object(F.jsx)(p.b,{to:ae,children:"T\u1ea1i \u0110\xe2y"})]}),Object(F.jsxs)("h3",{children:[t?"Ch\u1ec9nh s\u1eefa":"Th\xeam m\u1edbi"," s\u1ea3n ph\u1ea9m "]}),Object(F.jsxs)(m.a,Object(a.a)(Object(a.a)({form:I},C),{},{onFinish:we,className:"from-add-product from-edit-product",name:"product",hasFeedback:!0,children:[Object(F.jsx)(m.a.Item,{label:"T\xean S\u1ea3n Ph\u1ea9m",hasFeedback:!0,name:"name",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp t\xean s\u1ea3n ph\u1ea9m !"}],children:Object(F.jsx)(B,{rows:2,maxLength:100})}),Object(F.jsx)(m.a.Item,{hasFeedback:!0,label:"Gi\xe1 Ti\u1ec1n",name:"price",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp gi\xe1 ti\u1ec1n"}],children:Object(F.jsx)(y.a,{style:{width:"100%"},min:1,max:99999999})}),Object(F.jsx)(m.a.Item,{label:"Gi\u1edbi T\xednh",hasFeedback:!0,name:"sex",rules:[{required:!0,message:"Vui l\xf2ng ch\u1ecdn gi\u1edbi t\xednh !"}],children:Object(F.jsxs)(O.a.Group,{children:[Object(F.jsx)(O.a,{value:"nam",defaultChecked:!0,children:"Nam"}),Object(F.jsx)(O.a,{value:"n\u1eef",defaultChecked:!0,children:"N\u1eef"}),Object(F.jsx)(O.a,{value:"nam, n\u1eef",defaultChecked:!0,children:"Nam, N\u1eef"})]})}),Object(F.jsx)(m.a.Item,{label:"Nh\xe0 S\u1ea3n Xu\u1ea5t",hasFeedback:!0,name:"key",rules:[{required:!0,message:"Vui l\xf2ng ch\u1ecdn nh\xe0 s\u1ea3n xu\u1ea5t !"}],children:Object(F.jsx)(h.a,{onChange:function(e){L(e)},children:z.map((function(e,n){return Object(F.jsx)(q,{value:e.key,children:e.name},n)}))})}),Object(F.jsx)(m.a.Item,{label:"D\xf2ng S\u1ea3n Ph\u1ea9m",hasFeedback:!0,name:"NSX",rules:[{required:!0,message:"Vui l\xf2ng ch\u1ecdn d\xf2ng s\u1ea3n ph\u1ea9m !"}],children:Object(F.jsx)(h.a,{children:z.map((function(e,n){return e.productType.map((function(n,t){return e.key===M&&Object(F.jsx)(q,{value:n.type,children:n.name},t)}))}))})}),Object(F.jsx)(m.a.Item,{label:"B\u1ed9 S\u01b0u T\u1eadp",hasFeedback:!0,name:"collections",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp b\u1ed9 s\u01b0u t\u1eadp !"}],children:Object(F.jsx)(B,{rows:2,maxLength:100})}),Object(F.jsx)(m.a.Item,{label:"Lo\u1ea1i S\u1ea3n Ph\u1ea9m",hasFeedback:!0,name:"productType",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp lo\u1ea1i s\u1ea3n ph\u1ea9m !"}],children:Object(F.jsx)(B,{rows:2,maxLength:100})}),Object(F.jsx)(m.a.Item,{label:"M\xf4 T\u1ea3 S\u1ea3n Ph\u1ea9m",hasFeedback:!0,name:"description",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp n\u1ed9i dung s\u1ea3n ph\u1ea9m !"}],children:Object(F.jsx)(B,{rows:11})}),Object(F.jsx)(m.a.Item,{label:"T\u1ea3i \u1ea2nh L\xean",hasFeedback:!0,name:"poster",rules:[{required:de.length<1||de.length<4,message:"Vui l\xf2ng t\u1ea3i 4 \u1ea3nh  l\xean  !"}]}),Object(F.jsx)(g.a,{listType:"picture-card",accept:".jpg, .jpeg, .png",fileList:de,onPreview:Se,onChange:function(e){var n=e.file,a=e.fileList,c=e.event,r="image/jpeg"===n.type||"image/png"===n.type||"image/jpg"===n.type,i=n.size/1024/1024<2;if(t){if(n&&0===a.length||n&&a.length>0&&!c){var o=Object(s.a)(de),u=o.findIndex((function(e){return e.id===n.id}));o.splice(u,1),pe(o)}a.length>0&&c&&(r||j.a.error({message:"Th\xf4ng B\xe1o",description:"B\u1ea1n ch\u1ec9 c\xf3 th\u1ec3 t\u1ea3i l\xean t\u1ec7p JPG / PNG / JPEG !"}),i||j.a.error({message:"Th\xf4ng b\xe1o",description:"H\xecnh \u1ea3nh ph\u1ea3i nh\u1ecf h\u01a1n 2MB "})),i&&r&&pe(a)}t||(r||j.a.error({message:"Th\xf4ng B\xe1o",description:"B\u1ea1n ch\u1ec9 c\xf3 th\u1ec3 t\u1ea3i l\xean t\u1ec7p JPG / PNG / JPEG !"}),i||j.a.error({message:"Th\xf4ng b\xe1o",description:"H\xecnh \u1ea3nh ph\u1ea3i nh\u1ecf h\u01a1n 2MB "}),i&&r&&pe(a))},maxCount:4,multiple:!0,children:de.length>=4?null:Object(F.jsxs)("div",{children:[Object(F.jsx)(l.a,{}),Object(F.jsx)("div",{style:{marginTop:8},children:"T\u1ea3i \u1ea3nh l\xean"})]})}),Object(F.jsx)(k.a,{visible:ge,footer:null,onCancel:function(){ke(!1)},children:Object(F.jsx)("img",{alt:"example",style:{width:"100%"},src:$})}),Object(F.jsxs)(m.a.Item,{label:"M\xe0u S\u1eafc",hasFeedback:!0,name:"color",rules:[{required:ie.length<1,message:"Vui l\xf2ng th\xeam m\xe0u cho s\u1ea3n ph\u1ea9m !"}],children:[ie.map((function(e,n){return Object(F.jsx)(x.a,{closable:!0,onClose:function(){return function(e){console.log(e);var n=ie.filter((function(n){return n!==e}));oe(n)}(e)},maxTagCount:3,children:e},n)})),be&&ie.length<5&&Object(F.jsx)(b.a,{type:"text",size:"small",style:{display:"block",margin:"10px auto",width:"200px",height:"30px"},value:K,onChange:function(e){Q(e.target.value)},onBlur:ze,onPressEnter:ze}),!be&&ie.length<5&&Object(F.jsxs)(x.a,{style:{display:"block",margin:"10px auto",width:"100px"},onClick:function(){je(!0)},children:[Object(F.jsx)(l.a,{})," Th\xeam m\xe0u"]})]}),Object(F.jsx)(m.a.Item,{label:"Ch\u1ecdn Size",hasFeedback:!0,name:"size",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp m\xe0u !"}],children:Object(F.jsx)(v.a.Group,{style:{width:"100%"},children:Object(F.jsx)(f,{children:S.map((function(e,n){return Object(F.jsx)(T,{span:8,children:Object(F.jsx)(v.a,{value:e.value,children:e.size})},n)}))})})}),Object(F.jsx)(m.a.Item,{children:Object(F.jsx)(w.a,{style:{marginTop:"10px"},type:"primary",htmlType:"submit",loading:fe,children:t?"C\u1eadp Nh\u1eadt":"Th\xeam S\u1ea3n Ph\u1ea9m"})})]}))]})}},422:function(e,n,t){"use strict";var a=t(2),s=t(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},r=t(10),i=function(e,n){return s.createElement(r.a,Object(a.a)(Object(a.a)({},e),{},{ref:n,icon:c}))};i.displayName="PlusOutlined";n.a=s.forwardRef(i)},532:function(e,n,t){},547:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h}));var a=t(25),s=t(0),c=t(46),r=t(34),i=t(35),o=t(65),u=t(165),l=t(419),d=t(149),p=(t(532),t(3));function h(){var e=Object(c.b)(),n=Object(r.i)().params.id_product,t=Object(s.useState)(1),h=Object(a.a)(t,2),m=h[0],b=h[1],j=Object(c.c)((function(e){return e.productId.product})),y=Object(c.c)((function(e){return e.productId.length})),O=Object(c.c)((function(e){return e.productId.loading}));return console.log(j),console.log(y),Object(s.useEffect)((function(){var t;if(t=n,e(Object(i.b)(t)),window.scrollTo({top:0,behavior:"smooth"}),n){var a=j.name,s=j.price,c=j.sex,r=j.key,o=j.NSX,u=j.collections,l=j.productType,d=j.description,p=j.poster,h=j.color,m=j.size;b({price:s,name:a,sex:c,key:r,NSX:o,collections:u,productType:l,description:d,poster:p,color:h,size:m})}}),[n]),Object(p.jsx)("div",{className:"ground-edit-product",children:Object(p.jsxs)("div",{className:"container-edit-product",children:[O&&Object(p.jsx)(u.a,{}),!O&&j?Object(p.jsx)(l.a,{id_product:n,valuesEdit:m,actionUpdateProduct:function(n,t){return e(Object(o.e)(n,t))}}):Object(p.jsx)(d.a,{})]})})}}}]);