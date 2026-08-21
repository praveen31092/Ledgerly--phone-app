(function () {
  // Real PNG icon URL beside index.html — iOS reads this at "Add to Home Screen" time
  // and ignores data URIs, so replace whatever the bundler inlined.
  try {
    var href = new URL('icon-180.png', document.baseURI).href;
    document.querySelectorAll('link[rel="apple-touch-icon"]').forEach(function (l) { l.remove(); });
    var l = document.createElement('link');
    l.rel = 'apple-touch-icon'; l.setAttribute('sizes', '180x180'); l.href = href;
    document.head.appendChild(l);
  } catch (e) {}
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      try {
        navigator.serviceWorker.register(new URL('sw.js', document.baseURI).href, { scope: './' }).catch(function () {});
      } catch (e) {}
    });
  }
})();
