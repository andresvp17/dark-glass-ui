let d;const I=new Uint8Array(16);function D(){if(!d&&(d=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!d))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return d(I)}const r=[];for(let t=0;t<256;++t)r.push((t+256).toString(16).slice(1));function T(t,e=0){return r[t[e+0]]+r[t[e+1]]+r[t[e+2]]+r[t[e+3]]+"-"+r[t[e+4]]+r[t[e+5]]+"-"+r[t[e+6]]+r[t[e+7]]+"-"+r[t[e+8]]+r[t[e+9]]+"-"+r[t[e+10]]+r[t[e+11]]+r[t[e+12]]+r[t[e+13]]+r[t[e+14]]+r[t[e+15]]}const f=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),m={randomUUID:f};function w(t,e,o){if(m.randomUUID&&!e&&!t)return m.randomUUID();t=t||{};const n=t.random||(t.rng||D)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,T(n)}const{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,{global:R}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:U}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var j="storybook/actions",x=`${j}/action-event`,V={depth:10,clearOnStoryChange:!0,limit:50},h=(t,e)=>{let o=Object.getPrototypeOf(t);return!o||e(o)?o:h(o,e)},P=t=>!!(typeof t=="object"&&t&&h(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),F=t=>{if(P(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let o=Object.getOwnPropertyDescriptor(e,"view"),n=o==null?void 0:o.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...o,value:Object.create(n.constructor.prototype)}),e}return t},M=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?w():Date.now().toString(36)+Math.random().toString(36).substring(2);function g(t,e={}){let o={...V,...e},n=function(...c){var u,y;if(e.implicit){let _=(u="__STORYBOOK_PREVIEW__"in R?R.__STORYBOOK_PREVIEW__:void 0)==null?void 0:u.storyRenders.find(p=>p.phase==="playing"||p.phase==="rendering");if(_){let p=!((y=window==null?void 0:window.FEATURES)!=null&&y.disallowImplicitActionsInRenderV8),O=new U({phase:_.phase,name:t,deprecated:p});if(p)console.warn(O);else throw O}}let i=S.getChannel(),a=M(),s=5,l=c.map(F),b=c.length>1?l:l[0],A={id:a,count:0,data:{name:t,args:b},options:{...o,maxDepth:s+(o.depth||3),allowFunction:o.allowFunction||!1}};i.emit(x,A)};return n.isAction=!0,n}var E=(t,e)=>typeof e[t]>"u"&&!(t in e),v=t=>{let{initialArgs:e,argTypes:o,id:n,parameters:{actions:c}}=t;if(!c||c.disable||!c.argTypesRegex||!o)return{};let i=new RegExp(c.argTypesRegex);return Object.entries(o).filter(([a])=>!!i.test(a)).reduce((a,[s,l])=>(E(s,e)&&(a[s]=g(s,{implicit:!0,id:n})),a),{})},B=t=>{let{initialArgs:e,argTypes:o,parameters:{actions:n}}=t;return n!=null&&n.disable||!o?{}:Object.entries(o).filter(([c,i])=>!!i.action).reduce((c,[i,a])=>(E(i,e)&&(c[i]=g(typeof a.action=="string"?a.action:i)),c),{})},K=[B,v],k=t=>{let{args:e,parameters:{actions:o}}=t;o!=null&&o.disable||Object.entries(e).filter(([,n])=>typeof n=="function"&&"_isMockFunction"in n&&n._isMockFunction).forEach(([n,c])=>{let i=c.getMockImplementation();if((i==null?void 0:i._actionAttached)!==!0&&(i==null?void 0:i.isAction)!==!0){let a=(...s)=>(g(n)(...s),i==null?void 0:i(...s));a._actionAttached=!0,c.mockImplementation(a)}})},L=[k];export{K as argsEnhancers,L as loaders};