!function(){let e=[],a="";e=["/simon/index.html","/simon/favicon-16x16.083dbd29.png","/simon/favicon-32x32.d1257967.png","/simon/apple-touch-icon.85784a60.png","/simon/manifest.webmanifest","/simon/android-chrome-192x192.5a0a3da2.png","/simon/android-chrome-512x512.dbe88fae.png","/simon/maskable-icon-192x192.963b58fb.png","/simon/maskable-icon-512x512.3fd37297.png","/simon/index.d2b6e0e3.css","/simon/index.2300adf3.js","/simon/index.3ab02545.js"],a="645ea775";const n="simon-cache-",c=`simon-cache-${a}`;self.addEventListener("install",(a=>a.waitUntil((async()=>{const a=await caches.open(c);await a.addAll(e)})()))),self.addEventListener("activate",(e=>e.waitUntil((async()=>{const e=await caches.keys();return Promise.allSettled(e.filter((e=>e!==c&&e.startsWith(n))).map((e=>caches.delete(e))))})()))),self.addEventListener("fetch",(e=>e.respondWith((async e=>{const a=await caches.open(c);let n=await a.match(e);return n||(n=await fetch(e),"basic"===n.type&&n.ok&&a.put(e,n.clone()),n)})(e.request))))}();