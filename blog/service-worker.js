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
    "revision": "1eb6bd1b24f914e572c4917544ea4c69"
  },
  {
    "url": "about/index.html",
    "revision": "d20879b577428ab4161eabf659ecb2e0"
  },
  {
    "url": "android/android1.html",
    "revision": "e870e714c7d9037c6f46c64eace72c4d"
  },
  {
    "url": "android/android2.html",
    "revision": "8f9aa409449453e1f7cbbce707742145"
  },
  {
    "url": "android/index.html",
    "revision": "63d559f4b28db4570e65e265a1b75ab0"
  },
  {
    "url": "assets/css/0.styles.87b7815f.css",
    "revision": "80d23a606da1f3257de9ed9467f35d90"
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
    "url": "assets/js/3.cac83e89.js",
    "revision": "80f09867a1c50e6d21b99d3c8039d0e0"
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
    "url": "assets/js/app.297ef35a.js",
    "revision": "62fd3d76634ce393cbbc59dab3c323f3"
  },
  {
    "url": "components/border.html",
    "revision": "a9e80bbfca33436fd5b43521571e90dc"
  },
  {
    "url": "components/button.html",
    "revision": "21ac07b9ffd2e342ae0435ed2214d227"
  },
  {
    "url": "components/checkbox.html",
    "revision": "49489eb038eb0142c383d2b1ca62d77e"
  },
  {
    "url": "components/color.html",
    "revision": "c0096b4e44ce6f8fb908719c6b36c521"
  },
  {
    "url": "components/container.html",
    "revision": "193cc81765f6c31a4d52e6c6bc38878d"
  },
  {
    "url": "components/icon.html",
    "revision": "8c681d9929135d3113f849a1d2e0868f"
  },
  {
    "url": "components/index.html",
    "revision": "72a3d297d66bc4e737de2abe731bd604"
  },
  {
    "url": "components/input.html",
    "revision": "a8b4e30803de725d0b3154e2286bd0b5"
  },
  {
    "url": "components/inputNumber.html",
    "revision": "f52a08bba3243127844188ee9b12bb56"
  },
  {
    "url": "components/install.html",
    "revision": "a37580ff4aebaaf2e3be799c688a572f"
  },
  {
    "url": "components/international.html",
    "revision": "6af1c07f09c17c317d4f244a14680a52"
  },
  {
    "url": "components/layout.html",
    "revision": "51527997659d9469992024cde07ee951"
  },
  {
    "url": "components/link.html",
    "revision": "1e703ff8bc1268635c44012578ad9d55"
  },
  {
    "url": "components/quickStart.html",
    "revision": "c394db145bce440a75f91470fd747fd6"
  },
  {
    "url": "components/radio.html",
    "revision": "5c755e9b579df374f00d72a6f4898975"
  },
  {
    "url": "components/select.html",
    "revision": "bdb0cb39effa96523fbc6668536203a1"
  },
  {
    "url": "components/theme.html",
    "revision": "73a9f92332e650960b10e050d57ceeed"
  },
  {
    "url": "hybird/index.html",
    "revision": "35ce495177b9aa2966740b1a38b7ce09"
  },
  {
    "url": "hybird/ios1.html",
    "revision": "5b2031ead5bfe8abb87684e49053643a"
  },
  {
    "url": "hybird/ios2.html",
    "revision": "dd9723b1325d0bf9ade4ff9b84ceb78f"
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
    "revision": "4c3cce4d615c06f167fa252f58cccc3d"
  },
  {
    "url": "web/index.html",
    "revision": "16baa7d7cde7259da199e9b4df6f3067"
  },
  {
    "url": "web/studyMarkDown.html",
    "revision": "0f6abc2ce04c3678ac947a87cd8c7920"
  },
  {
    "url": "web/studyVuePress.html",
    "revision": "ce67c5974d716b814e89427d06e198b9"
  },
  {
    "url": "web/studyWebpack.html",
    "revision": "616d4ed4a51bd98feaf38d5a9effaf6c"
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
