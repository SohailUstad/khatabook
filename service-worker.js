self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('customer-app-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/icon-92.png',
                '/bootstrap.min.css'
            ]);
        })
    );
});



// Add fetch event listener to serve cached files
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
