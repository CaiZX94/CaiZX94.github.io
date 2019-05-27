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
    "revision": "4261c5bec47f3e16543a06fcbbfd0681"
  },
  {
    "url": "about/index.html",
    "revision": "70e941a6a02909faf7e188fc0951143c"
  },
  {
    "url": "android/android1.html",
    "revision": "e85cf6d05890c45403d47874a6e7652a"
  },
  {
    "url": "android/android2.html",
    "revision": "502993eac0fa0b93433a1a6156f8c2e3"
  },
  {
    "url": "android/index.html",
    "revision": "e08ddf1c8a6c6c7bf3b559065119289e"
  },
  {
    "url": "assets/css/0.styles.5492aca3.css",
    "revision": "6eb88a6889dd5d4bc2832088c08945be"
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
    "url": "assets/js/app.7c6baea2.js",
    "revision": "03303b950e5cc8c867dd4639ad957c88"
  },
  {
    "url": "components/border.html",
    "revision": "61f60acdc70258ed91f8d7133dbec9df"
  },
  {
    "url": "components/button.html",
    "revision": "f9e7ae807c3427e13e0842c8943e72ee"
  },
  {
    "url": "components/checkbox.html",
    "revision": "4537737a4cd95bad01953c792a6227bf"
  },
  {
    "url": "components/color.html",
    "revision": "123fa95bd0e3cf855d5eec68c2d05719"
  },
  {
    "url": "components/container.html",
    "revision": "a064ccc88eb9c2046c20c27e6582fcb3"
  },
  {
    "url": "components/icon.html",
    "revision": "19559ce673709e72d09a4b8107d05e6a"
  },
  {
    "url": "components/index.html",
    "revision": "a2992f1cb848603a635a839d4a5018c1"
  },
  {
    "url": "components/input.html",
    "revision": "35d3f4522b70e9430246a045df43cb74"
  },
  {
    "url": "components/inputNumber.html",
    "revision": "9f3d52fc33bdb7722c86d3705abcfb80"
  },
  {
    "url": "components/install.html",
    "revision": "c55fd71f1f97473341ae841d1043ec92"
  },
  {
    "url": "components/international.html",
    "revision": "6603656140015421074749ec48db2e56"
  },
  {
    "url": "components/layout.html",
    "revision": "7cf6038d590affc76a4c44b973952f47"
  },
  {
    "url": "components/link.html",
    "revision": "704ae40ce7661b86322e54e73ef7f173"
  },
  {
    "url": "components/quickStart.html",
    "revision": "999097acc8024a99e5bf440c836af5af"
  },
  {
    "url": "components/radio.html",
    "revision": "622d9bcdd2763c235c4102e190a0e0db"
  },
  {
    "url": "components/select.html",
    "revision": "0843e9f2a7a774bab7e8cc854dc360ed"
  },
  {
    "url": "components/theme.html",
    "revision": "1ad33fd92f4e12e1a260dfb0c1c50c63"
  },
  {
    "url": "hybird/index.html",
    "revision": "30008699ce82668f502d4d219efe38b2"
  },
  {
    "url": "hybird/ios1.html",
    "revision": "4aa5ae5f1d9933d09d6da05f2fb19a61"
  },
  {
    "url": "hybird/ios2.html",
    "revision": "10e7c7893761e9cee50d88e379694a6f"
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
    "revision": "d5520d3f860469b12a336703226e11c6"
  },
  {
    "url": "web/index.html",
    "revision": "b866ad083dab2e287f9f4e0a4999bcc0"
  },
  {
    "url": "web/studyMarkDown.html",
    "revision": "8847cf9db5355d0133a4ecdf2eb6356a"
  },
  {
    "url": "web/studyVuePress.html",
    "revision": "9bb8e1b9ccf3761597b2c1830ca734ed"
  },
  {
    "url": "web/studyWebpack.html",
    "revision": "31d9a2827846bb5aad4fc6324a65d5b3"
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
