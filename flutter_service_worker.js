'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c1b1113bb9f45c7907d427347907f9b3",
"version.json": "00092e000476f37bc7f942daf75233e5",
"index.html": "e2bca255457cc35f0cd126166e4ca3b5",
"/": "e2bca255457cc35f0cd126166e4ca3b5",
"main.dart.js": "cc5161f63a814c3b1e333473054684c3",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7faf518548575e3726e86817df67f31b",
"assets/NOTICES": "ea404ea3dcedbcc09c2bbb6aca3fa23d",
"assets/FontManifest.json": "7765a949f18929a59f9f7f2989290682",
"assets/AssetManifest.bin.json": "0732f336e0aff7d31bb6029df2208f70",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "deda62421cef51313b47156d5aad4872",
"assets/fonts/MaterialIcons-Regular.otf": "b1ea87d01a0077392281a8bd0aadf6ed",
"assets/assets/images/zoom_logo.svg": "dfd1a8a08ebc96eff27f5ae0cbf0df97",
"assets/assets/images/clone.svg": "a6d52d43e3a20a9f415be725e6394eda",
"assets/assets/images/successful-check-circle-5.webp": "143ac34cf23510e49be7d5e47cf4df65",
"assets/assets/images/dots.svg": "bf7f628859822276b5396707e5f373f9",
"assets/assets/images/schedule-appointment.webp": "5bf0a3b4525b1ab207febded426966e0",
"assets/assets/images/two-deer.webp": "27aec1b8871c62c0a98860e127297ff7",
"assets/assets/images/drop-in.webp": "78943ff9a9f47413e50e396ab84d90e9",
"assets/assets/images/whale-wolf-deer.webp": "d386169fd3190ba6cdc5489393b815fe",
"assets/assets/images/flag_solid.svg": "0da55091b946108e0b1871247e8e3fc3",
"assets/assets/images/view-schedule.webp": "f4f8c0995fdeb4f3047f0904267a8e2e",
"assets/assets/images/screenshot.webp": "73432a82f2b85bc109d138ce2dab15ef",
"assets/assets/images/ic_bottom_home.svg": "f1cd84c6f2a7a8862fb75fb72661c185",
"assets/assets/images/group.webp": "bd3e2a374d4b4e5cf4e32ce4fe2e2a6e",
"assets/assets/images/view-schedule-large.webp": "98d95c34e36858e3faebc9bc6fc08724",
"assets/assets/images/comments.svg": "303065964e9b0eb5aefa4a010851a8cf",
"assets/assets/images/urgent-large.webp": "38a6defa571c3609d0d50a41857f6060",
"assets/assets/images/address_book.svg": "d7fc2fe858e2b93bdbf5015932b18d6a",
"assets/assets/images/schedule-appointment-large.webp": "da73864dce3df46ed6897fb287adbace",
"assets/assets/images/ellipse.webp": "115257a378444ceeaf2f7484954ed146",
"assets/assets/images/trees.webp": "848d95f9e310e788c703ae9c513c0693",
"assets/assets/images/clipboard.svg": "473cdcae83867baba81d72591b1a1771",
"assets/assets/images/map_marker.svg": "0d338fc5f52ec88aa46dc9d35bee72b5",
"assets/assets/images/group.svg": "3b54995707b2b396fe5d4559c59667cf",
"assets/assets/images/archive.svg": "17c5d05ab37087b254ade9a6ad0984e0",
"assets/assets/images/flag_checkbox.svg": "9300468500cb0387ad201f3d47fed4e8",
"assets/assets/images/facilitator.svg": "6d657af64e42fbd51b03d8644c4e5752",
"assets/assets/images/check.svg": "0572e6e02a949da5d3ba6a1c0b3d1e11",
"assets/assets/images/ic_bottom_my_story.svg": "a4ad097700742807852a7035ac6272e4",
"assets/assets/images/info.svg": "d2e720da1a9149a9a1f0bb21cdcdf74c",
"assets/assets/images/ic_bottom_urgent.svg": "a82369e3b6110b1fd36d1d4c89e72624",
"assets/assets/images/three-ducks.webp": "9c85fd2a408ce8f25c309a83a04094a4",
"assets/assets/images/smile.svg": "6dac283c4bd547d85a75699d599cf16c",
"assets/assets/images/standing-herons.webp": "2f87a0361603b85e56eb65b681a19bb0",
"assets/assets/images/bird-sun.webp": "707fe942cb50cf577a7c869450d15fbc",
"assets/assets/images/bg-login.png": "a60389da0c3c532466d692a6449182a1",
"assets/assets/images/chat.svg": "759abf38b599c6ae067dea4fb80ae26e",
"assets/assets/images/check-circle.webp": "7706b5c279b73e12b832235bc8fd35fe",
"assets/assets/images/send.svg": "dc18291f28698e494c8fdf0a7af27c46",
"assets/assets/images/up_spinner.svg": "46a1ad1e25a81377e2423f66fd664fba",
"assets/assets/images/one-deer.webp": "54066ac4290a89e94311cf3f90ab9aae",
"assets/assets/images/sign_out.svg": "131299973ec684cd5cd453a6b28a064c",
"assets/assets/images/unlink.svg": "04dcdfad858c98558d685ae7ca777c7e",
"assets/assets/images/user_circle.svg": "fd997eb40862765e7f641a5d19b3dc57",
"assets/assets/images/inbox.webp": "2aec5898e0e3dae6b3f172320bfe33a0",
"assets/assets/images/clock.svg": "7682700c88e6e392fc9625e23f7bcfed",
"assets/assets/images/eye.svg": "185a3241a39c7fa42454780e8320eb99",
"assets/assets/images/schedule.svg": "2870433b0153a8be29fb5fb209f766c0",
"assets/assets/images/globe.svg": "34877ab5fe1cd70c8508da5e5666f304",
"assets/assets/images/foundry-logo.webp": "4799a062d759f94ada9499504ee29fc4",
"assets/assets/images/ic_bottom_connect.svg": "9d141ebc340a40da9fbc0d291a9b48d7",
"assets/assets/images/drop-in-large.webp": "bcf7ab72b1384abd2fc322ca85158432",
"assets/assets/images/down_spinner.svg": "b7f343479cc4c44da22606735e1b7917",
"assets/assets/images/group-large.webp": "aad8deda4d05f4a5eb98451947e23b44",
"assets/assets/images/buffer_time.svg": "3be71c4e3f9d5960baa59fa6d6bc537c",
"assets/assets/images/clipboard_list.svg": "6137999a2a6bfdc9b9ec8881e294ce88",
"assets/assets/images/user_md.svg": "feec5f2e114fea59aa63221e570ec414",
"assets/assets/images/hands_and_heart.svg": "b63d7aa4c993bf614ca9ec66d478d43b",
"assets/assets/images/inbox-large.webp": "f7a89faaba08bd8ccb02f3a04c5fefcc",
"assets/assets/fonts/libre_franklin_medium_italic.ttf": "0a384817b27d4ad0fd3b6b72bfefa6c5",
"assets/assets/fonts/libre_franklin_semi_bold_italic.ttf": "904c162b073d5273e3cdfb8bc4e4c4e7",
"assets/assets/fonts/libre_franklin_regular_italic.ttf": "1b746baab8195763b2a983351ac904b2",
"assets/assets/fonts/libre_franklin_medium.ttf": "8844165a9c209427329e59805c31f254",
"assets/assets/fonts/libre_franklin_semi_bold.ttf": "5a95d2f7e50ff4aa4521adf013f9162e",
"assets/assets/fonts/libre_franklin_bold_italic.ttf": "3453f7c20b8a85947bda4ce5ee175047",
"assets/assets/fonts/libre_franklin_bold.ttf": "4fe3bce8027acefed4a64b56f0d55360",
"assets/assets/fonts/libre_franklin_regular.ttf": "817fb321a8297c2751ef343c68ef4ee7",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
