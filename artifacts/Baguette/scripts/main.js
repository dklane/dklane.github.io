function l(b,a,d,c){b.i.ga(b.M,a,d,c,void 0)}function p(b,a,d,c){b.i.o?l(b,a,d,c):b.i.ob()._OnMessageFromDOM({type:"event",component:b.M,handler:a,dispatchOpts:c||null,data:d,responseId:null})}function q(b,a,d){b.i.g(b.M,a,d)}function aa(b,a){for(const [d,c]of a)q(b,d,c)}window.Ga=class{constructor(b,a){this.i=b;this.M=a}Da(){}};window.Tb=class{constructor(){}};"use strict";class ba{constructor(b){this.pa=b;this.ra=!1;this.ua=!0}}
function ca(b,a){const d=a.elementId,c=b.Fa(d,a),e=new ba(c);b.N.set(d,e);c.style.boxSizing="border-box";c.style.display="none";e.ua=!!a.isVisible;a=b.ka(c);a.addEventListener("focus",()=>{r(b,"elem-focused",d)});a.addEventListener("blur",()=>{r(b,"elem-blurred",d)});b.Y&&document.body.appendChild(c)}function da(b,a){q(b,"get-element",d=>{const c=t(b,d.elementId);return a(c,d)})}function t(b,a){b=b.N.get(a);if(!b)throw Error(`no element with id ${a}`);return b.pa}
function r(b,a,d){var c;c||(c={});c.elementId=d;l(b,a,c)}
window.Ya=class extends self.Ga{constructor(b){super(b,"button");this.N=new Map;this.Y=!0;aa(this,[["create",a=>ca(this,a)],["destroy",a=>{a=a.elementId;const d=t(this,a);this.Y&&d.parentElement.removeChild(d);this.N.delete(a)}],["set-visible",a=>{if(this.Y){var d=this.N.get(a.elementId),c=d.pa;d.ra?c.style.display=a.isVisible?"":"none":d.ua=!!a.isVisible}}],["update-position",a=>{if(this.Y){var d=this.N.get(a.elementId),c=d.pa;c.style.left=a.left+"px";c.style.top=a.top+"px";c.style.width=a.width+
"px";c.style.height=a.height+"px";a=a.fontSize;null!==a&&(c.style.fontSize=a+"em");d.ra||(d.ra=!0,d.ua&&(c.style.display=""))}}],["update-state",a=>{const d=t(this,a.elementId);this.ia(d,a)}],["focus",a=>{const d=this.ka(t(this,a.elementId));a.focus?d.focus():d.blur()}],["set-css-style",a=>{const d=t(this,a.elementId),c=a.prop;a=a.val;c.startsWith("--")?d.style.setProperty(c,a):d.style[c]=a}],["set-attribute",a=>{t(this,a.elementId).setAttribute(a.name,a.val)}],["remove-attribute",a=>{t(this,a.elementId).removeAttribute(a.name)}]]);
da(this,a=>a)}Fa(){throw Error("required override");}ia(){throw Error("required override");}ka(b){return b}};"use strict";const u=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),v=/android/i.test(navigator.userAgent),ea=/safari/i.test(navigator.userAgent)&&!/(chrome|chromium|edg\/|OPR\/|nwjs)/i.test(navigator.userAgent);let w=0;
function x(b){const a=document.createElement("script");a.async=!1;a.type="module";return b.Jb?new Promise(d=>{const c="c3_resolve_"+w;++w;self[c]=d;a.textContent=b.Nb+`\n\nself["${c}"]();`;document.head.appendChild(a)}):new Promise((d,c)=>{a.onload=d;a.onerror=c;a.src=b;document.head.appendChild(a)})}let y=!1,z=!1;function fa(){if(!y){try{new Worker("blob://",{get type(){z=!0}})}catch(b){}y=!0}return z}let A=new Audio;
const ia={"audio/webm; codecs=opus":!!A.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!A.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!A.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!A.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!A.canPlayType("audio/mp4"),"audio/mpeg":!!A.canPlayType("audio/mpeg")};A=null;async function ja(b){b=await B(b);return(new TextDecoder("utf-8")).decode(b)}
function B(b){return new Promise((a,d)=>{const c=new FileReader;c.onload=e=>a(e.target.result);c.onerror=e=>d(e);c.readAsArrayBuffer(b)})}const C=[];let D=0;window.RealFile=window.File;const E=[],F=new Map,G=new Map;let ka=0;const H=[];self.runOnStartup=function(b){if("function"!==typeof b)throw Error("runOnStartup called without a function");H.push(b)};const la=new Set(["cordova","playable-ad","instant-games"]);let ma=!1;
window.ha=class b{constructor(a){this.o=a.Pb;this.R=null;this.m="";this.G=a.Mb;this.V={};this.wa=this.I=null;this.Z=[];this.j=this.T=null;this.Ta=!1;this.O=null;this.F=-1;this.Eb=()=>this.vb();this.za=[];this.h=a.Wa;this.ta="file"===location.protocol.substr(0,4);!this.o||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&fa()||(this.o=!1);this.o&&ea&&(this.o=!1);if("playable-ad"===this.h||"instant-games"===this.h)this.o=!1;if("cordova"===this.h&&this.o)if(v){const d=/Chrome\/(\d+)/i.exec(navigator.userAgent);
d&&90<=parseInt(d[1],10)||(this.o=!1)}else this.o=!1;this.$=this.A=null;"html5"!==this.h||window.isSecureContext||console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.g("runtime","cordova-fetch-local-file",d=>this.rb(d));this.g("runtime","create-job-worker",()=>this.sb());"cordova"===this.h?document.addEventListener("deviceready",()=>this.Ka(a)):this.Ka(a)}bb(){return u&&
"cordova"===this.h}fa(){const a=navigator.userAgent;return u&&la.has(this.h)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}$a(){return v}Ha(){return v&&la.has(this.h)}async Ka(a){"macos-wkwebview"===this.h&&this.zb();if("playable-ad"===this.h){this.A=self.c3_base64files;this.$={};await this.kb();for(let c=0,e=a.J.length;c<e;++c){var d=a.J[c];this.$.hasOwnProperty(d)?a.J[c]={Jb:!0,Nb:this.$[d]}:this.A.hasOwnProperty(d)&&(a.J[c]=URL.createObjectURL(this.A[d]))}a.ca=[]}if("nwjs"===this.h&&
self.nw&&self.nw.App.manifest["c3-steam-mode"]){let c=0;this.gb(()=>{c++;document.body.style.opacity=0===c%2?"1":"0.999"})}a.Lb?this.m=a.Lb:(d=location.origin,this.m=("null"===d?"file:///":d)+location.pathname,d=this.m.lastIndexOf("/"),-1!==d&&(this.m=this.m.substr(0,d+1)));a.Rb&&(this.V=a.Rb);d=new MessageChannel;this.R=d.port1;this.R.onmessage=c=>this._OnMessageFromRuntime(c.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(c=>this.ub(c));this.O=new self.cb(this);await na(this.O);
"object"===typeof window.StatusBar&&window.StatusBar.hide();if("object"===typeof window.AndroidFullScreen)try{await new Promise((c,e)=>{window.AndroidFullScreen.immersiveMode(c,e)})}catch(c){console.error("Failed to enter Android immersive mode: ",c)}this.o?await this.qb(a,d.port2):await this.pb(a,d.port2)}la(a){a=this.V.hasOwnProperty(a)?this.V[a]:a.endsWith("/workermain.js")&&this.V.hasOwnProperty("workermain.js")?this.V["workermain.js"]:"playable-ad"===this.h&&this.A.hasOwnProperty(a)?this.A[a]:
a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ea(a,d,c){if(a.startsWith("blob:"))return new Worker(a,c);if("cordova"===this.h&&this.ta)return a=await this.da(c.Ib?a:this.G+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),c);a=new URL(a,d);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),c)}return new Worker(a,c)}v(){return Math.max(window.innerWidth,
1)}u(){return Math.max(window.innerHeight,1)}Ja(a){var d=this.m,c=location.href,e=this.v(),f=this.u(),g=window.devicePixelRatio,h=b.K(),k=a.Xb,m=window.cr_previewImageBlobs||this.A,n=window.cr_previewProjectFileBlobs,xa=window.cr_previewProjectFiles,ya=window.Vb||"";a=a.Wa;var za=(new URLSearchParams(self.location.search)).has("debug"),I=this.O;return{runtimeBaseUrl:d,previewUrl:c,windowInnerWidth:e,windowInnerHeight:f,devicePixelRatio:g,isFullscreen:h,projectData:k,previewImageBlobs:m,previewProjectFileBlobs:n,
previewProjectFileSWUrls:xa,swClientId:ya,exportType:a,isDebug:za,ife:!!self.Wb,jobScheduler:{inputPort:I.sa,outputPort:I.ya,maxNumWorkers:I.Cb},supportedAudioFormats:ia,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.G+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.G+"opus.wasm.wasm",isFileProtocol:this.ta,isiOSCordova:this.bb(),isiOSWebView:this.fa(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async qb(a,d){const c=this.la(a.Qb);"preview"===this.h?(this.I=new Worker("previewworker.js",
{type:"module",name:"Runtime"}),await new Promise((h,k)=>{const m=n=>{this.I.removeEventListener("message",m);n.data&&"ok"===n.data.type?h():k()};this.I.addEventListener("message",m);this.I.postMessage({type:"construct-worker-init","import":(new URL(c,this.m)).toString()})})):this.I=await this.ea(c,this.m,{type:"module",name:"Runtime",Ib:!0});this.j=document.createElement("canvas");this.j.style.display="none";const e=this.j.transferControlToOffscreen();document.body.appendChild(this.j);window.c3canvas=
this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();let f=a.ca||[],g=a.J;f=await Promise.all(f.map(h=>this.D(h)));g=await Promise.all(g.map(h=>this.D(h)));if("cordova"===this.h)for(let h=0,k=a.ba.length;h<k;++h){const m=a.ba[h],n=m[0];if(n===a.Ba||"scriptsInEvents.js"===n||n.endsWith("/scriptsInEvents.js"))m[1]=await this.D(n)}this.I.postMessage(Object.assign(this.Ja(a),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:e,workerDependencyScripts:f,engineScripts:g,projectScripts:a.ba,
mainProjectScript:a.Ba,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[d,e,...oa(this.O)]);this.Z=E.map(h=>new h(this));this.Ia();pa(this.T);self.c3_callFunction=(h,k)=>{var m=this.T;return m.i.eb(m.M,{name:h,params:k})};"preview"===this.h&&(self.goToLastErrorScript=()=>this.ga("runtime","go-to-last-error-script"))}async pb(a,d){this.j=document.createElement("canvas");this.j.style.display="none";document.body.appendChild(this.j);window.c3canvas=this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();
this.Z=E.map(g=>new g(this));this.Ia();var c=a.J.map(g=>"string"===typeof g?(new URL(g,this.m)).toString():g);Array.isArray(a.ca)&&c.unshift(...a.ca);c=await Promise.all(c.map(g=>this.D(g)));await Promise.all(c.map(g=>x(g)));c=self.C3_ProjectScriptsStatus;const e=a.Ba,f=a.ba;for(let [g,h]of f)if(h||(h=g),g===e)try{h=await this.D(h),await x(h),"preview"!==this.h||c[g]||this.Ma(g,"main script did not run to completion")}catch(k){this.Ma(g,k)}else if("scriptsInEvents.js"===g||g.endsWith("/scriptsInEvents.js"))h=
await this.D(h),await x(h);"preview"===this.h&&"object"!==typeof self.Sb.Ub?(this.X(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ja(a),{isInWorker:!1,messagePort:d,canvas:this.j,runOnStartupFunctions:H}),pa(this.T),this.La(),this.wa=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.wa,
a))}Ma(a,d){this.X();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}La(){this.X()}X(){const a=window.Gb;a&&(a.parentElement.removeChild(a),window.Gb=null)}async sb(){const a=await qa(this.O);return{outputPort:a,transferables:[a]}}ob(){if(this.o)throw Error("not available in worker mode");return this.wa}ga(a,d,c,e,f){this.R.postMessage({type:"event",
component:a,handler:d,dispatchOpts:e||null,data:c,responseId:null},f)}eb(a,d){const c=ka++,e=new Promise((f,g)=>{G.set(c,{resolve:f,reject:g})});this.R.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:c},void 0);return e}_OnMessageFromRuntime(a){const d=a.type;if("event"===d)return this.tb(a);if("result"===d)this.wb(a);else if("runtime-ready"===d)this.xb();else if("alert-error"===d)this.X(),alert(a.message);else if("creating-runtime"===d)this.La();
else throw Error(`unknown message '${d}'`);}tb(a){const d=a.component,c=a.handler,e=a.data,f=a.responseId;if(a=F.get(d))if(a=a.get(c)){var g=null;try{g=a(e)}catch(h){console.error(`Exception in '${d}' handler '${c}':`,h);null!==f&&this.W(f,!1,""+h);return}if(null===f)return g;g&&g.then?g.then(h=>this.W(f,!0,h)).catch(h=>{console.error(`Rejection from '${d}' handler '${c}':`,h);this.W(f,!1,""+h)}):this.W(f,!0,g)}else console.warn(`[DOM] No handler '${c}' for component '${d}'`);else console.warn(`[DOM] No event handlers for component '${d}'`)}W(a,
d,c){let e;c&&c.transferables&&(e=c.transferables);this.R.postMessage({type:"result",responseId:a,isOk:d,result:c},e)}wb(a){const d=a.responseId,c=a.isOk;a=a.result;const e=G.get(d);c?e.resolve(a):e.reject(a);G.delete(d)}g(a,d,c){let e=F.get(a);e||(e=new Map,F.set(a,e));if(e.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);e.set(d,c)}static Ca(a){if(E.includes(a))throw Error("DOM handler already added");E.push(a)}Ia(){for(const a of this.Z)if("runtime"===a.M){this.T=a;return}throw Error("cannot find runtime DOM handler");
}ub(a){this.ga("debugger","message",a)}xb(){for(const a of this.Z)a.Da()}static K(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||ma)}static Na(a){ma=!!a}gb(a){this.za.push(a);this.na()}na(){-1===this.F&&this.za.length&&(this.F=requestAnimationFrame(this.Eb))}ib(){-1!==this.F&&(cancelAnimationFrame(this.F),this.F=-1)}vb(){this.F=-1;for(const a of this.za)a();this.na()}ma(){this.T.ma()}fb(){this.Ta=!0}Za(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||
"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}ab(a){return!this.Za(a)}async D(a){return"cordova"===this.h&&(a.startsWith("file:")||this.ta&&this.ab(a))?(a.startsWith(this.m)&&(a=a.substr(this.m.length)),a=await this.da(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async rb(a){const d=a.filename;switch(a.as){case "text":return await this.Xa(d);case "buffer":return await this.da(d);default:throw Error("unsupported type");}}Ea(a){const d=window.cordova.file.applicationDirectory+
"www/"+a;return new Promise((c,e)=>{window.resolveLocalFileSystemURL(d,f=>{f.file(c,e)},e)})}async Xa(a){a=await this.Ea(a);return await ja(a)}ja(){if(C.length&&!(8<=D)){D++;var a=C.shift();this.lb(a.filename,a.Ob,a.Hb)}}da(a){return new Promise((d,c)=>{C.push({filename:a,Ob:e=>{D--;this.ja();d(e)},Hb:e=>{D--;this.ja();c(e)}});this.ja()})}async lb(a,d,c){try{const e=await this.Ea(a),f=await B(e);d(f)}catch(e){c(e)}}zb(){var a={type:"ready"};if("windows-webview2"===this.h)window.chrome.webview.postMessage(JSON.stringify(a));
else if("macos-wkwebview"===this.h)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async kb(){const a=[];for(const [d,c]of Object.entries(this.A))a.push(this.jb(d,c));await Promise.all(a)}async jb(a,d){if("object"===typeof d)this.A[a]=new Blob([d.str],{type:d.type}),this.$[a]=d.str;else{let c=await this.nb(d);c||(c=this.mb(d));this.A[a]=c}}async nb(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
d),null}}mb(a){a=this.yb(a);return this.hb(a.data,a.Kb)}yb(a){var d=a.indexOf(",");if(0>d)throw new URIError("expected comma in data: uri");var c=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const e=d[2];c="base64"===d[1]||"base64"===e?atob(c):decodeURIComponent(c);return{Kb:a,data:c}}hb(a,d){var c=a.length;let e=c>>2,f=new Uint8Array(c),g=new Uint32Array(f.buffer,0,e),h,k;for(k=h=0;h<e;++h)g[h]=a.charCodeAt(k++)|a.charCodeAt(k++)<<8|a.charCodeAt(k++)<<16|a.charCodeAt(k++)<<24;for(c&=
3;c--;)f[k]=a.charCodeAt(k),++k;return new Blob([f],{type:d})}};"use strict";const J=self.ha;function ra(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const sa=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),K={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},ta={dispatchUserScriptEvent:!0},L={dispatchRuntimeEvent:!0};
function ua(b){return new Promise((a,d)=>{const c=document.createElement("link");c.onload=()=>a(c);c.onerror=e=>d(e);c.rel="stylesheet";c.href=b;document.head.appendChild(c)})}function va(b){return new Promise((a,d)=>{const c=new Image;c.onload=()=>a(c);c.onerror=e=>d(e);c.src=b})}async function M(b){b=URL.createObjectURL(b);try{return await va(b)}finally{URL.revokeObjectURL(b)}}
function wa(b){return new Promise((a,d)=>{let c=new FileReader;c.onload=e=>a(e.target.result);c.onerror=e=>d(e);c.readAsText(b)})}
async function Aa(b,a,d){if(!/firefox/i.test(navigator.userAgent))return await M(b);var c=await wa(b);c=(new DOMParser).parseFromString(c,"image/svg+xml");const e=c.documentElement;if(e.hasAttribute("width")&&e.hasAttribute("height")){const f=e.getAttribute("width"),g=e.getAttribute("height");if(!f.includes("%")&&!g.includes("%"))return await M(b)}e.setAttribute("width",a+"px");e.setAttribute("height",d+"px");c=(new XMLSerializer).serializeToString(c);b=new Blob([c],{type:"image/svg+xml"});return await M(b)}
function N(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const Ba=new Set(["input","textarea","datalist","select"]),Ca=new Set(["canvas","body","html"]);function O(b){b.target.tagName&&Ca.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function Da(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}
self.C3_GetSvgImageSize=async function(b){b=await M(b);if(0<b.width&&0<b.height)return[b.width,b.height];b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const a=b.getBoundingClientRect();document.body.removeChild(b);return[a.width,a.height]};self.C3_RasterSvgImageBlob=async function(b,a,d,c,e){b=await Aa(b,a,d);const f=document.createElement("canvas");f.width=c;f.height=e;f.getContext("2d").drawImage(b,0,0,a,d);return f};
let P=!1;document.addEventListener("pause",()=>P=!0);document.addEventListener("resume",()=>P=!1);function pa(b){b.Ra=!0;b.va=b.i.v();b.P=b.i.u()}async function Ea(b){await Promise.all(b.webfonts.map(async a=>{a=new FontFace(a.name,`url('${a.url}')`);document.fonts.add(a);await a.load()}))}
async function Fa(b){var a=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);a=a?await createImageBitmap(b,a):await createImageBitmap(b);return{imageBitmap:a,transferables:[a]}}async function Ha(b){return await self.C3_GetSvgImageSize(b.blob)}function Ia(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}
function Ja(b){self.setTimeout(()=>{b.Qa=!0},1E3);"cordova"===b.i.h?(document.addEventListener("pause",()=>Q(b,!0)),document.addEventListener("resume",()=>Q(b,!1))):document.addEventListener("visibilitychange",()=>Q(b,document.hidden));return{isSuspended:!(!document.hidden&&!P)}}
function Ka(b){b.Pa||(b.Pa=!0,window.addEventListener("deviceorientation",a=>{b.l||l(b,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},K)}),window.addEventListener("deviceorientationabsolute",a=>{b.l||l(b,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},K)}))}
function La(b){b.Oa||(b.Oa=!0,window.addEventListener("devicemotion",a=>{if(!b.l){var d=null,c=a.acceleration;c&&(d={x:c.x||0,y:c.y||0,z:c.z||0});c=null;var e=a.accelerationIncludingGravity;e&&(c={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var f=a.rotationRate;f&&(e={alpha:f.alpha||0,beta:f.beta||0,gamma:f.gamma||0});l(b,"devicemotion",{acceleration:d,accelerationIncludingGravity:c,rotationRate:e,interval:a.interval,timeStamp:a.timeStamp},K)}}))}async function Ma(b){await ua(b.url)}
function Na(b,a){b.Sa=a.message;-1===b.qa&&(b.qa=setTimeout(()=>{b.qa=-1;const d=document.getElementById("exportToVideoMessage");d&&(d.textContent=b.Sa)},250))}function R(b){if(!b.l){var a=J.K();a&&"any"!==b.Aa&&Oa(b);l(b,"fullscreenchange",{isFullscreen:a,innerWidth:b.v(),innerHeight:b.u()})}}function S(b,a){console.warn("[Construct] Fullscreen request failed: ",a);l(b,"fullscreenerror",{isFullscreen:J.K(),innerWidth:b.v(),innerHeight:b.u()})}
function Q(b,a){a?b.i.ib():b.i.na();l(b,"visibilitychange",{hidden:a})}function Pa(b,a,d){"Backspace"===d.key&&O(d);if(!b.l){var c=sa.get(d.code)||d.code;p(b,a,{code:c,key:d.key,which:d.which,repeat:d.repeat,altKey:d.altKey,ctrlKey:d.ctrlKey,metaKey:d.metaKey,shiftKey:d.shiftKey,timeStamp:d.timeStamp},K)}}
function T(b,a,d,c){b.l||ra(d)||p(b,a,{button:d.button,buttons:d.buttons,clientX:d.clientX,clientY:d.clientY+b.s,pageX:d.pageX,pageY:d.pageY+b.s,movementX:d.movementX||0,movementY:d.movementY||0,timeStamp:d.timeStamp},c)}function U(b){window!==window.top&&window.focus();Qa(b.target)&&document.activeElement&&!Qa(document.activeElement)&&document.activeElement.blur()}
function V(b,a,d){if(!b.l){var c=0;"mouse"===d.pointerType&&(c=b.S);p(b,a,{pointerId:d.pointerId,pointerType:d.pointerType,button:d.button,buttons:d.buttons,lastButtons:c,clientX:d.clientX,clientY:d.clientY+b.s,pageX:d.pageX,pageY:d.pageY+b.s,movementX:d.movementX||0,movementY:d.movementY||0,width:d.width||0,height:d.height||0,pressure:d.pressure||0,tangentialPressure:d.tangentialPressure||0,tiltX:d.tiltX||0,tiltY:d.tiltY||0,twist:d.twist||0,timeStamp:d.timeStamp},K);"mouse"===d.pointerType&&(c="mousemove",
"pointerdown"===a?c="mousedown":"pointerup"===a&&(c="mouseup"),T(b,c,d,ta),b.S=d.buttons)}}
function W(b,a,d){if(!b.l&&!ra(d)){var c=b.S;"pointerdown"===a&&0!==c?a="pointermove":"pointerup"===a&&0!==d.buttons&&(a="pointermove");p(b,a,{pointerId:1,pointerType:"mouse",button:d.button,buttons:d.buttons,lastButtons:c,clientX:d.clientX,clientY:d.clientY+b.s,pageX:d.pageX,pageY:d.pageY+b.s,movementX:d.movementX||0,movementY:d.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:d.timeStamp},K);b.S=d.buttons;T(b,d.type,d,ta)}}
function X(b,a,d){if(!b.l)for(let c=0,e=d.changedTouches.length;c<e;++c){const f=d.changedTouches[c];p(b,a,{pointerId:f.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:f.clientX,clientY:f.clientY+b.s,pageX:f.pageX,pageY:f.pageY+b.s,movementX:d.movementX||0,movementY:d.movementY||0,width:2*(f.radiusX||f.webkitRadiusX||0),height:2*(f.radiusY||f.webkitRadiusY||0),pressure:f.force||f.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:f.rotationAngle||0,timeStamp:d.timeStamp},
K)}}function Y(b,a,d){document.body.style.transform="";b.s=0;if(0<d){var c=document.activeElement;c&&(c=c.getBoundingClientRect(),a=(c.top+c.bottom)/2-(a-d)/2,a>d&&(a=d),0>a&&(a=0),0<a&&(document.body.style.transform=`translateY(${-a}px)`,b.s=a))}}function Ra(b,a,d,c){const e=b.v(),f=b.u();b.H=-1;e!=a||f!=d?l(b,"window-resize",{innerWidth:e,innerHeight:f,devicePixelRatio:window.devicePixelRatio,isFullscreen:J.K()}):10>c&&Sa(b,e,f,c+1)}
function Sa(b,a,d,c){-1!==b.H&&clearTimeout(b.H);b.H=setTimeout(()=>Ra(b,a,d,c),48)}
function Oa(b){b=b.Aa;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",a)}}
function Qa(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}
J.Ca(class extends self.Ga{constructor(b){super(b,"runtime");this.Ua=!0;this.Ra=!1;this.H=-1;this.Aa="any";this.Oa=this.Pa=!1;this.aa=document.createElement("div");this.aa.className="c3-screen-reader-text";this.aa.setAttribute("aria-live","polite");document.body.appendChild(this.aa);this.C=null;this.l=!1;this.Sa="";this.qa=-1;this.Qa=!1;this.va=b.v();this.P=b.u();this.s=this.U=0;b.g("canvas","update-size",c=>{var e=this.i;e.Ta||(e=e.j,e.style.width=c.styleWidth+"px",e.style.height=c.styleHeight+"px",
e.style.marginLeft=c.marginLeft+"px",e.style.marginTop=c.marginTop+"px",document.documentElement.style.setProperty("--construct-scale",c.displayScale),this.Ua&&(e.style.display="",this.Ua=!1))});b.g("runtime","invoke-download",c=>{const e=c.url;c=c.filename;const f=document.createElement("a"),g=document.body;f.textContent=c;f.href=e;f.download=c;g.appendChild(f);f.click();g.removeChild(f)});b.g("runtime","load-webfonts",c=>Ea(c));b.g("runtime","raster-svg-image",c=>Fa(c));b.g("runtime","get-svg-image-size",
c=>Ha(c));b.g("runtime","set-target-orientation",c=>{this.Aa=c.targetOrientation});b.g("runtime","register-sw",()=>{window.C3_RegisterSW&&window.C3_RegisterSW()});b.g("runtime","post-to-debugger",c=>Ia(c));b.g("runtime","go-to-script",c=>Ia(c));b.g("runtime","before-start-ticking",()=>Ja(this));b.g("runtime","debug-highlight",c=>{if(c.show){this.C||(this.C=document.createElement("div"),this.C.id="inspectOutline",document.body.appendChild(this.C));var e=this.C;e.style.display="";e.style.left=c.left-
1+"px";e.style.top=c.top-1+"px";e.style.width=c.width+2+"px";e.style.height=c.height+2+"px";e.textContent=c.name}else this.C&&(this.C.style.display="none")});b.g("runtime","enable-device-orientation",()=>Ka(this));b.g("runtime","enable-device-motion",()=>La(this));b.g("runtime","add-stylesheet",c=>Ma(c));b.g("runtime","script-create-worker",c=>{const e=c.port2;(new Worker(c.url,c.opts)).postMessage({type:"construct-worker-init",port2:e},[e])});b.g("runtime","alert",c=>{alert(c.message)});b.g("runtime",
"screen-reader-text",c=>{var e=c.type;"create"===e?(e=document.createElement("p"),e.id="c3-sr-"+c.id,e.textContent=c.text,this.aa.appendChild(e)):"update"===e?(e=document.getElementById("c3-sr-"+c.id))?e.textContent=c.text:console.warn(`[Construct] Missing screen reader text with id ${c.id}`):"release"===e?(e=document.getElementById("c3-sr-"+c.id))?e.remove():console.warn(`[Construct] Missing screen reader text with id ${c.id}`):console.warn(`[Construct] Unknown screen reader text update '${e}'`)});
b.g("runtime","hide-cordova-splash",()=>{navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()});b.g("runtime","set-exporting-to-video",c=>{this.l=!0;const e=document.createElement("h1");e.id="exportToVideoMessage";e.textContent=c.message;document.body.prepend(e);document.body.classList.add("exportingToVideo");this.i.j.style.display="";this.i.fb()});b.g("runtime","export-to-video-progress",c=>Na(this,c));b.g("runtime","exported-to-video",c=>{window.Fb({type:"exported-video",
blob:c.blob,time:c.time})});b.g("runtime","exported-to-image-sequence",c=>{window.Fb({type:"exported-image-sequence",blobArr:c.blobArr,time:c.time,gif:c.gif})});const a=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",c=>{const e=c.target;a.has(e.tagName.toLowerCase())||N(e)||c.preventDefault()});const d=b.j;window.addEventListener("selectstart",O);window.addEventListener("gesturehold",O);d.addEventListener("selectstart",O);d.addEventListener("gesturehold",O);window.addEventListener("touchstart",
O,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",O,{passive:!1}),d.addEventListener("pointerdown",O)):d.addEventListener("touchstart",O);this.S=0;window.addEventListener("mousedown",c=>{1===c.button&&c.preventDefault()});window.addEventListener("mousewheel",Da,{passive:!1});window.addEventListener("wheel",Da,{passive:!1});window.addEventListener("resize",()=>{a:{if(!this.l&&this.Ra){var c=this.v();var e=this.u();if(this.i.Ha()){if(this.Qa){if(this.va===c&&e<
this.P){this.U=this.P-e;Y(this,this.P,this.U);c=void 0;break a}0<this.U&&(this.U=0,Y(this,e,this.U))}this.va=c;this.P=e}l(this,"window-resize",{innerWidth:c,innerHeight:e,devicePixelRatio:window.devicePixelRatio,isFullscreen:J.K()});this.i.fa()&&(-1!==this.H&&clearTimeout(this.H),Ra(this,c,e,0))}c=void 0}return c});window.addEventListener("fullscreenchange",()=>R(this));window.addEventListener("webkitfullscreenchange",()=>R(this));window.addEventListener("mozfullscreenchange",()=>R(this));window.addEventListener("fullscreenerror",
c=>S(this,c));window.addEventListener("webkitfullscreenerror",c=>S(this,c));window.addEventListener("mozfullscreenerror",c=>S(this,c));if(b.fa())if(window.visualViewport){let c=Infinity;window.visualViewport.addEventListener("resize",()=>{const e=window.visualViewport.height;e>c&&(document.scrollingElement.scrollTop=0);c=e})}else window.addEventListener("focusout",()=>{{const f=document.activeElement;if(f){var c=f.tagName.toLowerCase();var e=new Set("email number password search tel text url".split(" "));
c="textarea"===c?!0:"input"===c?e.has(f.type.toLowerCase()||"text"):N(f)}else c=!1}c||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=c=>{"entered-fullscreen"===c?(J.Na(!0),R(this)):"exited-fullscreen"===c?(J.Na(!1),R(this)):console.warn("Unknown wrapper message: ",c)};this.xa=new Set;this.Db=new WeakSet;this.Bb=!1}Da(){window.addEventListener("focus",()=>{l(this,"window-focus",null,L)});window.addEventListener("blur",()=>{try{var a=window.parent&&window.parent.document.hasFocus()}catch(d){a=
!1}l(this,"window-blur",{parentHasFocus:a},L);this.S=0});window.addEventListener("focusin",a=>{a=a.target;(Ba.has(a.tagName.toLowerCase())||N(a))&&l(this,"keyboard-blur",null,L)});window.addEventListener("keydown",a=>Pa(this,"keydown",a));window.addEventListener("keyup",a=>Pa(this,"keyup",a));window.addEventListener("dblclick",a=>T(this,"dblclick",a,K));window.addEventListener("wheel",a=>{this.l||l(this,"wheel",{clientX:a.clientX,clientY:a.clientY+this.s,pageX:a.pageX,pageY:a.pageY+this.s,deltaX:a.deltaX,
deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},K)});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",a=>{U(a);V(this,"pointerdown",a)}),this.i.o&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?window.addEventListener("pointerrawupdate",a=>{V(this,"pointermove",a)}):window.addEventListener("pointermove",a=>V(this,"pointermove",a)),window.addEventListener("pointerup",a=>V(this,"pointerup",a)),window.addEventListener("pointercancel",
a=>V(this,"pointercancel",a))):(window.addEventListener("mousedown",a=>{U(a);W(this,"pointerdown",a)}),window.addEventListener("mousemove",a=>W(this,"pointermove",a)),window.addEventListener("mouseup",a=>W(this,"pointerup",a)),window.addEventListener("touchstart",a=>{U(a);X(this,"pointerdown",a)}),window.addEventListener("touchmove",a=>X(this,"pointermove",a)),window.addEventListener("touchend",a=>X(this,"pointerup",a)),window.addEventListener("touchcancel",a=>X(this,"pointercancel",a)));const b=
()=>this.ma();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0);this.i.$a()&&!this.i.Ha()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{Y(this,this.u(),navigator.virtualKeyboard.boundingRect.height)}))}v(){return this.i.v()}u(){return this.i.u()}ma(){var b=
[...this.xa];this.xa.clear();if(!this.Bb)for(const a of b)(b=a.play())&&b.catch(()=>{this.Db.has(a)||this.xa.add(a)})}});"use strict";async function na(b){if(b.Ab)throw Error("already initialised");b.Ab=!0;var a=b.B.la(("playable-ad"===b.B.h?b.B.G:"")+"dispatchworker.js");b.oa=await b.B.ea(a,b.L,{name:"DispatchWorker"});a=new MessageChannel;b.sa=a.port1;b.oa.postMessage({type:"_init","in-port":a.port2},[a.port2]);b.ya=await qa(b)}function oa(b){return[b.sa,b.ya]}
async function qa(b){const a=b.Va.length;var d=b.B.la(("playable-ad"===b.B.h?b.B.G:"")+"jobworker.js");d=await b.B.ea(d,b.L,{name:"JobWorker"+a});const c=new MessageChannel,e=new MessageChannel;b.oa.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]);d.postMessage({type:"init",number:a,"dispatch-port":c.port2,"output-port":e.port2},[c.port2,e.port2]);b.Va.push(d);return e.port1}
self.cb=class{constructor(b){this.B=b;this.L=b.m;this.L="preview"===b.h?this.L+"workers/":this.L+b.G;this.Cb=Math.min(navigator.hardwareConcurrency||2,16);this.oa=null;this.Va=[];this.ya=this.sa=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.ha({Pb:!0,Qb:"workermain.js",J:["scripts/c3runtime.js"],ba:[],Ba:"",Mb:"scripts/",ca:[],Wa:"html5"}));"use strict";function Z(b){b.stopPropagation()}
self.ha.Ca(class extends self.Ya{constructor(b){super(b)}Fa(b,a){const d=document.createElement("input");var c=d;a.isCheckbox?(d.type="checkbox",c=document.createElement("label"),c.appendChild(d),c.appendChild(document.createTextNode("")),c.style.fontFamily="sans-serif",c.style.userSelect="none",c.style.webkitUserSelect="none",c.style.display="inline-block",c.style.color="black"):d.type="button";c.style.position="absolute";c.addEventListener("pointerdown",Z);c.addEventListener("pointermove",Z);c.addEventListener("pointerrawupdate",
Z);c.addEventListener("pointerup",Z);c.addEventListener("mousedown",Z);c.addEventListener("mouseup",Z);c.addEventListener("keydown",Z);c.addEventListener("keyup",Z);d.addEventListener("click",()=>{var e={isChecked:d.checked};e.elementId=b;p(this,"click",e)});a.id&&(d.id=a.id);a.className&&(d.className=a.className);this.ia(c,a);return c}ka(b){return"input"===b.tagName.toLowerCase()?b:b.firstChild}ia(b,a){const d="input"===b.tagName.toLowerCase()?b:b.firstChild;d.checked=a.isChecked;d.disabled=!a.isEnabled;
b.title=a.title;b===d?d.value=a.text:b.lastChild.textContent=a.text}});