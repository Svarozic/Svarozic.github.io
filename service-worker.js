"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["images/loader.gif","b41bfcf37a8a365d2c101c9931bc0e75"],["images/portfolio/coffee.jpg","de06f5d908fc33bb083d947ca23d0a7f"],["images/portfolio/console.jpg","10a557caba8bdbb1f030609c669e4314"],["images/portfolio/farmerboy.jpg","ac51137c942715b7decebd1e166080df"],["images/portfolio/girl.jpg","a95478b7f3fbeb159495ca2d36a6ccb7"],["images/portfolio/into-the-light.jpg","3445f11c05b5a0608b39f3b2cbb0bbf4"],["images/portfolio/judah.jpg","f5bf96d39756b9a7267076a3b81a5e98"],["images/portfolio/modals/m-coffee.jpg","9a5510b73fa8e35066c047347b3e02e3"],["images/portfolio/modals/m-console.jpg","dc53e451be2267be73395b7022b23956"],["images/portfolio/modals/m-farmerboy.jpg","38ce1edce458e6aa5b93aae738cd8caa"],["images/portfolio/modals/m-girl.jpg","cca489424290988698ceb5e8c5552189"],["images/portfolio/modals/m-intothelight.jpg","f20aeacdaa64a9eb8f9eef9554245d48"],["images/portfolio/modals/m-judah.jpg","d0599ca57ac4b7531f0d4c30fdc7a2b9"],["images/portfolio/modals/m-origami.jpg","0f03a9bee6e8f1f6b48007d6c096dad9"],["images/portfolio/modals/m-retrocam.jpg","91b65a93128ed7ef064fad7cdf859e69"],["images/portfolio/origami.jpg","5bb3df6308eaa82bdf74a53d339f6b86"],["images/portfolio/retrocam.jpg","522192d97b644075d576df8f7f58f3a0"],["images/profilepic.jpg","7e773edecdc38561e4d4bcd2606811f3"],["js/jquery-1.10.2.min.js","11468602df014a21b203dc9bcd84d369"],["js/jquery-migrate-1.2.1.min.js","512b871a2830e44259bc3ce3343afcd0"],["js/jquery.fittext.js","83e22e0c5adf424b9ec36718caae427c"],["js/jquery.flexslider.js","a3457f89c1034b388aebc6b35dca7551"],["js/magnific-popup.js","dfe9b34be65b451f8ea44b7b02c2935b"],["js/modernizr.js","bf59b752f496003f958515c48e327475"],["js/waypoints.js","6d2f710de6f5e046d3258c4bc06f50e6"],["index.html","e79d051016d2a8a2254c6d20cfb00d95"],["static/css/main.57fcd58e.css","9da98367cc8543124e8c91bf0fd7d8ad"],["static/js/main.7dcabab8.js","209bc41251c13165bc58f80774c7d151"],["static/media/OpenSans-Bold-webfont.1d9c7945.eot","1d9c7945c7bc7dd0909105119bfbc191"],["static/media/OpenSans-Bold-webfont.2e90d515.woff","2e90d5152ce92858b62ba053c7b9d2cb"],["static/media/OpenSans-Bold-webfont.76cc6be5.ttf","76cc6be5d8a231dc012fef4bdb86f79c"],["static/media/OpenSans-Bold-webfont.93349923.svg","93349923b5274a36ac93cb3168d09123"],["static/media/OpenSans-BoldItalic-webfont.2b4eeeae.svg","2b4eeeaef53b3496a5cdf82803666ed7"],["static/media/OpenSans-BoldItalic-webfont.6218c213.eot","6218c213bb8cf22b25710da6f3a90e48"],["static/media/OpenSans-BoldItalic-webfont.7657144e.woff","7657144ec477cd61ac4a5d1af3fa2d28"],["static/media/OpenSans-BoldItalic-webfont.b6690626.ttf","b6690626036a7d6824632769305b1978"],["static/media/OpenSans-ExtraBold-webfont.12be067a.ttf","12be067a6270759b4f861d64cc267166"],["static/media/OpenSans-ExtraBold-webfont.56d9d42e.eot","56d9d42e23863ce0ee8e8c2e2f22843f"],["static/media/OpenSans-ExtraBold-webfont.6ad39639.woff","6ad396399f4022ccd1616cf11d0985be"],["static/media/OpenSans-ExtraBold-webfont.ea3c4697.svg","ea3c4697897bd7f1505facb7084c6ac3"],["static/media/OpenSans-ExtraBoldItalic-webfont.04246830.woff","042468300dab6f308592e15e02549c79"],["static/media/OpenSans-ExtraBoldItalic-webfont.5517d73a.ttf","5517d73acdc17143c21b0cffab4cfaa9"],["static/media/OpenSans-ExtraBoldItalic-webfont.6512fca9.svg","6512fca9ff4dc029307018c17e4a2a9d"],["static/media/OpenSans-ExtraBoldItalic-webfont.ff3bedae.eot","ff3bedaecdec71c34b0ca85c3c495c2d"],["static/media/OpenSans-Italic-webfont.43d53429.eot","43d5342998f3607bd61a8239e98b1160"],["static/media/OpenSans-Italic-webfont.5b774c25.svg","5b774c25787e0a52c013463c9e3c4219"],["static/media/OpenSans-Italic-webfont.de7ef31e.ttf","de7ef31e6295902347c5c3643b2d82da"],["static/media/OpenSans-Italic-webfont.f42641ee.woff","f42641eed834f7b97a9499362c6c8855"],["static/media/OpenSans-Light-webfont.09e00aa7.eot","09e00aa7622ece30a0f1e06b55f66c2a"],["static/media/OpenSans-Light-webfont.2e98fc3c.ttf","2e98fc3ce85f31f63010b706259cb604"],["static/media/OpenSans-Light-webfont.45b47f3e.woff","45b47f3e9c7d74b80f5c6e0a3c513b23"],["static/media/OpenSans-Light-webfont.8f04ed9a.svg","8f04ed9aeb2185499068d84842b95aa1"],["static/media/OpenSans-LightItalic-webfont.1d22953c.ttf","1d22953c479914c2f801e08de666b0e8"],["static/media/OpenSans-LightItalic-webfont.550b5fda.eot","550b5fda4a27cfedb7131b1a6e85e748"],["static/media/OpenSans-LightItalic-webfont.b553da50.woff","b553da506077488bc65289e10841d527"],["static/media/OpenSans-LightItalic-webfont.fd6dd5fa.svg","fd6dd5fa10c5a74f0a767eeb695342f1"],["static/media/OpenSans-Regular-webfont.488d5cc1.ttf","488d5cc145299ba07b75495100419ee6"],["static/media/OpenSans-Regular-webfont.79515ad0.woff","79515ad0788973c533405f7012dfeccd"],["static/media/OpenSans-Regular-webfont.8185eb30.svg","8185eb3059c46e4169ce107dfcf85950"],["static/media/OpenSans-Regular-webfont.c4d82460.eot","c4d82460ef260eb1589e73528cbfb257"],["static/media/OpenSans-Semibold-webfont.3f6b1eed.svg","3f6b1eed8a0832d6f316fc26526348a8"],["static/media/OpenSans-Semibold-webfont.697574b4.woff","697574b47bcfdd2c45e3e63c7380dd67"],["static/media/OpenSans-Semibold-webfont.b32acea6.ttf","b32acea6fd3c228b5059042c7ad21c55"],["static/media/OpenSans-Semibold-webfont.f28eb362.eot","f28eb362fb6afe946d822ee5451c2146"],["static/media/OpenSans-SemiboldItalic-webfont.64f886b2.ttf","64f886b232962979e2eaf29d93108286"],["static/media/OpenSans-SemiboldItalic-webfont.70bafcaa.eot","70bafcaaadad9e17b9c7784abbc6b1c2"],["static/media/OpenSans-SemiboldItalic-webfont.70eb93d7.svg","70eb93d7ba2ad241180085a9a74b0b95"],["static/media/OpenSans-SemiboldItalic-webfont.719f7321.woff","719f7321a8366f4ee609737026432113"],["static/media/fontawesome-webfont.0a799148.svg","0a799148a50bb02c6f380eabd8d97559"],["static/media/fontawesome-webfont.3293616e.woff","3293616ec0c605c7c2db25829a0a509e"],["static/media/fontawesome-webfont.8b27bc96.eot","8b27bc96115c2d24350f0d09e6a9433f"],["static/media/fontawesome-webfont.dcb26c72.ttf","dcb26c7239d850266941e80370e207c1"],["static/media/fontello.3cd7423d.ttf","3cd7423df7d808f922898f5be0edcdd8"],["static/media/fontello.931bc5e5.svg","931bc5e57d402b88137500d8af868cff"],["static/media/fontello.b54500d9.woff","b54500d9503d30109f1a6acdb9fe81d8"],["static/media/fontello.ce25cd5b.eot","ce25cd5bdc97f3162b5ed8d9facb3005"],["static/media/header-background.f19c1495.jpg","f19c14955a7831e928237c9a23b2eb2d"],["static/media/librebaskerville-bold-webfont.6be4bfc9.svg","6be4bfc9a081cb82910a1ac43eaee4c7"],["static/media/librebaskerville-bold-webfont.c49b3981.eot","c49b3981651dfe7f281418762ba6ead9"],["static/media/librebaskerville-bold-webfont.d1e41b59.woff","d1e41b59c942f200e2af5cd00a1c413c"],["static/media/librebaskerville-bold-webfont.e2a49a30.ttf","e2a49a303079f1d0ef576591d806b1b4"],["static/media/librebaskerville-italic-webfont.8825a887.svg","8825a887e1d72aad739281fcc3eb83a6"],["static/media/librebaskerville-italic-webfont.98770575.eot","98770575e43bc5883a62f232c2fc5475"],["static/media/librebaskerville-italic-webfont.bfa5b7be.woff","bfa5b7beba080b0c6af53ca5a255b37d"],["static/media/librebaskerville-italic-webfont.e145c25e.ttf","e145c25e7611072d1d1991eb12d61bda"],["static/media/librebaskerville-regular-webfont.0417aa96.svg","0417aa96d0b9b04ba4b3a5c3a2378ea7"],["static/media/librebaskerville-regular-webfont.84aa9cfe.eot","84aa9cfe8f8c7a9a0ed814c1d54e6f87"],["static/media/librebaskerville-regular-webfont.d67a803b.woff","d67a803b3388b5b73200e6eec553f6fe"],["static/media/librebaskerville-regular-webfont.eaf077e2.ttf","eaf077e2e9d8c00e3348b03a7cac92fe"],["static/media/testimonials-bg.f063209a.jpg","f063209a66807e69329fada1e2590674"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});