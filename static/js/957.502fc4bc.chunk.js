"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[957],{6957:function(t,e,r){r.r(e),r.d(e,{default:function(){return x}});var n=r(3433),a=r(5861),c=r(9439),s=r(7757),u=r.n(s),i=r(2791),o=r(7689),p=r(2767),f={cast_list:"CastItems_cast_list__Xorcm",item_name:"CastItems_item_name__ebmvB"},m=r(8295),l=r(184),h=function(t){var e=t.items.map((function(t){var e=t.id,r=t.name,n=t.character,a=t.profile_path;return(0,l.jsxs)("li",{className:f.cast_item,children:[(0,l.jsx)("img",{className:f.item_img,src:a?"https://image.tmdb.org/t/p/w342"+a:m,alt:r,widtch:200,height:150}),(0,l.jsx)("p",{className:f.item_name,children:r}),(0,l.jsxs)("p",{className:f.item_character,children:["Character: ",n]})]},e)}));return(0,l.jsx)("ul",{className:f.cast_list,children:e})},d=h;h.defaultProps={items:[]};var v={},x=function(){var t=(0,i.useState)([]),e=(0,c.Z)(t,2),r=e[0],s=e[1],f=(0,i.useState)(!1),m=(0,c.Z)(f,2),h=m[0],x=m[1],_=(0,i.useState)(null),w=(0,c.Z)(_,2),b=w[0],g=w[1],k=(0,o.UO)().id;return(0,i.useEffect)((function(){var t=function(){var t=(0,a.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,(0,p.Ku)(k);case 4:e=t.sent,r=e.cast,s((0,n.Z)(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),g(t.t0.message);case 12:return t.prev=12,x(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[k,g,x,s]),(0,l.jsxs)("section",{className:v.cast,children:[h&&(0,l.jsx)("p",{children:"Loading..."}),b&&(0,l.jsx)("p",{children:"Error"}),(0,l.jsx)(d,{items:r})]})}},2767:function(t,e,r){r.d(e,{Ko:function(){return u},Ku:function(){return p},PI:function(){return o},YJ:function(){return i},fI:function(){return f}});var n=r(5861),a=r(7757),c=r.n(a),s=r(1912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"424988524fcdd3be3cb6b3927eeba2ee"}}),u=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/trending/movie/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/search/movie",{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,console.log(n),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},8295:function(t,e,r){t.exports=r.p+"static/media/no-poster-cast.a42d634ecac238b2d7b9.jpg"}}]);
//# sourceMappingURL=957.502fc4bc.chunk.js.map