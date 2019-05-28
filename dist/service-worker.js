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
    "revision": "3e0c5089aef0abe2a5af8a9f9cdf7fee"
  },
  {
    "url": "about/index.html",
    "revision": "185a8e58557e17a7087e84c095f7391b"
  },
  {
    "url": "android/android1.html",
    "revision": "774603359eb3e0ae8042e68fb5cc779b"
  },
  {
    "url": "android/android2.html",
    "revision": "934abbc6c7baf836d1fac987cb542608"
  },
  {
    "url": "android/index.html",
    "revision": "dadbfd1c6ab9a1f8a5e94b48f0ded687"
  },
  {
    "url": "assets/css/0.styles.3929b6e4.css",
    "revision": "509e10b699494a51569cb2bb06b31575"
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
    "url": "assets/js/3.6cbd8d46.js",
    "revision": "ec6e666b78f63b8bc1e651b5696726a7"
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
    "url": "assets/js/app.2a07ed3e.js",
    "revision": "8183bb0c49509d3d061a40aaa8b42511"
  },
  {
    "url": "components/border.html",
    "revision": "97ee32aabdb39faf6e8be360dd65423f"
  },
  {
    "url": "components/button.html",
    "revision": "cb745bf6ebf16cc86a9f328f45d995dc"
  },
  {
    "url": "components/checkbox.html",
    "revision": "8735ad0f2d39a07c832e2aac866557af"
  },
  {
    "url": "components/color.html",
    "revision": "ebbffda450066f329945f934257f30d5"
  },
  {
    "url": "components/container.html",
    "revision": "40b8fd5386e0eeb2c3ed6a1dfb43a21f"
  },
  {
    "url": "components/icon.html",
    "revision": "16f8de7c8e4acb4dd2c24ea0ac622beb"
  },
  {
    "url": "components/index.html",
    "revision": "b5abd975d68d1ec3141caaa812d622d8"
  },
  {
    "url": "components/input.html",
    "revision": "69420570982994dba60ff324437100cf"
  },
  {
    "url": "components/inputNumber.html",
    "revision": "f522e859b8d47c5fd293c0f2dc66b183"
  },
  {
    "url": "components/install.html",
    "revision": "9c1e3ce2630b8aa8d5ac1b182cae1133"
  },
  {
    "url": "components/international.html",
    "revision": "89c77a9d1a621d5d1f217eb5525b8ad8"
  },
  {
    "url": "components/layout.html",
    "revision": "3cc67f2f934184dfa00c5852900c51e0"
  },
  {
    "url": "components/link.html",
    "revision": "04fa4a8e3c9a2f9b914c88d81f692461"
  },
  {
    "url": "components/quickStart.html",
    "revision": "9433b7c373e43a4009379367b402864f"
  },
  {
    "url": "components/radio.html",
    "revision": "0eca6f3e850f44cbab92cb37a97194d9"
  },
  {
    "url": "components/select.html",
    "revision": "a3ad758c883696d97d1767215683b3ce"
  },
  {
    "url": "components/theme.html",
    "revision": "de7cd1c04bbe7dc4e9e00581eacb123d"
  },
  {
    "url": "hybird/index.html",
    "revision": "e7a8f8eed07bc8aac4e2d78313482c15"
  },
  {
    "url": "hybird/ios1.html",
    "revision": "91ae395cd94fd82755c94413fe366424"
  },
  {
    "url": "hybird/ios2.html",
    "revision": "46adffb4712996f1249c2d65348b684f"
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
    "revision": "5a3fd6d104964e5b094ce0df9f1473ed"
  },
  {
    "url": "web/index.html",
    "revision": "9ce5fe9e589d374eb1fef36f729de871"
  },
  {
    "url": "web/studyMarkDown.html",
    "revision": "9d621d3cdaf3117994837d829836c3f7"
  },
  {
    "url": "web/studyVuePress.html",
    "revision": "a857c556f5161f527ea27511e84d613e"
  },
  {
    "url": "web/studyWebpack.html",
    "revision": "97f7d19d184b370431735aea087889f7"
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
