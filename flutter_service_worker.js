'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2a6be04cc06afda2ba0b11e39db2dc31",
"assets/AssetManifest.bin.json": "561c5f9842ea810201881ff385cd2c0d",
"assets/AssetManifest.json": "7a588e1af624c2cdb4b9253404a76f6a",
"assets/assets/containers/default_frame.png": "fcaa7ba4017f33bcc9b21e78a2afbf5a",
"assets/assets/containers/todopuzzles.png": "80ce952ee0ac66ab6c0b5231fe08c320",
"assets/assets/frames/frame.svg": "402e7f74035cfe42dfbcbc3924c381aa",
"assets/assets/gems/7_0.png": "9a82f712aea2bc886809760dc9005b23",
"assets/assets/gems/7_1.png": "bf33109fc7684d31b85cd6f048c5fc8b",
"assets/assets/gems/7_2.png": "81080d0eb3a7c6f29c53e8c12b825d0a",
"assets/assets/gems/7_3.png": "80507ab4057a6d21078d7ec2db8a942f",
"assets/assets/gems/7_4.png": "2b5eb1a0d345787d6a43b3b33c48e745",
"assets/assets/gems/7_5.png": "9c0c13b39910f96fd4bc5f40f57d4d19",
"assets/assets/gems/7_6.png": "79effd389f67fece4eea4c3e5b976202",
"assets/assets/gems/7_7.png": "bd60938c99367a413dfeceae8dbccce9",
"assets/assets/puzzles/1/0.png": "8008a89706956394b89fa5042ef9048a",
"assets/assets/puzzles/1/1.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/puzzles/2/0.png": "8008a89706956394b89fa5042ef9048a",
"assets/assets/puzzles/2/1.png": "fb98d6d7ca63d14cf513fe0b320fd933",
"assets/assets/puzzles/2/2.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/puzzles/3/0.png": "8008a89706956394b89fa5042ef9048a",
"assets/assets/puzzles/3/1.png": "ef6433b6893374c45dd7a7999a19e82e",
"assets/assets/puzzles/3/2.png": "2a35a7ba5b0eb396ea65433b87109e35",
"assets/assets/puzzles/3/3.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/puzzles/4/0.png": "8008a89706956394b89fa5042ef9048a",
"assets/assets/puzzles/4/1.png": "23e6407ed4c462293e6ce49a1e35c005",
"assets/assets/puzzles/4/2.png": "fb98d6d7ca63d14cf513fe0b320fd933",
"assets/assets/puzzles/4/3.png": "9379e9523231ed2432bedbb9d442989b",
"assets/assets/puzzles/4/4.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/puzzles/5/0.png": "dff0ade096aaa2b5c2f93a3c026b5326",
"assets/assets/puzzles/5/1.png": "bb9f54a8fc2b3937888dd0dc55047088",
"assets/assets/puzzles/5/2.png": "8186b27f94847bb7d2344ae55ad36dd1",
"assets/assets/puzzles/5/3.png": "4dac664f552af6f007188e2fa373dc20",
"assets/assets/puzzles/5/4.png": "de5177e5c1a63008596337398377e6f9",
"assets/assets/puzzles/5/5.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/puzzles/6/0.png": "dff0ade096aaa2b5c2f93a3c026b5326",
"assets/assets/puzzles/6/1.png": "a8c2282afa9a151d11369c9424d989e8",
"assets/assets/puzzles/6/2.png": "617a90e617f2744024945a4923f0cb1c",
"assets/assets/puzzles/6/3.png": "2707c3c83097b50b89422a3032210f77",
"assets/assets/puzzles/6/4.png": "6e9b289002e024d9383e7f6a0cac1f8b",
"assets/assets/puzzles/6/5.png": "8f31625d56c58baeb05463df06a8032c",
"assets/assets/puzzles/6/6.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/puzzles/7/0.png": "dff0ade096aaa2b5c2f93a3c026b5326",
"assets/assets/puzzles/7/1.png": "7e5194e288ebdf860eba0dcc20f5d28a",
"assets/assets/puzzles/7/2.png": "c09a65a28fef78c78032917b9449e68f",
"assets/assets/puzzles/7/3.png": "d436ca50ce621a61f849f431023eb8c0",
"assets/assets/puzzles/7/4.png": "be66d5e84f409f31bca21ad4aa30cbce",
"assets/assets/puzzles/7/5.png": "56bf9b562c65ca6e7c2389e6b0b33209",
"assets/assets/puzzles/7/6.png": "0a8b32939db33e952965c7d8283f929f",
"assets/assets/puzzles/7/7.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/puzzles/8/0.png": "8008a89706956394b89fa5042ef9048a",
"assets/assets/puzzles/8/1.png": "a36fc11a2c3452b670f079e9b69ca939",
"assets/assets/puzzles/8/2.png": "23e6407ed4c462293e6ce49a1e35c005",
"assets/assets/puzzles/8/3.png": "58dfbd8b8c6429e848354ad883637cf1",
"assets/assets/puzzles/8/4.png": "fb98d6d7ca63d14cf513fe0b320fd933",
"assets/assets/puzzles/8/5.png": "4f5255f39c6d66af78eb909424188834",
"assets/assets/puzzles/8/6.png": "9379e9523231ed2432bedbb9d442989b",
"assets/assets/puzzles/8/7.png": "a392cc4ea62c52152d917b4d97c0756c",
"assets/assets/puzzles/8/8.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/rewards/default_reward.png": "82bc0e4924f8e08cdc752910f703902f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "37b6a71e1a3a2c9de10268c898142d8b",
"assets/NOTICES": "776fed05f101710783e736ab2d0d9b46",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "b85fedc601db924025e7936d851e7e7e",
"canvaskit/canvaskit.wasm": "32e3efb7197623764dab3ab619bc8e0e",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "9f2dfa8c181a437290aa2b58e55da15d",
"canvaskit/chromium/canvaskit.wasm": "a9ac3154d01d503f2f999bfe159149a8",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "c6f605aa7f865f54f11010319bec4307",
"canvaskit/skwasm.wasm": "44af633450aae3d639948c8fd7d344b0",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "fe31c28c2a3f033bcf8ce09fdaf4c08c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "b2617b8efd3e4d2d4a7c6d1e0c1d2994",
"icons/android-chrome-192x192.png": "1e57b1fc95123c2553e749dc02a85374",
"icons/android-chrome-512x512.png": "9ad0f9345f1f7ebaa5df4736e713d40c",
"icons/apple-touch-icon.png": "8f68fda99f8b5a8eb22c00f91d1eedf3",
"icons/favicon-16x16.png": "dd010301c60f9065f2854bf4138446b9",
"icons/favicon-32x32.png": "90650b3c0743f3623e18fbced475e5ad",
"index.html": "fe5a781d7b81fb28ff68e52aec02d1c3",
"/": "fe5a781d7b81fb28ff68e52aec02d1c3",
"js/sql.js": "b3743183c44b227e1624374a154c592f",
"main.dart.js": "244bba1c98a357c1d954e03fdc1931a5",
"manifest.json": "535472e4a9cf1cbe8517cff0918fba35",
"version.json": "8a903f02396ce28592c5910c85754e16"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
