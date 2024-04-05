'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2ef580081831b5cb321d261e1addee9b",
".git/config": "3cc1d4ade2d9893a04f84ade090b85bb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bfa8c689b9ef381b588332a2701dd7db",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b6f16866a5b9181189836d10aedfd5cd",
".git/logs/refs/heads/main": "42a62fad76d4eaaf058a6c2360bf9a6f",
".git/logs/refs/remotes/origin/main": "cba73ec4f6a2c178750a60e528cae3a4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/13/77e9fa39c5b87d80a4de72ec7ba661f9c2ec69": "a7e10021484919c895cd378ab0b59610",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1a/f8108aacc16e3bad42d4c66c55ba808d24ef8a": "aabc3009e03635e25db7416592ecda65",
".git/objects/1b/746a929775b0df534ad51d87ee11b64835ae73": "0e5465728e922378c3a0990acdb3a4a7",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/493dde66ff685d697231c3187af28d3904b674": "7db6e71c7f24e72609bb4c7e5350c387",
".git/objects/28/6b9fc61de8147f3ee26938ea0d00959b9471da": "b63da1efde35f962c11478787df802ca",
".git/objects/2f/08f1d0b04e0419f2dc3043a13fd6b2a0592a48": "3e4a5c46b179c32d62b200780fbf478b",
".git/objects/35/e623c20661c0dba758ac14c7b283c6ace3f2c4": "ca4bd485417c555ea321ccb3e66523f2",
".git/objects/38/511852e22a7259e96b97cbf3f4395a544e6702": "9b06a90a9242cc4847b42e916747f5a2",
".git/objects/38/af2a4e7bc2144b4358f48e9de56421e0fa0ce3": "7857a7552fcc1a62d9c10dc7be13ecf0",
".git/objects/39/4c18acd4db24f854bc9dd30b940c2858da7b7e": "fcdbf37395004e3fcda274e6e18d1886",
".git/objects/3f/85fda7be85e35c36e9d7600c1da45dda483074": "71e2933dceee93bda43797c39853f3d6",
".git/objects/43/4dfafc8baebfa15005ecfa685cb746ad3f2161": "10b224cbfc50466af579671402c7ba5a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a60b2d9df746547ba284c43bad9766aecd0bcc": "70e5831efb3b2ab03223c01c9c356536",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4d/1522bce85e38a515d1b9b1d0274514b7f35adb": "3aa5f9cce3e42e4eae24686c4a4b1f57",
".git/objects/4e/e1217cb2fa0681e5ebf69b2606069a277d199b": "c746ddce7839881a6225da18774a76b8",
".git/objects/52/67ebe623ccc07f93b8043be6d587ed83865948": "b08bf07ae0e9df93b6e274639015c5e9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/c942d18023b4b68532161d8bcd6417b1667468": "0e25c8f8ef080760c6f6e5157142aa9e",
".git/objects/59/344e339b6795bc10940f78350f83fdde597788": "b9e4f6ab011baa348ae8a3387edf54f9",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/f10808c9f96fa5c3ceecb2c8c7e48b3cbc829f": "d1c4376e0ff81875da24db14105e1f6b",
".git/objects/5d/1518b39b3574014880dd88b24b29419d288b91": "e8211ed756ad6cefa2e20dae890e6818",
".git/objects/66/d5daf357fa12be4430634669590406aed2869d": "d8379e566ed758fd01e810042f658fb4",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6d/cc463d71b8e813c590a7d453c149e1cd752083": "c98d1c2d8befb3c51f09f1decb5c993d",
".git/objects/6f/33af8d12aee29f4dcff0e239c0388bdde0e681": "17287f760682ed0182ef62027c459561",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/68820becb355bdeefc400bcc63d16b737ec1d8": "f30d9a180a8988d8776ed4c371898b1c",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/59a631a9ca17bcca8492b00fcfdddc06c3e355": "8365d257d31e63d9893f218240e9e56f",
".git/objects/73/cb52e8e975ad6658bb8ed1b5a89351e4010ff0": "32ce6e761d0e26fec52547b15b85115e",
".git/objects/7a/0ecb5cea97b0ac83ec0337700875b4e696ec2a": "ba8484d197948d9625dda929cc2c025c",
".git/objects/7a/ad57d0a55f64496c09241fa128368fb06dc459": "af09dc2fb3654b1c241ecb64c9f14b00",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/80/de2d85f96bee9a11d4aa867505cc25162aee6a": "5b4e2ffe43c8fa7e5f48f61fd203fe5e",
".git/objects/81/37b50ba94ce4b0265bf9d95ba80081951cd35f": "92ab98df3553e1a5fc9d86a6c58655b7",
".git/objects/85/cc269004daaed1a64ff5d6db3af8f76be2e2fb": "146021e62569c96b5a9e65870e7da388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/96818c1a3c245c2eb3f691b75931324caaadbf": "fce38c7798c8b16e648722b601a79ffb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/ef6c29e6027697f29cc888675ab98178206147": "79b3a325a5e1eb089a16e4f693294a61",
".git/objects/8f/1def6dfb158b5ee52176876a662357a6a99c0d": "5f8ffd310e925639d2af42eb4e2c60e8",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/9d/96a7ec03b6f2df6fa1556cf76db702ae9c4f45": "176d566e661b5c9dff08ff6fa3a05109",
".git/objects/a1/e3f12c533b48bbc9607a2873fcc056e9c8461b": "a0de2c0c9bd60fd3b6c5923f8f7e29e8",
".git/objects/a7/8c8066140a42456abb059843416cb29945ecb5": "2627a4ceb92a83b5557c25a414e8ea84",
".git/objects/ac/30e00d97a7cca02d8701290c738b5199ea82c6": "0b8063cf5045d5a115ac0a274b2a81ea",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/a203b4e2ae1b896a09ca42805543fa307fac91": "07dacab14e6f202f598c3c963590b3a6",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/19394ccc276c73aba73b8e966a682224818108": "f154bcd713e7aa13cf144bd8a5d9971a",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/e94429a7b35ac888445798ad447c9331c24cb9": "1d44721fc2c55c96326cd2023215a44d",
".git/objects/c8/85d33a9cf034b0a165a6287771acbb808c390b": "4aa7b0f937fc823ef4040c2630d1fe1b",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/4fe95be7643274e935b748e0608cb61a0d72bd": "86093c9951c2ba1a2f2cba72a48b1cc1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/47949ae5a2d8d2b5e4742037bcd221e0d4ac07": "b12ff2e2192af887c7714c6aa81c8cdc",
".git/objects/db/ac93502e7b42687180110e160b17cc73037112": "03930e43c82b468c08a012c4c06fd987",
".git/objects/dd/0dd1593f732f1675375ef07f8f74113b598b5e": "b6dad47eae63ff747ecc7d678e7f8e05",
".git/objects/de/d4f4084075d167e1a4d4b452578f2a8e4d113d": "6202853313b54c8b0d67036297f4c745",
".git/objects/de/fc3364b557c13d33c1db3dd7ef07bbb19207aa": "9588c69df0a13067fd6ee5ce6ec7a1e2",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/2b6b710f4888db84155984afa903dfa71cedef": "2c0e99220d534e6861870c6e1c754346",
".git/objects/e4/8d0925f6115b108aa88b0088ae96457ceb9577": "18f75cff951e1527ededbf8614880c8c",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/32008e4891434cca249b876322fb12d0b18639": "4266f3328001754c263a38624a7a4d78",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/47ba84f9fc0e592e0d8e0440ad149fc86c9de7": "ad0a174e4cb4d7888e9059336f8f0ef3",
".git/objects/ee/ec07f738c3982e94d688ff1da4a603d8c91ef0": "5338d106359af3d7acb3c2a8d25eab73",
".git/objects/f0/0017fc620a38b70e64c050c939785ac26247fb": "756229ee958491cc75db377559a7e55c",
".git/objects/f1/67d39761f8762345bdfde8b6c45363fdbdc529": "ab261141e571bdc42a9f1bf50e658a47",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "a4301d91e161f127c285549620f3b775",
".git/refs/remotes/origin/main": "a4301d91e161f127c285549620f3b775",
"assets/AssetManifest.bin": "fec0f1ad3dbd51a712fa8b7fcbb7dedf",
"assets/AssetManifest.bin.json": "baa42ea1c76d367d6af8670508e67305",
"assets/AssetManifest.json": "0a39b407da7a7eac74d717bdc6131fab",
"assets/assets/rive/developer.riv": "518f83a113ab5fae6ad1507c2f5745c4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "dec6ff0264ae916d8d343b6a3d314e0a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "783023ce362e95c264fbf793bc977eab",
"/": "783023ce362e95c264fbf793bc977eab",
"main.dart.js": "159db31a7c6f05e3ee73a0d351fb0594",
"manifest.json": "ba7dc8b948c5f9a8e9428d1b85ace949",
"version.json": "1c5a5016f7141a4795433e9aa43ec4e4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
