var H=Object.defineProperty;var pe=Object.getOwnPropertyDescriptor;var me=Object.getOwnPropertyNames;var he=Object.prototype.hasOwnProperty;var w=(t=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(t,{get:(e,i)=>(typeof require!="undefined"?require:e)[i]}):t)(function(t){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var E=(t,e)=>()=>(t&&(e=t(t=0)),e);var G=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),C=(t,e)=>{for(var i in e)H(t,i,{get:e[i],enumerable:!0})},ge=(t,e,i,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of me(e))!he.call(t,n)&&n!==i&&H(t,n,{get:()=>e[n],enumerable:!(o=pe(e,n))||o.enumerable});return t};var b=t=>ge(H({},"__esModule",{value:!0}),t);var c=E(()=>{});var f=E(()=>{});var L={};C(L,{Children:()=>ye,Component:()=>be,Fragment:()=>Oe,Profiler:()=>_e,PureComponent:()=>Se,StrictMode:()=>Te,Suspense:()=>ke,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>Ee,cloneElement:()=>xe,createContext:()=>Ie,createElement:()=>Ce,createFactory:()=>we,createRef:()=>Re,default:()=>ve,forwardRef:()=>Ae,isValidElement:()=>Pe,lazy:()=>Me,memo:()=>Be,useCallback:()=>Le,useContext:()=>qe,useDebugValue:()=>Ne,useEffect:()=>De,useImperativeHandle:()=>He,useLayoutEffect:()=>Ge,useMemo:()=>je,useReducer:()=>ze,useRef:()=>Ke,useState:()=>Ye,version:()=>Fe});var ve,ye,be,Oe,_e,Se,Te,ke,Ee,xe,Ie,Ce,we,Re,Ae,Pe,Me,Be,Le,qe,Ne,De,He,Ge,je,ze,Ke,Ye,Fe,q=E(()=>{c();f();ve=__REACT__,{Children:ye,Component:be,Fragment:Oe,Profiler:_e,PureComponent:Se,StrictMode:Te,Suspense:ke,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ee,cloneElement:xe,createContext:Ie,createElement:Ce,createFactory:we,createRef:Re,forwardRef:Ae,isValidElement:Pe,lazy:Me,memo:Be,useCallback:Le,useContext:qe,useDebugValue:Ne,useEffect:De,useImperativeHandle:He,useLayoutEffect:Ge,useMemo:je,useReducer:ze,useRef:Ke,useState:Ye,version:Fe}=__REACT__});var J={};C(J,{AddonStore:()=>$e,HooksContext:()=>Ue,addons:()=>Ve,applyHooks:()=>Ze,default:()=>We,isSupportedType:()=>Je,makeDecorator:()=>Qe,mockChannel:()=>Xe,types:()=>et,useArgs:()=>tt,useCallback:()=>rt,useChannel:()=>nt,useEffect:()=>at,useGlobals:()=>ot,useMemo:()=>it,useParameter:()=>st,useReducer:()=>ut,useRef:()=>lt,useState:()=>dt,useStoryContext:()=>ct});var We,$e,Ue,Ve,Ze,Je,Qe,Xe,et,tt,rt,nt,at,ot,it,st,ut,lt,dt,ct,Q=E(()=>{c();f();We=__STORYBOOKADDONS__,{AddonStore:$e,HooksContext:Ue,addons:Ve,applyHooks:Ze,isSupportedType:Je,makeDecorator:Qe,mockChannel:Xe,types:et,useArgs:tt,useCallback:rt,useChannel:nt,useEffect:at,useGlobals:ot,useMemo:it,useParameter:st,useReducer:ut,useRef:lt,useState:dt,useStoryContext:ct}=__STORYBOOKADDONS__});var ee=G((X,j)=>{c();f();(function(t){if(typeof X=="object"&&typeof j<"u")j.exports=t();else if(typeof define=="function"&&define.amd)define([],t);else{var e;typeof window<"u"||typeof window<"u"?e=window:typeof self<"u"?e=self:e=this,e.memoizerific=t()}})(function(){var t,e,i;return function o(n,h,l){function r(s,m){if(!h[s]){if(!n[s]){var u=typeof w=="function"&&w;if(!m&&u)return u(s,!0);if(a)return a(s,!0);var v=new Error("Cannot find module '"+s+"'");throw v.code="MODULE_NOT_FOUND",v}var d=h[s]={exports:{}};n[s][0].call(d.exports,function(g){var y=n[s][1][g];return r(y||g)},d,d.exports,o,n,h,l)}return h[s].exports}for(var a=typeof w=="function"&&w,p=0;p<l.length;p++)r(l[p]);return r}({1:[function(o,n,h){n.exports=function(l){if(typeof Map!="function"||l){var r=o("./similar");return new r}else return new Map}},{"./similar":2}],2:[function(o,n,h){function l(){return this.list=[],this.lastItem=void 0,this.size=0,this}l.prototype.get=function(r){var a;if(this.lastItem&&this.isEqual(this.lastItem.key,r))return this.lastItem.val;if(a=this.indexOf(r),a>=0)return this.lastItem=this.list[a],this.list[a].val},l.prototype.set=function(r,a){var p;return this.lastItem&&this.isEqual(this.lastItem.key,r)?(this.lastItem.val=a,this):(p=this.indexOf(r),p>=0?(this.lastItem=this.list[p],this.list[p].val=a,this):(this.lastItem={key:r,val:a},this.list.push(this.lastItem),this.size++,this))},l.prototype.delete=function(r){var a;if(this.lastItem&&this.isEqual(this.lastItem.key,r)&&(this.lastItem=void 0),a=this.indexOf(r),a>=0)return this.size--,this.list.splice(a,1)[0]},l.prototype.has=function(r){var a;return this.lastItem&&this.isEqual(this.lastItem.key,r)?!0:(a=this.indexOf(r),a>=0?(this.lastItem=this.list[a],!0):!1)},l.prototype.forEach=function(r,a){var p;for(p=0;p<this.size;p++)r.call(a||this,this.list[p].val,this.list[p].key,this)},l.prototype.indexOf=function(r){var a;for(a=0;a<this.size;a++)if(this.isEqual(this.list[a].key,r))return a;return-1},l.prototype.isEqual=function(r,a){return r===a||r!==r&&a!==a},n.exports=l},{}],3:[function(o,n,h){var l=o("map-or-similar");n.exports=function(s){var m=new l(void 0==="true"),u=[];return function(v){var d=function(){var g=m,y,M,T=arguments.length-1,B=Array(T+1),I=!0,k;if((d.numArgs||d.numArgs===0)&&d.numArgs!==T+1)throw new Error("Memoizerific functions should always be called with the same number of arguments");for(k=0;k<T;k++){if(B[k]={cacheItem:g,arg:arguments[k]},g.has(arguments[k])){g=g.get(arguments[k]);continue}I=!1,y=new l(void 0==="true"),g.set(arguments[k],y),g=y}return I&&(g.has(arguments[T])?M=g.get(arguments[T]):I=!1),I||(M=v.apply(null,arguments),g.set(arguments[T],M)),s>0&&(B[T]={cacheItem:g,arg:arguments[T]},I?r(u,B):u.push(B),u.length>s&&a(u.shift())),d.wasMemoized=I,d.numArgs=T+1,M};return d.limit=s,d.wasMemoized=!1,d.cache=m,d.lru=u,d}};function r(s,m){var u=s.length,v=m.length,d,g,y;for(g=0;g<u;g++){for(d=!0,y=0;y<v;y++)if(!p(s[g][y].arg,m[y].arg)){d=!1;break}if(d)break}s.push(s.splice(g,1)[0])}function a(s){var m=s.length,u=s[m-1],v,d;for(u.cacheItem.delete(u.arg),d=m-2;d>=0&&(u=s[d],v=u.cacheItem.get(u.arg),!v||!v.size);d--)u.cacheItem.delete(u.arg)}function p(s,m){return s===m||s!==s&&m!==m}},{"map-or-similar":1}]},{},[3])(3)})});var z={};C(z,{ActiveTabs:()=>pt,Consumer:()=>mt,ManagerContext:()=>ht,Provider:()=>gt,combineParameters:()=>vt,default:()=>ft,merge:()=>yt,useAddonState:()=>bt,useArgTypes:()=>Ot,useArgs:()=>_t,useChannel:()=>St,useGlobalTypes:()=>Tt,useGlobals:()=>kt,useParameter:()=>Et,useSharedState:()=>xt,useStoryPrepared:()=>It,useStorybookApi:()=>Ct,useStorybookState:()=>wt});var ft,pt,mt,ht,gt,vt,yt,bt,Ot,_t,St,Tt,kt,Et,xt,It,Ct,wt,K=E(()=>{c();f();ft=__STORYBOOKAPI__,{ActiveTabs:pt,Consumer:mt,ManagerContext:ht,Provider:gt,combineParameters:vt,merge:yt,useAddonState:bt,useArgTypes:Ot,useArgs:_t,useChannel:St,useGlobalTypes:Tt,useGlobals:kt,useParameter:Et,useSharedState:xt,useStoryPrepared:It,useStorybookApi:Ct,useStorybookState:wt}=__STORYBOOKAPI__});var Y={};C(Y,{default:()=>Rt,deprecate:()=>At,logger:()=>Pt,once:()=>Mt,pretty:()=>Bt});var Rt,At,Pt,Mt,Bt,F=E(()=>{c();f();Rt=__STORYBOOKCLIENTLOGGER__,{deprecate:At,logger:Pt,once:Mt,pretty:Bt}=__STORYBOOKCLIENTLOGGER__});var W={};C(W,{A:()=>qt,ActionBar:()=>Nt,AddonPanel:()=>Dt,Badge:()=>Ht,Bar:()=>Gt,Blockquote:()=>jt,Button:()=>zt,Code:()=>Kt,DL:()=>Yt,Div:()=>Ft,DocumentWrapper:()=>Wt,FlexBar:()=>$t,Form:()=>Ut,H1:()=>Vt,H2:()=>Zt,H3:()=>Jt,H4:()=>Qt,H5:()=>Xt,H6:()=>er,HR:()=>tr,IconButton:()=>rr,IconButtonSkeleton:()=>nr,Icons:()=>ar,Img:()=>or,LI:()=>ir,Link:()=>sr,Loader:()=>ur,OL:()=>lr,P:()=>dr,Placeholder:()=>cr,Pre:()=>fr,ResetWrapper:()=>pr,ScrollArea:()=>mr,Separator:()=>hr,Spaced:()=>gr,Span:()=>vr,StorybookIcon:()=>yr,StorybookLogo:()=>br,Symbols:()=>Or,SyntaxHighlighter:()=>_r,TT:()=>Sr,TabBar:()=>Tr,TabButton:()=>kr,TabWrapper:()=>Er,Table:()=>xr,Tabs:()=>Ir,TabsState:()=>Cr,TooltipLinkList:()=>wr,TooltipMessage:()=>Rr,TooltipNote:()=>Ar,UL:()=>Pr,WithTooltip:()=>Mr,WithTooltipPure:()=>Br,Zoom:()=>Lr,codeCommon:()=>qr,components:()=>Nr,createCopyToClipboardFunction:()=>Dr,default:()=>Lt,getStoryHref:()=>Hr,interleaveSeparators:()=>Gr,nameSpaceClassNames:()=>jr,resetComponents:()=>zr,withReset:()=>Kr});var Lt,qt,Nt,Dt,Ht,Gt,jt,zt,Kt,Yt,Ft,Wt,$t,Ut,Vt,Zt,Jt,Qt,Xt,er,tr,rr,nr,ar,or,ir,sr,ur,lr,dr,cr,fr,pr,mr,hr,gr,vr,yr,br,Or,_r,Sr,Tr,kr,Er,xr,Ir,Cr,wr,Rr,Ar,Pr,Mr,Br,Lr,qr,Nr,Dr,Hr,Gr,jr,zr,Kr,$=E(()=>{c();f();Lt=__STORYBOOKCOMPONENTS__,{A:qt,ActionBar:Nt,AddonPanel:Dt,Badge:Ht,Bar:Gt,Blockquote:jt,Button:zt,Code:Kt,DL:Yt,Div:Ft,DocumentWrapper:Wt,FlexBar:$t,Form:Ut,H1:Vt,H2:Zt,H3:Jt,H4:Qt,H5:Xt,H6:er,HR:tr,IconButton:rr,IconButtonSkeleton:nr,Icons:ar,Img:or,LI:ir,Link:sr,Loader:ur,OL:lr,P:dr,Placeholder:cr,Pre:fr,ResetWrapper:pr,ScrollArea:mr,Separator:hr,Spaced:gr,Span:vr,StorybookIcon:yr,StorybookLogo:br,Symbols:Or,SyntaxHighlighter:_r,TT:Sr,TabBar:Tr,TabButton:kr,TabWrapper:Er,Table:xr,Tabs:Ir,TabsState:Cr,TooltipLinkList:wr,TooltipMessage:Rr,TooltipNote:Ar,UL:Pr,WithTooltip:Mr,WithTooltipPure:Br,Zoom:Lr,codeCommon:qr,components:Nr,createCopyToClipboardFunction:Dr,getStoryHref:Hr,interleaveSeparators:Gr,nameSpaceClassNames:jr,resetComponents:zr,withReset:Kr}=__STORYBOOKCOMPONENTS__});var te={};C(te,{CacheProvider:()=>Fr,ClassNames:()=>Wr,Global:()=>$r,ThemeProvider:()=>Ur,background:()=>Vr,color:()=>Zr,convert:()=>Jr,create:()=>Qr,createCache:()=>Xr,createGlobal:()=>en,createReset:()=>tn,css:()=>rn,darken:()=>nn,default:()=>Yr,ensure:()=>an,ignoreSsrWarning:()=>on,isPropValid:()=>sn,jsx:()=>un,keyframes:()=>ln,lighten:()=>dn,styled:()=>cn,themes:()=>fn,typography:()=>pn,useTheme:()=>mn,withTheme:()=>hn});var Yr,Fr,Wr,$r,Ur,Vr,Zr,Jr,Qr,Xr,en,tn,rn,nn,an,on,sn,un,ln,dn,cn,fn,pn,mn,hn,re=E(()=>{c();f();Yr=__STORYBOOKTHEMING__,{CacheProvider:Fr,ClassNames:Wr,Global:$r,ThemeProvider:Ur,background:Vr,color:Zr,convert:Jr,create:Qr,createCache:Xr,createGlobal:en,createReset:tn,css:rn,darken:nn,ensure:an,ignoreSsrWarning:on,isPropValid:sn,jsx:un,keyframes:ln,lighten:dn,styled:cn,themes:fn,typography:pn,useTheme:mn,withTheme:hn}=__STORYBOOKTHEMING__});var ae=G((Dn,ne)=>{c();f();var R;typeof window<"u"||typeof window<"u"?R=window:typeof self<"u"?R=self:R={};ne.exports=R});var ie=G(A=>{"use strict";c();f();Object.defineProperty(A,"__esModule",{value:!0});A.dedent=void 0;function oe(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var o=Array.from(typeof t=="string"?[t]:t);o[o.length-1]=o[o.length-1].replace(/\r?\n([\t ]*)$/,"");var n=o.reduce(function(r,a){var p=a.match(/\n([\t ]+|(?!\s).)/g);return p?r.concat(p.map(function(s){var m,u;return(u=(m=s.match(/[\t ]/g))===null||m===void 0?void 0:m.length)!==null&&u!==void 0?u:0})):r},[]);if(n.length){var h=new RegExp(`
[	 ]{`+Math.min.apply(Math,n)+"}","g");o=o.map(function(r){return r.replace(h,`
`)})}o[0]=o[0].replace(/^\r?\n/,"");var l=o[0];return e.forEach(function(r,a){var p=l.match(/(?:^|\n)( *)$/),s=p?p[1]:"",m=r;typeof r=="string"&&r.includes(`
`)&&(m=String(r).split(`
`).map(function(u,v){return v===0?u:""+s+u}).join(`
`)),l+=m+o[a+1]}),l}A.dedent=oe;A.default=oe});c();f();c();f();var gn=Object.create,ce=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,yn=Object.getOwnPropertyNames,bn=Object.getPrototypeOf,On=Object.prototype.hasOwnProperty,_n=(t,e,i,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of yn(e))!On.call(t,n)&&n!==i&&ce(t,n,{get:()=>e[n],enumerable:!(o=vn(e,n))||o.enumerable});return t},P=(t,e,i)=>(i=t!=null?gn(bn(t)):{},_n(e||!t||!t.__esModule?ce(i,"default",{value:t,enumerable:!0}):i,t)),N=P((q(),b(L))),U=(Q(),b(J)),Z="storybook/background",x="backgrounds",Gn={UPDATE:`${Z}/update`},S=P((q(),b(L))),fe=P(ee()),se=(K(),b(z)),Sn=(F(),b(Y)),D=($(),b(W)),Tn=(re(),b(te)),kn=Tn.styled.span(({background:t})=>({borderRadius:"1rem",display:"block",height:"1rem",width:"1rem",background:t}),({theme:t})=>({boxShadow:`${t.appBorderColor} 0 0 0 1px inset`})),En=P(ae()),xn=ie(),In=(F(),b(Y)),{document:jn,window:zn}=En.default,Cn=(t,e=[],i)=>{if(t==="transparent")return"transparent";if(e.find(n=>n.value===t))return t;let o=e.find(n=>n.name===i);if(o)return o.value;if(i){let n=e.map(h=>h.name).join(", ");In.logger.warn(xn.dedent`
        Backgrounds Addon: could not find the default color "${i}".
        These are the available colors for your story based on your configuration:
        ${n}.
      `)}return"transparent"},ue=(0,fe.default)(1e3)((t,e,i,o,n,h)=>({id:t||e,title:e,onClick:()=>{n({selected:i,name:e})},value:i,right:o?S.default.createElement(kn,{background:i}):void 0,active:h})),wn=(0,fe.default)(10)((t,e,i)=>{let o=t.map(({name:n,value:h})=>ue(null,n,h,!0,i,h===e));return e!=="transparent"?[ue("reset","Clear background","transparent",null,i,!1),...o]:o}),Rn={default:null,disable:!0,values:[]},An=(0,S.memo)(function(){var t;let e=(0,se.useParameter)(x,Rn),[i,o]=(0,se.useGlobals)(),n=(t=i[x])==null?void 0:t.value,h=(0,S.useMemo)(()=>Cn(n,e.values,e.default),[e,n]);Array.isArray(e)&&Sn.logger.warn("Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md");let l=(0,S.useCallback)(r=>{o({[x]:{...i[x],value:r}})},[e,i,o]);return e.disable?null:S.default.createElement(S.Fragment,null,S.default.createElement(D.WithTooltip,{placement:"top",trigger:"click",closeOnClick:!0,tooltip:({onHide:r})=>S.default.createElement(D.TooltipLinkList,{links:wn(e.values,h,({selected:a})=>{h!==a&&l(a),r()})})},S.default.createElement(D.IconButton,{key:"background",title:"Change the background of the preview",active:h!=="transparent"},S.default.createElement(D.Icons,{icon:"photo"}))))}),V=P((q(),b(L))),le=(K(),b(z)),de=($(),b(W)),Pn=(0,V.memo)(function(){var t;let[e,i]=(0,le.useGlobals)(),{grid:o}=(0,le.useParameter)(x,{grid:{disable:!1}});if(o!=null&&o.disable)return null;let n=((t=e[x])==null?void 0:t.grid)||!1;return V.default.createElement(de.IconButton,{key:"background",active:n,title:"Apply a grid to the preview",onClick:()=>i({[x]:{...e[x],grid:!n}})},V.default.createElement(de.Icons,{icon:"grid"}))});U.addons.register(Z,()=>{U.addons.add(Z,{title:"Backgrounds",type:U.types.TOOL,match:({viewMode:t})=>!!(t&&t.match(/^(story|docs)$/)),render:()=>N.default.createElement(N.Fragment,null,N.default.createElement(An,null),N.default.createElement(Pn,null))})});
//# sourceMappingURL=manager.mjs.map
