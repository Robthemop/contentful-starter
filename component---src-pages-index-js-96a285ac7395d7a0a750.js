webpackJsonp([35783957827783],{37:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){_.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var r=a(21),i=o(r),n=a(27),s=o(n),d=a(26),u=o(d),c=a(61),f=o(c),p=a(60),h=o(p),m=a(2),g=o(m),y=a(19),b=o(y),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},S=void 0,_=[],L=function(e,t){l().observe(e),_.push([e,t])},j=null,T=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",o=e.sizes?'sizes="'+e.sizes+'" ':"",l=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",n=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+i+n+t+a+r+l+o+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},I=function(e){var t=e.style,a=e.onLoad,o=(0,f.default)(e,["style","onLoad"]);return g.default.createElement("img",(0,h.default)({},o,{onLoad:a,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};I.propTypes={style:b.default.object,onLoad:b.default.func};var N=function(e){function t(a){(0,i.default)(this,t);var o=(0,s.default)(this,e.call(this,a)),l=!0,r=!0,n=!1,d=E(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=!1,r=!1,n=!0),"undefined"==typeof window&&(l=!1,r=!1),o.state={isVisible:l,imgLoaded:r,IOSupported:n},o.handleRef=o.handleRef.bind(o),o}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&L(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,o=t.alt,l=t.className,r=t.outerWrapperClassName,i=t.style,n=void 0===i?{}:i,s=t.imgStyle,d=void 0===s?{}:s,u=t.placeholderStyle,c=void 0===u?{}:u,f=t.sizes,p=t.resolutions,m=t.backgroundColor,y=t.Tag,b=void 0;b="boolean"==typeof m?"lightgray":m;var w=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d,c),E=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(f){var S=f;return S.srcWebp&&S.srcSetWebp&&T()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),g.default.createElement(y,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===n.position?"initial":"relative"}},g.default.createElement(y,{className:(l?l:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef},g.default.createElement(y,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&g.default.createElement(I,{alt:o,title:a,src:S.base64,style:w}),S.tracedSVG&&g.default.createElement(I,{alt:o,title:a,src:S.tracedSVG,style:w}),b&&g.default.createElement(y,{title:a,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&g.default.createElement(I,{alt:o,title:a,srcSet:S.srcSet,src:S.src,sizes:S.sizes,style:E,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,h.default)({alt:o,title:a},S))}})))}if(p){var _=p,L=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},n);return"inherit"===n.display&&delete L.display,_.srcWebp&&_.srcSetWebp&&T()&&(_.src=_.srcWebp,_.srcSet=_.srcSetWebp),g.default.createElement(y,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===n.position?"initial":"relative"}},g.default.createElement(y,{className:(l?l:"")+" gatsby-image-wrapper",style:L,ref:this.handleRef},_.base64&&g.default.createElement(I,{alt:o,title:a,src:_.base64,style:w}),_.tracedSVG&&g.default.createElement(I,{alt:o,title:a,src:_.tracedSVG,style:w}),b&&g.default.createElement(y,{title:a,style:{backgroundColor:b,width:_.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:_.height}}),this.state.isVisible&&g.default.createElement(I,{alt:o,title:a,width:_.width,height:_.height,srcSet:_.srcSet,src:_.src,style:E,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,h.default)({alt:o,title:a,width:_.width,height:_.height},_))}})))}return null},t}(g.default.Component);N.defaultProps={fadeIn:!0,alt:"",Tag:"div"},N.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=N},87:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=o(l),i=a(38),n=o(i),s=a(37),d=o(s),u=a(112),c=o(u);t.default=function(e){var t=e.article;return r.default.createElement("div",{className:c.default.preview},r.default.createElement(d.default,{alt:"",sizes:t.heroImage.sizes}),r.default.createElement("h3",{className:c.default.previewTitle},r.default.createElement(n.default,{to:"/blog/"+t.slug},t.title)),r.default.createElement("small",null,t.publishDate),r.default.createElement("p",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}))},e.exports=t.default},112:function(e,t){e.exports={previewTitle:"src-components----article-preview-module---previewTitle---16pYm",tag:"src-components----article-preview-module---tag---27JAs"}},221:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=o(l),i=a(37),n=o(i),s=a(113),d=o(s);t.default=function(e){var t=e.data;return r.default.createElement("div",{className:d.default.hero},r.default.createElement(n.default,{className:d.default.heroImage,alt:t.name,sizes:t.heroImage.sizes}),r.default.createElement("div",{className:d.default.heroDetails},r.default.createElement("h3",{className:d.default.heroHeadline},t.name),r.default.createElement("p",{className:d.default.heroTitle},t.title)))},e.exports=t.default},113:function(e,t){e.exports={hero:"src-components----hero-module---hero---S__gH",heroImage:"src-components----hero-module---heroImage---DciWV",heroDetails:"src-components----hero-module---heroDetails---3uv8x",heroHeadline:"src-components----hero-module---heroHeadline---jhgHQ",heroTitle:"src-components----hero-module---heroTitle---2LulU",p:"src-components----hero-module---p---qnY5R"}},226:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var n=a(2),s=o(n),d=a(77),u=o(d),c=a(83),f=o(c),p=a(221),h=o(p),m=a(87),g=o(m),y=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=(0,u.default)(this,"props.data.site.siteMetadata.title"),t=(0,u.default)(this,"props.data.allContentfulBlogPost.edges"),a=(0,u.default)(this,"props.data.allContentfulPerson.edges"),o=a[0];return s.default.createElement("div",{style:{background:"#fff"}},s.default.createElement(f.default,{title:e}),s.default.createElement(h.default,{data:o.node}),s.default.createElement("div",{className:"wrapper"},s.default.createElement("h1",{className:"section-headline"},"hot stuff"),s.default.createElement("ul",{className:"article-list"},t.map(function(e){var t=e.node;return s.default.createElement("li",{key:t.slug},s.default.createElement(g.default,{article:t}))}))))},t}(s.default.Component);t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-96a285ac7395d7a0a750.js.map