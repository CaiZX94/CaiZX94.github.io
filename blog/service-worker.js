/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1727972bbbf169ee1495dbd37deebf31"
  },
  {
    "url": "about/index.html",
    "revision": "64f4a31f99e51191dfaaf71d9e3b2120"
  },
  {
    "url": "android/android1.html",
    "revision": "85cbb010056d8eff6400482e17b95160"
  },
  {
    "url": "android/android2.html",
    "revision": "6de69347e2429a7af9011dc8783c11ee"
  },
  {
    "url": "android/index.html",
    "revision": "27c0a6e9ab7e479143c3df79fcfe8a3a"
  },
  {
    "url": "assets/css/0.styles.1c2ed8f8.css",
    "revision": "62a68b3e0bd2e88263f34e599a65c270"
  },
  {
    "url": "assets/img/contact-bg.90b89018.jpg",
    "revision": "90b89018c57623f25ff271dda0b322e8"
  },
  {
    "url": "assets/img/d46c3a8f-b74a-4008-ad1d-a56be443d5fa.febe0454.png",
    "revision": "febe0454cb317675a95d8d489fd139cd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/services-bg.5222d76c.jpg",
    "revision": "5222d76c2ce8a32d587fc6fc8e5f4da4"
  },
  {
    "url": "assets/img/skills-bg.ac55424d.jpg",
    "revision": "ac55424d4f2e9cb3691f5eb9a4b65bf6"
  },
  {
    "url": "assets/js/10.131e7cd1.js",
    "revision": "9488b885ad9e25a80e7adba866e1cb82"
  },
  {
    "url": "assets/js/11.b7d7b491.js",
    "revision": "741fda3f90f1f2ca31b3189952977981"
  },
  {
    "url": "assets/js/12.725e9d66.js",
    "revision": "b59e571896425f2efaa90f248119f41e"
  },
  {
    "url": "assets/js/13.42836d0b.js",
    "revision": "1d4ba1aa862f280a09337fb4661a15f8"
  },
  {
    "url": "assets/js/14.172f4fe8.js",
    "revision": "3de6f5184062f1bb98599220fcd28994"
  },
  {
    "url": "assets/js/15.259287bf.js",
    "revision": "a19da46b0678cdb6350067d3eeb0ff62"
  },
  {
    "url": "assets/js/16.1685137b.js",
    "revision": "6018f61f617c27e5cc730ecfe0785196"
  },
  {
    "url": "assets/js/17.4dc9847c.js",
    "revision": "28c17d7b18b63cc6619512a68019539c"
  },
  {
    "url": "assets/js/18.ee338899.js",
    "revision": "18a834db7bed4a93d4183db4fa9856c9"
  },
  {
    "url": "assets/js/19.896f5e3d.js",
    "revision": "2877b588817e54879336f90005505069"
  },
  {
    "url": "assets/js/2.82f35f4f.js",
    "revision": "ea61b60c3f98576f10b6e8bae433ebff"
  },
  {
    "url": "assets/js/20.4a4c5b20.js",
    "revision": "90d591f706b1eec8d3faf5650c289675"
  },
  {
    "url": "assets/js/21.06dde285.js",
    "revision": "54739f64981260583173435208c85056"
  },
  {
    "url": "assets/js/22.8d7e99bd.js",
    "revision": "bd7242fb38b9db81f2fadd2ac350da97"
  },
  {
    "url": "assets/js/23.8482bf29.js",
    "revision": "34f2b71650833f3cc5ee1add99fb0d55"
  },
  {
    "url": "assets/js/24.8aaeeead.js",
    "revision": "89ae9e482aa5fb8e26270be1d4a7054a"
  },
  {
    "url": "assets/js/25.c79ce55d.js",
    "revision": "e2c12e3a8aa58f9191124ff5c05aa256"
  },
  {
    "url": "assets/js/26.7dfff4b9.js",
    "revision": "093469b7985badbc9ec87c0dbaa099f7"
  },
  {
    "url": "assets/js/27.a3be23e0.js",
    "revision": "667576f205051d444e81170fe136eb9f"
  },
  {
    "url": "assets/js/28.f41c14d0.js",
    "revision": "c8d1b28580e144a20cb5b0491491bfb5"
  },
  {
    "url": "assets/js/29.02fdd6f5.js",
    "revision": "8ecf496ac0db4b60ad5be02da843a37e"
  },
  {
    "url": "assets/js/3.3affabc5.js",
    "revision": "671b560f84d9106981dc117db193f25e"
  },
  {
    "url": "assets/js/30.e4063061.js",
    "revision": "acb50f76fa5050c06bd74a250924261b"
  },
  {
    "url": "assets/js/31.25b0d442.js",
    "revision": "e0e74a656ca1045416f86b9beb3a18a6"
  },
  {
    "url": "assets/js/32.80c4496f.js",
    "revision": "2d9a7e2a5362ecfce5197a321d4a7190"
  },
  {
    "url": "assets/js/33.ed70159a.js",
    "revision": "c9bb6fd7341e913329f175bc949f5f57"
  },
  {
    "url": "assets/js/34.0410f2bc.js",
    "revision": "e03142d824cd2490a04296afc5e340a4"
  },
  {
    "url": "assets/js/35.3b3e5f17.js",
    "revision": "086427bba2ecd3fa3dca9cd976ccb0a6"
  },
  {
    "url": "assets/js/36.bcb4753f.js",
    "revision": "e50fbad7fec49062990ab0b147ed2e8b"
  },
  {
    "url": "assets/js/37.f6742406.js",
    "revision": "1dde8773533c92c0d5c7ddb56205f5bc"
  },
  {
    "url": "assets/js/38.de3fe5da.js",
    "revision": "b5798e351913e854122b2232af2fe4f4"
  },
  {
    "url": "assets/js/39.c704aeed.js",
    "revision": "0bff38d6c70eba1d80764d26bb4e4198"
  },
  {
    "url": "assets/js/4.f85b72b3.js",
    "revision": "6664bfac08e2c62dd783874a25afeb06"
  },
  {
    "url": "assets/js/40.70eb4b02.js",
    "revision": "05c5247dc5bd36b7fb6e6fd61563aa1a"
  },
  {
    "url": "assets/js/41.76e4ec6d.js",
    "revision": "682aec383c2a488703c2debb19f2b270"
  },
  {
    "url": "assets/js/42.5772ae27.js",
    "revision": "62ffcad8d0eee388bebd31ca1889f888"
  },
  {
    "url": "assets/js/5.a78272d0.js",
    "revision": "7383926be6b6d3451b9b3ab9a94044e7"
  },
  {
    "url": "assets/js/6.e724b4b9.js",
    "revision": "72ffc24fc94d54d9a4f69440fe00eb64"
  },
  {
    "url": "assets/js/7.673bdd6c.js",
    "revision": "fad5d2172afbd18c08e1f82df19358d0"
  },
  {
    "url": "assets/js/8.b2ea833b.js",
    "revision": "f1d2824db3e35cf5fb55a0745b8c585c"
  },
  {
    "url": "assets/js/9.686c5ba6.js",
    "revision": "4e1da2825a936b56b98f0250a536f537"
  },
  {
    "url": "assets/js/app.50d015ad.js",
    "revision": "0921180e66fa33c5403675fd23bdf742"
  },
  {
    "url": "components/border.html",
    "revision": "7dfae79b4aab63496bbc4011a5c1d846"
  },
  {
    "url": "components/button.html",
    "revision": "5a606d94ba0c9c4658b5bc53c08dfd9b"
  },
  {
    "url": "components/checkbox.html",
    "revision": "4feb55ad8fde23ad918ae5f74ab38eb0"
  },
  {
    "url": "components/color.html",
    "revision": "9de7958695ef4ca1db7104c428608293"
  },
  {
    "url": "components/container.html",
    "revision": "d6e7998b36969aacaa08ac16ecfba62f"
  },
  {
    "url": "components/icon.html",
    "revision": "9b882752927963f06dc16e3e69891415"
  },
  {
    "url": "components/index.html",
    "revision": "1e50960f8d8fdc69536e7360d40b1a16"
  },
  {
    "url": "components/input.html",
    "revision": "167bd690b74cc3189c85bf45ca770173"
  },
  {
    "url": "components/inputNumber.html",
    "revision": "c26f19fb69f48e10d8e190119b4a50d7"
  },
  {
    "url": "components/install.html",
    "revision": "24e6f7c79cb6078bb54ff21035707038"
  },
  {
    "url": "components/international.html",
    "revision": "45dc30fa47c4da1ae985475d80edabf6"
  },
  {
    "url": "components/layout.html",
    "revision": "9ae6a5816eba8668da24751f1ccf3e3b"
  },
  {
    "url": "components/link.html",
    "revision": "6237f1aaa7a78ebddf900f3f10437abd"
  },
  {
    "url": "components/quickStart.html",
    "revision": "2fd54e0843ad249a484a321ae338a0ee"
  },
  {
    "url": "components/radio.html",
    "revision": "e441e697bea104d34a721b8e95e7715f"
  },
  {
    "url": "components/select.html",
    "revision": "c4fea4172894309eb22091b7bcb22b99"
  },
  {
    "url": "components/theme.html",
    "revision": "41fc75004a1e93a66a2d2bceab66ae5c"
  },
  {
    "url": "css/button.css",
    "revision": "cbe08407f4a32ad454ee4af8e12d3b4e"
  },
  {
    "url": "css/index.css",
    "revision": "9b01ef0ffdecc55bb17a0a97e2ec5772"
  },
  {
    "url": "hybird/index.html",
    "revision": "a124c161927f08974075f5452778de26"
  },
  {
    "url": "hybird/ios1.html",
    "revision": "c5f2ba9d48d9e31727be11c33db6773f"
  },
  {
    "url": "hybird/ios2.html",
    "revision": "3d61a87e7e1e6178b8a271939a1093d8"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "2ef8055b2d67177efebfe7b446da71b3"
  },
  {
    "url": "img/contact-bg.jpg",
    "revision": "90b89018c57623f25ff271dda0b322e8"
  },
  {
    "url": "img/d46c3a8f-b74a-4008-ad1d-a56be443d5fa.png",
    "revision": "febe0454cb317675a95d8d489fd139cd"
  },
  {
    "url": "img/logo.jpg",
    "revision": "2ef8055b2d67177efebfe7b446da71b3"
  },
  {
    "url": "img/services-bg.jpg",
    "revision": "5222d76c2ce8a32d587fc6fc8e5f4da4"
  },
  {
    "url": "img/skills-bg.jpg",
    "revision": "ac55424d4f2e9cb3691f5eb9a4b65bf6"
  },
  {
    "url": "index.html",
    "revision": "a2192d43abab5d00f3b0de4cd7ae89ff"
  },
  {
    "url": "web/index.html",
    "revision": "7aa87169ef88f3642bf5aee4aaa8565a"
  },
  {
    "url": "web/studyMarkDown.html",
    "revision": "1f3d1c7fd8f5765a6bbffe359ec626ac"
  },
  {
    "url": "web/studyVuePress.html",
    "revision": "593472abf5ec9197d4d63feda59d7efa"
  },
  {
    "url": "web/studyWebpack.html",
    "revision": "bd5cc713667b6928c8832db0ae791451"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
