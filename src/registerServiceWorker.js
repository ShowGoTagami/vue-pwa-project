/* eslint-disable no-console */
// import { register } from 'register-service-worker'

// service worker の登録処理
// register(`${process.env.BASE_URL}service-worker.js`, {
// register(`${process.env.BASE_URL}service-worker.js`, {
//   ready () {
//     console.log(
//       'App is being served from cache by a service worker.\n' +
//       'For more details, visit https://goo.gl/AFskqB'
//     )
//   },
//   registered () {
//     console.log('Service worker has been registered.')
//   },
//   cached () {
//     console.log('Content has been cached for offline use.')
//   },
//   updatefound () {
//     console.log('New content is downloading.')
//   },
//   updated () {
//     console.log('New content is available; please refresh.')
//   },
//   offline () {
//     console.log('No internet connection found. App is running in offline mode.')
//   },
//   error (error) {
//     console.error('Error during service worker registration:', error)
//   }
// })

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
  })
}

'use strict';

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Codelab';
  const options = {
    body: 'Yay it works.',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
