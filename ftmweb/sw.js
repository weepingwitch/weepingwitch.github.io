var cacheName = 'ftmpwa';

var filesToCache = [

  // infrastructure files ---------------------------------------------------------------------------------------------
  'index.html',
  'sw.js',
  'manifest.json',
  'favicon.png',
  //--------------------------------------------------------------------------------------------------------------------

  // app files ---------------------------------------------------------------------------------------------------------
  'https://raw.githubusercontent.com/curiouslearning/FeedTheMonster/master/Feed%20the%20Monster/Assets/Art/Backgrounds/summer/bg_v01.jpg',
  'https://raw.githubusercontent.com/curiouslearning/FeedTheMonster/master/Feed%20the%20Monster/Assets/Art/Backgrounds/summer/hill_v01.png',
  'https://raw.githubusercontent.com/curiouslearning/FeedTheMonsterH5P/main/assets/images/idle.png',
  'https://raw.githubusercontent.com/curiouslearning/FeedTheMonsterH5P/main/assets/images/eat3.png'
  // -------------------------------------------------------------------------------------------------------------------
];

// todo: check if service worker is installed before
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function() {
    console.log('sw: registration ok');
  }).catch(function(err) {
    console.error(err);
  });
}
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Install' event. Writing files to browser cache
 *
 * @param {string} Event name ('install')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('sw: writing files into cache');
      return cache.addAll(filesToCache);
    })
  )
});
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Activate' event. Service worker is activated
 *
 * @param {string} Event name ('activate')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener('activate', function (event) {
  console.log('sw: service worker ready and activated', event);
});
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Fetch' event. Browser tries to get resources making a request
 *
 * @param {string} Event name ('fetch')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // test if the request is cached
    caches.match(event.request).then(function(response) {
      // 1) if response cached, it will be returned from browser cache
      // 2) if response not cached, fetch resource from network
      return response || fetch(event.request);
    }).catch(function (err) {
      // if response not cached and network not available an error is thrown => return fallback image
      return caches.match('favicon.png');
    })
  )
});
