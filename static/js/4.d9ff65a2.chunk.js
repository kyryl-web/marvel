(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[4],{21:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",n=c(0);t.a=function(){return Object(n.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"error"})}},25:function(e,t,c){"use strict";var a=c(22),n=c.n(a),r=c(23),s=c(4),i=c(1);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],h=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(r.a)(n.a.mark((function e(t){var c,r,s,i,o,l=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:r,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,a(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),h(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return h(null)}),[])}}(),t=e.loading,c=e.request,a=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=0cabaa5c82f123bb2173e8576631d568",h=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:210,e.next=3,c("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",O(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:10500,e.next=3,c("".concat(l,"comics?limit=8&offset=").concat(t,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",f(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.a)(n.a.mark((function e(t,a){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("char"!==a){e.next=7;break}return e.next=3,c("".concat(l,"characters/").concat(t,"?").concat(u));case 3:return r=e.sent,e.abrupt("return",O(r.data.results[0]));case 7:if("comic"!==a){e.next=12;break}return e.next=10,c("".concat(l,"comics/").concat(t,"?").concat(u));case 10:return r=e.sent,e.abrupt("return",f(r.data.results[0]));case 12:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),O=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homapage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},f=function(e){return{id:e.id,title:e.title,price:e.digitalId&&e.prices[0].price?e.prices[0].price+"$":"NOT AVAILABLE",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,description:e.description||"There is no description",language:e.textObjects.language||"en-us",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages"}};return{loading:t,error:a,getAllCharacters:h,getCharacter:j,clearError:o,getAllComics:b,getComic:d,getItem:m}}},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},59:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c(1),r=c(10),s=c(21),i=c(25),o=(c(45),c.p+"static/media/mjolnir.61f31e18.png"),l=c(0),u=function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:a}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(){var e=Object(n.useState)({}),t=Object(a.a)(e,2),c=t[0],h=t[1],j=Object(i.a)(),b=j.loading,d=j.error,m=j.getCharacter,O=j.clearError;Object(n.useEffect)((function(){p()}),[]);var f=function(e){h(e)},p=function(){O();var e=Math.floor(400*Math.random()+1011e3);m(e).then(f)},x=d?Object(l.jsx)(s.a,{}):null,v=b?Object(l.jsx)(r.a,{}):null,_=b||d?null:Object(l.jsx)(u,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[x,v,_,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{onClick:p,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},j=c(28),b=c(71),d=c(73),m=(c(46),function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),o=c[0],u=c[1],h=Object(n.useState)(!1),m=Object(a.a)(h,2),O=m[0],f=m[1],p=Object(n.useState)(210),x=Object(a.a)(p,2),v=x[0],_=x[1],g=Object(n.useState)(!1),N=Object(a.a)(g,2),k=N[0],y=N[1],w=Object(i.a)(),C=w.loading,S=w.error,E=w.getAllCharacters;Object(n.useEffect)((function(){F(v,!0)}),[]);var F=function(e,t){f(!t),E(e).then(T)},T=function(e){var t=!1;e.length<9&&(t=!0),u((function(t){return[].concat(Object(j.a)(t),Object(j.a)(e))})),f((function(e){return!1})),_((function(e){return e+9})),y((function(e){return t}))},A=Object(n.useRef)([]),I=function(e){A.current.forEach((function(e){return e.classList.remove("char__item_selected")})),A.current[e].classList.add("char__item_selected"),A.current[e].focus()};var q=function(t){var c=t.map((function(t,c){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"unset"}),Object(l.jsx)(b.a,{timeout:500,classNames:"char__item",children:Object(l.jsxs)("li",{ref:function(e){return A.current[c]=e},className:"char__item",tabIndex:0,onClick:function(){e.onCharSelected(t.id),I(c)},onKeyDown:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(t.id),I(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:Object(l.jsx)(d.a,{component:null,children:c})})}(o),D=S?Object(l.jsx)(s.a,{}):null,L=C&&!O?Object(l.jsx)(r.a,{}):null;return Object(l.jsxs)("div",{className:"char__list",children:[q,D,L,Object(l.jsx)("button",{className:"button button__main button__long",disabled:O,style:{display:k?"none":"block"},onClick:function(){return F(v)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),O=(c(47),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),f=(c(48),function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:n,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),p=function(e){var t=Object(n.useState)(null),c=Object(a.a)(t,2),o=c[0],u=c[1],h=Object(i.a)(),j=h.loading,b=h.error,d=h.getCharacter,m=h.clearError;Object(n.useEffect)((function(){p()}),[e.charId]);var p=function(){var t=e.charId;t&&(m(),d(t).then(x))},x=function(e){u(e)},v=o||j||b?null:Object(l.jsx)(O,{}),_=b?Object(l.jsx)(s.a,{}):null,g=j?Object(l.jsx)(r.a,{}):null,N=j||b||!o?null:Object(l.jsx)(f,{char:o});return Object(l.jsxs)("div",{className:"char__info",children:[v,_,g,N]})},x=c(64),v=c(6),_=c(65),g=(c(59),function(){var e=Object(n.useState)({}),t=Object(a.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),i=Object(a.a)(s,2),o=i[0],u=i[1],h=Object(n.useRef)(),j=Object(x.a)({initialValues:{char:""},validationSchema:_.a({char:_.b().required("This field is required").min(3,"Minimum 3 letters are required...")}),onSubmit:function(e){fetch("https://gateway.marvel.com:443/v1/public/characters?name=".concat(e.char.trim(),"&apikey=0cabaa5c82f123bb2173e8576631d568")).then((function(e){return e.json()})).then((function(e){if(0===e.data.results.length)throw Error;return{id:e.data.results[0].id,name:e.data.results[0].name,description:e.data.results[0].description?e.data.results[0].description:"There is no description",thumbnail:e.data.results[0].thumbnail.path+"."+e.data.results[0].thumbnail.extension}})).then((function(e){r(e),u(!1)})).catch((function(){u(!0)}))}});return console.log("render form"),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{className:"char__form",onSubmit:j.handleSubmit,children:[Object(l.jsx)("label",{htmlFor:"char",children:"Or find a character by name:"}),Object(l.jsxs)("div",{className:"char__form-items",children:[Object(l.jsx)("input",{ref:h,type:"text",id:"char",name:"char",value:j.values.char,placeholder:"Enter name",onChange:j.handleChange,onBlur:j.handleBlur}),Object(l.jsx)("button",{className:"button button__main",type:"submit",children:Object(l.jsx)("div",{className:"inner",children:"FIND"})})]}),!o&&Object.keys(c).length>0?Object(l.jsxs)("div",{className:"response",children:[Object(l.jsxs)("div",{className:"response__title",children:["There is! Visit ",c.name," page?"]}),Object(l.jsx)(v.b,{to:"/characters/".concat(c.id),className:"button button__main",type:"submit",children:Object(l.jsx)("div",{className:"inner",children:"TO PAGE"})})]}):null,o?Object(l.jsx)("div",{className:"response__red",children:"The character was not found. Check the name and try again"}):null,j.errors.char&&j.touched.char?Object(l.jsx)("div",{className:"error",children:j.errors.char}):null]})})}),N=c(38),k=c(39),y=c(41),w=c(43),C=function(e){Object(y.a)(c,e);var t=Object(w.a)(c);function c(){var e;Object(N.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(k.a)(c,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(s.a,{}):this.props.children}}]),c}(n.Component),S=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(C,{children:Object(l.jsx)(h,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(C,{children:Object(l.jsx)(m,{onCharSelected:function(e){r(e)}})}),Object(l.jsxs)("div",{className:"char__content-side",children:[Object(l.jsx)(C,{children:Object(l.jsx)(p,{charId:c})}),Object(l.jsx)(g,{})]})]}),Object(l.jsx)("img",{className:"bg-decoration",src:S,alt:"vision"})]})}}}]);
//# sourceMappingURL=4.d9ff65a2.chunk.js.map