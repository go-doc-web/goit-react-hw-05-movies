"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[891],{2891:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(3433),a=t(5861),s=t(9439),u=t(7757),c=t.n(u),i=t(2791),o=t(7689),p=t(2767),f={list_rewiews:"ReviewsItem_list_rewiews__gxZc5",reviews_item:"ReviewsItem_reviews_item__x1AFU",reviews_author:"ReviewsItem_reviews_author__EhCR9"},v=t(184),h=function(e){var r=e.items.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,v.jsxs)("li",{className:f.reviews_item,children:[(0,v.jsxs)("p",{className:f.reviews_author,children:["Author:",t]}),(0,v.jsx)("p",{className:f.reviews_content,children:n})]},r)}));return(0,v.jsx)("ul",{className:f.list_rewiews,children:r})},l=h;h.defaultProps={items:[]};var w=function(){var e=(0,i.useState)([]),r=(0,s.Z)(e,2),t=r[0],u=r[1],f=(0,i.useState)(!1),h=(0,s.Z)(f,2),w=h[0],m=h[1],d=(0,i.useState)(null),x=(0,s.Z)(d,2),_=x[0],b=x[1],k=(0,o.UO)().id;return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,p.fI)(k);case 4:r=e.sent,t=r.results,u((0,n.Z)(t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),b(e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[k,b,m,u]),(0,v.jsxs)("section",{children:[w&&(0,v.jsx)("p",{children:"Loading..."}),_&&(0,v.jsx)("p",{children:"Error"}),!t.length>0&&(0,v.jsx)("p",{children:"No reviews"}),(0,v.jsx)(l,{items:t})]})}},2767:function(e,r,t){t.d(r,{Ko:function(){return c},Ku:function(){return p},PI:function(){return o},YJ:function(){return i},fI:function(){return f}});var n=t(5861),a=t(7757),s=t.n(a),u=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"424988524fcdd3be3cb6b3927eeba2ee"}}),c=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=891.b054b492.chunk.js.map