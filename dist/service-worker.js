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
    "revision": "0692cfaffb35b24847d6374f5d37ff41"
  },
  {
    "url": "about/index.html",
    "revision": "dcf4df92a844f857980a0fefd9849d66"
  },
  {
    "url": "android/android1.html",
    "revision": "9623a580b4f2c38e7cc34bef98514fad"
  },
  {
    "url": "android/android2.html",
    "revision": "ad9ee79506eb5dc857001875e40a67d8"
  },
  {
    "url": "android/index.html",
    "revision": "3cd5c34cc8a96177ffd73b6480793c06"
  },
  {
    "url": "assets/css/0.styles.fc690f3c.css",
    "revision": "f4df4bf7d637d1d75ca7cb9c2908fbec"
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
    "url": "assets/js/10.355fa22f.js",
    "revision": "37c42651f0b049348ac3df9c5faff56b"
  },
  {
    "url": "assets/js/11.3099e532.js",
    "revision": "aab644a62e55e7d7221fc564f3fe24f2"
  },
  {
    "url": "assets/js/12.3edac802.js",
    "revision": "3d8fa376d09f12518f04b67fc220ed07"
  },
  {
    "url": "assets/js/13.1eec9790.js",
    "revision": "85aaf59d9935321ae2d0540e67d0cecf"
  },
  {
    "url": "assets/js/14.cf6c9763.js",
    "revision": "059aa2a7b6d3f610ab86790e2bf20842"
  },
  {
    "url": "assets/js/15.5b26c9f3.js",
    "revision": "28c95224e9d82669a5971ca9d5990db5"
  },
  {
    "url": "assets/js/16.0b2f1ceb.js",
    "revision": "7a76400dc7679168d946c6b8e95a034d"
  },
  {
    "url": "assets/js/17.f51b0d4b.js",
    "revision": "373e1061c186e2f6bd0cb6dcc67ee92e"
  },
  {
    "url": "assets/js/18.a8c92f89.js",
    "revision": "63b492ec954c677b79d214c7a83736c1"
  },
  {
    "url": "assets/js/19.c4536e86.js",
    "revision": "6956c7e0d54236788ef3815c5cf258b5"
  },
  {
    "url": "assets/js/2.4a2c8a39.js",
    "revision": "7ed11b63602225058b641c325476112b"
  },
  {
    "url": "assets/js/20.53fb4e78.js",
    "revision": "c512262b7b5abbcdeaa8973a6903feef"
  },
  {
    "url": "assets/js/21.308526f4.js",
    "revision": "d4719bd86bd0f1fec9aa69b6bdeb097e"
  },
  {
    "url": "assets/js/22.6f46d152.js",
    "revision": "8494468f95804d70c0d602ad5591608c"
  },
  {
    "url": "assets/js/23.200291c2.js",
    "revision": "4ee07e6b26ee56faa36931c7654571a5"
  },
  {
    "url": "assets/js/24.323b1dbb.js",
    "revision": "44a169f793cb40d0eb3b93b7b53041cf"
  },
  {
    "url": "assets/js/25.3602d911.js",
    "revision": "92ec31124d6a683b9c8b9d23e949550a"
  },
  {
    "url": "assets/js/26.653cb824.js",
    "revision": "81b170103b0e3f5a21e6ea82a61c0283"
  },
  {
    "url": "assets/js/27.5468de02.js",
    "revision": "2d7b3a6e9e861220b88d50eea8aad255"
  },
  {
    "url": "assets/js/28.aa8ceef6.js",
    "revision": "3e07149550daf9db0d3a5f3aeffc0aef"
  },
  {
    "url": "assets/js/29.9697b4b9.js",
    "revision": "eec24bfa95d3d00d772d02dc4afdcd8c"
  },
  {
    "url": "assets/js/3.e52baef4.js",
    "revision": "6f9e5f231cb32dc3c18316254eb2ee6d"
  },
  {
    "url": "assets/js/30.5dde2635.js",
    "revision": "4c99f235cee77141b22879cce94a697c"
  },
  {
    "url": "assets/js/31.3c902f2e.js",
    "revision": "26618f8d919ae339da871db402b4d481"
  },
  {
    "url": "assets/js/32.2783f365.js",
    "revision": "21acf13c7cf9da8ee67c312888037ade"
  },
  {
    "url": "assets/js/33.fc7c37b5.js",
    "revision": "e0444f001231fdfd3224e06481e07e55"
  },
  {
    "url": "assets/js/34.891af9c9.js",
    "revision": "3fc4fa0749db07b4bbc2792966f1b663"
  },
  {
    "url": "assets/js/4.5c8055e3.js",
    "revision": "e34081c1382ac548985050374b0b5f0d"
  },
  {
    "url": "assets/js/5.05875ef4.js",
    "revision": "43c30cc22dde01d54ad08acd7e4d9acc"
  },
  {
    "url": "assets/js/6.d9ccd6db.js",
    "revision": "0ddce2058d9a87d29154b2c735ea5149"
  },
  {
    "url": "assets/js/7.bdb1b2fa.js",
    "revision": "868037412dd89cbb2724ef1fef912b21"
  },
  {
    "url": "assets/js/8.a9724855.js",
    "revision": "a6a3883d28317160fbfcbe3e0f4b481c"
  },
  {
    "url": "assets/js/9.6fa13375.js",
    "revision": "da8ef974b072296137faa0fa8b0a0cbb"
  },
  {
    "url": "assets/js/app.4a7133b2.js",
    "revision": "8c1410684fe2b72799c782e978a24b76"
  },
  {
    "url": "components/border.html",
    "revision": "4a947b0dd24c953f773b86eb67d44762"
  },
  {
    "url": "components/button.html",
    "revision": "6a654b83430a2ce31e8d25f0d21513b1"
  },
  {
    "url": "components/checkbox.html",
    "revision": "db6f4ec4da736fb320a6e35b1af1e8ec"
  },
  {
    "url": "components/color.html",
    "revision": "029dd7fc4d47fb74553e783428910a1a"
  },
  {
    "url": "components/container.html",
    "revision": "4eae298411f505fbd593fc8222ea3d68"
  },
  {
    "url": "components/icon.html",
    "revision": "b25ba4a68a9bae600dcb93f468d06ecc"
  },
  {
    "url": "components/index.html",
    "revision": "5eba0a289813ae978c42b24ba5c7ff04"
  },
  {
    "url": "components/input.html",
    "revision": "f91f6ce9f97a6576d7992cdff9265cc7"
  },
  {
    "url": "components/inputNumber.html",
    "revision": "def9fa6934357a5b65a6e966b1f63233"
  },
  {
    "url": "components/install.html",
    "revision": "14df898c465eae277cde163c6feb8fbb"
  },
  {
    "url": "components/international.html",
    "revision": "7d8eff62e71b4afb41c66075932e499e"
  },
  {
    "url": "components/layout.html",
    "revision": "ed09665e06541bdc0361a037a69e0528"
  },
  {
    "url": "components/link.html",
    "revision": "c9af71059163dadf758e7e7a08241c70"
  },
  {
    "url": "components/quickStart.html",
    "revision": "391b3f4e50cd70e16e966a32d366ff40"
  },
  {
    "url": "components/radio.html",
    "revision": "295be6287861e8392f1397cc094627ce"
  },
  {
    "url": "components/select.html",
    "revision": "13db75c7c0b7d0b4c384e44c5f1a4b8e"
  },
  {
    "url": "components/theme.html",
    "revision": "e123f297021130bf7695907efba2b908"
  },
  {
    "url": "hybird/index.html",
    "revision": "ed064143ce6815742b8562b0a737c4f1"
  },
  {
    "url": "hybird/ios1.html",
    "revision": "d083a709f77cc29a8cfda450dd21145a"
  },
  {
    "url": "hybird/ios2.html",
    "revision": "97c89a1dbdff0b5c2051290e1815dfd6"
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
    "revision": "929a086cc94c75a7e0b247f2323db011"
  },
  {
    "url": "web/index.html",
    "revision": "b77e4b9cc8df9c579e2abac6601781b9"
  },
  {
    "url": "web/studyMarkDown.html",
    "revision": "62c573302cce45ee8d2c6fee4f02f58c"
  },
  {
    "url": "web/studyVuePress.html",
    "revision": "b9fc686251ea89fef88a39a5e1bad867"
  },
  {
    "url": "web/studyWebpack.html",
    "revision": "4e61282a188a101cd09fe410e76db7f3"
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
