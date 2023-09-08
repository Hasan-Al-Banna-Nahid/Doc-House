(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2603)}])},3991:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return f},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return a},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",u="navigate",l="restore",f="server-patch",i="prefetch",a="fast-refresh",c="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(2387),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return E}});let r=n(8754),o=r._(n(7294)),u=n(4532),l=n(3353),f=n(1410),i=n(9064),a=n(370),c=n(9955),s=n(4224),d=n(508),p=n(1516),_=n(4266),b=n(3991),h=new Set;function y(e,t,n,r,o,u){if(!u&&!(0,l.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,u=t+"%"+n+"%"+o;if(h.has(u))return;h.add(u)}let f=u?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(f).catch(e=>{})}function v(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let O=o.default.forwardRef(function(e,t){let n,r;let{href:f,as:h,children:O,prefetch:E=null,passHref:g,replace:C,shallow:P,scroll:T,locale:j,onClick:m,onMouseEnter:M,onTouchStart:R,legacyBehavior:A=!1,...k}=e;n=O,A&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let I=o.default.useContext(c.RouterContext),N=o.default.useContext(s.AppRouterContext),L=null!=I?I:N,x=!I,S=!1!==E,w=null===E?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:U,as:H}=o.default.useMemo(()=>{if(!I){let e=v(f);return{href:e,as:h?v(h):e}}let[e,t]=(0,u.resolveHref)(I,f,!0);return{href:e,as:h?(0,u.resolveHref)(I,h):t||e}},[I,f,h]),K=o.default.useRef(U),F=o.default.useRef(H);A&&(r=o.default.Children.only(n));let D=A?r&&"object"==typeof r&&r.ref:t,[V,X,q]=(0,d.useIntersection)({rootMargin:"200px"}),z=o.default.useCallback(e=>{(F.current!==H||K.current!==U)&&(q(),F.current=H,K.current=U),V(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[H,D,U,q,V]);o.default.useEffect(()=>{L&&X&&S&&y(L,U,H,{locale:j},{kind:w},x)},[H,U,X,j,S,null==I?void 0:I.locale,L,x,w]);let B={ref:z,onClick(e){A||"function"!=typeof m||m(e),A&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,r,u,f,i,a,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let _=()=>{let e=null==i||i;"beforePopState"in t?t[u?"replace":"push"](n,r,{shallow:f,locale:a,scroll:e}):t[u?"replace":"push"](r||n,{forceOptimisticNavigation:!s,scroll:e})};c?o.default.startTransition(_):_()}(e,L,U,H,C,P,T,j,x,S)},onMouseEnter(e){A||"function"!=typeof M||M(e),A&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),L&&(S||!x)&&y(L,U,H,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:w},x)},onTouchStart(e){A||"function"!=typeof R||R(e),A&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),L&&(S||!x)&&y(L,U,H,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:w},x)}};if((0,i.isAbsoluteUrl)(H))B.href=H;else if(!A||g||"a"===r.type&&!("href"in r.props)){let e=void 0!==j?j:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,p.getDomainLocale)(H,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);B.href=t||(0,_.addBasePath)((0,a.addLocale)(H,e,null==I?void 0:I.defaultLocale))}return A?o.default.cloneElement(r,B):o.default.createElement("a",{...k,...B},n)}),E=O;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(7294),o=n(29),u="function"==typeof IntersectionObserver,l=new Map,f=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,a=i||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(u){if(a||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:u,elements:o},f.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,n,t,c,d.current]);let _=(0,r.useCallback)(()=>{s(!1)},[]);return[p,c,_]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2603:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5893),o=n(1664),u=n.n(o);function l(){return(0,r.jsxs)("div",{children:["Hello World. ",(0,r.jsx)(u(),{href:"/about",children:"About"})]})}},1664:function(e,t,n){e.exports=n(5569)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);