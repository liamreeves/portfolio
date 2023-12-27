import{B as _,V as B,M as S,F as D,u as $,a as G,T as R,r as u,b as X,E as P,c as O,O as Z,_ as q,d as J,e as K,m as Q,j as m,C as Y,L as V,f as oo,P as eo,S as to,g as ro,t as so}from"./index-b81e408b.js";class no extends _{constructor(f,d,b,y){super();const g=[],w=[],E=[],a=new B,v=new S;v.makeRotationFromEuler(b),v.setPosition(d);const A=new S;A.copy(v).invert(),C(),this.setAttribute("position",new D(g,3)),this.setAttribute("normal",new D(w,3)),this.setAttribute("uv",new D(E,2));function C(){let o,e=[];const r=new B,n=new B;if(f.geometry.isGeometry===!0){console.error("THREE.DecalGeometry no longer supports THREE.Geometry. Use BufferGeometry instead.");return}const s=f.geometry,T=s.attributes.position,x=s.attributes.normal;if(s.index!==null){const c=s.index;for(o=0;o<c.count;o++)r.fromBufferAttribute(T,c.getX(o)),n.fromBufferAttribute(x,c.getX(o)),j(e,r,n)}else for(o=0;o<T.count;o++)r.fromBufferAttribute(T,o),n.fromBufferAttribute(x,o),j(e,r,n);for(e=p(e,a.set(1,0,0)),e=p(e,a.set(-1,0,0)),e=p(e,a.set(0,1,0)),e=p(e,a.set(0,-1,0)),e=p(e,a.set(0,0,1)),e=p(e,a.set(0,0,-1)),o=0;o<e.length;o++){const c=e[o];E.push(.5+c.position.x/y.x,.5+c.position.y/y.y),c.position.applyMatrix4(v),g.push(c.position.x,c.position.y,c.position.z),w.push(c.normal.x,c.normal.y,c.normal.z)}}function j(o,e,r){e.applyMatrix4(f.matrixWorld),e.applyMatrix4(A),r.transformDirection(f.matrixWorld),o.push(new L(e.clone(),r.clone()))}function p(o,e){const r=[],n=.5*Math.abs(y.dot(e));for(let s=0;s<o.length;s+=3){let T,x,c,F=0,i,h,N,M;const U=o[s+0].position.dot(e)-n,H=o[s+1].position.dot(e)-n,I=o[s+2].position.dot(e)-n;switch(T=U>0,x=H>0,c=I>0,F=(T?1:0)+(x?1:0)+(c?1:0),F){case 0:{r.push(o[s]),r.push(o[s+1]),r.push(o[s+2]);break}case 1:{if(T&&(i=o[s+1],h=o[s+2],N=l(o[s],i,e,n),M=l(o[s],h,e,n)),x){i=o[s],h=o[s+2],N=l(o[s+1],i,e,n),M=l(o[s+1],h,e,n),r.push(N),r.push(h.clone()),r.push(i.clone()),r.push(h.clone()),r.push(N.clone()),r.push(M);break}c&&(i=o[s],h=o[s+1],N=l(o[s+2],i,e,n),M=l(o[s+2],h,e,n)),r.push(i.clone()),r.push(h.clone()),r.push(N),r.push(M),r.push(N.clone()),r.push(h.clone());break}case 2:{T||(i=o[s].clone(),h=l(i,o[s+1],e,n),N=l(i,o[s+2],e,n),r.push(i),r.push(h),r.push(N)),x||(i=o[s+1].clone(),h=l(i,o[s+2],e,n),N=l(i,o[s],e,n),r.push(i),r.push(h),r.push(N)),c||(i=o[s+2].clone(),h=l(i,o[s],e,n),N=l(i,o[s+1],e,n),r.push(i),r.push(h),r.push(N));break}}}return r}function l(o,e,r,n){const s=o.position.dot(r)-n,T=e.position.dot(r)-n,x=s/(s-T);return new L(new B(o.position.x+x*(e.position.x-o.position.x),o.position.y+x*(e.position.y-o.position.y),o.position.z+x*(e.position.z-o.position.z)),new B(o.normal.x+x*(e.normal.x-o.normal.x),o.normal.y+x*(e.normal.y-o.normal.y),o.normal.z+x*(e.normal.z-o.normal.z)))}}}class L{constructor(f,d){this.position=f,this.normal=d}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}const W=t=>t===Object(t)&&!Array.isArray(t)&&typeof t!="function";function z(t,f){const d=$(y=>y.gl),b=G(R,W(t)?Object.values(t):t);if(u.useLayoutEffect(()=>{f==null||f(b)},[f]),u.useEffect(()=>{"initTexture"in d&&(Array.isArray(b)?b:[b]).forEach(d.initTexture)},[d,b]),W(t)){const y=Object.keys(t),g={};return y.forEach(w=>Object.assign(g,{[w]:b[y.indexOf(w)]})),g}else return b}z.preload=t=>G.preload(R,t);z.clear=t=>G.clear(R,t);function lo(t){return Array.isArray(t)}function k(t=[0,0,0]){return lo(t)?t:t instanceof B||t instanceof P?[t.x,t.y,t.z]:[t,t,t]}const ao=u.forwardRef(function({debug:f,depthTest:d=!1,polygonOffsetFactor:b=-10,map:y,mesh:g,children:w,position:E,rotation:a,scale:v,...A},C){const j=u.useRef(null);u.useImperativeHandle(C,()=>j.current);const p=u.useRef(null);return u.useLayoutEffect(()=>{const l=(g==null?void 0:g.current)||j.current.parent,o=j.current;if(!(l instanceof X))throw new Error('Decal must have a Mesh as parent or specify its "mesh" prop');const e={position:new B,rotation:new P,scale:new B(1,1,1)};if(l){O(e,{position:E,scale:v});const r=l.matrixWorld.clone();if(l.matrixWorld.identity(),!a||typeof a=="number"){const n=new Z;n.position.copy(e.position),n.lookAt(l.position),typeof a=="number"&&n.rotateZ(a),O(e,{rotation:n.rotation})}else O(e,{rotation:a});return o.geometry=new no(l,e.position,e.rotation,e.scale),p.current&&(O(p.current,e),p.current.traverse(n=>n.raycast=()=>null)),l.matrixWorld=r,()=>{o.geometry.dispose()}}},[g,...k(E),...k(v),...k(a)]),u.createElement("mesh",q({ref:j,"material-transparent":!0,"material-polygonOffset":!0,"material-polygonOffsetFactor":b,"material-depthTest":d,"material-map":y},A),w,f&&u.createElement("mesh",{ref:p},u.createElement("boxGeometry",null),u.createElement("meshNormalMaterial",{wireframe:!0}),u.createElement("axesHelper",null)))}),io=u.forwardRef(({children:t,enabled:f=!0,speed:d=1,rotationIntensity:b=1,floatIntensity:y=1,floatingRange:g=[-.1,.1],...w},E)=>{const a=u.useRef(null),v=u.useRef(Math.random()*1e4);return J(A=>{var C,j;if(!f||d===0)return;const p=v.current+A.clock.getElapsedTime();a.current.rotation.x=Math.cos(p/4*d)/8*b,a.current.rotation.y=Math.sin(p/4*d)/8*b,a.current.rotation.z=Math.sin(p/4*d)/20*b;let l=Math.sin(p/4*d)/10;l=K.mapLinear(l,-.1,.1,(C=g==null?void 0:g[0])!==null&&C!==void 0?C:-.1,(j=g==null?void 0:g[1])!==null&&j!==void 0?j:.1),a.current.position.y=l*y,a.current.updateMatrix()}),u.createElement("group",w,u.createElement("group",{ref:Q([a,E]),matrixAutoUpdate:!1},t))}),co=t=>{const[f]=z([t.imgUrl]);return m(io,{speed:1.75,rotationIntensity:1,floatIntensity:2,children:[m("ambientLight",{intensity:.25},void 0,!1,{fileName:"/home/l/Coding/js/portfolio/src/components/canvas/Ball.jsx",lineNumber:18,columnNumber:7},globalThis),m("directionalLight",{position:[0,0,.05]},void 0,!1,{fileName:"/home/l/Coding/js/portfolio/src/components/canvas/Ball.jsx",lineNumber:19,columnNumber:7},globalThis),m("mesh",{castShadow:!0,receiveShadow:!0,scale:2.75,children:[m("icosahedronGeometry",{args:[1,1]},void 0,!1,{fileName:"/home/l/Coding/js/portfolio/src/components/canvas/Ball.jsx",lineNumber:21,columnNumber:9},globalThis),m("meshStandardMaterial",{color:"#fff8eb",polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0},void 0,!1,{fileName:"/home/l/Coding/js/portfolio/src/components/canvas/Ball.jsx",lineNumber:22,columnNumber:9},globalThis),m(ao,{position:[0,0,1],rotation:[2*Math.PI,0,6.25],scale:1,map:f,flatShading:!0},void 0,!1,{fileName:"/home/l/Coding/js/portfolio/src/components/canvas/Ball.jsx",lineNumber:28,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/l/Coding/js/portfolio/src/components/canvas/Ball.jsx",lineNumber:20,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/l/Coding/js/portfolio/src/components/canvas/Ball.jsx",lineNumber:17,columnNumber:5},globalThis)},uo=({icon:t})=>m(Y,{frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},children:[m(u.Suspense,{fallback:m(V,{},void 0,!1,{fileName:"/home/l/Coding/js/portfolio/src/components/canvas/Ball.jsx",lineNumber:47,columnNumber:27},globalThis),children:[m(oo,{enableZoom:!1},void 0,!1,{fileName:"/home/l/Coding/js/portfolio/src/components/canvas/Ball.jsx",lineNumber:48,columnNumber:9},globalThis),m(co,{imgUrl:t},void 0,!1,{fileName:"/home/l/Coding/js/portfolio/src/components/canvas/Ball.jsx",lineNumber:49,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/l/Coding/js/portfolio/src/components/canvas/Ball.jsx",lineNumber:47,columnNumber:7},globalThis),m(eo,{all:!0},void 0,!1,{fileName:"/home/l/Coding/js/portfolio/src/components/canvas/Ball.jsx",lineNumber:52,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/l/Coding/js/portfolio/src/components/canvas/Ball.jsx",lineNumber:42,columnNumber:5},globalThis),mo=()=>m(ro,{children:m("div",{className:"flex flex-row flex-wrap justify-center gap-10",children:so.map(t=>m("div",{className:"w-28 h-28",children:m(uo,{icon:t.icon},void 0,!1,{fileName:"/home/l/Coding/js/portfolio/src/components/Tech.jsx",lineNumber:11,columnNumber:13},globalThis)},t.name,!1,{fileName:"/home/l/Coding/js/portfolio/src/components/Tech.jsx",lineNumber:10,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/l/Coding/js/portfolio/src/components/Tech.jsx",lineNumber:8,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/l/Coding/js/portfolio/src/components/Tech.jsx",lineNumber:7,columnNumber:5},globalThis),po=to(mo,"tech");export{po as default};
