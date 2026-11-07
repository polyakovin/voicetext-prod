const CACHE="voicetext-82a57d7a10fe";
const BASE="/";
const FILES=["/404.html","/_astro/Layout.CAau4hfE.css","/_astro/SpeechToText.BZZ-VPHr.js","/_astro/TtsReader.Mtt9wj4w.js","/_astro/client.Cd-EeyjT.js","/_astro/golos-text-cyrillic-ext-wght-normal.hICkpzq7.woff2","/_astro/golos-text-cyrillic-wght-normal.mKek_fSS.woff2","/_astro/golos-text-latin-ext-wght-normal.B-I5lbAQ.woff2","/_astro/golos-text-latin-wght-normal.BS5oQT7X.woff2","/_astro/index.DWHtoYqH.css","/_astro/jsx-runtime.qUaZ7Iw2.js","/_astro/pdf.C-T3twvL.js","/_astro/pdf.worker.min.CIqJB0yW.mjs","/_astro/react.CvnImTBr.js","/favicon.svg","/help.html","/images/speech-to-text/logo-64.png","/images/speech-to-text/welcome-1.webp","/images/speech-to-text/welcome-2.webp","/images/speech-to-text/welcome-3.webp","/","/manifest.webmanifest","/privacy.html","/privacy/","/rate.html","/robots.txt","/speech-to-text-converter-help-page/","/speech-to-text-converter-privacy/","/speech-to-text-converter-rate-page/","/speech-to-text-converter-uninstall-page/","/speech-to-text-converter-welcome-page/","/speech-to-text-converter/","/tts-reader/","/uninstall.html"];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('voicetext-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
  const request=event.request,url=new URL(request.url);
  if(request.method!=='GET'||url.origin!==self.location.origin||!url.pathname.startsWith(BASE))return;
  if(request.mode==='navigate'){
    event.respondWith(fetch(request).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(request,copy)));}return response;}).catch(async()=>await caches.match(request)||await caches.match(url.pathname.replace(/\/?$/,'/'))||await caches.match(BASE+'404.html')));
  }else{event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));}
});
