(window.webpackJsonp=window.webpackJsonp||[]).push([[7,15],{581:function(t,e,n){var map={"./1.jpg":582,"./10.jpg":583,"./11.jpg":584,"./12.jpg":585,"./13.jpg":586,"./14.jpg":587,"./15.jpg":588,"./16.jpg":589,"./17.jpg":590,"./18.jpg":591,"./19.jpg":592,"./2.jpg":593,"./20.jpg":594,"./3.jpg":595,"./4.jpg":596,"./5.jpg":597,"./6.jpg":598,"./7.jpg":599,"./8.jpg":600,"./9.jpg":601};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=581},582:function(t,e,n){t.exports=n.p+"img/1.503cc05.jpg"},583:function(t,e,n){t.exports=n.p+"img/10.f3e4485.jpg"},584:function(t,e,n){t.exports=n.p+"img/11.41b9126.jpg"},585:function(t,e,n){t.exports=n.p+"img/12.9f4ef1f.jpg"},586:function(t,e,n){t.exports=n.p+"img/13.fa1217d.jpg"},587:function(t,e,n){t.exports=n.p+"img/14.f3e753e.jpg"},588:function(t,e,n){t.exports=n.p+"img/15.61c34de.jpg"},589:function(t,e,n){t.exports=n.p+"img/16.d3a65c0.jpg"},590:function(t,e,n){t.exports=n.p+"img/17.14c4f10.jpg"},591:function(t,e,n){t.exports=n.p+"img/18.f1b845e.jpg"},592:function(t,e,n){t.exports=n.p+"img/19.583ac13.jpg"},593:function(t,e,n){t.exports=n.p+"img/2.deaf307.jpg"},594:function(t,e,n){t.exports=n.p+"img/20.fb30478.jpg"},595:function(t,e,n){t.exports=n.p+"img/3.16e5161.jpg"},596:function(t,e,n){t.exports=n.p+"img/4.d34bf55.jpg"},597:function(t,e,n){t.exports=n.p+"img/5.5a968e7.jpg"},598:function(t,e,n){t.exports=n.p+"img/6.b44c361.jpg"},599:function(t,e,n){t.exports=n.p+"img/7.fe13d6e.jpg"},600:function(t,e,n){t.exports=n.p+"img/8.032c103.jpg"},601:function(t,e,n){t.exports=n.p+"img/9.336718c.jpg"},602:function(t,e,n){"use strict";n.r(e);var o=n(573),r=n(248),c=(n(364),{name:"Title-Section",props:{head:{type:String,required:!0},link:{type:String,required:!0}}}),l=n(32),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"title-Section"},[e(r.b,{staticClass:"right-Title-Section"},[e("i",{staticClass:"fas fa-camera-movie default title-icon"}),t._v(" "),e("span",[t._v(t._s(t.head)+" ")])]),t._v(" "),e(o.a),t._v(" "),e("div",{staticClass:"left-Title-Section"},[e("nuxt-link",{staticClass:"MoreFromSection HoverAfter",attrs:{to:t.link}},[e("span",[t._v("المزيد")]),e("div",{staticClass:"title-loader"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports},618:function(t,e,n){"use strict";n.r(e);var o=n(230),r=n(572),c=n(567),l=n(200),f=n(231),d=n(571),j=(n(364),{name:"Movies",components:{TitleSection:n(602).default},props:{Movies:{type:Array,required:!0}},data:function(){return{head:" جديد الأفلام",link:"/movies"}}}),v=n(32),component=Object(v.a)(j,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-5"},[e("title-section",{attrs:{link:t.link,head:t.head}}),t._v(" "),e(c.a,{attrs:{fluid:""}},[e(d.a,t._l(t.Movies,(function(c){return e(r.a,{key:c.slug,staticClass:"pa-1",attrs:{cols:"12",lg:"2",md:"3",sm:"4",xs:"6",col:"5"}},[e("div",{staticClass:"BlockItem"},[e("nuxt-link",{attrs:{to:"/".concat(c.slug)}},[e(o.a,{attrs:{outlined:"","elevation-0":""}},[e("div",{staticClass:"blog-img BlockImageItem"},[e(l.a,{attrs:{src:n(581)("./".concat(c.img)),height:"350",alt:c.alt}},[e("template",{slot:"placeholder"},[e(d.a,{staticClass:"fill-height",attrs:{justify:"center",align:"center"}},[e(f.a,{attrs:{width:"2",size:"100",color:"default",indeterminate:""}})],1)],1)],2),t._v(" "),e("div",{staticClass:"StarsIMDB warning"},[e("span",[t._v("IMDB")]),t._v(" "),e("strong",[t._v(t._s(c.imdb.rating))])]),t._v(" "),e("a",{staticClass:"fa-solid fa-play play-btn white--text",attrs:{href:""}}),t._v(" "),e("ul",{staticClass:"RestInformation"},[t._l(c.tags,(function(n){return e("li",{key:n},[e("span",[e("NuxtLink",{staticClass:"white--text",attrs:{to:"/tag/".concat(n.slug)}},[t._v("\n                      "+t._s(n)+"\n                    ")])],1)])})),t._v(" "),e("li",[t._v(t._s(c.quality))])],2),t._v(" "),e("h5",{staticClass:"BlockTitle"},[t._v(t._s(c.title))]),t._v(" "),e("div",{staticClass:"quality default"},[t._v(t._s(c.quality))])],1)])],1)],1)])})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);