"use strict";var precacheConfig=[["/index.html","e76791e5399dd4020d2d464553947ada"],["/static/css/main.2de6bb1f.css","01f29896437372799533a9519cc02577"],["/static/js/main.2a7a806b.js","dc9bb5e025b95dacaeb0afab627d3201"],["/static/media/1.0fa28191.jpg","0fa28191c7a4527f38da0cc9be8b5621"],["/static/media/1.77228690.jpg","772286903fbd8b4ea876af796fd5f1ec"],["/static/media/1.be6b3881.png","be6b38813b1fc4d856af3cbd7acf64f0"],["/static/media/10.e951304a.jpg","e951304a87bb15911068506bb349cf78"],["/static/media/11.d2da907d.jpg","d2da907d2879a62f0de057b5e53b3f47"],["/static/media/2.cb4f9400.jpg","cb4f940061fce20e20ae44f00d86ca4f"],["/static/media/2.e49b36e9.jpg","e49b36e93f0c82fc27ab2d403e9baca3"],["/static/media/20.02e02adb.svg","02e02adb4a982d6748c09bfdfb0b70d7"],["/static/media/3.6118a44b.jpg","6118a44b74d009d56967d3c687434055"],["/static/media/3.c6255092.png","c62550928209010398a87f6ec5423330"],["/static/media/3.e1312b08.jpg","e1312b08bb870753aeb43eb733fc7c32"],["/static/media/4.4103ad79.jpg","4103ad79240eb3989377e79cc5f3bc48"],["/static/media/4.933bf361.jpg","933bf3612dac0e25ae3415367777b803"],["/static/media/4.9ce51268.jpg","9ce512686a9aa913546127b0c4cfe0d4"],["/static/media/5.bc69cbb1.jpg","bc69cbb131fb5a762e4e4ad70981656c"],["/static/media/5.efef6131.jpg","efef6131469298cae29c19a8287877fb"],["/static/media/6.76cbb7f4.jpg","76cbb7f46f59de9353f0b87a85191274"],["/static/media/6.ca046fe7.jpg","ca046fe78f72b0462f327f3c49dbbee0"],["/static/media/7.8ddfb9ba.jpg","8ddfb9baa2af6c29fb667a4e65c372e1"],["/static/media/7.da393c81.jpg","da393c811b4aecb329d31829d04c20f5"],["/static/media/8.0187d609.jpg","0187d60920653e0bbf88283ea65aedd7"],["/static/media/8.76dfd946.jpg","76dfd946b9b52635e14401635d985311"],["/static/media/9.a15b2fba.jpg","a15b2fba28744b40a36180501d182116"],["/static/media/9.ddd216a4.jpg","ddd216a404e08f673c8204ed00d5bc53"],["/static/media/Close.d1cad680.svg","d1cad68007149d59565f203436203cb0"],["/static/media/To Top.792c387e.svg","792c387e53317cb79fd7bc841622152d"],["/static/media/arrow.b0847653.svg","b0847653b34dcddefa61060ff8843432"],["/static/media/b.4036e08f.jpg","4036e08fb752e72a87ae923dea118590"],["/static/media/hamburger.73fc67df.svg","73fc67dfdededebed36080d77729a013"],["/static/media/montserrat-bold-webfont.74808e6e.woff2","74808e6e9dae4ce15ae46244b8a76c53"],["/static/media/montserrat-bold-webfont.f9ac3eeb.woff","f9ac3eeb6ee26686d8fcf3e5c2255422"],["/static/media/montserrat-extrabold-webfont.a017a405.woff","a017a405a124005d929e5cded085160b"],["/static/media/montserrat-extrabold-webfont.cd1191e1.woff2","cd1191e1fdbb18fbdeb6537ee33cfb9a"],["/static/media/montserrat-medium-webfont.0582fc25.woff","0582fc259efd57a9e40f6027eef1637c"],["/static/media/montserrat-medium-webfont.56b69aa6.woff2","56b69aa6231a31b73562cb5238ce91e6"],["/static/media/montserrat-regular-webfont.3c4301f3.woff2","3c4301f3fb78d81402376ebba33a8330"],["/static/media/montserrat-regular-webfont.b7a45c6a.woff","b7a45c6aab77218a26a035ce754a57fe"],["/static/media/montserrat-semibold-webfont.19e29ed0.woff","19e29ed081ba21084b50576f5e9b6a4d"],["/static/media/montserrat-semibold-webfont.32bae3b4.woff2","32bae3b40143da960171850475dbf4df"],["/static/media/quick.ae6e7525.svg","ae6e7525f3b11aa6a8db5a9dbe876817"],["/static/media/rates.59bf9b33.svg","59bf9b33c858cfdb78058bf47c276ce2"],["/static/media/roof.f346e2a9.svg","f346e2a9a7b3bd2f3f533bddf4f263a1"],["/static/media/staffs.6f14a7eb.svg","6f14a7eb362e273be640ff70eedfc0e0"],["/static/media/support.8f880ed6.svg","8f880ed653d78a38ca18cfc5305bda0b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});