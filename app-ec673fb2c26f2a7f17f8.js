webpackJsonp([0xd2a57dc1d883],{86:function(e,n){"use strict";function o(e,n,o){var t=r.map(function(o){if(o.plugin[e]){var t=o.plugin[e](n,o.options);return t}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:o?[o]:[]}function t(e,n,o){return r.reduce(function(o,t){return t.plugin[e]?o.then(function(){return t.plugin[e](n,t.options)}):o},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=t;var r=[]},213:function(e,n,o){"use strict";n.components={"component---src-templates-blog-post-js":o(333),"component---src-pages-contact-js":o(330),"component---src-pages-impressum-js":o(331),"component---src-pages-index-js":o(332)},n.json={"layout-index.json":o(334),"blog-boulders-habitat-bonn.json":o(341),"blog-odenwald-bouldern-bouldern-im-felsenmeer.json":o(344),"blog-scarpa-booster-s-kletterschuh.json":o(345),"blog-boulderplanet-boulderhalle-in-koeln-ehrenfeld.json":o(340),"blog-boulder-bundesliga-2019.json":o(335),"blog-wie-verbessere-ich-meine-klettertechnik-beim-bouldern.json":o(347),"blog-es-kann-nie-genug-kaffee-geben-bouldern-im-boulders-habitat-beuel-boulder.json":o(343),"blog-toprope-und-bouldern-in-der-bergstation-in-hilden-boulder-vlog-002.json":o(346),"blog-bouldern-im-boulders-habitat-in-bonn-boulder-boys-vlog-003.json":o(338),"blog-deep-water-solo-guide.json":o(342),"blog-bouldern-im-boulders-habitat-bonn-boulder-boys-vlog-006.json":o(337),"blog-bouldern-im-boulders-habitat-beuel-boulder-boys-vlog-005.json":o(336),"blog-bouldern-im-boulders-habitat-in-bonn-boulder-boys-vlog-004.json":o(339),"blog-wo-bouldern.json":o(348),"contact.json":o(349),"impressum.json":o(350),"index.json":o(351)},n.layouts={"layout---index":o(329)}},214:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},l=o(2),s=t(l),c=o(19),d=t(c),f=o(143),p=t(f),m=o(59),h=t(m),g=o(86),b=o(526),y=t(b),v=function(e){var n=e.children;return s.default.createElement("div",null,n())},j=function(e){function n(o){r(this,n);var t=u(this,e.call(this)),a=o.location;return p.default.getPage(a.pathname)||(a=i({},a,{pathname:"/404.html"})),t.state={location:a,pageResources:p.default.getResourcesForPathname(a.pathname)},t}return a(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var o=p.default.getResourcesForPathname(e.location.pathname);if(o)this.setState({location:e.location,pageResources:o});else{var t=e.location;p.default.getPage(t.pathname)||(t=i({},t,{pathname:"/404.html"})),p.default.getResourcesForPathname(t.pathname,function(e){n.setState({location:t,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){p.default.getPage(e.state.location.pathname)&&n.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,y.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,l.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,l.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(s.default.Component);j.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},n.default=j,e.exports=n.default},59:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o(432),u=t(r),a=(0,u.default)();e.exports=a},215:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o(84),u=o(144),a=t(u),i={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),u=(0,a.default)(t,n);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),i[u])return i[u];var l=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(u,{path:e.path})||(0,r.matchPath)(u,{path:e.matchPath}))return l=e,i[u]=e,!0}else{if((0,r.matchPath)(u,{path:e.path,exact:!0}))return l=e,i[u]=e,!0;if((0,r.matchPath)(u,{path:e.path+"index.html"}))return l=e,i[u]=e,!0}return!1}),l}}},216:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o(178),u=t(r),a=o(86),i=(0,a.apiRunner)("replaceHistory"),l=i[0],s=l||(0,u.default)();e.exports=s},335:function(e,n,o){o(6),e.exports=function(e){return o.e(0xc5c649c79918,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(372)})})}},336:function(e,n,o){o(6),e.exports=function(e){return o.e(73390684838580,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(373)})})}},337:function(e,n,o){o(6),e.exports=function(e){return o.e(79317550299718,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(374)})})}},338:function(e,n,o){o(6),e.exports=function(e){return o.e(33309469059260,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(375)})})}},339:function(e,n,o){o(6),e.exports=function(e){return o.e(0xe34a4a8872d6,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(376)})})}},340:function(e,n,o){o(6),e.exports=function(e){return o.e(0x9df8d52f8f45,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(377)})})}},341:function(e,n,o){o(6),e.exports=function(e){return o.e(0xc9653814ebf2,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(378)})})}},342:function(e,n,o){o(6),e.exports=function(e){return o.e(0x5fd4c4e212be,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(379)})})}},343:function(e,n,o){o(6),e.exports=function(e){return o.e(0xdba75ef933bd,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(380)})})}},344:function(e,n,o){o(6),e.exports=function(e){return o.e(82423719641410,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(381)})})}},345:function(e,n,o){o(6),e.exports=function(e){return o.e(0xde4e0066b68c,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(382)})})}},346:function(e,n,o){o(6),e.exports=function(e){return o.e(47358340512954,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(383)})})}},347:function(e,n,o){o(6),e.exports=function(e){return o.e(0xfd743a91561c,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(384)})})}},348:function(e,n,o){o(6),e.exports=function(e){return o.e(0xd6bf2f78f9cc,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(385)})})}},349:function(e,n,o){o(6),e.exports=function(e){return o.e(0xa7f31e1aeaea,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(386)})})}},350:function(e,n,o){o(6),e.exports=function(e){return o.e(0xe19711355194,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(387)})})}},351:function(e,n,o){o(6),e.exports=function(e){return o.e(0x81b8806e4260,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(388)})})}},334:function(e,n,o){o(6),e.exports=function(e){return o.e(60335399758886,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(118)})})}},329:function(e,n,o){o(6),e.exports=function(e){return o.e(0x67ef26645b2a,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(217)})})}},143:function(e,n,o){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=o(2),u=(t(r),o(215)),a=t(u),i=o(59),l=t(i),s=o(144),c=t(s),d=void 0,f={},p={},m={},h={},g={},b=[],y=[],v={},j="",R=[],x={},w=function(e){return e&&e.default||e},k=void 0,_=!0,C=[],N={},P={},E=5;k=o(218)({getNextQueuedResources:function(){return R.slice(-1)[0]},createResourceDownload:function(e){T(e,function(){R=R.filter(function(n){return n!==e}),k.onResourcedFinished(e)})}}),l.default.on("onPreLoadPageResources",function(e){k.onPreLoadPageResources(e)}),l.default.on("onPostLoadPageResources",function(e){k.onPostLoadPageResources(e)});var O=function(e,n){return x[e]>x[n]?1:x[e]<x[n]?-1:0},L=function(e,n){return v[e]>v[n]?1:v[e]<v[n]?-1:0},T=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[n])e.nextTick(function(){o(null,h[n])});else{var t=void 0;t="component---"===n.slice(0,12)?p.components[n]:"layout---"===n.slice(0,9)?p.layouts[n]:p.json[n],t(function(e,t){h[n]=t,C.push({resource:n,succeeded:!e}),P[n]||(P[n]=e),C=C.slice(-E),o(e,t)})}},S=function(n,o){g[n]?e.nextTick(function(){o(null,g[n])}):P[n]?e.nextTick(function(){o(P[n])}):T(n,function(e,t){if(e)o(e);else{var r=w(t());g[n]=r,o(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=C.find(function(e){return e.succeeded});return!!n},D=function(e,n){console.log(n),N[e]||(N[e]=n),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},M=1,U={empty:function(){y=[],v={},x={},R=[],b=[],j=""},addPagesArray:function(e){b=e,j="/gatsby-contentful-starter",d=(0,a.default)(e,j)},addDevRequires:function(e){f=e},addProdRequires:function(e){p=e},dequeue:function(){return y.pop()},enqueue:function(e){var n=(0,c.default)(e,j);if(!b.some(function(e){return e.path===n}))return!1;var o=1/M;M+=1,v[n]?v[n]+=1:v[n]=1,U.has(n)||y.unshift(n),y.sort(L);var t=d(n);return t.jsonName&&(x[t.jsonName]?x[t.jsonName]+=1+o:x[t.jsonName]=1+o,R.indexOf(t.jsonName)!==-1||h[t.jsonName]||R.unshift(t.jsonName)),t.componentChunkName&&(x[t.componentChunkName]?x[t.componentChunkName]+=1+o:x[t.componentChunkName]=1+o,R.indexOf(t.componentChunkName)!==-1||h[t.jsonName]||R.unshift(t.componentChunkName)),R.sort(O),k.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:R,resourcesCount:x}},getPages:function(){return{pathArray:y,pathCount:v}},getPage:function(e){return d(e)},has:function(e){return y.some(function(n){return n===e})},getResourcesForPathname:function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};_&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(d(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,o=Array.isArray(n),t=0,n=o?n:n[Symbol.iterator]();;){var r;if(o){if(t>=n.length)break;r=n[t++]}else{if(t=n.next(),t.done)break;r=t.value}var u=r;u.unregister()}window.location.reload()}})),_=!1;if(N[n])return D(n,'Previously detected load failure for "'+n+'"'),o();var t=d(n);if(!t)return D(n,"A page wasn't found for \""+n+'"'),o();if(n=t.path,m[n])return e.nextTick(function(){o(m[n]),l.default.emit("onPostLoadPageResources",{page:t,pageResources:m[n]})}),m[n];l.default.emit("onPreLoadPageResources",{path:n});var r=void 0,u=void 0,a=void 0,i=function(){if(r&&u&&(!t.layoutComponentChunkName||a)){m[n]={component:r,json:u,layout:a,page:t};var e={component:r,json:u,layout:a,page:t};o(e),l.default.emit("onPostLoadPageResources",{page:t,pageResources:e})}};return S(t.componentChunkName,function(e,n){e&&D(t.path,"Loading the component for "+t.path+" failed"),r=n,i()}),S(t.jsonName,function(e,n){e&&D(t.path,"Loading the JSON for "+t.path+" failed"),u=n,i()}),void(t.layoutComponentChunkName&&S(t.layout,function(e,n){e&&D(t.path,"Loading the Layout for "+t.path+" failed"),a=n,i()}))},peek:function(e){return y.slice(-1)[0]},length:function(){return y.length},indexOf:function(e){return y.length-y.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:U.getResourcesForPathname};n.default=U}).call(n,o(123))},389:function(e,n){e.exports=[{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-boulders-habitat-bonn.json",path:"/blog/Boulders-Habitat-Bonn/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-odenwald-bouldern-bouldern-im-felsenmeer.json",path:"/blog/odenwald-bouldern-bouldern-im-felsenmeer/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-scarpa-booster-s-kletterschuh.json",path:"/blog/scarpa-booster-s-kletterschuh/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-boulderplanet-boulderhalle-in-koeln-ehrenfeld.json",path:"/blog/boulderplanet-boulderhalle-in-koeln-ehrenfeld/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-boulder-bundesliga-2019.json",path:"/blog/boulder-bundesliga-2019/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-wie-verbessere-ich-meine-klettertechnik-beim-bouldern.json",path:"/blog/wie-verbessere-ich-meine-klettertechnik-beim-bouldern/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-es-kann-nie-genug-kaffee-geben-bouldern-im-boulders-habitat-beuel-boulder.json",path:"/blog/es-kann-nie-genug-kaffee-geben-bouldern-im-boulders-habitat-beuel-boulder/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-toprope-und-bouldern-in-der-bergstation-in-hilden-boulder-vlog-002.json",path:"/blog/toprope-und-bouldern-in-der-bergstation-in-hilden-boulder-vlog-002/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-bouldern-im-boulders-habitat-in-bonn-boulder-boys-vlog-003.json",path:"/blog/bouldern-im-boulders-habitat-in-bonn-boulder-boys-vlog-003/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-deep-water-solo-guide.json",path:"/blog/deep-water-solo-guide/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-bouldern-im-boulders-habitat-bonn-boulder-boys-vlog-006.json",path:"/blog/bouldern-im-boulders-habitat-bonn-boulder-boys-vlog-006/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-bouldern-im-boulders-habitat-beuel-boulder-boys-vlog-005.json",path:"/blog/bouldern-im-boulders-habitat-beuel-boulder-boys-vlog-005/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-bouldern-im-boulders-habitat-in-bonn-boulder-boys-vlog-004.json",path:"/blog/bouldern-im-boulders-habitat-in-bonn-boulder-boys-vlog-004/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-wo-bouldern.json",path:"/blog/wo-bouldern/"},{componentChunkName:"component---src-pages-contact-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact.json",path:"/contact/"},{componentChunkName:"component---src-pages-impressum-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"impressum.json",path:"/impressum/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"}]},218:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,o=e.createResourceDownload,t=[],r=[],u=function(){var e=n();e&&(r.push(e),o(e))},a=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&u()},0)};return{onResourcedFinished:function(e){a({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},u=o(86),a=o(2),i=t(a),l=o(184),s=t(l),c=o(84),d=o(355),f=o(313),p=t(f),m=o(18),h=o(216),g=t(h),b=o(59),y=t(b),v=o(389),j=t(v),R=o(390),x=t(R),w=o(214),k=t(w),_=o(213),C=t(_),N=o(143),P=t(N);o(235),window.___history=g.default,window.___emitter=y.default,P.default.addPagesArray(j.default),P.default.addProdRequires(C.default),window.asyncRequires=C.default,window.___loader=P.default,window.matchPath=c.matchPath;var E=x.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=E[e];return null!=n&&(g.default.replace(n.toPath),!0)};O(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&l!==!1||(window.___history=e,l=!0,e.listen(function(e,n){O(e.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var o=n.location.pathname,t=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:o});if(t.length>0)return t[0];if(e){var r=e.location.pathname;if(r===o)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&o(219);var t=function(e,n){function o(e){e.page.path===P.default.getPage(r).path&&(y.default.off("onPostLoadPageResources",o),clearTimeout(l),i(t))}var t=(0,m.createLocation)(e,null,null,g.default.location),r=t.pathname,u=E[r];u&&(r=u.toPath);var a=window.location;if(a.pathname!==t.pathname||a.search!==t.search||a.hash!==t.hash){var i=n?window.___history.replace:window.___history.push,l=setTimeout(function(){y.default.off("onPostLoadPageResources",o),y.default.emit("onDelayedLoadPageResources",{pathname:r}),i(t)},1e3);P.default.getResourcesForPathname(r)?(clearTimeout(l),i(t)):y.default.on("onPostLoadPageResources",o)}};window.___push=function(e){return t(e,!1)},window.___replace=function(e){return t(e,!0)},window.___navigateTo=window.___push,(0,u.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var l=!1,f=(0,u.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(e){var n=e.children;return i.default.createElement(c.Router,{history:g.default},n)},b=(0,c.withRouter)(k.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,a.createElement)(f?f:h,null,(0,a.createElement)(d.ScrollContext,{shouldUpdateScroll:n},(0,a.createElement)(b,{layout:!0,children:function(n){return(0,a.createElement)(c.Route,{render:function(o){e(o.history);var t=n?n:o;return P.default.getPage(t.location.pathname)?(0,a.createElement)(k.default,r({page:!0},t)):(0,a.createElement)(k.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,u.apiRunner)("wrapRootComponent",{Root:o},o)[0],l=(0,u.apiRunner)("replaceHydrateFunction",void 0,s.default.render)[0];(0,p.default)(function(){return l(i.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},390:function(e,n){e.exports=[]},219:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o(59),u=t(r),a="/";a="/gatsby-contentful-starter/","serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},144:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},313:function(e,n,o){!function(n,o){e.exports=o()}("domready",function(){var e,n=[],o=document,t=o.documentElement.doScroll,r="DOMContentLoaded",u=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return u||o.addEventListener(r,e=function(){for(o.removeEventListener(r,e),u=1;e=n.shift();)e()}),function(e){u?setTimeout(e,0):n.push(e)}})},6:function(e,n,o){"use strict";function t(){function e(e){var n=t.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,t=document.querySelector("head"),r=o.e,u=o.s;o.e=function(t,a){var i=!1,l=!0,s=function(e){a&&(a(o,e),a=null)};return!u&&n&&n[t]?void s(!0):(r(t,function(){i||(i=!0,l?setTimeout(function(){s()}):s())}),void(i||(l=!1,e(function(){i||(i=!0,u?u[t]=void 0:(n||(n={}),n[t]=!0),s(!0))}))))}}t()},432:function(e,n){function o(e){return e=e||Object.create(null),{on:function(n,o){(e[n]||(e[n]=[])).push(o)},off:function(n,o){e[n]&&e[n].splice(e[n].indexOf(o)>>>0,1)},emit:function(n,o){(e[n]||[]).slice().map(function(e){e(o)}),(e["*"]||[]).slice().map(function(e){e(n,o)})}}}e.exports=o},123:function(e,n){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function r(e){if(c===setTimeout)return setTimeout(e,0);if((c===o||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(n){try{return c.call(null,e,0)}catch(n){return c.call(this,e,0)}}}function u(e){if(d===clearTimeout)return clearTimeout(e);if((d===t||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(n){try{return d.call(null,e)}catch(n){return d.call(this,e)}}}function a(){h&&p&&(h=!1,p.length?m=p.concat(m):g=-1,m.length&&i())}function i(){if(!h){var e=r(a);h=!0;for(var n=m.length;n;){for(p=m,m=[];++g<n;)p&&p[g].run();g=-1,n=m.length}p=null,h=!1,u(e)}}function l(e,n){this.fun=e,this.array=n}function s(){}var c,d,f=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:o}catch(e){c=o}try{d="function"==typeof clearTimeout?clearTimeout:t}catch(e){d=t}}();var p,m=[],h=!1,g=-1;f.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)n[o-1]=arguments[o];m.push(new l(e,n)),1!==m.length||h||r(i)},l.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=s,f.addListener=s,f.once=s,f.off=s,f.removeListener=s,f.removeAllListeners=s,f.emit=s,f.prependListener=s,f.prependOnceListener=s,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},526:function(e,n){"use strict";function o(e,n){for(var o in e)if(!(o in n))return!0;for(var t in n)if(e[t]!==n[t])return!0;return!1}n.__esModule=!0,n.default=function(e,n,t){return o(e.props,n)||o(e.state,t)},e.exports=n.default},330:function(e,n,o){o(6),e.exports=function(e){return o.e(70144966829960,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(224)})})}},331:function(e,n,o){o(6),e.exports=function(e){return o.e(0x9cceb118ec91,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(225)})})}},332:function(e,n,o){o(6),e.exports=function(e){return o.e(35783957827783,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(226)})})}},333:function(e,n,o){o(6),e.exports=function(e){return o.e(0x620f737b6699,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(227)})})}}});
//# sourceMappingURL=app-ec673fb2c26f2a7f17f8.js.map