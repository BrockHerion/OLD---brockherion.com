(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{295:function(t,e,r){"use strict";r.r(e);var n=r(7),c=(r(46),r(2).a.extend({asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.error,e.next=3,r("articles").where({category:"Test"}).fetch().catch((function(t){n({statusCode:201,message:"No articles were found"})}));case 3:return c=e.sent,e.abrupt("return",{articles:c});case 5:case"end":return e.stop()}}),e)})))()}})),l=r(12),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"2xl:px-96 xl:px-60 lg:px-36 md:px-16 px-4 py-7"},[r("h1",{staticClass:"text-5xl mb-4 font-bold text-center md:text-left"},[t._v("Articles 📰")]),t._v(" "),r("ul",t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("NuxtLink",{attrs:{to:"/articles"}},[t._v(t._s(article.description))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);