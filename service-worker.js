self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('customer-app-cache').then((cache) => {
            return cache.addAll([
                '/khatabook/',
                '/khatabook/index.html',
                '/khatabook/icon-92.png',
                '/khatabook/bootstrap.min.css'
            ]);
        }).catch((error) => {
            console.log('Failed to cache:', error);
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
