'use strict';function v(g,l,h,k){g.c.ka(g.I,l,h,k,void 0)}function z(g,l,h,k){g.c.i?v(g,l,h,k):g.c.Db()._OnMessageFromDOM({type:"event",component:g.I,handler:l,dispatchOpts:k||null,data:h,responseId:null})}function K(g,l,h){g.c.b(g.I,l,h)}function L(g,l){for(const [h,k]of l)K(g,h,k)}window.ia=class{constructor(g,l){this.c=g;this.I=l}Ga(){}};
window.qb=class{constructor(g,l){this.Ya=g;this.oc=l;this.B=-1;this.Y=-Infinity;this.tc=()=>{this.B=-1;this.Y=Date.now();this.J=!0;this.Ya();this.J=!1};this.Za=this.J=!1}};"use strict";function M(g,l){const h=l.elementId,k=g.Ia(h,l);g.h.set(h,k);k.style.boxSizing="border-box";l.isVisible||(k.style.display="none");l=g.na(k);l.addEventListener("focus",()=>{N(g,"elem-focused",h)});l.addEventListener("blur",()=>{N(g,"elem-blurred",h)});g.V&&document.body.appendChild(k)}
function O(g,l){K(g,"get-element",h=>{const k=g.h.get(h.elementId);return l(k,h)})}function N(g,l,h){var k;k||(k={});k.elementId=h;v(g,l,k)}
window.jb=class extends self.ia{constructor(g,l){super(g,l);this.h=new Map;this.V=!0;L(this,[["create",h=>M(this,h)],["destroy",h=>{{h=h.elementId;const k=this.h.get(h);this.V&&k.parentElement.removeChild(k);this.h.delete(h)}}],["set-visible",h=>{this.V&&(this.h.get(h.elementId).style.display=h.isVisible?"":"none")}],["update-position",h=>{if(this.V){var k=this.h.get(h.elementId);k.style.left=h.left+"px";k.style.top=h.top+"px";k.style.width=h.width+"px";k.style.height=h.height+"px";h=h.fontSize;null!==
h&&(k.style.fontSize=h+"em")}}],["update-state",h=>{{const k=this.h.get(h.elementId);this.la(k,h)}}],["focus",h=>{{const k=this.na(this.h.get(h.elementId));h.focus?k.focus():k.blur()}}],["set-css-style",h=>{this.h.get(h.elementId).style[h.prop]=h.val}],["set-attribute",h=>{this.h.get(h.elementId).setAttribute(h.name,h.val)}],["remove-attribute",h=>{this.h.get(h.elementId).removeAttribute(h.name)}]]);O(this,h=>h)}Ia(){throw Error("required override");}la(){throw Error("required override");}na(g){return g}};
"use strict";
{const g=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),l=/android/i.test(navigator.userAgent);let h=0;function k(f){const a=document.createElement("script");a.async=!1;a.type="module";return f.yc?new Promise(d=>{const e="c3_resolve_"+h;++h;self[e]=d;a.textContent=f.Bc+`\n\nself["${e}"]();`;document.head.appendChild(a)}):new Promise((d,e)=>{a.onload=d;a.onerror=e;a.src=f;document.head.appendChild(a)})}let p=!1,x=!1;function I(){if(!p){try{new Worker("blob://",{get type(){x=
!0}})}catch(f){}p=!0}return x}let w=new Audio;const A={"audio/webm; codecs=opus":!!w.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!w.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!w.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!w.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!w.canPlayType("audio/mp4"),"audio/mpeg":!!w.canPlayType("audio/mpeg")};w=null;async function J(f){f=await F(f);return(new TextDecoder("utf-8")).decode(f)}
function F(f){return new Promise((a,d)=>{const e=new FileReader;e.onload=m=>a(m.target.result);e.onerror=m=>d(m);e.readAsArrayBuffer(f)})}const y=[];let B=0;window.RealFile=window.File;const C=[],t=new Map,D=new Map;let E=0;const G=[];self.runOnStartup=function(f){if("function"!==typeof f)throw Error("runOnStartup called without a function");G.push(f)};const b=new Set(["cordova","playable-ad","instant-games"]);let c=!1;window.R=class f{constructor(a){this.i=a.Dc;this.L=null;this.f="";this.da=a.Ac;
this.P={};this.za=this.gb=null;this.W=[];this.g=this.Ca=null;this.ab=!1;this.K=null;this.v=-1;this.sc=()=>this.Zb();this.fb=[];this.a=a.hb;this.X="file"===location.protocol.substr(0,4);!this.i||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&I()||(this.i=!1);if("playable-ad"===this.a||"instant-games"===this.a)this.i=!1;if("cordova"===this.a&&this.i)if(l){const d=/Chrome\/(\d+)/i.exec(navigator.userAgent);d&&90<=parseInt(d[1],10)||(this.i=!1)}else this.i=!1;this.$=this.l=null;"html5"!==
this.a&&"playable-ad"!==this.a||!this.X||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");"html5"!==this.a||window.isSecureContext||console.warn("[Construct 3] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.b("runtime","cordova-fetch-local-file",d=>this.Kb(d));this.b("runtime",
"create-job-worker",()=>this.Lb());"cordova"===this.a?document.addEventListener("deviceready",()=>this.Na(a)):this.Na(a)}nb(){return g&&"cordova"===this.a}ja(){const a=navigator.userAgent;return g&&b.has(this.a)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}lb(){return l}Ja(){return l&&b.has(this.a)}async Na(a){"macos-wkwebview"===this.a&&this.kc();if("playable-ad"===this.a){this.l=self.c3_base64files;this.$={};await this.xb();for(let e=0,m=a.C.length;e<m;++e){var d=a.C[e].toLowerCase();
this.$.hasOwnProperty(d)?a.C[e]={yc:!0,Bc:this.$[d]}:this.l.hasOwnProperty(d)&&(a.C[e]=URL.createObjectURL(this.l[d]))}}a.uc?this.f=a.uc:(d=location.origin,this.f=("null"===d?"file:///":d)+location.pathname,d=this.f.lastIndexOf("/"),-1!==d&&(this.f=this.f.substr(0,d+1)));a.Fc&&(this.P=a.Fc);d=new MessageChannel;this.L=d.port1;this.L.onmessage=e=>this._OnMessageFromRuntime(e.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(e=>this.Wb(e));this.K=new self.ob(this);await P(this.K);
"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.i?await this.Fb(a,d.port2):await this.Eb(a,d.port2)}oa(a){a=this.P.hasOwnProperty(a)?this.P[a]:a.endsWith("/workermain.js")&&this.P.hasOwnProperty("workermain.js")?this.P["workermain.js"]:"playable-ad"===this.a&&this.l.hasOwnProperty(a.toLowerCase())?this.l[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ha(a,d,e){if(a.startsWith("blob:"))return new Worker(a,
e);if("cordova"===this.a&&this.X)return a=await this.ga(e.xc?a:this.da+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),e);a=new URL(a,d);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),e)}return new Worker(a,e)}m(){return Math.max(window.innerWidth,1)}j(){return Math.max(window.innerHeight,1)}La(a){var d=this.K;return{baseUrl:this.f,previewUrl:location.href,
windowInnerWidth:this.m(),windowInnerHeight:this.j(),devicePixelRatio:window.devicePixelRatio,isFullscreen:f.D(),projectData:a.Lc,previewImageBlobs:window.cr_previewImageBlobs||this.l,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.Jc||"",exportType:a.hb,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.Kc,jobScheduler:{inputPort:d.ya,outputPort:d.Ba,maxNumWorkers:d.qc},supportedAudioFormats:A,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||
this.da+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.da+"opus.wasm.wasm",isFileProtocol:this.X,isiOSCordova:this.nb(),isiOSWebView:this.ja(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async Fb(a,d){var e=this.oa(a.Ec);this.gb=await this.ha(e,this.f,{type:"module",name:"Runtime",xc:!0});this.g=document.createElement("canvas");this.g.style.display="none";e=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;let m=a.Fa||[],
r=a.C;m=await Promise.all(m.map(n=>this.s(n)));r=await Promise.all(r.map(n=>this.s(n)));if("cordova"===this.a)for(let n=0,q=a.ea.length;n<q;++n){const u=a.ea[n],H=u[0];if(H===a.Ea||"scriptsInEvents.js"===H||H.endsWith("/scriptsInEvents.js"))u[1]=await this.s(H)}this.gb.postMessage(Object.assign(this.La(a),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:e,workerDependencyScripts:m,engineScripts:r,projectScripts:a.ea,mainProjectScript:a.Ea,projectScriptsStatus:self.C3_ProjectScriptsStatus}),
[d,e,...Q(this.K)]);this.W=C.map(n=>new n(this));this.Ka();self.c3_callFunction=(n,q)=>this.Ca.Gb(n,q);"preview"===this.a&&(self.goToLastErrorScript=()=>this.ka("runtime","go-to-last-error-script"))}async Eb(a,d){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.W=C.map(n=>new n(this));this.Ka();var e=a.C.map(n=>"string"===typeof n?(new URL(n,this.f)).toString():n);Array.isArray(a.Fa)&&e.unshift(...a.Fa);e=await Promise.all(e.map(n=>
this.s(n)));await Promise.all(e.map(n=>k(n)));e=self.C3_ProjectScriptsStatus;const m=a.Ea,r=a.ea;for(let [n,q]of r)if(q||(q=n),n===m)try{q=await this.s(q),await k(q),"preview"!==this.a||e[n]||this.Ta(n,"main script did not run to completion")}catch(u){this.Ta(n,u)}else if("scriptsInEvents.js"===n||n.endsWith("/scriptsInEvents.js"))q=await this.s(q),await k(q);"preview"===this.a&&"object"!==typeof self.Gc.Hc?(this.U(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.La(a),{isInWorker:!1,messagePort:d,canvas:this.g,runOnStartupFunctions:G}),this.Pa(),this.za=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.za,a))}Ta(a,d){this.U();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Pa(){this.U()}U(){const a=
window.vc;a&&(a.parentElement.removeChild(a),window.vc=null)}async Lb(){const a=await S(this.K);return{outputPort:a,transferables:[a]}}Db(){if(this.i)throw Error("not available in worker mode");return this.za}ka(a,d,e,m,r){this.L.postMessage({type:"event",component:a,handler:d,dispatchOpts:m||null,data:e,responseId:null},r)}pb(a,d){const e=E++,m=new Promise((r,n)=>{D.set(e,{resolve:r,reject:n})});this.L.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:e},
void 0);return m}["_OnMessageFromRuntime"](a){const d=a.type;if("event"===d)return this.Qb(a);if("result"===d)this.bc(a);else if("runtime-ready"===d)this.cc();else if("alert-error"===d)this.U(),alert(a.message);else if("creating-runtime"===d)this.Pa();else throw Error(`unknown message '${d}'`);}Qb(a){const d=a.component,e=a.handler,m=a.data,r=a.responseId;if(a=t.get(d))if(a=a.get(e)){var n=null;try{n=a(m)}catch(q){console.error(`Exception in '${d}' handler '${e}':`,q);null!==r&&this.T(r,!1,""+q);
return}if(null===r)return n;n&&n.then?n.then(q=>this.T(r,!0,q)).catch(q=>{console.error(`Rejection from '${d}' handler '${e}':`,q);this.T(r,!1,""+q)}):this.T(r,!0,n)}else console.warn(`[DOM] No handler '${e}' for component '${d}'`);else console.warn(`[DOM] No event handlers for component '${d}'`)}T(a,d,e){let m;e&&e.transferables&&(m=e.transferables);this.L.postMessage({type:"result",responseId:a,isOk:d,result:e},m)}bc(a){const d=a.responseId,e=a.isOk;a=a.result;const m=D.get(d);e?m.resolve(a):m.reject(a);
D.delete(d)}b(a,d,e){let m=t.get(a);m||(m=new Map,t.set(a,m));if(m.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);m.set(d,e)}static fa(a){if(C.includes(a))throw Error("DOM handler already added");C.push(a)}Ka(){for(const a of this.W)if("runtime"===a.I){this.Ca=a;return}throw Error("cannot find runtime DOM handler");}Wb(a){this.ka("debugger","message",a)}cc(){for(const a of this.W)a.Ga()}static D(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||
c)}static Va(a){c=!!a}Ua(){-1===this.v&&this.fb.length&&(this.v=requestAnimationFrame(this.sc))}vb(){-1!==this.v&&(cancelAnimationFrame(this.v),this.v=-1)}Zb(){this.v=-1;for(const a of this.fb)a();this.Ua()}va(){this.Ca.va()}rb(){this.ab=!0}kb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}mb(a){return!this.kb(a)}async s(a){return"cordova"===this.a&&(a.startsWith("file:")||this.X&&this.mb(a))?(a.startsWith(this.f)&&(a=a.substr(this.f.length)),a=await this.ga(a),
URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async Kb(a){const d=a.filename;switch(a.as){case "text":return await this.ib(d);case "buffer":return await this.ga(d);default:throw Error("unsupported type");}}Ha(a){const d=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((e,m)=>{window.resolveLocalFileSystemURL(d,r=>{r.file(e,m)},m)})}async ib(a){a=await this.Ha(a);return await J(a)}ma(){if(y.length&&!(8<=B)){B++;var a=y.shift();this.yb(a.filename,
a.Cc,a.wc)}}ga(a){return new Promise((d,e)=>{y.push({filename:a,Cc:m=>{B--;this.ma();d(m)},wc:m=>{B--;this.ma();e(m)}});this.ma()})}async yb(a,d,e){try{const m=await this.Ha(a),r=await F(m);d(r)}catch(m){e(m)}}kc(){var a={type:"ready"};if("windows-webview2"===this.a)window.chrome.webview.postMessage(JSON.stringify(a));else if("macos-wkwebview"===this.a)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async xb(){const a=[];for(const [d,
e]of Object.entries(this.l))a.push(this.wb(d,e));await Promise.all(a)}async wb(a,d){if("object"===typeof d)this.l[a]=new Blob([d.str],{type:d.type}),this.$[a]=d.str;else{let e=await this.Cb(d);e||(e=this.zb(d));this.l[a]=e}}async Cb(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",d),null}}zb(a){a=
this.ic(a);return this.ub(a.data,a.zc)}ic(a){var d=a.indexOf(",");if(0>d)throw new URIError("expected comma in data: uri");var e=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const m=d[2];e="base64"===d[1]||"base64"===m?atob(e):decodeURIComponent(e);return{zc:a,data:e}}ub(a,d){var e=a.length;let m=e>>2,r=new Uint8Array(e),n=new Uint32Array(r.buffer,0,m),q,u;for(u=q=0;q<m;++q)n[q]=a.charCodeAt(u++)|a.charCodeAt(u++)<<8|a.charCodeAt(u++)<<16|a.charCodeAt(u++)<<24;for(e&=3;e--;)r[u]=a.charCodeAt(u),
++u;return new Blob([r],{type:d})}}}"use strict";
{const g=self.R;function l(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),k={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},p={dispatchUserScriptEvent:!0},x={dispatchRuntimeEvent:!0};function I(b){return new Promise((c,f)=>{const a=document.createElement("link");a.onload=()=>c(a);a.onerror=d=>f(d);a.rel=
"stylesheet";a.href=b;document.head.appendChild(a)})}function w(b){return new Promise((c,f)=>{const a=new Image;a.onload=()=>c(a);a.onerror=d=>f(d);a.src=b})}async function A(b){b=URL.createObjectURL(b);try{return await w(b)}finally{URL.revokeObjectURL(b)}}function J(b){return new Promise((c,f)=>{let a=new FileReader;a.onload=d=>c(d.target.result);a.onerror=d=>f(d);a.readAsText(b)})}async function F(b,c,f){if(!/firefox/i.test(navigator.userAgent))return await A(b);var a=await J(b);a=(new DOMParser).parseFromString(a,
"image/svg+xml");const d=a.documentElement;if(d.hasAttribute("width")&&d.hasAttribute("height")){const e=d.getAttribute("width"),m=d.getAttribute("height");if(!e.includes("%")&&!m.includes("%"))return await A(b)}d.setAttribute("width",c+"px");d.setAttribute("height",f+"px");a=(new XMLSerializer).serializeToString(a);b=new Blob([a],{type:"image/svg+xml"});return await A(b)}function y(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const B=new Set(["input",
"textarea","datalist","select"]),C=new Set(["canvas","body","html"]);function t(b){C.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function D(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await A(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const c=b.getBoundingClientRect();document.body.removeChild(b);return[c.width,
c.height]}};self.C3_RasterSvgImageBlob=async function(b,c,f,a,d){b=await F(b,c,f);const e=document.createElement("canvas");e.width=a;e.height=d;e.getContext("2d").drawImage(b,0,0,c,f);return e};let E=!1;document.addEventListener("pause",()=>E=!0);document.addEventListener("resume",()=>E=!1);function G(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}g.fa(class extends self.ia{constructor(b){super(b,"runtime");this.bb=!0;this.A=-1;this.Da="any";this.Wa=this.Xa=!1;this.o=
null;this.$a="";this.xa=-1;this.u=this.N=null;this.ba=this.aa=0;this.eb=b.m();this.Z=b.j();this.O=0;b.b("canvas","update-size",a=>this.ec(a));b.b("runtime","invoke-download",a=>this.Vb(a));b.b("runtime","raster-svg-image",a=>this.$b(a));b.b("runtime","get-svg-image-size",a=>this.Tb(a));b.b("runtime","set-target-orientation",a=>this.dc(a));b.b("runtime","register-sw",()=>this.ac());b.b("runtime","post-to-debugger",a=>this.Ra(a));b.b("runtime","go-to-script",a=>this.Ra(a));b.b("runtime","before-start-ticking",
()=>this.Jb());b.b("runtime","debug-highlight",a=>this.Mb(a));b.b("runtime","enable-device-orientation",()=>this.tb());b.b("runtime","enable-device-motion",()=>this.sb());b.b("runtime","add-stylesheet",a=>this.Hb(a));b.b("runtime","alert",a=>this.Ib(a));b.b("runtime","hide-cordova-splash",()=>this.Ub());b.b("runtime","set-exporting-to-video",a=>this.lc(a));b.b("runtime","export-to-video-progress",a=>this.Rb(a));b.b("runtime","exported-to-video",a=>this.Sb(a));const c=new Set(["input","textarea","datalist"]);
window.addEventListener("contextmenu",a=>{const d=a.target;c.has(d.tagName.toLowerCase())||y(d)||a.preventDefault()});const f=b.g;window.addEventListener("selectstart",t);window.addEventListener("gesturehold",t);f.addEventListener("selectstart",t);f.addEventListener("gesturehold",t);window.addEventListener("touchstart",t,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",t,{passive:!1}),f.addEventListener("pointerdown",t)):f.addEventListener("touchstart",t);this.M=
0;window.addEventListener("mousedown",a=>{1===a.button&&a.preventDefault()});window.addEventListener("mousewheel",D,{passive:!1});window.addEventListener("wheel",D,{passive:!1});window.addEventListener("resize",()=>this.fc());window.addEventListener("fullscreenchange",()=>this.F());window.addEventListener("webkitfullscreenchange",()=>this.F());window.addEventListener("mozfullscreenchange",()=>this.F());window.addEventListener("fullscreenerror",a=>this.ra(a));window.addEventListener("webkitfullscreenerror",
a=>this.ra(a));window.addEventListener("mozfullscreenerror",a=>this.ra(a));if(b.ja())if(window.visualViewport){let a=Infinity;window.visualViewport.addEventListener("resize",()=>{const d=window.visualViewport.height;d>a&&(document.scrollingElement.scrollTop=0);a=d})}else window.addEventListener("focusout",()=>{{const e=document.activeElement;if(e){var a=e.tagName.toLowerCase();var d=new Set("email number password search tel text url".split(" "));a="textarea"===a?!0:"input"===a?d.has(e.type.toLowerCase()||
"text"):y(e)}else a=!1}a||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=a=>this.hc(a);this.Aa=new Set;this.rc=new WeakSet;this.pc=!1}Jb(){"cordova"===this.c.a?(document.addEventListener("pause",()=>this.ua(!0)),document.addEventListener("resume",()=>this.ua(!1))):document.addEventListener("visibilitychange",()=>this.ua(document.hidden));return{isSuspended:!(!document.hidden&&!E)}}Ga(){window.addEventListener("focus",()=>this.H("window-focus"));window.addEventListener("blur",()=>
{this.H("window-blur",{parentHasFocus:G()});this.M=0});window.addEventListener("focusin",c=>{c=c.target;(B.has(c.tagName.toLowerCase())||y(c))&&this.H("keyboard-blur")});window.addEventListener("keydown",c=>this.Qa("keydown",c));window.addEventListener("keyup",c=>this.Qa("keyup",c));window.addEventListener("dblclick",c=>this.sa("dblclick",c,k));window.addEventListener("wheel",c=>this.Xb(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",c=>{this.pa(c);this.G("pointerdown",
c)}),this.c.i&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.N=new self.qb(()=>this.Ab(),5),this.N.Za=!0,window.addEventListener("pointerrawupdate",c=>this.Yb(c))):window.addEventListener("pointermove",c=>this.G("pointermove",c)),window.addEventListener("pointerup",c=>this.G("pointerup",c)),window.addEventListener("pointercancel",c=>this.G("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.pa(c);this.ta("pointerdown",c)}),window.addEventListener("mousemove",
c=>this.ta("pointermove",c)),window.addEventListener("mouseup",c=>this.ta("pointerup",c)),window.addEventListener("touchstart",c=>{this.pa(c);this.S("pointerdown",c)}),window.addEventListener("touchmove",c=>this.S("pointermove",c)),window.addEventListener("touchend",c=>this.S("pointerup",c)),window.addEventListener("touchcancel",c=>this.S("pointercancel",c)));const b=()=>this.va();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,
!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0);this.c.lb()&&!this.c.Ja()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{this.qa(this.j(),navigator.virtualKeyboard.boundingRect.height)}))}qa(b,c){document.body.style.transform="";if(0<c){var f=document.activeElement;f&&(f=f.getBoundingClientRect(),b=(f.top+f.bottom)/2-(b-c)/2,b>c&&(b=c),0>b&&(b=0),0<b&&(document.body.style.transform=
`translateY(${-b}px)`))}}H(b,c){v(this,b,c||null,x)}m(){return this.c.m()}j(){return this.c.j()}fc(){const b=this.m(),c=this.j();if(this.c.Ja()){if(this.eb===b&&c<this.Z){this.O=this.Z-c;this.qa(this.Z,this.O);return}0<this.O&&(this.O=0,this.qa(c,this.O));this.eb=b;this.Z=c}this.H("window-resize",{innerWidth:b,innerHeight:c,devicePixelRatio:window.devicePixelRatio,isFullscreen:g.D()});this.c.ja()&&(-1!==this.A&&clearTimeout(this.A),this.Sa(b,c,0))}jc(b,c,f){-1!==this.A&&clearTimeout(this.A);this.A=
setTimeout(()=>this.Sa(b,c,f),48)}Sa(b,c,f){const a=this.m(),d=this.j();this.A=-1;a!=b||d!=c?this.H("window-resize",{innerWidth:a,innerHeight:d,devicePixelRatio:window.devicePixelRatio,isFullscreen:g.D()}):10>f&&this.jc(a,d,f+1)}dc(b){this.Da=b.targetOrientation}mc(){const b=this.Da;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(c=>console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(b):screen.webkitLockOrientation?
c=screen.webkitLockOrientation(b):screen.mozLockOrientation?c=screen.mozLockOrientation(b):screen.msLockOrientation&&(c=screen.msLockOrientation(b));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}F(){const b=g.D();b&&"any"!==this.Da&&this.mc();v(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.m(),innerHeight:this.j()})}ra(b){console.warn("[Construct 3] Fullscreen request failed: ",b);v(this,"fullscreenerror",
{isFullscreen:g.D(),innerWidth:this.m(),innerHeight:this.j()})}ua(b){b?this.c.vb():this.c.Ua();v(this,"visibilitychange",{hidden:b})}Qa(b,c){"Backspace"===c.key&&t(c);const f=h.get(c.code)||c.code;z(this,b,{code:f,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},k)}Xb(b){v(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,
timeStamp:b.timeStamp},k)}sa(b,c,f){l(c)||z(this,b,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},f)}ta(b,c){if(!l(c)){var f=this.M;"pointerdown"===b&&0!==f?b="pointermove":"pointerup"===b&&0!==c.buttons&&(b="pointermove");z(this,b,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:f,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,
movementX:c.movementX||0,movementY:c.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},k);this.M=c.buttons;this.sa(c.type,c,p)}}G(b,c){if(this.N&&"pointermove"!==b){var f=this.N;f.J||(-1!==f.B&&(self.clearTimeout(f.B),f.B=-1),f.Y=Date.now())}f=0;"mouse"===c.pointerType&&(f=this.M);z(this,b,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:f,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,
movementX:(c.movementX||0)+this.aa,movementY:(c.movementY||0)+this.ba,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},k);this.ba=this.aa=0;"mouse"===c.pointerType&&(f="mousemove","pointerdown"===b?f="mousedown":"pointerup"===b&&(f="mouseup"),this.sa(f,c,p),this.M=c.buttons)}Yb(b){this.u&&(this.aa+=this.u.movementX||0,this.ba+=this.u.movementY||0);this.u=b;b=this.N;if(-1===
b.B){var c=Date.now(),f=c-b.Y,a=b.oc;f>=a&&b.Za?(b.Y=c,b.J=!0,b.Ya(),b.J=!1):b.B=self.setTimeout(b.tc,Math.max(a-f,4))}}Ab(){this.G("pointermove",this.u);this.u=null}S(b,c){for(let f=0,a=c.changedTouches.length;f<a;++f){const d=c.changedTouches[f];z(this,b,{pointerId:d.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(d.radiusX||d.webkitRadiusX||0),height:2*(d.radiusY||
d.webkitRadiusY||0),pressure:d.force||d.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:d.rotationAngle||0,timeStamp:c.timeStamp},k)}}pa(b){window!==window.top&&window.focus();this.Oa(b.target)&&document.activeElement&&!this.Oa(document.activeElement)&&document.activeElement.blur()}Oa(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}tb(){this.Xa||(this.Xa=!0,window.addEventListener("deviceorientation",b=>this.Ob(b)),window.addEventListener("deviceorientationabsolute",
b=>this.Pb(b)))}sb(){this.Wa||(this.Wa=!0,window.addEventListener("devicemotion",b=>this.Nb(b)))}Ob(b){v(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},k)}Pb(b){v(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},k)}Nb(b){let c=null;var f=b.acceleration;f&&(c=
{x:f.x||0,y:f.y||0,z:f.z||0});f=null;var a=b.accelerationIncludingGravity;a&&(f={x:a.x||0,y:a.y||0,z:a.z||0});a=null;const d=b.rotationRate;d&&(a={alpha:d.alpha||0,beta:d.beta||0,gamma:d.gamma||0});v(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:f,rotationRate:a,interval:b.interval,timeStamp:b.timeStamp},k)}ec(b){var c=this.c;c.ab||(c=c.g,c.style.width=b.styleWidth+"px",c.style.height=b.styleHeight+"px",c.style.marginLeft=b.marginLeft+"px",c.style.marginTop=b.marginTop+"px",this.bb&&
(c.style.display="",this.bb=!1))}Vb(b){const c=b.url;b=b.filename;const f=document.createElement("a"),a=document.body;f.textContent=b;f.href=c;f.download=b;a.appendChild(f);f.click();a.removeChild(f)}async $b(b){var c=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);c=c?await createImageBitmap(b,c):await createImageBitmap(b);return{imageBitmap:c,transferables:[c]}}async Tb(b){return await self.C3_GetSvgImageSize(b.blob)}async Hb(b){await I(b.url)}va(){var b=
[...this.Aa];this.Aa.clear();if(!this.pc)for(const c of b)(b=c.play())&&b.catch(()=>{this.rc.has(c)||this.Aa.add(c)})}Ub(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}Mb(b){if(b.show){this.o||(this.o=document.createElement("div"),this.o.id="inspectOutline",document.body.appendChild(this.o));var c=this.o;c.style.display="";c.style.left=b.left-1+"px";c.style.top=b.top-1+"px";c.style.width=b.width+2+"px";c.style.height=b.height+2+"px";c.textContent=b.name}else this.o&&
(this.o.style.display="none")}ac(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ra(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}Gb(b,c){return this.c.pb(this.I,{name:b,params:c})}Ib(b){alert(b.message)}hc(b){"entered-fullscreen"===b?(g.Va(!0),this.F()):"exited-fullscreen"===b?(g.Va(!1),this.F()):console.warn("Unknown wrapper message: ",b)}lc(b){const c=document.createElement("h1");c.id="exportToVideoMessage";c.textContent=b.message;document.body.prepend(c);document.body.classList.add("exportingToVideo");
this.c.g.style.display="";this.c.rb()}Rb(b){this.$a=b.message;-1===this.xa&&(this.xa=setTimeout(()=>this.Bb(),250))}Bb(){this.xa=-1;const b=document.getElementById("exportToVideoMessage");b&&(b.textContent=this.$a)}Sb(b){window.Ic({type:"exported-video",blob:b.blob,time:b.time})}})}"use strict";
async function P(g){if(g.nc)throw Error("already initialised");g.nc=!0;var l=g.ca.oa("dispatchworker.js");g.wa=await g.ca.ha(l,g.f,{name:"DispatchWorker"});l=new MessageChannel;g.ya=l.port1;g.wa.postMessage({type:"_init","in-port":l.port2},[l.port2]);g.Ba=await S(g)}function Q(g){return[g.ya,g.Ba]}
async function S(g){const l=g.cb.length;var h=g.ca.oa("jobworker.js");h=await g.ca.ha(h,g.f,{name:"JobWorker"+l});const k=new MessageChannel,p=new MessageChannel;g.wa.postMessage({type:"_addJobWorker",port:k.port1},[k.port1]);h.postMessage({type:"init",number:l,"dispatch-port":k.port2,"output-port":p.port2},[k.port2,p.port2]);g.cb.push(h);return p.port1}
self.ob=class{constructor(g){this.ca=g;this.f=g.f;this.f="preview"===g.a?this.f+"workers/":this.f+g.da;this.qc=Math.min(navigator.hardwareConcurrency||2,16);this.wa=null;this.cb=[];this.Ba=this.ya=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.R({Dc:!0,Ec:"workermain.js",C:["scripts/c3runtime.js"],ea:[],Ea:"",Ac:"scripts/",Fa:[],hb:"html5"}));"use strict";
self.R.fa(class extends self.ia{constructor(g){super(g,"mouse");L(this,[["cursor",l=>{document.documentElement.style.cursor=l}],["request-pointer-lock",()=>{this.c.g.requestPointerLock()}],["release-pointer-lock",()=>{document.exitPointerLock()}]]);document.addEventListener("pointerlockchange",()=>{v(this,"pointer-lock-change",{"has-pointer-lock":!!document.pointerLockElement})});document.addEventListener("pointerlockerror",()=>{v(this,"pointer-lock-error",{"has-pointer-lock":!!document.pointerLockElement})})}});
"use strict";
{function g(l){l.stopPropagation()}self.R.fa(class extends self.jb{constructor(l){super(l,"button")}Ia(l,h){const k=document.createElement("input");var p=k;h.isCheckbox?(k.type="checkbox",p=document.createElement("label"),p.appendChild(k),p.appendChild(document.createTextNode("")),p.style.fontFamily="sans-serif",p.style.userSelect="none",p.style.webkitUserSelect="none",p.style.display="inline-block",p.style.color="black"):k.type="button";p.style.position="absolute";p.addEventListener("touchstart",g);
p.addEventListener("touchmove",g);p.addEventListener("touchend",g);p.addEventListener("mousedown",g);p.addEventListener("mouseup",g);p.addEventListener("keydown",g);p.addEventListener("keyup",g);k.addEventListener("click",()=>{var x={isChecked:k.checked};x.elementId=l;z(this,"click",x)});h.id&&(k.id=h.id);this.la(p,h);return p}Ma(l){return"input"===l.tagName.toLowerCase()?l:l.firstChild}na(l){return this.Ma(l)}la(l,h){const k=this.Ma(l);k.checked=h.isChecked;k.disabled=!h.isEnabled;l.title=h.title;
l===k?k.value=h.text:l.lastChild.textContent=h.text}})};