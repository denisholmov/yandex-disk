import{r as T,j as E}from"./index-fabe03bd.js";function Ae(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ae(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function We(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Ae(e))&&(r&&(r+=" "),r+=t);return r}const Ke=e=>T.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},T.createElement("g",{clipPath:"url(#clip0_1_2)"},T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 14.545L1.455 16L8 9.455L14.545 16L16 14.545L9.455 8L16 1.455L14.545 0L8 6.545L1.455 0L0 1.455L6.545 8L0 14.545Z",fill:"black"})),T.createElement("defs",null,T.createElement("clipPath",{id:"clip0_1_2"},T.createElement("rect",{width:16,height:16,fill:"white"})))),Ge="_item_h7qoi_1",Xe="_left_h7qoi_12",Qe="_status_h7qoi_16",Ze="_remove_h7qoi_21",I={item:Ge,left:Xe,status:Qe,remove:Ze},Ye=({fileName:e,onRemove:t,status:n})=>E.jsxs("div",{className:I.item,children:[E.jsxs("div",{className:I.left,children:[E.jsx("div",{children:e}),E.jsxs("div",{className:I.status,children:["Статус: ",n]})]}),E.jsx("div",{className:I.remove,onClick:t,children:E.jsx(Ke,{})})]}),et="_list_13uag_1",tt="_noFiles_13uag_5",fe={list:et,noFiles:tt},nt=({files:e,className:t,onRemove:n})=>E.jsxs("div",{className:We(fe.list,t),children:[!e.length&&E.jsx("p",{className:fe.noFiles,children:"Файлы не выбраны"}),e.map(({file:r,key:s,status:o})=>E.jsx(Ye,{fileName:r.name,onRemove:()=>n(s),status:o},s))]}),rt="_input_jpmg3_1",st="_button_jpmg3_5",de={input:rt,button:st},ot=({onChange:e})=>{const t=T.useRef(null);return E.jsxs("div",{children:[E.jsx("input",{className:de.input,multiple:!0,onChange:n=>{e(n.target.files?Array.from(n.target.files):[]),n.target.value=""},ref:t,type:"file"}),E.jsx("button",{className:de.button,onClick:()=>{var n;return(n=t.current)==null?void 0:n.click()},children:"Выбрать файлы"})]})},it="_button_o17df_1",at={button:it},ct=({onClick:e})=>E.jsx("button",{className:at.button,onClick:e,children:"Загрузить"});var U=(e=>(e.NotStarted="Загрузка не началась",e.Uploading="Загрузка",e.Completed="Загрузка завершена",e.Error="Ошибка",e))(U||{});function Te(e,t){return function(){return e.apply(t,arguments)}}const{toString:lt}=Object.prototype,{getPrototypeOf:ie}=Object,V=(e=>t=>{const n=lt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=e=>(e=e.toLowerCase(),t=>V(t)===e),W=e=>t=>typeof t===e,{isArray:C}=Array,j=W("undefined");function ut(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ne=x("ArrayBuffer");function ft(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ne(e.buffer),t}const dt=W("string"),R=W("function"),_e=W("number"),K=e=>e!==null&&typeof e=="object",pt=e=>e===!0||e===!1,q=e=>{if(V(e)!=="object")return!1;const t=ie(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ht=x("Date"),mt=x("File"),yt=x("Blob"),wt=x("FileList"),Et=e=>K(e)&&R(e.pipe),bt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=V(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},St=x("URLSearchParams"),Rt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),C(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Fe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Pe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ce=e=>!j(e)&&e!==Pe;function ne(){const{caseless:e}=Ce(this)&&this||{},t={},n=(r,s)=>{const o=e&&Fe(t,s)||s;q(t[o])&&q(r)?t[o]=ne(t[o],r):q(r)?t[o]=ne({},r):C(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&D(arguments[r],n);return t}const gt=(e,t,n,{allOwnKeys:r}={})=>(D(t,(s,o)=>{n&&R(s)?e[o]=Te(s,n):e[o]=s},{allOwnKeys:r}),e),Ot=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),xt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},At=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ie(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Tt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Nt=e=>{if(!e)return null;if(C(e))return e;let t=e.length;if(!_e(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},_t=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ie(Uint8Array)),Ft=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Pt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ct=x("HTMLFormElement"),Lt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),pe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ut=x("RegExp"),Le=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},jt=e=>{Le(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Dt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return C(e)?r(e):r(String(e).split(t)),n},Bt=()=>{},kt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Z="abcdefghijklmnopqrstuvwxyz",he="0123456789",Ue={DIGIT:he,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+he},It=(e=16,t=Ue.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Mt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ht=e=>{const t=new Array(10),n=(r,s)=>{if(K(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=C(r)?[]:{};return D(r,(i,l)=>{const p=n(i,s+1);!j(p)&&(o[l]=p)}),t[s]=void 0,o}}return r};return n(e,0)},qt=x("AsyncFunction"),vt=e=>e&&(K(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:C,isArrayBuffer:Ne,isBuffer:ut,isFormData:bt,isArrayBufferView:ft,isString:dt,isNumber:_e,isBoolean:pt,isObject:K,isPlainObject:q,isUndefined:j,isDate:ht,isFile:mt,isBlob:yt,isRegExp:Ut,isFunction:R,isStream:Et,isURLSearchParams:St,isTypedArray:_t,isFileList:wt,forEach:D,merge:ne,extend:gt,trim:Rt,stripBOM:Ot,inherits:xt,toFlatObject:At,kindOf:V,kindOfTest:x,endsWith:Tt,toArray:Nt,forEachEntry:Ft,matchAll:Pt,isHTMLForm:Ct,hasOwnProperty:pe,hasOwnProp:pe,reduceDescriptors:Le,freezeMethods:jt,toObjectSet:Dt,toCamelCase:Lt,noop:Bt,toFiniteNumber:kt,findKey:Fe,global:Pe,isContextDefined:Ce,ALPHABET:Ue,generateString:It,isSpecCompliantForm:Mt,toJSONObject:Ht,isAsyncFn:qt,isThenable:vt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const je=m.prototype,De={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{De[e]={value:e}});Object.defineProperties(m,De);Object.defineProperty(je,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(je);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const zt=null;function re(e){return a.isPlainObject(e)||a.isArray(e)}function Be(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function me(e,t,n){return e?e.concat(t).map(function(s,o){return s=Be(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function $t(e){return a.isArray(e)&&!e.some(re)}const Jt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,A){return!a.isUndefined(A[h])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!p&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?p&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,A){let g=f;if(f&&!A&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&$t(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(g=a.toArray(f)))return h=Be(h),g.forEach(function(k,Ve){!(a.isUndefined(k)||k===null)&&t.append(i===!0?me([h],Ve,o):i===null?h:h+"[]",c(k))}),!1}return re(f)?!0:(t.append(me(A,h,o),c(f)),!1)}const d=[],y=Object.assign(Jt,{defaultVisitor:u,convertValue:c,isVisitable:re});function w(f,h){if(!a.isUndefined(f)){if(d.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));d.push(f),a.forEach(f,function(g,F){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(F)?F.trim():F,h,y))===!0&&w(g,h?h.concat(F):[F])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function ye(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ae(e,t){this._pairs=[],e&&G(e,this,t)}const ke=ae.prototype;ke.append=function(t,n){this._pairs.push([t,n])};ke.toString=function(t){const n=t?function(r){return t.call(this,r,ye)}:ye;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Vt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ie(e,t,n){if(!t)return e;const r=n&&n.encode||Vt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ae(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Wt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const we=Wt,Me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Kt=typeof URLSearchParams<"u"?URLSearchParams:ae,Gt=typeof FormData<"u"?FormData:null,Xt=typeof Blob<"u"?Blob:null,Qt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Zt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:Kt,FormData:Gt,Blob:Xt},isStandardBrowserEnv:Qt,isStandardBrowserWebWorkerEnv:Zt,protocols:["http","https","file","blob","url","data"]};function Yt(e,t){return G(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function en(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function tn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function He(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=tn(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(en(r),s,n,0)}),n}return null}const nn={"Content-Type":void 0};function rn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const X={transitional:Me,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(He(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Yt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return G(l?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),rn(t)):t}],transformResponse:[function(t){const n=this.transitional||X.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){X.headers[t]={}});a.forEach(["post","put","patch"],function(t){X.headers[t]=a.merge(nn)});const ce=X,sn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),on=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&sn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ee=Symbol("internals");function L(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function an(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const cn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Y(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function ln(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function un(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Q{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,p,c){const u=L(p);if(!u)throw new Error("header name must be a non-empty string");const d=a.findKey(s,u);(!d||s[d]===void 0||c===!0||c===void 0&&s[d]!==!1)&&(s[d||p]=v(l))}const i=(l,p)=>a.forEach(l,(c,u)=>o(c,u,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!cn(t)?i(on(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=L(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return an(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=L(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Y(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=L(i),i){const l=a.findKey(r,i);l&&(!n||Y(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Y(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=v(s),delete n[o];return}const l=t?ln(o):String(o).trim();l!==o&&delete n[o],n[l]=v(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ee]=this[Ee]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=L(i);r[l]||(un(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(Q.prototype);a.freezeMethods(Q);const N=Q;function ee(e,t){const n=this||ce,r=t||n,s=N.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function qe(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,m,{__CANCEL__:!0});function fn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const dn=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const p=[];p.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&p.push("expires="+new Date(s).toGMTString()),a.isString(o)&&p.push("path="+o),a.isString(i)&&p.push("domain="+i),l===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function pn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function hn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ve(e,t){return e&&!pn(t)?hn(e,t):t}const mn=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function yn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function wn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const c=Date.now(),u=r[o];i||(i=c),n[s]=p,r[s]=c;let d=o,y=0;for(;d!==s;)y+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const w=u&&c-u;return w?Math.round(y*1e3/w):void 0}}function be(e,t){let n=0;const r=wn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,p=r(l),c=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:p||void 0,estimated:p&&i&&c?(i-o)/p:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const En=typeof XMLHttpRequest<"u",bn=En&&function(e){return new Promise(function(n,r){let s=e.data;const o=N.from(e.headers).normalize(),i=e.responseType;let l;function p(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(w+":"+f))}const u=ve(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ie(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function d(){if(!c)return;const w=N.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:w,config:e,request:c};fn(function(g){n(g),p()},function(g){r(g),p()},h),c=null}if("onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Me;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},O.isStandardBrowserEnv){const w=(e.withCredentials||mn(u))&&e.xsrfCookieName&&dn.read(e.xsrfCookieName);w&&o.set(e.xsrfHeaderName,w)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",be(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",be(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=w=>{c&&(r(!w||w.type?new B(null,e,c):w),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const y=yn(u);if(y&&O.protocols.indexOf(y)===-1){r(new m("Unsupported protocol "+y+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},z={http:zt,xhr:bn};a.forEach(z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Sn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?z[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(z,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:z};function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function Se(e){return te(e),e.headers=N.from(e.headers),e.data=ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Sn.getAdapter(e.adapter||ce.adapter)(e).then(function(r){return te(e),r.data=ee.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return qe(r)||(te(e),r&&r.response&&(r.response.data=ee.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const Re=e=>e instanceof N?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(c,u,d){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:d},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(c,u,d){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,d)}else return r(c,u,d)}function o(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,d){if(d in t)return r(c,u);if(d in e)return r(void 0,c)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>s(Re(c),Re(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=p[u]||s,y=d(e[u],t[u],u);a.isUndefined(y)&&d!==l||(n[u]=y)}),n}const ze="1.4.0",le={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{le[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ge={};le.transitional=function(t,n,r){function s(o,i){return"[Axios v"+ze+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!ge[i]&&(ge[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function Rn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],p=l===void 0||i(l,o,e);if(p!==!0)throw new m("option "+o+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const se={assertOptions:Rn,validators:le},_=se.validators;let J=class{constructor(t){this.defaults=t,this.interceptors={request:new we,response:new we}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&se.assertOptions(r,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:se.assertOptions(s,{encode:_.function,serialize:_.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=N.concat(i,o);const l=[];let p=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(p=p&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,d=0,y;if(!p){const f=[Se.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),y=f.length,u=Promise.resolve(n);d<y;)u=u.then(f[d++],f[d++]);return u}y=l.length;let w=n;for(d=0;d<y;){const f=l[d++],h=l[d++];try{w=f(w)}catch(A){h.call(this,A);break}}try{u=Se.call(this,w)}catch(f){return Promise.reject(f)}for(d=0,y=c.length;d<y;)u=u.then(c[d++],c[d++]);return u}getUri(t){t=P(this.defaults,t);const n=ve(t.baseURL,t.url);return Ie(n,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){J.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(P(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}J.prototype[t]=n(),J.prototype[t+"Form"]=n(!0)});const $=J;class ue{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new B(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ue(function(s){t=s}),cancel:t}}}const gn=ue;function On(e){return function(n){return e.apply(null,n)}}function xn(e){return a.isObject(e)&&e.isAxiosError===!0}const oe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(oe).forEach(([e,t])=>{oe[t]=e});const An=oe;function $e(e){const t=new $(e),n=Te($.prototype.request,t);return a.extend(n,$.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return $e(P(e,s))},n}const b=$e(ce);b.Axios=$;b.CanceledError=B;b.CancelToken=gn;b.isCancel=qe;b.VERSION=ze;b.toFormData=G;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=On;b.isAxiosError=xn;b.mergeConfig=P;b.AxiosHeaders=N;b.formToJSON=e=>He(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=An;b.default=b;const Tn=b,Je=Tn.create({baseURL:"https://cloud-api.yandex.net/v1/disk"}),Nn=async e=>{const t=JSON.parse(window.localStorage.getItem("accessToken")),{data:n}=await Je.request({method:"GET",url:"/resources/upload",params:{path:e},headers:{Authorization:`OAuth ${t.token}`}});return n},_n=async(e,t)=>{const n=new FormData;n.set("file",t),await Je.request({method:"PUT",url:e,data:n,headers:{"Content-Type":"multipart/form-data"}})},Oe={getUploadLink:Nn,uploadFile:_n},Fn=()=>({upload:async t=>{const n=await Oe.getUploadLink(t.name);if(n.href)await Oe.uploadFile(n.href,t);else throw new Error}});let M;const Pn=new Uint8Array(16);function Cn(){if(!M&&(M=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!M))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return M(Pn)}const S=[];for(let e=0;e<256;++e)S.push((e+256).toString(16).slice(1));function Ln(e,t=0){return(S[e[t+0]]+S[e[t+1]]+S[e[t+2]]+S[e[t+3]]+"-"+S[e[t+4]]+S[e[t+5]]+"-"+S[e[t+6]]+S[e[t+7]]+"-"+S[e[t+8]]+S[e[t+9]]+"-"+S[e[t+10]]+S[e[t+11]]+S[e[t+12]]+S[e[t+13]]+S[e[t+14]]+S[e[t+15]]).toLowerCase()}const Un=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),xe={randomUUID:Un};function jn(e,t,n){if(xe.randomUUID&&!t&&!e)return xe.randomUUID();e=e||{};const r=e.random||(e.rng||Cn)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let s=0;s<16;++s)t[n+s]=r[s];return t}return Ln(r)}const Dn=e=>{const[t,n]=T.useState([]),[r,s]=T.useState(""),{upload:o}=Fn(),i=(c,u)=>{n(d=>d.map(y=>y.key===c?{...y,status:u}:y))};return{selectedFiles:t,errorMessage:r,addFiles:c=>{if(e!=null&&e.maxLength&&c.length>e.maxLength){s(`Максимальное количество файлов - ${e.maxLength}`);return}s("");const u=c.map(d=>{const y=jn();return{file:d,key:y,upload:()=>{i(y,U.Uploading),o(d).then(()=>i(y,U.Completed)).catch(()=>i(y,U.Error))},status:U.NotStarted}});n(d=>[...d,...u])},removeFile:c=>{n(u=>u.filter(d=>d.key!==c))}}},Bn="_wrap_39wvn_1",kn="_top_39wvn_8",In="_error_39wvn_15",Mn="_list_39wvn_23",H={wrap:Bn,top:kn,error:In,list:Mn},Hn=()=>{const{selectedFiles:e,errorMessage:t,addFiles:n,removeFile:r}=Dn({maxLength:100}),s=()=>{e.forEach(o=>o.upload())};return E.jsxs("div",{className:H.wrap,children:[E.jsxs("div",{className:H.top,children:[E.jsx(ot,{onChange:n}),!!e.length&&E.jsx(ct,{onClick:s})]}),t&&E.jsx("div",{className:H.error,children:t}),E.jsx(nt,{className:H.list,files:e,onRemove:r})]})},zn=()=>E.jsx("div",{className:"page",children:E.jsx(Hn,{})});export{zn as default};
//# sourceMappingURL=index-2b42e8a4.js.map
