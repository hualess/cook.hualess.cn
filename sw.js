if(!self.define){let n,l={};const s=(s,u)=>(s=new URL(s+".js",u).href,l[s]||new Promise((l=>{if("document"in self){const n=document.createElement("script");n.src=s,n.onload=l,document.head.appendChild(n)}else n=s,importScripts(s),l()})).then((()=>{let n=l[s];if(!n)throw new Error(`Module ${s} didn’t register its module`);return n})));self.define=(u,e)=>{const i=n||("document"in self?document.currentScript.src:"")||location.href;if(l[i])return;let r={};const t=n=>s(n,i),o={module:{uri:i},exports:r,require:t};l[i]=Promise.all(u.map((n=>o[n]||t(n)))).then((n=>(e(...n),r)))}}define(["./workbox-81b13f12"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"_nuxt/96apT03D.js",revision:null},{url:"_nuxt/B-QcltwK.js",revision:null},{url:"_nuxt/BdWZ08K2.js",revision:null},{url:"_nuxt/BDXfYb7r.js",revision:null},{url:"_nuxt/BFfYl9YF.js",revision:null},{url:"_nuxt/BK9eCyM0.js",revision:null},{url:"_nuxt/BMMEnMtk.js",revision:null},{url:"_nuxt/BThfoViY.js",revision:null},{url:"_nuxt/BUeE8yqH.js",revision:null},{url:"_nuxt/BYj-sOcz.js",revision:null},{url:"_nuxt/C4sLt9FW.js",revision:null},{url:"_nuxt/C5KnCkrn.js",revision:null},{url:"_nuxt/ChLzKgmn.js",revision:null},{url:"_nuxt/Ckj4zUc0.js",revision:null},{url:"_nuxt/CLbdZX77.js",revision:null},{url:"_nuxt/Cpw3E-15.js",revision:null},{url:"_nuxt/CXIxjkq2.js",revision:null},{url:"_nuxt/CYDPBP1E.js",revision:null},{url:"_nuxt/CzJ-X0ch.js",revision:null},{url:"_nuxt/D3PHb7Bi.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/D9wXqsf-.js",revision:null},{url:"_nuxt/DAGl8cS6.js",revision:null},{url:"_nuxt/Dcry0nG7.js",revision:null},{url:"_nuxt/DhIlWphd.js",revision:null},{url:"_nuxt/DkbH_E87.js",revision:null},{url:"_nuxt/DlAUqK2U.js",revision:null},{url:"_nuxt/DXR1an-_.js",revision:null},{url:"_nuxt/DYekaqMq.js",revision:null},{url:"_nuxt/entry.BABVdfCI.css",revision:null},{url:"_nuxt/error-404.B59qitcN.css",revision:null},{url:"_nuxt/error-500.CKjvmBYw.css",revision:null},{url:"_nuxt/help.CjqOJ3cj.css",revision:null},{url:"_nuxt/i0EPXsUR.js",revision:null},{url:"_nuxt/index.Dun4FkM9.css",revision:null},{url:"_nuxt/index.YPMDz3mP.css",revision:null},{url:"_nuxt/Lig3S2eD.js",revision:null},{url:"_nuxt/P9L4UCcb.js",revision:null},{url:"_nuxt/qfBpJwx_.js",revision:null},{url:"_nuxt/TheBottomMenu.D9zjz_aQ.css",revision:null},{url:"_nuxt/tkPWppak.js",revision:null},{url:"_nuxt/v7XK3jXD.js",revision:null},{url:"_nuxt/YlfForm.ChIcKBi4.css",revision:null},{url:"404",revision:"2683c4b03504a7d99b0e9c0caa37c8c6"},{url:"favicon.svg",revision:"2f3066ea45c1f7d434c4c3624b95be09"},{url:"help",revision:"2683c4b03504a7d99b0e9c0caa37c8c6"},{url:"/",revision:"2683c4b03504a7d99b0e9c0caa37c8c6"},{url:"pwa-192x192.png",revision:"6d9724829b6a37986f217183a130dee6"},{url:"pwa-512x512.png",revision:"9807ab93ffaa6c1305d75c26c08bc65d"},{url:"random",revision:"2683c4b03504a7d99b0e9c0caa37c8c6"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"fb5c62710ceec1ea2e89f781fb089f92"},{url:"search-cook.png",revision:"3ffd260f7714e0793b99a071a67bbcca"},{url:"settings",revision:"2683c4b03504a7d99b0e9c0caa37c8c6"},{url:"user",revision:"2683c4b03504a7d99b0e9c0caa37c8c6"},{url:"_nuxt/builds/latest.json",revision:"85d20e496d99ad3219efa2a86938d111"},{url:"_nuxt/builds/meta/eb8a7157-9e1c-4835-be89-cedebc8506c8.json",revision:null},{url:"manifest.webmanifest",revision:"1eedf93fec1180f0a6d612d93e63c5ec"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/"),{denylist:[/^\/api\//]})),n.registerRoute(/^https:\/\/fonts.googleapis.com\/.*/i,new n.CacheFirst({cacheName:"google-fonts-cache",plugins:[new n.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new n.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),n.registerRoute(/^https:\/\/fonts.gstatic.com\/.*/i,new n.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new n.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new n.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
