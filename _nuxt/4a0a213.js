(window.webpackJsonp=window.webpackJsonp||[]).push([[24,2,3,15],{581:function(t,e,n){var map={"./1.jpg":582,"./10.jpg":583,"./11.jpg":584,"./12.jpg":585,"./13.jpg":586,"./14.jpg":587,"./15.jpg":588,"./16.jpg":589,"./17.jpg":590,"./18.jpg":591,"./19.jpg":592,"./2.jpg":593,"./20.jpg":594,"./3.jpg":595,"./4.jpg":596,"./5.jpg":597,"./6.jpg":598,"./7.jpg":599,"./8.jpg":600,"./9.jpg":601};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=581},582:function(t,e,n){t.exports=n.p+"img/1.503cc05.jpg"},583:function(t,e,n){t.exports=n.p+"img/10.f3e4485.jpg"},584:function(t,e,n){t.exports=n.p+"img/11.41b9126.jpg"},585:function(t,e,n){t.exports=n.p+"img/12.9f4ef1f.jpg"},586:function(t,e,n){t.exports=n.p+"img/13.fa1217d.jpg"},587:function(t,e,n){t.exports=n.p+"img/14.f3e753e.jpg"},588:function(t,e,n){t.exports=n.p+"img/15.61c34de.jpg"},589:function(t,e,n){t.exports=n.p+"img/16.d3a65c0.jpg"},590:function(t,e,n){t.exports=n.p+"img/17.14c4f10.jpg"},591:function(t,e,n){t.exports=n.p+"img/18.f1b845e.jpg"},592:function(t,e,n){t.exports=n.p+"img/19.583ac13.jpg"},593:function(t,e,n){t.exports=n.p+"img/2.deaf307.jpg"},594:function(t,e,n){t.exports=n.p+"img/20.fb30478.jpg"},595:function(t,e,n){t.exports=n.p+"img/3.16e5161.jpg"},596:function(t,e,n){t.exports=n.p+"img/4.d34bf55.jpg"},597:function(t,e,n){t.exports=n.p+"img/5.5a968e7.jpg"},598:function(t,e,n){t.exports=n.p+"img/6.b44c361.jpg"},599:function(t,e,n){t.exports=n.p+"img/7.fe13d6e.jpg"},600:function(t,e,n){t.exports=n.p+"img/8.032c103.jpg"},601:function(t,e,n){t.exports=n.p+"img/9.336718c.jpg"},602:function(t,e,n){"use strict";n.r(e);var r=n(573),l=n(248),o=(n(364),{name:"Title-Section",props:{head:{type:String,required:!0},link:{type:String,required:!0}}}),c=n(32),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"title-Section"},[e(l.b,{staticClass:"right-Title-Section"},[e("i",{staticClass:"fas fa-camera-movie default title-icon"}),t._v(" "),e("span",[t._v(t._s(t.head)+" ")])]),t._v(" "),e(r.a),t._v(" "),e("div",{staticClass:"left-Title-Section"},[e("nuxt-link",{staticClass:"MoreFromSection HoverAfter",attrs:{to:t.link}},[e("span",[t._v("المزيد")]),e("div",{staticClass:"title-loader"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports},603:function(t,e,n){var content=n(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("2460c59f",content,!0,{sourceMap:!1})},604:function(t,e,n){"use strict";n.r(e);var r=n(230),l=n(572),o=n(567),c=n(200),f=n(231),d=n(571),m={name:"HomeCard",props:["articles"]},v=n(32),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"HomeCard"},[e(o.a,{attrs:{fluid:""}},[e(d.a,t._l(t.articles,(function(article){return e(l.a,{key:article.slug,staticClass:"pa-1",attrs:{cols:"12",lg:"2",md:"3",sm:"3",xs:"6",col:"5"}},[e("div",{staticClass:"BlockItem"},[e("nuxt-link",{attrs:{to:"/".concat(article.slug)}},[e(r.a,{attrs:{outlined:"","elevation-0":""}},[e("div",{staticClass:"blog-img BlockImageItem"},[e(c.a,{attrs:{src:n(581)("./".concat(article.img)),height:"350",alt:article.alt}},[e("template",{slot:"placeholder"},[e(d.a,{staticClass:"fill-height",attrs:{justify:"center",align:"center"}},[e(f.a,{attrs:{width:"2",size:"100",color:"default",indeterminate:""}})],1)],1)],2),t._v(" "),e("div",{staticClass:"StarsIMDB warning"},[e("span",[t._v("IMDB")]),t._v(" "),e("strong",[t._v(t._s(article.imdb.rating))])]),t._v(" "),e("a",{staticClass:"fa-solid fa-play play-btn white--text",attrs:{href:""}}),t._v(" "),e("ul",{staticClass:"RestInformation"},[e("li",t._l(article.tags,(function(n){return e("span",{key:n},[e("NuxtLink",{staticClass:"white--text",attrs:{to:"/tag/".concat(n.slug)}},[t._v("\n                      "+t._s(n)+"\n                    ")])],1)})),0),t._v(" "),e("li",[t._v(t._s(article.quality))])]),t._v(" "),e("h5",{staticClass:"BlockTitle"},[t._v(t._s(article.title))]),t._v(" "),e("div",{staticClass:"quality default"},[t._v(t._s(article.quality))])],1)])],1)],1)])})),1)],1)],1)}),[],!1,null,"28d6c8b8",null);e.default=component.exports},605:function(t,e,n){"use strict";n(603)},606:function(t,e,n){var r=n(14)(!1);r.push([t.i,"@-webkit-keyframes bounce-in{0%{transform:scale(0)}50%{transform:scale(1.25)}to{transform:scale(1)}}@keyframes bounce-in{0%{transform:scale(0)}50%{transform:scale(1.25)}to{transform:scale(1)}}@-webkit-keyframes bounce-out{0%{transform:scale(1)}50%{transform:scale(1.25)}to{transform:scale(0)}}@keyframes bounce-out{0%{transform:scale(1)}50%{transform:scale(1.25)}to{transform:scale(0)}}@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 hsla(0,0%,100%,.1),0 0 0 20px hsla(0,0%,100%,.1),0 0 0 40px hsla(0,0%,100%,.1)}to{box-shadow:0 0 0 20px hsla(0,0%,100%,.1),0 0 0 40px hsla(0,0%,100%,.1),0 0 0 60px hsla(0,0%,100%,0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 hsla(0,0%,100%,.1),0 0 0 20px hsla(0,0%,100%,.1),0 0 0 40px hsla(0,0%,100%,.1)}to{box-shadow:0 0 0 20px hsla(0,0%,100%,.1),0 0 0 40px hsla(0,0%,100%,.1),0 0 0 60px hsla(0,0%,100%,0)}}.carousel-3d-slide.item{background:transparent}.HomeCarousel{padding-top:65px}",""]),t.exports=r},609:function(t,e,n){"use strict";n.r(e);var r=n(230),l=n(200),o=n(231),c=n(571),f={props:{articles:{type:Array,required:!0}}},d=(n(605),n(32)),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"HomeCarousel"},[e("carousel-3d",{attrs:{display:12,autoplay:!0,height:500,"autoplay-timeout":5e3,disable3d:!0,space:365}},t._l(t.articles,(function(article,i){return e("slide",{key:article.slug,staticClass:"item BlockItem",attrs:{index:i}},[e("nuxt-link",{attrs:{to:"/".concat(article.slug)}},[e(r.a,{attrs:{outlined:"","elevation-0":""}},[e("div",{staticClass:"blog-img BlockImageItem"},[e(l.a,{attrs:{src:n(581)("./".concat(article.img)),height:"500",alt:article.alt}},[e("template",{slot:"placeholder"},[e(c.a,{staticClass:"fill-height",attrs:{justify:"center",align:"center"}},[e(o.a,{attrs:{width:"2",size:"100",color:"default",indeterminate:""}})],1)],1)],2),t._v(" "),e("div",{staticClass:"StarsIMDB warning"},[e("span",[t._v("IMDB")]),t._v(" "),e("strong",[t._v(t._s(article.imdb.rating))])]),t._v(" "),e("a",{staticClass:"fa-solid fa-play play-btn white--text",attrs:{href:""}}),t._v(" "),e("ul",{staticClass:"RestInformation"},[t._l(article.tags,(function(n){return e("li",{key:n},[e("span",[e("NuxtLink",{staticClass:"white--text",attrs:{to:"/tag/".concat(n.slug)}},[t._v("\r\n                        "+t._s(n)+"\r\n                      ")])],1)])})),t._v(" "),e("li",[t._v(t._s(article.quality))])],2),t._v(" "),e("h5",{staticClass:"BlockTitle"},[t._v(t._s(article.title))]),t._v(" "),e("div",{staticClass:"quality default"},[t._v(t._s(article.quality))])],1)])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports},675:function(t,e,n){"use strict";n.r(e);var r=n(572),l=n(567),o=n(571),c=(n(364),n(31),n(30)),f=(n(82),n(249)),d=n(609),m=n(604),v={name:"IndexPage",components:{TitleSection:n(602).default,HomeCard:m.default,HomeCarousel:d.default,AppSearchInput:f.default},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).where({sections:{$containsAny:["Movies"]}}).sortBy("createdAt","desc").fetch();case 3:return l=e.sent,e.next=6,n("tags").only(["name","slug"]).sortBy("createdAt","asc").fetch();case 6:return o=e.sent,e.abrupt("return",{articles:l,tags:o});case 8:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ar",{year:"numeric",month:"long",day:"numeric"})}},data:function(){return{head:"أفلام",link:"/movies"}}},_=n(32),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("home-carousel",{attrs:{articles:t.articles}}),t._v(" "),e("title-section",{attrs:{link:t.link,head:t.head}}),t._v(" "),e("home-card",{attrs:{articles:t.articles}}),t._v(" "),e(l.a,[e(o.a,[e(r.a,{attrs:{cols:"12",md:"3"}})],1)],1),t._v(" "),e("ul",t._l(t.tags,(function(n){return e("li",{key:n.slug,staticClass:"xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"},[e("NuxtLink",{attrs:{to:"/tag/".concat(n.slug)}},[e("p",{staticClass:"font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"},[t._v("\r\n          "+t._s(n.name)+"\r\n        ")])])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports}}]);