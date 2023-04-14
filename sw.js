importScripts('./uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(location.origin+'/service/uv/')) event.respondWith(sw.fetch(event));
});