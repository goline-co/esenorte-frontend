import{b as g,a as n}from"./index.EISe-aAG.js";var s={},m;function v(){if(m)return s;m=1;var t=g();return s.createRoot=t.createRoot,s.hydrateRoot=t.hydrateRoot,s}var y=v();const d=({value:t,name:r,hydrate:e=!0})=>{if(!t)return null;const a=e?"astro-slot":"astro-static-slot";return n.createElement(a,{name:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:t}})};d.shouldComponentUpdate=()=>!1;function C(t){for(const r in t)if(r.startsWith("__reactContainer"))return r}function R(t){let r={};for(const e of t.attributes)r[e.name]=e.value;return t.firstChild===null?n.createElement(t.localName,r):n.createElement(t.localName,r,Array.from(t.childNodes).map(e=>e.nodeType===Node.TEXT_NODE?e.data:e.nodeType===Node.ELEMENT_NODE?R(e):void 0).filter(e=>!!e))}function O(t,r){if(r&&t){let e=[],a=document.createElement("template");a.innerHTML=t;for(let u of a.content.children)e.push(R(u));return e}else return t?n.createElement(d,{value:t}):void 0}let h=new WeakMap;const N=(t,r)=>{let e=h.get(t);return e||(e=r(),h.set(t,e)),e},_=t=>(r,e,{default:a,...u},{client:b})=>{if(!t.hasAttribute("ssr"))return;const f=t.getAttribute("data-action-key"),l=t.getAttribute("data-action-name"),E=t.getAttribute("data-action-result"),A=f&&l&&E?[JSON.parse(E),f,l]:void 0,T={identifierPrefix:t.getAttribute("prefix"),formState:A};for(const[i,o]of Object.entries(u))e[i]=n.createElement(d,{value:o,name:i});const c=n.createElement(r,e,O(a,t.hasAttribute("data-react-children"))),p=C(t);if(p&&delete t[p],b==="only")return n.startTransition(()=>{N(t,()=>{const o=y.createRoot(t);return t.addEventListener("astro:unmount",()=>o.unmount(),{once:!0}),o}).render(c)});n.startTransition(()=>{N(t,()=>{const o=y.hydrateRoot(t,c,T);return t.addEventListener("astro:unmount",()=>o.unmount(),{once:!0}),o}).render(c)})};export{_ as default};
